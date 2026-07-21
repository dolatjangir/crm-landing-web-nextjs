"use client";

import { compareProductPrice } from "@/store/aiagent/aiagent";
import { useCallback, useId, useState } from "react";
import {
  CartButton,
  CartDialog,
  CartProvider,
  useCart,
  type Product,
} from "@/components/Features/FavoritesCard";

// ---------------------------------------------------------------------------
// Types — mirrored from the API response shape
// ---------------------------------------------------------------------------

interface CompareProductPriceData {
  product_name: string;
  cheapest: Product;
  products: Product[];
  all_results: Product[];
  summary: string;
  ai_summary: string;
  total_results: number;
}

interface CompareProductPriceResponse {
  success: boolean;
  data: CompareProductPriceData;
}

const EXAMPLE_QUERIES = ["Woodland shoes", "Nike Air Max 270", "iPhone 15", "Bose QuietComfort"];

// ---------------------------------------------------------------------------
// One-time font + token setup. Swap the @import for next/font in your real
// layout.tsx once you wire this up — this keeps the file self-contained.
// ---------------------------------------------------------------------------

function ThemeFonts() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap');
      .font-display { font-family: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif; }
      .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
      .font-data { font-family: 'IBM Plex Mono', ui-monospace, SFMono-Regular, monospace; }
    `}</style>
  );
}

// ---------------------------------------------------------------------------
// Small presentational pieces
// ---------------------------------------------------------------------------

/** The circular scan mark used in the header and as a loading indicator. */
function ScanMark({ spinning = false, className = "" }: { spinning?: boolean; className?: string }) {
  return (
    <span className={`relative inline-flex items-center justify-center ${className}`}>
      <span className={`absolute inset-0 rounded-full border border-[#59D9C4]/40 ${spinning ? "motion-safe:animate-ping" : ""}`} />
      <span className="absolute inset-[3px] rounded-full border border-[#59D9C4]/70" />
      <span className="relative h-1.5 w-1.5 rounded-full bg-[#F5A623]" />
    </span>
  );
}

/** A larger sweeping radar dial — the hero's signature element. Reinforces the
 * "scanning platforms for a price" concept instead of a generic gradient blob. */
