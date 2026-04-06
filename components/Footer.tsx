export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-low">
            Open source alternative powered by{" "}
            <a
              href="https://mobula.io"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-text-high hover:text-text-extra-high transition-colors underline"
            >
              Mobula API
            </a>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Flotapponnier/token.xyx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-low hover:text-text-high transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://mobula.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-low hover:text-text-high transition-colors"
            >
              Mobula
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
