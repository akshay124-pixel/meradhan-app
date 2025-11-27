"use client";

import { Star, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { mockEconomicEvents } from "@/lib/mockData";

export default function EventsTable() {
  const mockEvents = mockEconomicEvents;
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Desktop Table Header */}
      <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-600">
        <div className="col-span-2">Time (IST)</div>
        <div className="col-span-2">Country</div>
        <div className="col-span-8">Event</div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-gray-100">
        {mockEvents.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="hover:bg-gray-50 transition-colors group"
          >
            {/* Desktop View */}
            <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-4">
              {/* Time */}
              <div className="col-span-2 flex items-center text-gray-700 font-medium">
                <Clock className="w-4 h-4 mr-2 text-gray-400" />
                {event.time}
              </div>

              {/* Country */}
              <div className="col-span-2 flex items-center">
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center mr-2">
                  <span className="text-white text-xs font-bold">●</span>
                </div>
                <span className="text-gray-700 font-medium">{event.country}</span>
              </div>

              {/* Event */}
              <div className="col-span-8 flex items-center justify-between">
                <span className="text-gray-700">{event.event}</span>
                
                <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* Importance Stars */}
                  <div className="flex space-x-1">
                    {[1, 2, 3].map((star) => (
                      <Star
                        key={star}
                        className={`w-4 h-4 ${
                          star <= event.importance
                            ? "fill-[#FF5733] text-[#FF5733]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Favorite Icon */}
                  <button className="text-gray-400 hover:text-[#FF5733] transition-colors">
                    <Star className="w-4 h-4" />
                  </button>
                  
                  {/* More Info */}
                  <button className="text-[#003D82] text-sm font-medium hover:underline">
                    View 72/60
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden px-4 py-4 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-700 font-medium">{event.time}</span>
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">●</span>
                  </div>
                  <span className="text-gray-700 font-medium">{event.country}</span>
                </div>
                <div className="flex space-x-1">
                  {[1, 2, 3].map((star) => (
                    <Star
                      key={star}
                      className={`w-3 h-3 ${
                        star <= event.importance
                          ? "fill-[#FF5733] text-[#FF5733]"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-gray-700 text-sm">{event.event}</div>
              <div className="flex items-center justify-between">
                <button className="text-gray-400 hover:text-[#FF5733] transition-colors">
                  <Star className="w-4 h-4" />
                </button>
                <button className="text-[#003D82] text-xs font-medium hover:underline">
                  View 72/60
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
