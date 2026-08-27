import { c as createComponent } from './astro-component_JDSnf13e.mjs';
import 'piccolore';
import { f as createRenderInstruction, c as addAttribute, g as renderHead, h as renderSlot, d as renderTemplate, e as renderComponent, m as maybeRenderHead } from './server_r20cRXJ1.mjs';
import 'clsx';
import { $ as $$Image } from './_astro_assets_TtIEpgcp.mjs';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "Topklickz",
    description = "Topklickz - Astro",
    keywords = ""
  } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth bg-white"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="keywords"${addAttribute(keywords, "content")}><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><!-- schema -->${renderHead()}</head> <body class="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,132,0,0.08),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(124,58,237,0.08),transparent_28%),#ffffff] text-[#0f0f11] antialiased"> ${renderSlot($$result, $$slots["default"])} ${renderScript($$result, "D:/D Drive/artisanal-byte/topklickz/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Header;
  const { navbar } = Astro2.props;
  const normalizePath = (path) => {
    const pathname = path.split("?")[0].split("#")[0].replace(/\/+$/, "");
    return pathname || "/";
  };
  const currentPath = normalizePath(Astro2.url.pathname);
  const getNavPath = (href) => normalizePath(href?.startsWith("/") ? href : `/${href ?? ""}`);
  const isActive = (href) => {
    const navPath = getNavPath(href);
    if (navPath === "/") return currentPath === "/";
    return currentPath === navPath || currentPath.startsWith(`${navPath}/`);
  };
  return renderTemplate(_a || (_a = __template(["", '<header class="relative z-20" data-site-header> <div class="mx-auto max-w-7xl px-4 py-3 backdrop-blur-md sm:px-5 sm:py-4"> <div class="flex items-center justify-between gap-3 lg:gap-8"> <!-- Logo --> <a href="/" class="shrink-0"> ', ' </a> <!-- Desktop Navigation --> <nav class="hidden flex-1 items-center justify-center gap-2 lg:flex"> ', ' </nav> <div class="flex items-center gap-2 sm:gap-3 lg:gap-4"> <!-- Desktop Button --> <a', ' class="gradient-expand-btn group !hidden lg:!inline-flex gradient-border"> <span class="gradient-expand-btn-inner"> <!-- Gradient circle --> <span class="gradient-expand-btn-bg"></span> <!-- Text --> <span class="gradient-expand-btn-text\n          font-clash\n          text-[17px]\n          font-bold\n          leading-none\n          tracking-normal\n          text-black\n          transition-colors\n          duration-300\n          group-hover:text-white"> ', ' </span> </span> </a> <!-- Mobile Menu Button --> <button type="button" class="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-[#0f0f11] shadow-sm transition hover:bg-gray-50 lg:hidden" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="mobile-navigation" data-nav-toggle> <span class="relative block h-4 w-5"> <span class="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform duration-200" data-nav-icon="top"></span> <span class="absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-opacity duration-200" data-nav-icon="middle"></span> <span class="absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition-transform duration-200" data-nav-icon="bottom"></span> </span> </button> </div> </div> <!-- Mobile Navigation --> <div id="mobile-navigation" class="mt-4 hidden rounded-2xl border border-black/5 bg-white p-3 shadow-[0_14px_40px_rgba(15,15,17,0.08)] lg:hidden" data-nav-panel> <nav class="flex flex-col gap-2"> ', " </nav> <a", ' class="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#0f0f11] px-4 py-3 font-clash text-[16px] font-medium leading-none tracking-normal text-white transition hover:bg-black"> <span class="h-6 w-6 rounded-full gradient-bg"></span> ', ` </a> </div> </div> </header> <script>
  const header = document.querySelector("[data-site-header]");
  if (header) {
    const toggle = header.querySelector("[data-nav-toggle]");
    const panel = header.querySelector("[data-nav-panel]");
    const topBar = header.querySelector('[data-nav-icon="top"]');
    const middleBar = header.querySelector('[data-nav-icon="middle"]');
    const bottomBar = header.querySelector('[data-nav-icon="bottom"]');

    const setOpen = (open) => {
      if (!toggle || !panel) return;
      toggle.setAttribute("aria-expanded", String(open));
      panel.classList.toggle("hidden", !open);

      if (topBar && middleBar && bottomBar) {
        topBar.classList.toggle("translate-y-1.5", open);
        topBar.classList.toggle("rotate-45", open);
        middleBar.classList.toggle("opacity-0", open);
        bottomBar.classList.toggle("-translate-y-1.5", open);
        bottomBar.classList.toggle("-rotate-45", open);
      }
    };

    toggle?.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    panel?.addEventListener("click", (event) => {
      if (event.target instanceof HTMLAnchorElement) {
        setOpen(false);
      }
    });

    document.addEventListener("click", (event) => {
      const isOpen = toggle?.getAttribute("aria-expanded") === "true";
      if (!isOpen) return;
      const target = event.target;
      if (target instanceof Node && !header.contains(target)) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    });
  }
<\/script>`])), maybeRenderHead(), navbar?.logo && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": navbar.logo, "alt": "Logo", "width": 80, "height": 80, "class": "h-12 w-auto sm:h-14 lg:h-16" })}`, navbar?.navigation?.map((item) => renderTemplate`<a${addAttribute(item.href ?? "/", "href")}${addAttribute(isActive(item.href) ? "page" : void 0, "aria-current")}${addAttribute([
    "nav-link rounded-full px-5 py-2 font-clash text-[18px] font-bold leading-none tracking-normal",
    isActive(item.href) ? "is-active gradient-bg text-white" : "text-[#0f0f11] hover:bg-gray-100"
  ], "class:list")}> ${item.title} </a>`), addAttribute(navbar?.buttonLink, "href"), navbar?.buttonText, navbar?.navigation?.map((item) => renderTemplate`<a${addAttribute(item.href ?? "/", "href")}${addAttribute(isActive(item.href) ? "page" : void 0, "aria-current")}${addAttribute([
    "nav-link rounded-2xl px-4 py-3 font-clash text-[16px] font-bold leading-none tracking-normal",
    isActive(item.href) ? "is-active gradient-bg text-white" : "bg-gray-50 text-[#0f0f11] hover:bg-gray-100"
  ], "class:list")}> ${item.title} </a>`), addAttribute(navbar?.buttonLink, "href"), navbar?.buttonText);
}, "D:/D Drive/artisanal-byte/topklickz/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { footer } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-black text-white"> <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"> <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-4"> <!-- Logo --> <div> ${renderComponent($$result, "Image", $$Image, { "src": footer.logo, "alt": "Footer Logo", "width": 100, "height": 100, "class": "h-16 w-auto" })} <div class="mt-6 space-y-2 text-sm text-neutral-300"> <p>${footer.email}</p> <p>${footer.phone}</p> <p>${footer.address}</p> </div> <div class="mt-8 text-xs text-neutral-500"> <p>${footer.policyText}</p> <p>${footer.copyright}</p> </div> </div> <!-- Company --> <div> <h3 class="mb-5 font-semibold">Company</h3> <ul class="space-y-3"> ${footer.companyLinks.map((item) => renderTemplate`<li> <a class="text-neutral-300 transition hover:text-white"${addAttribute(item.href, "href")}>${item.title}</a> </li>`)} </ul> </div> <!-- Services --> <div> <h3 class="mb-5 font-semibold">Services</h3> <ul class="space-y-3"> ${footer.serviceLinks.map((item) => renderTemplate`<li> <a class="text-neutral-300 transition hover:text-white"${addAttribute(item.href, "href")}>${item.title}</a> </li>`)} </ul> </div> <!-- Social --> <div> <h3 class="mb-5 font-semibold">Socials</h3> <ul class="space-y-3"> ${footer.socialLinks.map((item) => renderTemplate`<li> <a class="text-neutral-300 transition hover:text-white"${addAttribute(item.href, "href")} target="_blank" rel="noopener noreferrer"> ${item.title} </a> </li>`)} </ul> </div> </div> </div> <div class="overflow-hidden border-t border-neutral-800 px-4 pb-10 sm:px-6 lg:px-8"> ${footer.marqueeImage && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": footer.marqueeImage, "alt": "Marquee Image", "width": 800, "height": 300, "class": "mx-auto mt-10 w-full max-w-2xl object-cover lg:ml-auto lg:mr-0" })}`} <p class="mt-6 text-center text-lg sm:text-xl lg:text-right"> ${footer.tagline} </p> </div> </footer>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/Footer.astro", void 0);

export { $$Layout as $, $$Header as a, $$Footer as b, renderScript as r };
