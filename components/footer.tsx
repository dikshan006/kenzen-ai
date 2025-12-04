export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Left Side */}
        <div className="flex flex-col text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © 2025 KenZen AI — Automation from the Shadows.
          </p>

          {/* Made by line */}
          <p className="text-xs text-muted-foreground/70 mt-1">
            Made by <span className="text-pink-400 font-medium">Dikshan Chhikara</span>
          </p>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-6">

          {/* Contact */}
          <a
            href="mailto:chhikaradikshan11@gmail.com"
            className="text-sm text-muted-foreground hover:text-pink-400 transition-colors duration-200"
          >
            Contact
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/dikshanchhikara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-purple-400 transition-colors duration-200"
          >
            LinkedIn
          </a>

        </div>
      </div>
    </footer>
  );
}

