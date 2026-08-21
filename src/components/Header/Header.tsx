"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);

  const navLinks = [
    // { name: "Home", href: "/" },
    {
      name: "Ai Agents",
      href: "#ai-agents",
      hasDropdown: true,
      dropdownContent: {
        title: "Platform Ai Agents",
        description: "Everything you need to manage Ai Agents at scale",
        sections: [
          {
            title: "Automation",
            items: [
              {
                icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-1_nz99v7.png" className="max-w-16 max-h-16" />,
                title: "Ai Lead Qualification Agent",
                description: "Organize and segment your customer Qualification",
                href: "/ai-agents/lead-qualifiction-agent"
              },
              {
                icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-2_l1xdll.png" className="max-w-16 max-h-16" />,
                title: "Ai Property Matching Agent",
                description: "AI-powered lead qualification",
                href: "/ai-agents/property-maching-agent",
                badge: "AI"
              },
              {
                icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335520/img-3_scja92.png" className="max-w-16 max-h-16" />,
                title: "Lead Capture Agent",
                description: "Ai Lead Capture tracking and forecasting",
                href: "/ai-agents/lead-capture-agent"
              },
              {
                icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-4_damgxf.png" className="max-w-16 max-h-16" />,
                title: "Ai Content Creation Agent",
                description: "Content Creation  tracking and forecasting",
                href: "/ai-agents/content-creation-agent"
              },
              {
                icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-555_kabvyd.png" className="max-w-16 max-h-16" />,
                title: "Ai  Follow-Up Agent",
                description: "AI-powered lead qualification",
                href: "/ai-agents/follow-up-agent",
                badge: "AI"
              },
            ]
          },
          {
            title: "Automation",
            items: [
              {
                icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335521/img-6_mky5rb.png" className="max-w-16 max-h-16" />,
                title: "Ai Calling Agent",
                description: "Automate Calling tasks",
                href: "/ai-agents/calling-agent"
              },
              {
                icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335523/img-7_xjwzbl.png" className="max-w-16 max-h-16" />,
                title: "Ai Campaign Automation Agent",
                description: "AI meeting scheduler",
                href: "/ai-agents/campaign-automation"
              },
              {
                icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335552/img-8_twulvb.png" className="max-w-16 max-h-16" />,
                title: "Data Mining Agent",
                description: "Data Mining  automation",
                href: "/ai-agents/data-mining-agent"
              },
              {
                icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-9_i1wlut.png" className="max-w-16 max-h-16" />,
                title: "Social Media Agent",
                description: "Social Media automation",
                href: "/ai-agents/social-media-agent"
              },
              {
                icon: <img src="https://res.cloudinary.com/djipgt6vc/image/upload/v1774335553/img-10_ajsusz.png" className="max-w-16 max-h-16 rounded-xl" />,
                title: "Ai SEO Content Agent",
                description: "SEO Content scheduler",
                href: "/ai-agents/seo-content-agent"
              },
            ]
          }
        ],
        footer: {
          text: "See all features",
          link: "Explore →",
          href: "/explore-ai-agent"
        }
      }
    },
    {
      name: "Company",
      href: "/company",
      submenu: [
        { name: "Ecosystem", href: "/company/ecosystem" },
        { name: "About us", href: "/company/about-us" },
        { name: "Why choose us", href: "/company/why-choose-us" },
      ]
    },
    {
      name: "Features",
      href: "/feature",
      submenu: [
        { name: "Workflow Automation", href: "/features/workflowautomation" },
        { name: "customize workflow", href: "/features/customize-workflow" },
        { name: "scalability", href: "/features/scalability" },
        { name: "integration", href: "/features/integrations" },
        { name: "Advanced Analytics", href: "/features/advanced-analytics" },
        { name: "Security & Compliance", href: "/features/security-compilance" },
        { name: "ROI Calculator", href: "/features/roicalculator" },
        { name: "Product Price Compare", href: "/features/price-compare" },
      ]
    },
    {
      name: "Industries",
      href: "industries",
      submenu: [
        { name: "Healthcare", href: "/industries/health-care" },
        { name: "Real Estate", href: "/industries/real-estate" },
        { name: "Finance", href: "/industries/finance" },
        { name: "E-commerce", href: "/industries/e-commerce" },
        { name: "Education", href: "/industries/education" },
        { name: "Manufacturing", href: "/industries/manufacturing" },
      ]
    },
    {
      name: "CRM Products",
      href: "#",
      submenu: [
        { name: "Property", href: "https://property.ibigdata.in/", target: "_blank", rel: "noopener noreferrer" },
        { name: "Consult", href: "https://consult.ibigdata.in/", target: "_blank", rel: "noopener noreferrer" },
        { name: "Travel", href: "https://travel.ibigdata.in/", target: "_blank", rel: "noopener noreferrer" },
        { name: "Education", href: "https://edu.ibigdata.in/", target: "_blank", rel: "noopener noreferrer" },
        { name: "WBH", href: "https://wbh.ibigdata.in/", target: "_blank", rel: "noopener noreferrer" },
        { name: "airbnb", href: "https://airbnb.ibigdata.in/", target: "_blank", rel: "noopener noreferrer" },
      ]
    },
    { name: "contact us", href: "/contact-us" },
  ];

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
    <header className="fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm" style={{ zIndex: 999 }}>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent hover:from-cyan-700 hover:to-blue-700 transition"
          >
           <img src="/ibigdata-logo.png" alt="ibigdata-logo" className="w-50"/>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-700">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => (link.submenu || link.hasDropdown) && setActiveSubmenu(link.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <button
                  onClick={() => !link.submenu && !link.hasDropdown && handleScroll(link.href)}
                  className="flex items-center gap-1 px-1 py-2 text-gray-700 hover:text-cyan-600 transition"
                >
                  {!link.submenu && !link.hasDropdown ? (
                    <Link href={`${link.href}`}>
                      {link.name}
                    </Link>
                  ) : (
                    link.name
                  )}
                  {(link.submenu || link.hasDropdown) && (
                    <FiChevronDown className={`w-4 h-4 transition-transform ${activeSubmenu === link.name ? 'rotate-180' : ''}`} />
                  )}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-600 transition-all group-hover:w-full"></span>
                </button>

                {/* Simple Dropdown Submenu */}
                {link.submenu && (
                  <div
                    className={`absolute top-full left-0 mt-3 w-56 overflow-hidden bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-300 ${activeSubmenu === link.name
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 translate-y-4 invisible'
                      }`}
                    style={{ zIndex: 999 }}
                  >
                    {link.submenu.map((item) => {
                      const crm = link.name === "CRM Products";
                      return (<Link
                        key={item.name}
                        href={`${item.href}`}
                        target={crm ? "_blank" : undefined}
                        rel={crm ? "noopener noreferrer" : undefined}
                        onClick={() => setActiveSubmenu(null)}
                        className="block px-4 py-3 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span>{item.name}</span>
                        </div>
                      </Link>)
                    })}
                  </div>
                )}

                {/* AI Agents Mega Menu Dropdown */}
                {link.hasDropdown && link.dropdownContent && (
                  <div
                    className={`absolute top-full left-0 mt-3 w-[640px] overflow-hidden bg-white rounded-xl shadow-xl border border-gray-100 transition-all duration-300 ${activeSubmenu === link.name
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 translate-y-4 invisible'
                      }`}
                    style={{ zIndex: 999 }}
                  >
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-900">{link.dropdownContent.title}</h3>
                      <p className="text-sm text-gray-500 mt-1">{link.dropdownContent.description}</p>
                    </div>
                    {/* Content */}
                    <div className="p-6 grid grid-cols-2 gap-6">
                      {link.dropdownContent.sections.map((section, idx) => (
                        <div key={idx}>
                          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{section.title}</h4>
                          <div className="space-y-3">
                            {section.items.map((item, itemIdx) => (
                              <Link
                                key={itemIdx}
                                href={item.href}
                                onClick={() => setActiveSubmenu(null)}
                                className="flex items-start gap-3 group/item rounded-lg hover:bg-cyan-50 p-2 -mx-2 transition-colors"
                              >
                                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                                  {item.icon}
                                </div>
                                <div className="flex-1 min-w-0 pl-2">
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm font-medium text-gray-700 group-hover/item:text-cyan-600 transition-colors">{item.title}</span>
                                    {item.badge && (
                                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-700">{item.badge}</span>
                                    )}
                                  </div>
                                  <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Footer */}
                    <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                      <Link
                        href={link.dropdownContent.footer.href}
                        onClick={() => setActiveSubmenu(null)}
                        className="flex items-center justify-between text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
                      >
                        <span>{link.dropdownContent.footer.text}</span>
                        <span>{link.dropdownContent.footer.link}</span>
                      </Link>
                    </div>
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
              href="/get-started">
              <button
                onClick={() => handleScroll("contact")}
                className="inline-flex items-center rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all"
              >
                Get Started
              </button>
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
          style={{ zIndex: 999 }}
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Slides from Right */}
      <div
        className={`lg:hidden fixed  top-0 right-0 h-screen w-80 max-w-[85vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ zIndex: 999 }}
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
                  if (link.submenu || link.hasDropdown) {
                    toggleMobileSubmenu(link.name);
                  } else {
                    handleScroll(link.href);
                  }
                }}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition font-medium"
              >
                <span>
                  {!link.submenu && !link.hasDropdown ? (
                    <Link
                      onClick={() => setMenuOpen(false)}
                      href={`${link.href}`}>
                      {link.name}
                    </Link>
                  ) : (
                    link.name
                  )}
                </span>
                {(link.submenu || link.hasDropdown) && (
                  <FiChevronDown
                    className={`w-4 h-4 transition-transform ${mobileSubmenuOpen === link.name ? 'rotate-180' : ''
                      }`}
                  />
                )}
              </button>

              {/* Simple Submenu Items */}
              {link.submenu && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen === link.name
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                    }`}
                >
                  <div
                    onClick={() => setMenuOpen(false)}
                    className="pl-3">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.name}
                        href={`${item.href}`}
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

              {/* AI Agents Mega Menu - Mobile */}
              {link.hasDropdown && link.dropdownContent && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${mobileSubmenuOpen === link.name
                      ? 'max-h-[800px] opacity-100'
                      : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="pl-3 py-2 space-y-4">
                    {link.dropdownContent.sections.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-4 mb-2">{section.title}</h4>
                        <div className="space-y-1">
                          {section.items.map((item, itemIdx) => (
                            <Link
                              key={itemIdx}
                              href={item.href}
                              onClick={() => setMenuOpen(false)}
                              className="flex items-start gap-3 px-4 py-2.5 rounded-lg hover:bg-cyan-50 transition"
                            >
                              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                                {item.icon}
                              </div>
                              <div className="flex-1 min-w-0 pl-2">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium leading-4 text-gray-700">{item.title}</span>
                                  {/* {item.badge && (
                                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-cyan-100 text-cyan-700">{item.badge}</span>
                                  )} */}
                                </div>
                                {/* <p className="text-xs text-gray-500">{item.description}</p> */}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Link
                      href={link.dropdownContent.footer.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-2.5 text-sm font-medium text-cyan-600 hover:text-cyan-700"
                    >
                      <span>{link.dropdownContent.footer.text}</span>
                      <span>{link.dropdownContent.footer.link}</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Footer - CTA Buttons */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-b from-white via-white to-transparent border-t border-gray-100">
          <div className="space-y-3">
            <a onClick={() => setMenuOpen(false)} className="w-full inline-flex items-center justify-center rounded-lg border-2 border-cyan-600 px-4 py-3 text-sm font-semibold text-cyan-600 hover:bg-cyan-50 transition" href="https://property.ibigdata.in/">
              <button
                onClick={() => handleScroll("contact")}
              >
                Login
              </button>
            </a>
            <Link
              href="/get-started"
              onClick={() => setMenuOpen(false)}
              className="w-full inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-cyan-500/50 transition"
            >
              <button
                onClick={() => handleScroll("contact")}
              >
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}