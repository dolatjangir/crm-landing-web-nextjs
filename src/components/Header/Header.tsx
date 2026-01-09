"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  const navLinks = [
    { name: "Home", href: "/" },
    { 
      name: "Company", 
      href: "/company",
      submenu: [
      { name: "Ecosystem", href: "company/ecosystem" },
        { name: "About us", href: "company/about-us" },
        { name: "Why choose us", href: "company/why-choose-us" },
      ]
    },
    // { 
    //   name: "Platform", 
    //   href: "platform",
    //   submenu: [
          // { name: "AI Core", href: "platform/ai-core" },
    //     { name: "Ecosystem", href: "platform/ecosystem" },
    //     { name: "Architecture", href: "platform/architecture" },
    //     { name: "Integrations", href: "platform/integrations" },
    //   ]
    // },
    { 
      name: "Features", 
      href: "feature",
      submenu: [
        { name: "Workflow Automation", href: "features/workflowautomation" },
        { name: "customize workflow", href: "features/customize-workflow" },
         { name: "scalability", href: "features/scalability" },
          { name: "integration", href: "features/integration" },
        { name: "Advanced Analytics", href: "features/advanced-analytics" },
        { name: "Security & Compliance", href: "features/security-compilance" },
        
        { name: "ROI Calculator", href: "features/roicalculator" },
      ]
    },
    { 
      name: "Industries", 
      href: "industries",
      submenu: [
        { name: "Healthcare", href: "industries/health-care" },
        { name: "Real Estate", href: "industries/real-estate" },
        { name: "Finance", href: "industries/finance" },
        { name: "E-commerce", href: "industries/e-commerce" },
        { name: "Education", href: "industries/education" },
        { name: "Manufacturing", href: "industries/manufacturing" },
      ]
    },
    { 
      name: "CRM Products", 
      href: "#",
      submenu: [ 
        { name: "Property", href: "/property" },
        { name: "Consult", href: "/consult" },
        { name: "Travel", href: "/travel" },
        { name: "Education", href: "/education" },
        { name: "WBH", href: "/wbh" },
      ]
    },
    { name: "contact us", href: "contact-us" },
  ];

  // Scroll function for sticky header
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 80;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setMenuOpen(false);
    setMobileSubmenuOpen(null);
  };

  const toggleMobileSubmenu = (name: string) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === name ? null : name);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm" style={{zIndex:999}}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent hover:from-cyan-700 hover:to-blue-700 transition"
          >
            ibigdata
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.submenu && setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <button
                  onClick={() => !link.submenu && handleScroll(link.href)}
                  className="flex items-center gap-1 px-1 py-2 text-gray-700 hover:text-cyan-600 transition"
                >
                  {!link.submenu || link.submenu.length === 0 ? (
                    <Link href={`/${link.href}`}>
                      {link.name}
                    </Link>  ) : (
                 link.name)
                }
                  {link.submenu && (
                    <FiChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === link.name ? 'rotate-180' : ''}`} />
                  )}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-600 transition-all group-hover:w-full"></span>
                </button>

                {/* Dropdown Submenu */}
                {link.submenu && (
                  <div
                    className={`absolute top-full left-0 mt-3 w-56 overflow-hidden bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-300 ${
                      activeSubmenu === link.name
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 translate-y-4 invisible'
                    }`}
                    style={{zIndex:999}}
                  >
                    {link.submenu.map((item) => (
                      <Link
                        key={item.name}
                        href={`/${item.href}`}
                        onClick={()=>setActiveSubmenu(null)}
                        className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                        {/*   <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div> */}
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex gap-3">
            <a href="https://property.ibigdata.in/admin">
            <button
              onClick={() => handleScroll("contact")}
              className="inline-flex items-center rounded-lg border-2 border-cyan-600 px-5 py-2 text-sm font-semibold text-cyan-600 hover:bg-cyan-50 transition"
            >
              Login
            </button></a>
            <Link
            href="/get-started"
              onClick={() => handleScroll("contact")}
              className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex items-center justify-center rounded-lg p-2 text-cyan-600 hover:bg-cyan-50 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50  z-40 h-screen"
          style={{zIndex:999}}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Slides from Right */}
      <div
        className={`lg:hidden fixed  top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{zIndex:999}}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link
            href="/"
            className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
            onClick={() => setMenuOpen(false)}
          >
            ibigdata
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition"
          >
            <FiX className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Mobile Menu Content */}
        <nav className="flex flex-col px-4 py-6 gap-2 overflow-y-auto h-[calc(100%-180px)]">
          {navLinks.map((link) => (
            <div key={link.name}>
              {/* Menu Item */}
              <button
                onClick={() => {
                  if (link.submenu) {
                    toggleMobileSubmenu(link.name);
                  } else {
                    handleScroll(link.href);
                  }
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition font-medium"
              >
                <span>{link.name}</span>
                {link.submenu && (
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform ${
                      mobileSubmenuOpen === link.name ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {/* Submenu Items */}
              {link.submenu && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileSubmenuOpen === link.name
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="pl-3">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.name}
                        href={`/${item.href}`}
                        className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-cyan-50 hover:text-cyan-600 rounded-lg transition"
                        onClick={() => setMenuOpen(false)}
                      >
                        <div className="flex items-center gap-2">
                          <span>{item.name}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Footer - CTA Buttons */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-white via-white to-transparent border-t border-gray-100">
          <div className="space-y-3">
            <button
              onClick={() => handleScroll("contact")}
              className="w-full inline-flex items-center justify-center rounded-lg border-2 border-cyan-600 px-4 py-3 text-sm font-semibold text-cyan-600 hover:bg-cyan-50 transition"
            >
              Login
            </button>
                 {/* onClick={() => handleScroll("contact")} */}
            <button
          onClick={() => handleScroll("contact")}
              className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}