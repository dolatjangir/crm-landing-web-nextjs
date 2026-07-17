"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

// =============================================================================
// PriceRadar — Favorites Cart
// -----------------------------------------------------------------------------
// Instrument-panel styling: deep ink background, hairline panel borders,
// amber "signal" accent for the primary action / best-price marker, teal
// "sweep" accent for links and secondary highlights, monospace readouts for
// prices and platform tags. Functionally identical to the previous pass —
// localStorage persistence, toasts, and a dialog that opens / minimizes to a
// radar-blip pill / goes fullscreen.
//
//   <CartProvider>
//     <YourPage />
//     <CartDialog />
//   </CartProvider>
// =============================================================================

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface Product {
  platform: string;
  product_name: string;
  numeric_price: number;
  price: string;
  url: string;
  product_url: string;
  direct_link: string;
  thumbnail: string;
  rating: string;
  reviews: string;
  price_verified: boolean;
  price_source: string;
  match_score: number;
}

export interface FavoriteProduct extends Product {
  favoritedAt: number;
  searchedFor: string;
}

export type SortOption = "recent" | "price-asc" | "price-desc" | "platform" | "name";
export type ViewMode = "grid" | "list";
export type WindowState = "closed" | "open" | "minimized" | "fullscreen";
type ToastVariant = "success" | "info" | "danger";

