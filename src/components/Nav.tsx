import {
  ButtonLink,
  Frame,
  Logo,
  SIGN_IN_HREF,
  SIGN_UP_HREF,
  TextLink,
} from "./primitives";

const links = [
  { href: "#studio", label: "Studio" },
  { href: "#games", label: "Games" },
  { href: "#riffle", label: "Riffle" },
];

export function Nav() {
  return (
    <header className="border-b border-line bg-void">
      <Frame>
        <nav
          className="flex h-20 items-center justify-between gap-6 lg:h-[100px]"
          aria-label="Main"
        >
          <Logo />

          <ul className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-label font-semibold text-fg-muted transition hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <TextLink href={SIGN_IN_HREF}>Sign in</TextLink>
            <ButtonLink href={SIGN_UP_HREF}>Sign up</ButtonLink>
          </div>
        </nav>
      </Frame>
    </header>
  );
}
