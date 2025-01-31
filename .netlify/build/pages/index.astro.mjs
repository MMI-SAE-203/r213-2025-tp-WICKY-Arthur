/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_uiNzGJbH.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Base } from '../chunks/Base_BN7vk_9r.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "titre": "Accueil" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="p-10 font-bold text-5xl text-center uppercase text-gray-800">
Accueil
</h1> ` })}`;
}, "/Users/arthurwicky/Documents/r213-2025-tp-WICKY-Arthur/src/pages/index.astro", undefined);

const $$file = "/Users/arthurwicky/Documents/r213-2025-tp-WICKY-Arthur/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
