"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-md'
      }`}
      aria-label="Main navigation"
    >
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-sage-500 to-sage-700 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-xl">CM</span>
            </div>
            <div>
              <div className="font-bold text-xl text-navy-900 group-hover:text-sage-600 transition-colors">Credo Migration</div>
              <div className="text-xs text-navy-600">Licensed Immigration Advisers</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-navy-700 hover:text-sage-600 font-medium transition-colors touch-target">
              Home
            </Link>
            <div className="relative group">
              <button 
                className="text-navy-700 hover:text-sage-600 font-medium transition-colors touch-target flex items-center gap-1"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white shadow-soft-lg rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-warm-200 overflow-hidden">
                <Link href="/services/new-zealand" className="block px-6 py-4 hover:bg-sage-50 border-b border-warm-200 transition-colors group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-sage-100 rounded-lg flex items-center justify-center group-hover/item:bg-sage-200 transition-colors">
                      <svg className="w-5 h-5 text-sage-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900 group-hover/item:text-sage-600 transition-colors">New Zealand</div>
                      <div className="text-sm text-navy-600">IAA Licensed Adviser</div>
                    </div>
                  </div>
                </Link>
                <Link href="/services/australia" className="block px-6 py-4 hover:bg-navy-50 transition-colors group/item">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-navy-100 rounded-lg flex items-center justify-center group-hover/item:bg-navy-200 transition-colors">
                      <svg className="w-5 h-5 text-navy-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900 group-hover/item:text-navy-600 transition-colors">Australia</div>
                      <div className="text-sm text-navy-600">MARA Registered Agent</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-navy-700 hover:text-sage-600 font-medium transition-colors touch-target">
              About Us
            </Link>
            <Link href="/process" className="text-navy-700 hover:text-sage-600 font-medium transition-colors touch-target">
              Our Process
            </Link>
            <Link href="/fees" className="text-navy-700 hover:text-sage-600 font-medium transition-colors touch-target">
              Fees
            </Link>
            <Link href="/blog" className="text-navy-700 hover:text-sage-600 font-medium transition-colors touch-target">
              Blog
            </Link>
            <Link href="/contact" className="btn-primary text-base px-6 py-3">
              Get Free Assessment
            </Link>
          </div>

          <button
            className="lg:hidden p-3 touch-target hover:bg-warm-50 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6 text-navy-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-warm-200 animate-slide-down">
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block py-3 px-4 text-navy-700 hover:text-sage-600 hover:bg-sage-50 rounded-lg font-medium transition-all touch-target"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="py-2">
                <div className="text-xs font-semibold text-navy-500 px-4 mb-2">SERVICES</div>
                <Link 
                  href="/services/new-zealand" 
                  className="block py-3 px-4 text-navy-700 hover:text-sage-600 hover:bg-sage-50 rounded-lg transition-all touch-target"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium">New Zealand</div>
                  <div className="text-sm text-navy-600">IAA Licensed</div>
                </Link>
                <Link 
                  href="/services/australia" 
                  className="block py-3 px-4 text-navy-700 hover:text-navy-600 hover:bg-navy-50 rounded-lg transition-all touch-target"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="font-medium">Australia</div>
                  <div className="text-sm text-navy-600">MARA Registered</div>
                </Link>
              </div>

              <Link 
                href="/about" 
                className="block py-3 px-4 text-navy-700 hover:text-sage-600 hover:bg-sage-50 rounded-lg font-medium transition-all touch-target"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/process" 
                className="block py-3 px-4 text-navy-700 hover:text-sage-600 hover:bg-sage-50 rounded-lg font-medium transition-all touch-target"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Process
              </Link>
              <Link 
                href="/fees" 
                className="block py-3 px-4 text-navy-700 hover:text-sage-600 hover:bg-sage-50 rounded-lg font-medium transition-all touch-target"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fees
              </Link>
              <Link 
                href="/blog" 
                className="block py-3 px-4 text-navy-700 hover:text-sage-600 hover:bg-sage-50 rounded-lg font-medium transition-all touch-target"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              
              <div className="pt-4 px-4">
                <Link 
                  href="/contact" 
                  className="btn-primary w-full text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Free Assessment
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
