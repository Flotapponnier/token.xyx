"use client";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-background/70 border-b backdrop-blur-sm border-transparent">
      <div className="mx-auto flex items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center">
          <a className="flex items-center justify-center group gap-2" href="/">
            <svg width="24" height="24" viewBox="0 0 212 212" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M106 127.2C129.417 127.2 148.4 146.183 148.4 169.6C148.4 193.016 129.417 212 106 212C82.5831 212 63.5996 193.016 63.5996 169.6C63.5998 146.183 82.5833 127.2 106 127.2ZM42.4004 63.5996C65.8171 63.5998 84.7998 82.5833 84.7998 106C84.7998 129.417 65.8171 148.4 42.4004 148.4C18.9835 148.4 0 129.417 0 106C0 82.5831 18.9835 63.5996 42.4004 63.5996ZM169.6 63.5996C193.016 63.5996 212 82.5831 212 106C212 129.417 193.016 148.4 169.6 148.4C146.183 148.4 127.2 129.417 127.2 106C127.2 82.5833 146.183 63.5998 169.6 63.5996ZM106 0C129.417 0 148.4 18.9835 148.4 42.4004C148.4 65.8171 129.417 84.7998 106 84.7998C82.5833 84.7998 63.5998 65.8171 63.5996 42.4004C63.5996 18.9835 82.5831 0 106 0Z" fill="url(#paint0_linear_497_8865)"/>
              <defs>
                <linearGradient id="paint0_linear_497_8865" x1="106" y1="0" x2="106" y2="212" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#1C1C1D"/>
                  <stop offset="1" stopColor="#1C1C1D" stopOpacity="0.72"/>
                </linearGradient>
              </defs>
            </svg>
            <span className="text-text-extra-high font-semibold text-2xl">Tokens</span>
          </a>
        </div>
      </div>
    </header>
  );
}
