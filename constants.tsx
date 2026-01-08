
import React from 'react';
import { Industry, Operation } from './types';

export const INDUSTRIES: Industry[] = [
  { title: "Agriculture & Food", description: "Grains, pulses, fruits, vegetables, and processed foods.", icon: "🌾" },
  { title: "Construction & Materials", description: "Cement, steel, tiles, and high-end construction fittings.", icon: "🏗️" },
  { title: "Textiles & Apparel", description: "Yarns, fabrics, and premium leather goods.", icon: "🧵" },
  { title: "Chemicals & Packaging", description: "Industrial dyes, fertilizers, and sustainable packaging.", icon: "🧪" },
  { title: "Electronics & Energy", description: "Solar systems, consumer electronics, and UPS units.", icon: "🔋" },
  { title: "Healthcare", description: "Medical devices, surgical instruments, and essentials.", icon: "🏥" },
  { title: "Automotive", description: "Motorcycles, tyres, spare parts, and heavy machinery.", icon: "🚗" },
  { title: "IT & Telecom", description: "Networking hardware, software, and trade solutions.", icon: "💻" }
];

export const OPERATIONS: Operation[] = [
  {
    category: "Local Operations",
    icon: "🇵🇰",
    items: [
      "General Trading & Distribution",
      "Trade & Commercial Representation",
      "Supply Chain & Procurement",
      "E-Commerce & Digital Trade",
      "Value-Added Logistics"
    ]
  },
  {
    category: "International Trade",
    icon: "🌐",
    items: [
      "Global Import & Export",
      "International Brand Representation",
      "Cross-Border Strategic Partnerships",
      "European & Asian Market Access",
      "Digital Cross-Border Solutions"
    ]
  }
];
