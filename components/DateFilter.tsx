"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import { DATE_FILTERS } from "@/lib/constants";

const filters = DATE_FILTERS;

interface DateFilterProps {
  onFilterChange?: (filter: string) => void;
}

export default function DateFilter({ onFilterChange }: DateFilterProps) {
  const [activeFilter, setActiveFilter] = useState("Today");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    onFilterChange?.(filter);
  };

  return (
    <div className="flex flex-wrap items-center gap-3 bg-[#E8F4FF] p-4 rounded-lg mb-6">
      <div className="flex flex-wrap gap-2 flex-1">
        {filters.map((filter) => (
          <motion.button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
              activeFilter === filter
                ? "bg-[#003D82] text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {filter}
          </motion.button>
        ))}
      </div>
      
      <button className="flex items-center space-x-2 px-4 py-2 bg-white rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
        <Filter className="w-4 h-4" />
        <span>Filters</span>
      </button>
    </div>
  );
}
