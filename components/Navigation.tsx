"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">CM</span>
            </div>
            <div>
              <div className="font-bold text-xl text-gray-900">Credo Migration</div>
              <div className="text-xs text-gray-600">Licensed Immigration Advisers</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/services/new-zealand" className="block px-4 py-3 hover:bg-gray-50 border-b">
                  <div className="font-semibold text-gray-900">New Zealand</div>
                  <div className="text-sm text-gray-600">IAA Licensed Adviser</div>
                </Link>
                <Link href="/services/australia" className="block px-4 py-3 hover:bg-gray-50">
                  <div className="font-semibold text-gray-900">Australia</div>
                  <div className="text-sm text-gray-600">MARA Registered Agent</div>
                </Link>
              </div>
            </div>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About Us
            </Link>
            <Link href="/process" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Our Process
            </Link>
            <Link href="/fees" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Fees
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary-600">
              Home
            </Link>
            <Link href="/services/new-zealand" className="block py-2 text-gray-700 hover:text-primary-600">
              New Zealand Services
            </Link>
            <Link href="/services/australia" className="block py-2 text-gray-700 hover:text-primary-600">
              Australia Services
            </Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary-600">
              About Us
            </Link>
            <Link href="/process" className="block py-2 text-gray-700 hover:text-primary-600">
              Our Process
            </Link>
            <Link href="/fees" className="block py-2 text-gray-700 hover:text-primary-600">
              Fees
            </Link>
            <Link href="/blog" className="block py-2 text-gray-700 hover:text-primary-600">
              Blog
            </Link>
            <Link href="/contact" className="block py-2 text-primary-600 font-semibold">
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
