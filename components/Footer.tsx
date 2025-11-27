import Link from "next/link";
import { Facebook, Youtube, Twitter, Linkedin, Instagram, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Disclaimer */}
        <div className="text-center text-xs text-gray-500 mb-12 pb-8 border-b border-gray-200">
          <p>
            <span className="font-semibold">Disclaimer:</span> Investments in debt securities/ municipal debt securities/ securitised debt instruments are subject to risks
            including delay and/ or default in payment. Read all the offer related documents carefully.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">MeraDhan</h3>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3 mb-6">
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#003D82] flex items-center justify-center hover:bg-[#002D62] transition-colors"
              >
                <Facebook className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#003D82] flex items-center justify-center hover:bg-[#002D62] transition-colors"
              >
                <Youtube className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#003D82] flex items-center justify-center hover:bg-[#002D62] transition-colors"
              >
                <Twitter className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#003D82] flex items-center justify-center hover:bg-[#002D62] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 rounded-full bg-[#003D82] flex items-center justify-center hover:bg-[#002D62] transition-colors"
              >
                <Instagram className="w-4 h-4 text-white" />
              </Link>
            </div>

            {/* Address */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <p>
                  D 2703, Ashok Tower, Dr 51th Road, Parel (East)<br />
                  Mumbai - 400012, Maharashtra
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:contact@meradhan.co" className="hover:text-gray-900">
                  contact@meradhan.co
                </a>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/products/bonds" className="hover:text-gray-900">
                  Bonds
                </Link>
              </li>
              <li>
                <Link href="/products/fixed-deposits" className="hover:text-gray-900">
                  Fixed Deposits
                </Link>
              </li>
              <li>
                <Link href="/products/dhan-sip" className="hover:text-gray-900">
                  DhanSIP
                </Link>
              </li>
              <li>
                <Link href="/products/return-calculator" className="hover:text-gray-900">
                  Return Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/career" className="hover:text-gray-900">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/media-kit" className="hover:text-gray-900">
                  Media Kit
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-gray-900">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-gray-900">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="hover:text-gray-900">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="hover:text-gray-900">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gray-900">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/help-center" className="hover:text-gray-900">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-gray-900">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
