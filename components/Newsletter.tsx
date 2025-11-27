"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
  };

  return (
    <div className="bg-[#FF5733] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text Content */}
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Stay up-to-date with market updates!
            </h2>
            <p className="text-white/90">Subscribe to our newsletter!</p>
          </div>

          {/* Form */}
          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white text-gray-900 placeholder:text-gray-500 border-0 rounded-md px-4 py-6 w-full sm:w-80"
                required
              />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="bg-white text-[#FF5733] hover:bg-gray-100 font-semibold rounded-md px-8 py-6 w-full sm:w-auto border-2 border-white"
                >
                  Subscribe
                </Button>
              </motion.div>
            </form>
            
            <p className="text-white/80 text-xs mt-3">
              By clicking on "subscribe" button, I agree to MeraDhan's Privacy Policy and Terms of Use.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