interface ToastItem {
  id: string;
  message: string;
  variant: ToastVariant;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const FAVORITES_KEY = "priceradar:favorites";
const TOAST_LIFETIME_MS = 3200;

export const SORT_LABELS: Record<SortOption, string> = {
  recent: "Recently added",
  "price-asc": "Price: low to high",
  "price-desc": "Price: high to low",
  platform: "Platform (A–Z)",
  name: "Name (A–Z)",
};

// ---------------------------------------------------------------------------
// Small utilities
// ---------------------------------------------------------------------------

export function favoriteKey(p: Product): string {
  return `${p.platform}::${p.direct_link || p.url || p.product_name}`;
}

function formatCurrency(amount: number): string {
  if (!Number.isFinite(amount)) return "—";
  try {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  } catch {
    return `₹${Math.round(amount).toLocaleString("en-IN")}`;
  }
}

function formatRelativeTime(timestamp: number): string {
  const diffMs = Date.now() - timestamp;
  const minute = 60_000;
  const hour = 60 * minute;
  const day = 24 * hour;

  if (diffMs < minute) return "just now";
  if (diffMs < hour) return `${Math.floor(diffMs / minute)}m ago`;
  if (diffMs < day) return `${Math.floor(diffMs / hour)}h ago`;
  const days = Math.floor(diffMs / day);
  if (days < 7) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString("en-IN", { day: "numeric", month: "short" });
}

let idCounter = 0;
function nextId(prefix: string): string {
  idCounter += 1;
  return `${prefix}-${Date.now().toString(36)}-${idCounter}`;
}

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function HeartIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition ${filled ? "fill-[#F5A623] stroke-[#F5A623]" : "fill-none stroke-[#8A93A6]"}`}
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20.5s-7.2-4.6-9.8-9.2C.6 8 1.8 4.6 5 3.6c2-.6 4 .2 5.2 1.9L12 7.7l1.8-2.2c1.2-1.7 3.2-2.5 5.2-1.9 3.2 1 4.4 4.4 2.8 7.7-2.6 4.6-9.8 9.2-9.8 9.2Z" />
    </svg>
  );
}

function XIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

function MinimizeIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <path d="M5 12h14" />
    </svg>
  );
}

function EnterFullscreenIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
    </svg>
  );
}

function RestoreIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <rect x="7" y="7" width="12" height="12" rx="1.5" />
      <path d="M7 7V5.5A1.5 1.5 0 018.5 4H17a3 3 0 013 3v8.5a1.5 1.5 0 01-1.5 1.5H17" />
    </svg>
  );
}

function TrashIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h16M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2m-8 0 1 12a1 1 0 001 1h6a1 1 0 001-1l1-12" />
    </svg>
  );
}

function BagIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8h12l-1 12a2 2 0 01-2 2H9a2 2 0 01-2-2L6 8Z" />
      <path d="M9 8V6a3 3 0 016 0v2" />
    </svg>
  );
}

function SearchIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ChevronDownIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function GridIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinejoin="round">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1" />
    </svg>
  );
}

function ListIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

function CheckCircleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.5 2.5 2.5 5-5" />
    </svg>
  );
}

function InfoCircleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5m0-8h.01" />
    </svg>
  );
}

function AlertTriangleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 2 20h20L12 3Z" />
      <path d="M12 10v4m0 3h.01" />
    </svg>
  );
}

function BeaconGlyph({ className = "h-11 w-11 text-[#59D9C4]/50" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className}>
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M32 8v10M32 46v10M8 32h10M46 32h10" />
      <circle cx="32" cy="32" r="14" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** The circular scan-blip mark used as the trigger / minimized state icon. */
function ScanMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <span className="absolute inset-0 rounded-full border border-[#59D9C4]/40 motion-safe:animate-ping" />
      <span className="absolute inset-[3px] rounded-full border border-[#59D9C4]/70" />
      <span className="relative h-1.5 w-1.5 rounded-full bg-[#F5A623]" />
    </span>
  );
}

// ---------------------------------------------------------------------------
// Toast notifications
// ---------------------------------------------------------------------------

interface ToastContextValue {
  notify: (message: string, variant?: ToastVariant) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider (CartProvider includes one already)");
  }
  return ctx;
}

function ToastIcon({ variant }: { variant: ToastVariant }) {
  if (variant === "success") return <CheckCircleIcon className="h-4 w-4 text-[#5EEAD4]" />;
  if (variant === "danger") return <AlertTriangleIcon className="h-4 w-4 text-[#FF8A8A]" />;
  return <InfoCircleIcon className="h-4 w-4 text-[#8FB4FF]" />;
}

function toastToneClasses(variant: ToastVariant): string {
  if (variant === "success") return "border-[#1F3A34] bg-[#0F2420] text-[#B7F3E4]";
  if (variant === "danger") return "border-[#3A2020] bg-[#241212] text-[#F7C9C9]";
  return "border-[#1E2A40] bg-[#111A2C] text-[#CBD8F0]";
}

function ToastRow({ toast, onDismiss }: { toast: ToastItem; onDismiss: (id: string) => void }) {
  return (
    <div
      role="status"
      className={`pointer-events-auto flex w-72 items-start gap-2.5 overflow-hidden rounded-md border px-3.5 py-3 shadow-lg shadow-black/40 backdrop-blur transition motion-safe:animate-[priceradar-toast-in_0.25s_ease-out] ${toastToneClasses(
        toast.variant
      )}`}
    >
      <span className="mt-0.5 shrink-0">
        <ToastIcon variant={toast.variant} />
      </span>
      <p className="flex-1 text-xs font-medium leading-snug">{toast.message}</p>
      <button
        type="button"
        onClick={() => onDismiss(toast.id)}
        aria-label="Dismiss notification"
        className="shrink-0 cursor-pointer rounded-full p-0.5 text-current/60 transition hover:bg-white/10"
      >
        <XIcon className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}

function ToastViewport({ toasts, onDismiss }: { toasts: ToastItem[]; onDismiss: (id: string) => void }) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-[80] flex flex-col items-center gap-2 px-4">
      {toasts.map((t) => (
        <ToastRow key={t.id} toast={t} onDismiss={onDismiss} />
      ))}
      <style>{`
        @keyframes priceradar-toast-in {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef<Map<string, ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  const notify = useCallback(
    (message: string, variant: ToastVariant = "info") => {
      const id = nextId("toast");
      setToasts((prev) => [...prev.slice(-2), { id, message, variant }]);
      const timer = setTimeout(() => dismiss(id), TOAST_LIFETIME_MS);
      timers.current.set(id, timer);
    },
    [dismiss]
  );

  useEffect(() => {
    const map = timers.current;
    return () => {
      map.forEach((t) => clearTimeout(t));
      map.clear();
    };
  }, []);

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <ToastViewport toasts={toasts} onDismiss={dismiss} />
    </ToastContext.Provider>
  );
}