function ScanDial({ className = "" }: { className?: string }) {
  const rings = [46, 34, 22];
  return (
    <div className={`relative aspect-square w-full max-w-xs ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <circle cx="50" cy="50" r="49" fill="#0F1626" stroke="#1E2740" strokeWidth="1" />
        {rings.map((r) => (
          <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="#1E2740" strokeWidth="0.6" />
        ))}
        <line x1="50" y1="4" x2="50" y2="96" stroke="#1E2740" strokeWidth="0.5" />
        <line x1="4" y1="50" x2="96" y2="50" stroke="#1E2740" strokeWidth="0.5" />
        <g style={{ transformOrigin: "50px 50px" }} className="motion-safe:animate-[priceradar-sweep_4s_linear_infinite]">
          <path d="M50 50 L50 4 A46 46 0 0 1 88 28 Z" fill="url(#sweepGradient)" opacity="0.55" />
        </g>
        <defs>
          <linearGradient id="sweepGradient" x1="50" y1="4" x2="88" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#59D9C4" stopOpacity="0.6" />
            <stop offset="1" stopColor="#59D9C4" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[
          { x: 68, y: 30, r: 2.2 },
          { x: 32, y: 62, r: 1.6 },
          { x: 60, y: 70, r: 1.8 },
        ].map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r} fill="#F5A623" />
        ))}
        <circle cx="50" cy="50" r="2" fill="#E9EDF5" />
      </svg>
      <style>{`
        @keyframes priceradar-sweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 fill-[#F5A623]">
      <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9L10 14.8l-5.3 2.8 1.1-5.9L1.5 7.6l5.9-.7L10 1.5Z" />
    </svg>
  );
}

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

/** Placeholder glyph shown when a product has no thumbnail, or the image fails to load. */
function BeaconGlyph() {
  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11 text-[#59D9C4]/40">
      <path fill="none" stroke="currentColor" strokeWidth="1.6" d="M32 8v10M32 46v10M8 32h10M46 32h10" />
      <circle cx="32" cy="32" r="14" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="32" cy="32" r="4" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ProductImage({ src, alt }: { src?: string; alt: string }) {
  const [errored, setErrored] = useState(false);
  const showFallback = !src || errored;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0F1626]">
      {!showFallback ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          className="h-full w-full object-contain p-5 transition duration-300 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <BeaconGlyph />
        </div>
      )}
    </div>
  );
}

function formatPercentAbove(product: Product, cheapest: Product): string {
  if (cheapest.numeric_price <= 0) return "";
  const diff = ((product.numeric_price - cheapest.numeric_price) / cheapest.numeric_price) * 100;
  if (diff < 1) return "";
  return `+${Math.round(diff)}% vs. lowest`;
}

function ProductCard({
  product,
  isCheapest,
  diffLabel,
  isFavorite,
  onToggleFavorite,
  caption,
}: {
  product: Product;
  isCheapest?: boolean;
  diffLabel?: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  caption?: string;
}) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-lg border bg-[#131B2C] transition hover:-translate-y-0.5 ${
        isCheapest ? "border-[#F5A623]/60" : "border-[#1E2740] hover:border-[#59D9C4]/30"
      }`}
    >
      {isCheapest && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-[#F5A623] px-2.5 py-1 font-data text-[10px] font-semibold uppercase tracking-wide text-[#1A1206]">
          Best price
        </span>
      )}

      <button
        type="button"
        onClick={onToggleFavorite}
        aria-pressed={isFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        className="absolute cursor-pointer right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#0C1220]/90 backdrop-blur transition hover:scale-105"
      >
        <HeartIcon filled={isFavorite} />
      </button>

      <a href={product.direct_link || product.url} target="_blank" rel="noopener noreferrer">
        <ProductImage src={product.thumbnail} alt={product.product_name} />
      </a>

      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <span className="font-data text-[11px] font-medium uppercase tracking-wide text-[#59D9C4]">
          {product.platform}
        </span>
        <p className="line-clamp-2 min-h-[2.5rem] font-body text-sm font-medium leading-tight text-[#E9EDF5]">
          {product.product_name}
        </p>

        {product.rating !== "N/A" && (
          <div className="flex items-center gap-1 text-xs text-[#8A93A6]">
            <StarIcon />
            <span className="font-data">{product.rating}</span>
            {product.reviews !== "N/A" && <span className="font-data">({product.reviews})</span>}
          </div>
        )}

        {caption && <p className="text-[11px] text-[#5A6580]">Saved from “{caption}”</p>}

        <div className="mt-auto flex items-end justify-between gap-2 pt-3">
          <div>
            <p className="font-data text-lg font-semibold tabular-nums text-[#E9EDF5]">{product.price}</p>
            {diffLabel && <p className="font-data text-[11px] font-medium text-[#8FB4FF]">{diffLabel}</p>}
            {!product.price_verified && (
              <p className="text-[10px] text-[#5A6580]">Estimated — confirm at checkout</p>
            )}
          </div>
          <a
            href={product.direct_link || product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-md bg-[#59D9C4] px-3 py-1.5 text-xs font-semibold text-[#08221E] transition hover:brightness-110"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page content (inside CartProvider so it can read/write favorites)
// ---------------------------------------------------------------------------

function PriceRadarPage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<CompareProductPriceData | null>(null);
  const statusId = useId();
  const { ready, isFavorite, toggleFavorite } = useCart();

  const runSearch = useCallback(
    async (raw: string) => {
      const trimmed = raw.trim();
      if (!trimmed || loading) return;

      setLoading(true);
      setError(null);
      setResult(null);

      try {
        const res = (await compareProductPrice({ product_name: trimmed })) as CompareProductPriceResponse | null;
        if (!res || !res.data || !res.data.products?.length) {
          setError("No platforms turned up a match. Try adding the brand, model, or variant.");
          return;
        }
        setResult(res.data);
      } catch {
        setError("The scan failed partway through. Try again in a moment.");
      } finally {
        setLoading(false);
      }
    },
    [loading]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runSearch(query);
  };

  const sortedProducts = result ? [...result.products].sort((a, b) => a.numeric_price - b.numeric_price) : [];
  const cheapest = result?.cheapest ?? sortedProducts[0];

  return (
    <div className="min-h-screen bg-[#0C1220] font-body pt-20 text-[#E9EDF5]">
      <ThemeFonts />

      {/*
        This page renders inside the site's own <Header /> / <Footer /> from
        layout.tsx, so it doesn't get a second logo/nav bar. This is just a
        slim, page-local strip that keeps the favorites trigger reachable
        while scrolling through results. It sticks at top-16 (4rem/64px) to
        sit right below the real site header — match that offset to whatever
        your <Header /> actually measures if it's not 64px.
      */}
      <div className="sticky top-16 z-20 border-b border-[#1E2740] bg-[#0C1220]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-2 px-5 py-2.5">
          <span className="font-data text-[10px] uppercase tracking-[0.2em] text-[#5A6580]">Price comparison tool</span>
          <CartButton />
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-5 pb-24 pt-14">
        {/* Hero / search */}
        <section className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="text-center md:text-left">
            <p className="font-data text-[11px] uppercase tracking-[0.2em] text-[#59D9C4]">Live price scan</p>
            <h1 className="mt-2 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-[#E9EDF5] sm:text-5xl">
              Find the
              <br />
              lowest price.
            </h1>
            <p className="mx-auto mt-4 max-w-md text-sm text-[#8A93A6] md:mx-0">
              Enter a product and we&apos;ll sweep every platform selling it, then line up the prices side by
              side.
            </p>

            <form onSubmit={handleSubmit} className="mx-auto mt-7 flex max-w-lg gap-2 md:mx-0">
              <label htmlFor="product-search" className="sr-only">
                Product name
              </label>
              <input
                id="product-search"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Woodland shoes"
                className="w-full rounded-md border border-[#26314A] bg-[#131B2C] px-4 py-3 text-sm text-[#E9EDF5] placeholder:text-[#5A6580] outline-none transition focus:border-[#59D9C4]/60 focus:ring-1 focus:ring-[#59D9C4]/30"
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="shrink-0 rounded-md bg-[#F5A623] px-5 py-3 text-sm font-semibold text-[#1A1206] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {loading ? "Scanning…" : "Scan prices"}
              </button>
            </form>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <span className="text-xs text-[#5A6580]">Try:</span>
              {EXAMPLE_QUERIES.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => {
                    setQuery(ex);
                    runSearch(ex);
                  }}
                  className="rounded-full cursor-pointer border border-[#1E2740] bg-[#0F2420]/30 px-3 py-1 font-data text-xs text-[#59D9C4] transition hover:border-[#59D9C4]/50 hover:bg-[#0F2420]"
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>

          <ScanDial className="mx-auto hidden md:block" />
        </section>

        <p id={statusId} role="status" aria-live="polite" className="sr-only">
          {loading
            ? "Scanning platforms"
            : error
            ? error
            : result
            ? `${result.total_results} platforms found`
            : ""}
        </p>

        {loading && (
          <div className="mt-14 flex flex-col items-center gap-4">
            <ScanMark spinning className="h-10 w-10" />
            <p className="font-data text-sm text-[#8A93A6]">Sweeping platforms for the best price…</p>
          </div>
        )}

        {!loading && error && (
          <div className="mt-10 rounded-lg border border-[#26314A] bg-[#131B2C] px-5 py-4 text-sm text-[#CBD5E6]">
            <p className="font-medium text-[#E9EDF5]">Couldn&apos;t complete that scan.</p>
            <p className="mt-1 text-[#8A93A6]">{error}</p>
          </div>
        )}

        {!loading && !error && result && cheapest && (
          <section className="mt-14">
            <div className="flex flex-wrap items-end justify-between gap-2 border-b border-[#1E2740] pb-4">
              <h2 className="font-display text-lg font-semibold tracking-tight text-[#E9EDF5]">{result.product_name}</h2>
              <span className="rounded-full bg-[#0F2420]/50 px-3 py-1 font-data text-xs font-medium text-[#59D9C4]">
                {result.total_results} platform{result.total_results === 1 ? "" : "s"} scanned
              </span>
            </div>

            {result.ai_summary && (
              <div className="mt-5 rounded-md border-l-2 border-[#F5A623] bg-[#131B2C] px-4 py-3">
                <p className="font-data text-[11px] font-medium uppercase tracking-wide text-[#F5A623]">Quick read</p>
                <p className="mt-1 text-sm leading-relaxed text-[#CBD5E6]">{result.ai_summary}</p>
              </div>
            )}

            <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {sortedProducts.map((p, idx) => {
                const isCheapest = p.numeric_price === cheapest.numeric_price;
                return (
                  <ProductCard
                    key={`${p.platform}-${idx}`}
                    product={p}
                    isCheapest={isCheapest}
                    diffLabel={isCheapest ? undefined : formatPercentAbove(p, cheapest)}
                    isFavorite={ready && isFavorite(p)}
                    onToggleFavorite={() => toggleFavorite(p, result.product_name)}
                  />
                );
              })}
            </div>
          </section>
        )}

        {!loading && !error && !result && (
          <div className="mt-16 flex flex-col items-center gap-3 text-center">
            <ScanMark className="h-8 w-8 opacity-60" />
            <p className="text-sm text-[#5A6580]">
              Search a product above to see how its price compares across platforms.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Exported page — wraps the content in CartProvider and mounts the dialog
// once at the root, so the favorites drawer (open / minimized / fullscreen)
// is available from anywhere via the header's CartButton or the heart on
// any product card.
// ---------------------------------------------------------------------------

export default function Page() {
  return (
    <CartProvider>
      <PriceRadarPage />
      <CartDialog />
    </CartProvider>
  );
}