import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, e as renderHead, d as renderComponent, f as renderSlot } from './astro/server_uiNzGJbH.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="p-4 bg-gray-800 text-white font-semibold uppercase"> <nav class="flex gap-6"> <a href="/">Accueil</a> <a href="/offres">Offres</a> </nav> </div>`;
}, "/Users/arthurwicky/Documents/r213-2025-tp-WICKY-Arthur/src/components/Header.astro", undefined);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="relative w-full bottom-0 bg-gray-800 p-4 text-left text-white"> <p>© 2025, Built with Astro</p> </footer>`;
}, "/Users/arthurwicky/Documents/r213-2025-tp-WICKY-Arthur/src/components/Footer.astro", undefined);

const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const { titre } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><title>${titre}</title>${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/arthurwicky/Documents/r213-2025-tp-WICKY-Arthur/src/layouts/Base.astro", undefined);

export { $$Base as $ };