// ---------------------------------------------------------------------------
// Cart state — favorites persistence + dialog window state
// ---------------------------------------------------------------------------

export interface PlatformBreakdownEntry {
  platform: string;
  count: number;
  share: number;
}

interface CartContextValue {
  favorites: FavoriteProduct[];
  ready: boolean;
  isFavorite: (p: Product) => boolean;
  toggleFavorite: (p: Product, searchedFor: string) => void;
  removeFavorite: (key: string) => void;
  clearAll: () => void;
  totalValue: number;
  count: number;
  platformBreakdown: PlatformBreakdownEntry[];
  windowState: WindowState;
  open: () => void;
  close: () => void;
  minimize: () => void;
  restore: () => void;
  toggleFullscreen: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

/**
 * Reads and controls the shared favorites cart. Must be called from a
 * component rendered underneath <CartProvider>.
 */
export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}

function CartStateProvider({ children }: { children: ReactNode }) {
  const { notify } = useToast();
  const [favorites, setFavorites] = useState<FavoriteProduct[]>([]);
  const [ready, setReady] = useState(false);
  const [windowState, setWindowState] = useState<WindowState>("closed");
  const previousWindowState = useRef<WindowState>("open");

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(FAVORITES_KEY);
      if (raw) setFavorites(JSON.parse(raw));
    } catch {
      // corrupted or inaccessible storage — start fresh
    }
    setReady(true);
  }, []);

  const persist = useCallback((next: FavoriteProduct[]) => {
    setFavorites(next);
    try {
      window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
    } catch {
      // storage full or unavailable — favorites just won't survive a refresh
    }
  }, []);

  const isFavorite = useCallback(
    (p: Product) => favorites.some((f) => favoriteKey(f) === favoriteKey(p)),
    [favorites]
  );

  const toggleFavorite = useCallback(
    (p: Product, searchedFor: string) => {
      const key = favoriteKey(p);
      const exists = favorites.some((f) => favoriteKey(f) === key);
      const shortName = p.product_name.length > 40 ? `${p.product_name.slice(0, 40)}…` : p.product_name;
      if (exists) {
        persist(favorites.filter((f) => favoriteKey(f) !== key));
        notify(`Removed ${shortName} from favorites`, "info");
      } else {
        persist([...favorites, { ...p, favoritedAt: Date.now(), searchedFor }]);
        notify(`Saved ${shortName} to favorites`, "success");
      }
    },
    [favorites, persist, notify]
  );

  const removeFavorite = useCallback(
    (key: string) => {
      const target = favorites.find((f) => favoriteKey(f) === key);
      persist(favorites.filter((f) => favoriteKey(f) !== key));
      if (target) {
        const shortName = target.product_name.length > 40 ? `${target.product_name.slice(0, 40)}…` : target.product_name;
        notify(`Removed ${shortName}`, "info");
      }
    },
    [favorites, persist, notify]
  );

  const clearAll = useCallback(() => {
    persist([]);
    notify("Cleared all favorites", "info");
  }, [persist, notify]);

  const totalValue = useMemo(
    () => favorites.reduce((sum, f) => sum + (Number.isFinite(f.numeric_price) ? f.numeric_price : 0), 0),
    [favorites]
  );

  const platformBreakdown = useMemo<PlatformBreakdownEntry[]>(() => {
    if (favorites.length === 0) return [];
    const counts = new Map<string, number>();
    for (const f of favorites) {
      counts.set(f.platform, (counts.get(f.platform) ?? 0) + 1);
    }
    return Array.from(counts.entries())
      .map(([platform, count]) => ({ platform, count, share: count / favorites.length }))
      .sort((a, b) => b.count - a.count);
  }, [favorites]);

  const open = useCallback(() => {
    setWindowState((prev) => (prev === "fullscreen" ? prev : "open"));
  }, []);

  const close = useCallback(() => setWindowState("closed"), []);

  const minimize = useCallback(() => {
    setWindowState((prev) => {
      if (prev !== "minimized") previousWindowState.current = prev;
      return "minimized";
    });
  }, []);

  const restore = useCallback(() => {
    setWindowState(previousWindowState.current === "minimized" ? "open" : previousWindowState.current || "open");
  }, []);

  const toggleFullscreen = useCallback(() => {
    setWindowState((prev) => (prev === "fullscreen" ? "open" : "fullscreen"));
  }, []);

  const value: CartContextValue = {
    favorites,
    ready,
    isFavorite,
    toggleFavorite,
    removeFavorite,
    clearAll,
    totalValue,
    count: favorites.length,
    platformBreakdown,
    windowState,
    open,
    close,
    minimize,
    restore,
    toggleFullscreen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * Wraps a subtree with everything the favorites cart needs. Mount once near
 * the root — <CartButton />, <CartDialog />, and anything calling useCart()
 * or useToast() must live underneath it.
 */
export function CartProvider({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <CartStateProvider>{children}</CartStateProvider>
    </ToastProvider>
  );
}

// ---------------------------------------------------------------------------
// Cart trigger button — lives in the header, opens or restores the dialog
// ---------------------------------------------------------------------------

export function CartButton({ className = "" }: { className?: string }) {
  const { count, windowState, open, restore } = useCart();

  const handleClick = () => {
    if (windowState === "minimized") restore();
    else open();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Open favorites (${count} saved)`}
      className={`relative cursor-pointer flex items-center gap-2 rounded-md border border-[#26314A] bg-[#131B2C] px-3.5 py-2 text-xs font-medium text-[#CBD5E6] transition hover:border-[#59D9C4]/50 hover:text-[#59D9C4] ${className}`}
    >
      <BagIcon className="h-4 w-4" />
      <span className="hidden font-mono uppercase tracking-wide sm:inline">Favorites</span>
      {count > 0 && (
        <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[#F5A623] px-1 font-mono text-[10px] font-semibold text-[#1A1206]">
          {count}
        </span>
      )}
    </button>
  );
}

// ---------------------------------------------------------------------------
// Confirm-clear panel
// ---------------------------------------------------------------------------

function ConfirmClearPanel({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center rounded-b-lg bg-[#0C1220]/95 p-6 backdrop-blur-sm">
      <div className="w-full max-w-xs rounded-lg border border-[#3A2020] bg-[#1A1112] p-5 text-center">
        <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#2A1414]">
          <AlertTriangleIcon className="h-5 w-5 text-[#FF8A8A]" />
        </span>
        <p className="mt-3 text-sm font-semibold text-[#F1E9E9]">Clear all favorites?</p>
        <p className="mt-1 text-xs text-[#9A8C8C]">This removes every saved item from this browser. It can&apos;t be undone.</p>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 cursor-pointer rounded-md border border-[#26314A] bg-[#131B2C] px-3 py-2 text-xs font-medium text-[#CBD5E6] transition hover:bg-[#182236]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 cursor-pointer rounded-md bg-[#E5484D] px-3 py-2 text-xs font-medium text-white transition hover:bg-[#C93F44]"
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Empty / no-match states
// ---------------------------------------------------------------------------

function CartEmptyState({ onBrowse }: { onBrowse: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 py-16 text-center">
      <BeaconGlyph />
      <p className="text-sm font-medium text-[#E9EDF5]">No favorites yet</p>
      <p className="max-w-xs text-xs text-[#8A93A6]">Tap the heart on any product from a scan to save it here for later.</p>
      <button
        type="button"
        onClick={onBrowse}
        className="mt-1 rounded-full cursor-pointer bg-[#F5A623] px-4 py-2 text-xs font-semibold text-[#1A1206] transition hover:brightness-110"
      >
        Start a scan
      </button>
    </div>
  );
}

function CartNoMatchState({ query, onClear }: { query: string; onClear: () => void }) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-6 py-16 text-center">
      <SearchIcon className="h-8 w-8 text-[#3A4560]" />
      <p className="text-sm font-medium text-[#E9EDF5]">Nothing matches &ldquo;{query}&rdquo;</p>
      <p className="max-w-xs text-xs text-[#8A93A6]">Try a different platform name or clear the filter.</p>
      <button type="button" onClick={onClear} className="mt-1 cursor-pointer text-xs font-medium text-[#59D9C4] underline-offset-2 hover:underline">
        Clear filter
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Individual favorite — grid card and list row variants
// ---------------------------------------------------------------------------

function CartGridItem({ item, onRemove }: { item: FavoriteProduct; onRemove: () => void }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-[#1E2740] max-w-[300px] bg-[#131B2C] transition hover:border-[#59D9C4]/40">
      <button
        type="button"
        onClick={onRemove}
        aria-label="Remove from favorites"
        className="absolute right-2 top-2 z-10 cursor-pointer flex h-7 w-7 items-center justify-center rounded-full bg-[#0C1220]/90 text-[#8A93A6] shadow-sm transition hover:scale-105 hover:text-[#FF8A8A]"
      >
        <XIcon className="h-3.5 w-3.5" />
      </button>
      <a href={item.direct_link || item.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0F1626]">
          {!imgError && item.thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.thumbnail}
              alt={item.product_name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="h-full w-full object-contain p-4"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <BeaconGlyph className="h-10 w-10 text-[#59D9C4]/40" />
            </div>
          )}
        </div>
      </a>
      <div className="flex flex-1 flex-col gap-1 p-3">
        <span className="font-mono text-[10px] font-medium uppercase tracking-wide text-[#59D9C4]">{item.platform}</span>
        <p className="line-clamp-2 min-h-[2.2rem] text-xs font-medium leading-tight text-[#E9EDF5]">{item.product_name}</p>
        <p className="text-[10px] text-[#8A93A6]">
          Saved {formatRelativeTime(item.favoritedAt)} · from &ldquo;{item.searchedFor}&rdquo;
        </p>
        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <p className="font-mono text-sm font-semibold tabular-nums text-[#E9EDF5]">{item.price}</p>
          <a
            href={item.direct_link || item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[11px] font-medium text-[#59D9C4] hover:underline"
          >
            Visit <ExternalLinkIcon className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

function CartListItem({ item, onRemove }: { item: FavoriteProduct; onRemove: () => void }) {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="flex items-center gap-3 rounded-lg border border-[#1E2740] bg-[#131B2C] p-2.5 transition hover:border-[#59D9C4]/30">
      <a href={item.direct_link || item.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
        <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-md bg-[#0F1626]">
          {!imgError && item.thumbnail ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.thumbnail}
              alt={item.product_name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="h-full w-full object-contain p-1.5"
            />
          ) : (
            <BeaconGlyph className="h-6 w-6 text-[#59D9C4]/40" />
          )}
        </div>
      </a>
      <div className="min-w-0 flex-1">
        <span className="font-mono text-[10px] font-medium uppercase tracking-wide text-[#59D9C4]">{item.platform}</span>
        <p className="truncate text-xs font-medium text-[#E9EDF5]">{item.product_name}</p>
        <p className="text-[10px] text-[#8A93A6]">Saved {formatRelativeTime(item.favoritedAt)}</p>
      </div>
      <p className="shrink-0 font-mono text-sm font-semibold tabular-nums text-[#E9EDF5]">{item.price}</p>
      <a
        href={item.direct_link || item.url}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 rounded-md bg-[#F5A623] px-2.5 py-1.5 text-[11px] font-semibold text-[#1A1206] transition hover:brightness-110"
      >
        Visit
      </a>
      <button
        type="button"
        onClick={onRemove}
        aria-label="Remove from favorites"
        className="shrink-0 rounded-full p-1.5 text-[#8A93A6] cursor-pointer transition hover:bg-[#2A1414] hover:text-[#FF8A8A]"
      >
        <TrashIcon className="h-4 w-4" />
      </button>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Platform distribution bar
// ---------------------------------------------------------------------------

const PLATFORM_BAR_TONES = ["bg-[#F5A623]", "bg-[#59D9C4]", "bg-[#8FB4FF]", "bg-[#C9A6FF]", "bg-[#7FD98A]", "bg-[#5A6580]"];

function PlatformDistributionBar({ breakdown }: { breakdown: PlatformBreakdownEntry[] }) {
  if (breakdown.length < 2) return null;
  return (
    <div className="px-5 pb-3">
      <div className="flex h-1 w-full overflow-hidden rounded-full bg-[#1A2338]">
        {breakdown.map((entry, idx) => (
          <span
            key={entry.platform}
            style={{ width: `${Math.max(entry.share * 100, 4)}%` }}
            className={PLATFORM_BAR_TONES[idx % PLATFORM_BAR_TONES.length]}
            title={`${entry.platform}: ${entry.count}`}
          />
        ))}
      </div>
      <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
        {breakdown.map((entry, idx) => (
          <span key={entry.platform} className="flex items-center gap-1 font-mono text-[10px] text-[#8A93A6]">
            <span className={`h-1.5 w-1.5 rounded-full ${PLATFORM_BAR_TONES[idx % PLATFORM_BAR_TONES.length]}`} />
            {entry.platform} · {entry.count}
          </span>
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Minimized pill
// ---------------------------------------------------------------------------

function MinimizedPill() {
  const { count, totalValue, restore } = useCart();
  return (
    <button
      type="button"
      onClick={restore}
      className="fixed bottom-5 right-5 z-[60] cursor-pointer flex items-center gap-2.5 rounded-full border border-[#26314A] bg-[#131B2C]/95 py-2.5 pl-2.5 pr-4 shadow-xl shadow-black/40 backdrop-blur transition hover:-translate-y-0.5 hover:border-[#59D9C4]/50"
      aria-label={`Restore favorites panel (${count} saved)`}
    >
      <ScanMark className="h-6 w-6" />
      <span className="flex flex-col items-start leading-tight">
        <span className="text-xs font-semibold text-[#E9EDF5]">
          {count} favorite{count === 1 ? "" : "s"}
        </span>
        <span className="font-mono text-[10px] text-[#8A93A6]">{formatCurrency(totalValue)} tracked</span>
      </span>
    </button>
  );
}

// ---------------------------------------------------------------------------
// The dialog itself
// ---------------------------------------------------------------------------

export function CartDialog() {
  const { favorites, ready, windowState, close, minimize, toggleFullscreen, removeFavorite, clearAll, totalValue, count } =
    useCart();

  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>("recent");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [platformFilter, setPlatformFilter] = useState<string | null>(null);
  const [confirmingClear, setConfirmingClear] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  const isOpenLike = windowState === "open" || windowState === "fullscreen";

  useEffect(() => {
    if (!isOpenLike) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (confirmingClear) setConfirmingClear(false);
        else close();
      }
      if (e.key.toLowerCase() === "f" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpenLike, close, confirmingClear, toggleFullscreen]);

  useEffect(() => {
    if (!isOpenLike) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isOpenLike]);

  const platforms = useMemo(() => {
    const set = new Set(favorites.map((f) => f.platform));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [favorites]);

  const visibleItems = useMemo(() => {
    let items = favorites;
    if (platformFilter) items = items.filter((f) => f.platform === platformFilter);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      items = items.filter((f) => f.product_name.toLowerCase().includes(q) || f.platform.toLowerCase().includes(q));
    }
    const sorted = [...items];
    switch (sortOption) {
      case "price-asc":
        sorted.sort((a, b) => a.numeric_price - b.numeric_price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.numeric_price - a.numeric_price);
        break;
      case "platform":
        sorted.sort((a, b) => a.platform.localeCompare(b.platform));
        break;
      case "name":
        sorted.sort((a, b) => a.product_name.localeCompare(b.product_name));
        break;
      default:
        sorted.sort((a, b) => b.favoritedAt - a.favoritedAt);
    }
    return sorted;
  }, [favorites, platformFilter, search, sortOption]);

  const handleExport = useCallback(async () => {
    const lines = visibleItems.map(
      (item, i) => `${i + 1}. ${item.product_name} — ${item.price} (${item.platform}) ${item.direct_link || item.url}`
    );
    const text = lines.join("\n") || "No favorites to copy yet.";
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // clipboard unavailable — the list still renders on screen either way
    }
  }, [visibleItems]);

  if (windowState === "closed") return null;
  if (windowState === "minimized") return <MinimizedPill />;

  const isFullscreen = windowState === "fullscreen";

  return (
    <div className={`fixed top-0 left-0 w-full h-full   z-[1000] flex ${isFullscreen ? "" : "items-center justify-center p-4"}`} role="presentation">
      {!isFullscreen && (
        <button
          type="button"
          aria-label="Close favorites"
          onClick={close}
          className="absolute cursor-pointer inset-0 bg-[#05070C]/70 backdrop-blur-sm"
        />
      )}

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative flex w-full flex-col overflow-hidden border border-[#232D45] bg-[#0F1626] shadow-2xl shadow-black/50 transition-all ${
          isFullscreen ? "h-full max-w-none rounded-none" : "max-h-[85vh] max-w-2xl rounded-lg"
        }`}
      >
        {/* Window chrome */}
        <div className="flex items-center justify-between gap-2 border-b border-[#1E2740] bg-[#131B2C] px-5 py-3.5">
          <div className="flex items-center gap-2.5">
            <ScanMark className="h-5 w-5" />
            <h2 id={titleId} className="text-sm font-semibold tracking-tight text-[#E9EDF5]">
              Favorites
            </h2>
            <span className="rounded-full bg-[#F5A623]/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#F5A623]">{count}</span>
          </div>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={minimize}
              aria-label="Minimize"
              title="Minimize"
              className="rounded-md cursor-pointer p-1.5 text-[#8A93A6] transition hover:bg-[#182236] hover:text-[#E9EDF5]"
            >
              <MinimizeIcon />
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              aria-label={isFullscreen ? "Restore down" : "Enter full screen"}
              title={isFullscreen ? "Restore down" : "Enter full screen"}
              className="rounded-md cursor-pointer p-1.5 text-[#8A93A6] transition hover:bg-[#182236] hover:text-[#E9EDF5]"
            >
              {isFullscreen ? <RestoreIcon /> : <EnterFullscreenIcon />}
            </button>
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              title="Close"
              className="rounded-md cursor-pointer p-1.5 text-[#8A93A6] transition hover:bg-[#2A1414] hover:text-[#FF8A8A]"
            >
              <XIcon />
            </button>
          </div>
        </div>

        {/* Toolbar */}
        {favorites.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 border-b border-[#1E2740] px-5 py-3">
            <div className="relative min-w-[10rem] flex-1">
              <SearchIcon className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#5A6580]" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter favorites…"
                className="w-full rounded-md border border-[#26314A] bg-[#131B2C] py-1.5 pl-8 pr-3 text-xs text-[#E9EDF5] outline-none transition placeholder:text-[#5A6580] focus:border-[#59D9C4]/60 focus:ring-1 focus:ring-[#59D9C4]/30"
              />
            </div>

            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as SortOption)}
                className="appearance-none rounded-md border border-[#26314A] bg-[#131B2C] py-1.5 pl-3 pr-7 text-xs font-medium text-[#CBD5E6] outline-none transition focus:border-[#59D9C4]/60"
              >
                {(Object.keys(SORT_LABELS) as SortOption[]).map((key) => (
                  <option key={key} value={key}>
                    {SORT_LABELS[key]}
                  </option>
                ))}
              </select>
              <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 h-3 w-3 -translate-y-1/2 text-[#5A6580]" />
            </div>

            <div className="flex items-center rounded-md border border-[#26314A] p-0.5">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                aria-label="Grid view"
                aria-pressed={viewMode === "grid"}
                className={`rounded p-1.5 cursor-pointer transition ${viewMode === "grid" ? "bg-[#F5A623] text-[#1A1206]" : "text-[#5A6580] hover:text-[#CBD5E6]"}`}
              >
                <GridIcon />
              </button>
              <button
                type="button"
                onClick={() => setViewMode("list")}
                aria-label="List view"
                aria-pressed={viewMode === "list"}
                className={`rounded p-1.5 cursor-pointer transition ${viewMode === "list" ? "bg-[#F5A623] text-[#1A1206]" : "text-[#5A6580] hover:text-[#CBD5E6]"}`}
              >
                <ListIcon />
              </button>
            </div>
          </div>
        )}

        {platforms.length > 1 && (
          <div className="flex flex-wrap items-center gap-1.5 border-b border-[#1E2740] px-5 py-2.5">
            <button
              type="button"
              onClick={() => setPlatformFilter(null)}
              className={`rounded-full cursor-pointer px-2.5 py-1 font-mono text-[11px] font-medium transition ${
                platformFilter === null ? "bg-[#E9EDF5] text-[#0C1220]" : "bg-[#131B2C] text-[#8A93A6] hover:text-[#CBD5E6]"
              }`}
            >
              All platforms
            </button>
            {platforms.map((p) => (
              <button
                key={p}
                type="button"
                onClick={() => setPlatformFilter(p)}
                className={`rounded-full cursor-pointer px-2.5 py-1 font-mono text-[11px] font-medium transition ${
                  platformFilter === p ? "bg-[#59D9C4] text-[#08221E]" : "bg-[#0F2420]/40 text-[#59D9C4] hover:bg-[#0F2420]"
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        )}

        {/* Body */}
        <div className="relative flex flex-1 flex-col overflow-y-auto px-5 py-4">
          {confirmingClear && (
            <ConfirmClearPanel
              onConfirm={() => {
                clearAll();
                setConfirmingClear(false);
              }}
              onCancel={() => setConfirmingClear(false)}
            />
          )}

          {!ready && (
            <div className="flex flex-1 items-center justify-center py-16">
              <ScanMark className="h-8 w-8" />
            </div>
          )}

          {ready && favorites.length === 0 && <CartEmptyState onBrowse={close} />}

          {ready && favorites.length > 0 && visibleItems.length === 0 && (
            <CartNoMatchState
              query={search || platformFilter || ""}
              onClear={() => {
                setSearch("");
                setPlatformFilter(null);
              }}
            />
          )}

          {ready && visibleItems.length > 0 && viewMode === "grid" && (
            <div className={`grid  gap-3 ${isFullscreen?"grid-cols-2 sm:grid-cols-6":"grid-cols-1 sm:grid-cols-3"}`}>
              {visibleItems.map((item, idx) => (
                <CartGridItem key={`${favoriteKey(item)}-${idx}`} item={item} onRemove={() => removeFavorite(favoriteKey(item))} />
              ))}
            </div>
          )}

          {ready && visibleItems.length > 0 && viewMode === "list" && (
            <div className={`grid  ${isFullscreen?"lg:grid-cols-3":"lg:grid-cols-1"} max-sm:grid-cols-1 max-md:grid-cols-2  gap-2`}>
              {visibleItems.map((item, idx) => (
                <CartListItem key={`${favoriteKey(item)}-${idx}`} item={item} onRemove={() => removeFavorite(favoriteKey(item))} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {favorites.length > 0 && (
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#1E2740] bg-[#131B2C] px-5 py-3.5">
            <div className="text-xs text-[#8A93A6]">
              <span className="font-semibold text-[#E9EDF5]">{count}</span> item{count === 1 ? "" : "s"} · est. total{" "}
              <span className="font-mono font-semibold text-[#E9EDF5]">{formatCurrency(totalValue)}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleExport}
                className="rounded-md cursor-pointer border border-[#26314A] bg-[#0F1626] px-3 py-1.5 text-xs font-medium text-[#CBD5E6] transition hover:border-[#59D9C4]/40"
              >
                Copy list
              </button>
              <button
                type="button"
                onClick={() => setConfirmingClear(true)}
                className="rounded-md cursor-pointer border border-[#3A2020] bg-[#0F1626] px-3 py-1.5 text-xs font-medium text-[#FF8A8A] transition hover:bg-[#1A1112]"
              >
                Clear all
              </button>
              <button
                type="button"
                onClick={close}
                className="rounded-md cursor-pointer bg-[#F5A623] px-3.5 py-1.5 text-xs font-semibold text-[#1A1206] transition hover:brightness-110"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}