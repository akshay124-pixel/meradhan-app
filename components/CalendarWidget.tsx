"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { MONTHS, DAYS_OF_WEEK } from "@/lib/constants";

const months = MONTHS;
const daysOfWeek = DAYS_OF_WEEK;

export default function CalendarWidget() {
  const [currentMonth, setCurrentMonth] = useState(3); // April (0-indexed)
  const [currentYear, setCurrentYear] = useState(2021);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Convert Sunday (0) to 6, and shift others
  };

  const previousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Previous month's days
    const prevMonthDays = getDaysInMonth(currentMonth - 1, currentYear);
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div key={`prev-${i}`} className="text-center py-2 text-gray-300 text-sm">
          {prevMonthDays - i}
        </div>
      );
    }

    // Current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <motion.div
          key={day}
          whileHover={{ scale: 1.1 }}
          className="text-center py-2 text-gray-700 text-sm font-medium hover:bg-[#E8F4FF] rounded-md cursor-pointer transition-colors"
        >
          {day}
        </motion.div>
      );
    }

    // Next month's days to fill the grid
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push(
        <div key={`next-${day}`} className="text-center py-2 text-gray-300 text-sm">
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      {/* Month/Year Header */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={previousMonth}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        
        <div className="flex items-center space-x-2">
          <span className="px-3 py-1 bg-[#E8F4FF] text-[#003D82] rounded-md font-medium text-sm border border-[#003D82]">
            {months[currentMonth]}
          </span>
          <span className="text-gray-700 font-medium">{currentYear}</span>
        </div>
        
        <button
          onClick={nextMonth}
          className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      {/* Month Labels */}
      <div className="mb-4 space-y-2">
        {[
          { month: "February", days: [2, 3, 4] },
          { month: "March", days: [3, 10, 11] },
          { month: "April", days: [8, 17, 18] },
          { month: "May", days: [3, 24, 25] },
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <span className={item.month === "April" ? "text-[#003D82] font-medium" : "text-gray-600"}>
              {item.month}
            </span>
            <div className="flex space-x-2">
              {item.days.map((day) => (
                <span key={day} className="text-gray-700">{day}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-1">
        {renderCalendar()}
      </div>
    </div>
  );
}
