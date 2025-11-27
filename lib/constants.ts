// Brand Colors
export const COLORS = {
  primary: "#003D82",
  primaryHover: "#002D62",
  secondary: "#FF5733",
  lightBlue: "#E8F4FF",
  gray: "#6B7280",
  lightGray: "#F3F4F6",
} as const;

// Navigation Links
export const NAV_LINKS = [
  { label: "How it Works", href: "/how-it-works" },
  { label: "Products", href: "/products" },
  { label: "Tools", href: "/tools" },
  { label: "Resources", href: "/resources" },
  { label: "Login", href: "/login" },
] as const;

// Footer Links
export const FOOTER_SECTIONS = {
  products: {
    title: "Products",
    links: [
      { label: "Bonds", href: "/products/bonds" },
      { label: "Fixed Deposits", href: "/products/fixed-deposits" },
      { label: "DhanSIP", href: "/products/dhan-sip" },
      { label: "Return Calculator", href: "/products/return-calculator" },
    ],
  },
  company: {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Career", href: "/career" },
      { label: "Media Kit", href: "/media-kit" },
      { label: "Press", href: "/press" },
      { label: "News", href: "/news" },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Tutorials", href: "/tutorials" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Events", href: "/events" },
      { label: "Help Center", href: "/help-center" },
      { label: "Support", href: "/support" },
    ],
  },
} as const;

// Social Media Links
export const SOCIAL_LINKS = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "YouTube", href: "#", icon: "youtube" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Instagram", href: "#", icon: "instagram" },
] as const;

// Company Info
export const COMPANY_INFO = {
  name: "MeraDhan",
  tagline: "Invest Wise, Grow Secure",
  address: "D 2703, Ashok Tower, Dr 51th Road, Parel (East)\nMumbai - 400012, Maharashtra",
  email: "contact@meradhan.co",
  phone: "+91 XXXXXXXXXX",
} as const;

// Date Filters
export const DATE_FILTERS = [
  "Yesterday",
  "Today",
  "Tomorrow",
  "This Week",
  "Next Week",
  "This Month",
] as const;

// Months
export const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
] as const;

// Days of Week
export const DAYS_OF_WEEK = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] as const;

// Disclaimer Text
export const DISCLAIMER_TEXT = 
  "Disclaimer: Investments in debt securities/ municipal debt securities/ securitised debt instruments are subject to risks including delay and/ or default in payment. Read all the offer related documents carefully.";
