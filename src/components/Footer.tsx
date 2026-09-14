export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em]">
            Galaxy Class Gaming
          </p>
          <p className="mt-3 max-w-sm text-sm text-white/45">
            Design-led social games. Riffle is product one — more tables ahead.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/50">
            <li>
              <a
                href="https://github.com/StacksOnTheRacks/galaxyclass-www"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                This site
                <span className="sr-only"> (GitHub, opens in new tab)</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/StacksOnTheRacks/riffle-poker"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                Riffle
                <span className="sr-only"> (GitHub, opens in new tab)</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/StacksOnTheRacks/riffsync"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                RiffSync
                <span className="sr-only"> (GitHub, opens in new tab)</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <p className="mx-auto mt-12 max-w-6xl text-xs text-white/30">
        © {year} Galaxy Class Gaming. Play chips only — no real-money gambling.
        Riffle and RiffSync are separate products from Galaxy Class Gaming, the
        studio brand.
      </p>
    </footer>
  );
}
