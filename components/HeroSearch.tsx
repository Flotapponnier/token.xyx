"use client";

import { useState } from "react";

export default function HeroSearch() {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-text-low">
            <path d="M0 7.79297C0 12.0898 3.49609 15.5859 7.79297 15.5859C9.49219 15.5859 11.0449 15.0391 12.3242 14.1211L17.1289 18.9355C17.3535 19.1602 17.6465 19.2676 17.959 19.2676C18.623 19.2676 19.082 18.7695 19.082 18.1152C19.082 17.8027 18.9648 17.5195 18.7598 17.3145L13.9844 12.5098C14.9902 11.2012 15.5859 9.57031 15.5859 7.79297C15.5859 3.49609 12.0898 0 7.79297 0C3.49609 0 0 3.49609 0 7.79297ZM1.66992 7.79297C1.66992 4.41406 4.41406 1.66992 7.79297 1.66992C11.1719 1.66992 13.916 4.41406 13.916 7.79297C13.916 11.1719 11.1719 13.916 7.79297 13.916C4.41406 13.916 1.66992 11.1719 1.66992 7.79297Z" fill="currentColor" fillOpacity="0.85"/>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Find tokens..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 text-base border border-border-medium rounded-full bg-white text-text-high placeholder-text-low focus:outline-none focus:ring-2 focus:ring-gray-1400/20 transition-all"
        />
      </div>

      {search && (
        <div className="mt-4 p-6 bg-white border border-border rounded-2xl">
          <p className="text-text-medium text-center">
            Search results for &quot;{search}&quot; will appear here
          </p>
        </div>
      )}
    </div>
  );
}
