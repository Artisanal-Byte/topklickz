import { c as createComponent } from './astro-component_D9nwkCpm.mjs';
import 'piccolore';
import { g as addAttribute, p as renderHead, q as renderSlot, h as renderTemplate, m as maybeRenderHead, o as renderComponent } from './server_B44E6oHl.mjs';
import 'clsx';
import { createReader } from '@keystatic/core/reader';
import { c as config } from './keystatic.config_gdoAMvp2.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth bg-white"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(255,132,0,0.08),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(124,58,237,0.08),transparent_28%),#ffffff] text-[#0f0f11] antialiased"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const reader = createReader(process.cwd(), config);
  const site = await reader.singletons.site.read();
  return renderTemplate`${maybeRenderHead()}<header class="relative z-20 px-4 pt-4 sm:px-6 lg:px-8 lg:pt-6"> <div class="mx-auto max-w-7xl rounded-[2rem] border border-white/70 bg-white/75 px-4 py-3 shadow-[0_10px_40px_rgba(15,15,17,0.06)] backdrop-blur-md sm:px-5 sm:py-4"> <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-8"> <div class="flex items-center justify-between gap-4"> <a href="/" class="shrink-0"> <img${addAttribute(site?.logo, "src")} alt="Topklickz" class="h-12 w-auto sm:h-14"> </a> <a${addAttribute(site?.buttonLink || "#contact", "href")} class="inline-flex items-center gap-3 rounded-full border border-violet-500/70 px-4 py-2 text-sm font-medium text-[#111] transition hover:-translate-y-0.5 hover:border-violet-600 hover:bg-white lg:hidden"> <span class="h-6 w-6 rounded-full bg-[linear-gradient(135deg,#ff8a00_0%,#ff2d55_50%,#7c3aed_100%)]"></span> <span class="">${site?.buttonText}</span> </a> </div> <nav aria-label="Primary" class="order-3 flex items-center gap-2 overflow-x-auto pb-1 lg:order-2 lg:justify-center"> ${site?.navigation.map((item, index) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition sm:px-5 sm:text-base",
    index === 0 ? "bg-[linear-gradient(90deg,#ff7a18_0%,#ff3d81_45%,#7c3aed_100%)] text-white shadow-[0_14px_30px_rgba(124,58,237,0.24)]" : "text-[#101114] hover:bg-[#f4f4f7]"
  ], "class:list")}> ${item.title} </a>`)} </nav> <a${addAttribute(site?.buttonLink || "#contact", "href")} class="order-2 hidden items-center gap-3 rounded-full border border-violet-500/80 px-5 py-2.5 text-sm font-medium text-[#101114] transition hover:-translate-y-0.5 hover:bg-white lg:inline-flex"> <span class="h-7 w-7 rounded-full bg-[linear-gradient(135deg,#ff8a00_0%,#ff2d55_50%,#7c3aed_100%)]"></span> <span>${site?.buttonText}</span> </a> </div> </div> </header>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/Header.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Topklickz | Creative Digital Studio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ` })}`;
}, "D:/D Drive/artisanal-byte/topklickz/src/pages/index.astro", void 0);

const $$file = "D:/D Drive/artisanal-byte/topklickz/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
