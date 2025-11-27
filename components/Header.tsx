"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#003D82] rounded-full flex items-center justify-center">
              <div className="w-6 h-6 border-4 border-white rounded-full border-t-transparent"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[#FF5733] font-bold text-xl leading-none">
                MeraDhan
              </span>
              <span className="text-[#6B7280] text-xs leading-none">
                Invest Wise, Grow Secure
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/how-it-works"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              How it Works
            </Link>
            <Link
              href="/products"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="/tools"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/resources"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/login"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <Button className="bg-[#003D82] hover:bg-[#002D62] text-white rounded-full px-6">
              Sign Up
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <nav className="flex flex-col space-y-4 px-4 py-4">
              <Link
                href="/how-it-works"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                How it Works
              </Link>
              <Link
                href="/products"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Products
              </Link>
              <Link
                href="/tools"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Tools
              </Link>
              <Link
                href="/resources"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Resources
              </Link>
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                Login
              </Link>
              <Button className="bg-[#003D82] hover:bg-[#002D62] text-white rounded-full">
                Sign Up
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
