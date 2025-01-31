/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_uiNzGJbH.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Base } from '../chunks/Base_BN7vk_9r.mjs';
import 'clsx';
import PocketBase from 'pocketbase';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { ...offres } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-col p-8 pb-4 pt-4"> ${renderTemplate`<ul class="p-5 border border-gray-300 rounded-lg shadow-lg font-size-xl justify-center"> <li>${offres.Nom}</li> <li>${offres.Adresse}</li> <li>${offres.id}</li> <li>${offres.Nombre_de_chambres} chambres</li> <li>${offres.Nombre_de_salles_de_bain} salles de bain</li> <li>${offres.Superficie} m²</li> <li>${offres.Prix} €</li> <li class="uppercase">${offres.Favori}</li> <li>${offres.Images}</li> <img${addAttribute(offres.imageUrl, "src")} alt=""> </ul>`} </div>`;
}, "/Users/arthurwicky/Documents/r213-2025-tp-WICKY-Arthur/src/components/Card.astro", undefined);

const pb = new PocketBase('http://127.0.0.1:8090');

async function getOffres() {

    let data = await pb.collection('Maison').getFullList({
        sort: '-created',
    });
    data = data.map((maison) => {
        maison.imageUrl = pb.files.getURL(maison, maison.Images);
        return maison;
    });
    return data;
}

const $$Offres = createComponent(async ($$result, $$props, $$slots) => {
  const offres = await getOffres();
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "titre": "Offres" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="p-10 font-bold text-5xl text-center uppercase text-gray-800">
Offres
</h1> <div x-data="{ showFavorites: false }"> <button class="p-4 bg-gray-800 ml-8 rounded-2xl text-white font-semibold" @click="showFavorites = !showFavorites"> <span x-show="showFavorites">Afficher les favoris</span> <span x-show="!showFavorites">Afficher tout</span> </button> <div x-show="showFavorites" x-transition.duration.500ms> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { ...offre })}`)} </div> <div x-show="!showFavorites" x-transition.duration.500ms> ${offres.map((offre) => offre.favori && renderTemplate`${renderComponent($$result2, "Card", $$Card, { ...offre })}`)} </div> </div> ` })}`;
}, "/Users/arthurwicky/Documents/r213-2025-tp-WICKY-Arthur/src/pages/offres.astro", undefined);

const $$file = "/Users/arthurwicky/Documents/r213-2025-tp-WICKY-Arthur/src/pages/offres.astro";
const $$url = "/offres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Offres,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
