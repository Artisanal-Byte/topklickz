import { c as createComponent } from './astro-component_CBHne6EO.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, d as renderTemplate, e as renderComponent, F as Fragment } from './server_DPeHzCWX.mjs';
import { $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_BMrz0d2e.mjs';
import { createReader } from '@keystatic/core/reader';
import { c as config } from './keystatic.config_B9neeRdH.mjs';
import { $ as $$AboutCtc } from './AboutCtc_zLEBZxYF.mjs';

const $$BlogDetail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogDetail;
  const {
    title = "TOPKLICKZ Expands Creative & AI Services for Growing Businesses",
    author = "Daniel J. Briggs",
    authorImage = "/img/author.webp",
    date = "May 10, 2026",
    readTime = "6 min read",
    tags = ["Branding", "Digital Marketing", "SEO", "AI SEO"],
    heroImage = "/img/bloghero.png",
    heroBadge = "FEATURED",
    heroTitle = "Why Strong Brands Win in Competitive Markets",
    contentImage = "/img/blog-middle.png",
    contentImageAlt = "Three TOPKLICKZ real growth bars",
    secondaryImage = "/img/blog-middle-oat.png",
    secondaryImageAlt = "Four colorful oat milk cartons",
    intro = [
      "Many businesses rely heavily on paid advertising for growth. While ads can deliver immediate traffic and leads, they often stop producing results once the budget ends.",
      "Long-term success comes from creating marketing systems that continue generating awareness, trust, and conversions even when campaigns aren't running.",
      "Here are seven strategies we implement to help brands build sustainable digital growth."
    ],
    sections = [
      {
        title: "1. Build a Strong Brand Foundation",
        description: "A memorable brand is more than a logo. It's the combination of positioning, messaging, identity, and customer experience that creates trust. Businesses that invest in branding consistently outperform those competing only on price."
      },
      {
        title: "2. Create Content That Builds Authority",
        description: "Helpful content answers customer questions before they ask. Publishing valuable blogs, videos, guides, and case studies positions your business as an industry leader while improving organic visibility. Content continues working long after it's published."
      }
    ],
    secondarySections = [
      {
        title: "1. Build a Strong Brand Foundation",
        description: "A memorable brand is more than a logo. It's the combination of positioning, messaging, identity, and customer experience that creates trust. Businesses that invest in branding consistently outperform those competing only on price."
      },
      {
        title: "2. Create Content That Builds Authority",
        description: "Helpful content answers customer questions before they ask. Publishing valuable blogs, videos, guides, and case studies positions your business as an industry leader while improving organic visibility. Content continues working long after it's published."
      }
    ]
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="w-full bg-white"> <div class="mx-auto
			w-full
			max-w-5xl
			px-5
			py-10
			lg:px-0
			lg:py-16"> <!-- =============================
		     ARTICLE HEADER
		============================= --> <header> <h1 class="max-w-[520px]
					text-[22px]
					font-semibold
					leading-[1.12]
					tracking-[-0.5px]
					text-black
					sm:text-[28px]
					sm:leading-[1.08]"> ${title} </h1> <!-- Author / Meta --> <div class="mt-4
					flex
					flex-col
					gap-4
					sm:flex-row
					sm:items-center
					sm:justify-between"> <!-- Left --> <div class="flex items-center gap-3"> <img${addAttribute(authorImage, "src")}${addAttribute(author, "alt")} class="h-[24px]
							w-[24px]
							shrink-0
							rounded-full
							object-cover"> <span class="text-[15px]
							font-medium
							text-black/70"> ${author} </span> ${tags.map((tag) => renderTemplate`<span class="
									rounded-full
									bg-[#f2f2f2]
									px-[9px]
									py-[4px]
									text-[17px]
									font-medium
									text-black/60
								"> ${tag} </span>`)} </div> <!-- Right --> <div class="flex
						items-center
						gap-2
						text-[15px]
						text-black/45"> <span>${date}</span> <span>•</span> <span>${readTime}</span> </div> </div> </header> <!-- =============================
		     HERO IMAGE
		============================= --> <div class="relative
				mt-8
				aspect-[1.75/1]
				w-full
				overflow-hidden
				rounded-[10px]
				sm:mt-10"> <img${addAttribute(heroImage, "src")}${addAttribute(heroTitle, "alt")} class="absolute
					inset-0
					h-full
					w-full
					object-cover
					object-center"> <!-- subtle overlay --> <div class="absolute
					inset-0
					bg-[linear-gradient(90deg,rgba(0,0,0,0.27)_0%,rgba(0,0,0,0.08)_55%,rgba(0,0,0,0)_100%)]"></div> <!-- Featured --> <span class="absolute
					left-4
					top-4
					z-10
					rounded-[3px]
					bg-black
					px-[7px]
					py-[4px]
					text-[13px]
					font-semibold
					uppercase
					leading-none
					text-white"> ${heroBadge} </span> <!-- Hero title --> <div class="absolute
		inset-0
		z-10
		flex
		items-center mx-20"> <div class="max-w-[420px]"> <h2 class="text-[52px]
				font-bold
				leading-[0.95]
				tracking-[-1.5px]
				text-white"> ${heroTitle} </h2> </div> </div> </div> <!-- =============================
		     INTRO
		============================= --> <div class="mt-9
				space-y-[2px]
				text-[17px]
				font-normal
				leading-[1.35]
				text-black/75
				sm:leading-[1.45]"> ${intro.map((paragraph) => renderTemplate`<p>${paragraph}</p>`)} </div> <!-- =============================
		     ARTICLE SECTIONS
		============================= --> <div class="mt-8"> ${sections.map((section, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <section class="
								border-t
								border-black/20
								py-6

								sm:py-7
							"> <h3 class="
									text-[15px]
									font-semibold
									leading-[1.25]
									text-black

									sm:text-[16px]
								"> ${section.title} </h3> <p class="
									mt-2
									text-[17px]
									leading-[1.35]
									text-black/75
								"> ${section.description} </p> </section> ${index === 1 && contentImage && renderTemplate`<figure class="my-2 overflow-hidden rounded-[10px] sm:my-4"> <img${addAttribute(contentImage, "src")}${addAttribute(contentImageAlt, "alt")} loading="lazy" class="h-auto w-full object-cover"> </figure>`}` })}`)} <div class="mt-8"> ${secondarySections.map((section, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <section class="
									border-t
									border-black/20
									py-6

									sm:py-7
								"> <h3 class="
										text-[15px]
										font-semibold
										leading-[1.25]
										text-black

										sm:text-[16px]
									"> ${section.title} </h3> <p class="
										mt-2
										text-[17px]
										leading-[1.35]
										text-black/75
									"> ${section.description} </p> </section> ${index === 1 && secondaryImage && renderTemplate`<figure class="my-2 overflow-hidden rounded-[10px] sm:my-4"> <img${addAttribute(secondaryImage, "src")}${addAttribute(secondaryImageAlt, "alt")} loading="lazy" class="h-auto w-full object-cover"> </figure>`}` })}`)} </div> <!-- Last line --> <div class="h-px w-full bg-black/20"></div> </div> <!-- =============================
		     ARTICLE FOOTER
		============================= --> <footer class="mt-2 pt-2 sm:mt-4 sm:pt-3"> <div class="flex items-center justify-between gap-4"> <div> <p class="text-[16px] text-black/55">Tags</p> <div class="mt-1 flex flex-wrap gap-1.5"> ${tags.map((tag) => renderTemplate`<span class="rounded-full mt-3 bg-[#f2f2f2] px-2 py-1 text-[15px] font-medium text-black/65"> ${tag} </span>`)} </div> </div> <div class="shrink-0 text-right"> <p class="text-[10px] text-black/55">Share</p> <div class="mt-1 flex justify-end gap-2"> <a href="https://x.com/intent/post" target="_blank" rel="noreferrer" aria-label="Share on X" class="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[11px] font-medium text-white">
X
</a> <a href="https://www.linkedin.com/sharing/share-offsite/" target="_blank" rel="noreferrer" aria-label="Share on LinkedIn" class="flex h-6 w-6 items-center justify-center rounded-full bg-black text-[10px] font-semibold text-white">
in
</a> </div> </div> </div> <a href="/blog" class="mt-4 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-[15px] font-medium text-white transition-opacity hover:opacity-75"> <span class="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#ff2d55] to-[#7c3aed]"></span>
More Insights
</a> </footer> </div> </article>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/blog/BlogDetail.astro", void 0);

const $$BlogInner = createComponent(async ($$result, $$props, $$slots) => {
  const reader = createReader(process.cwd(), config);
  const site = await reader.singletons.site.read();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "navbar": site?.navbar })} ${renderComponent($$result2, "BlogDetail", $$BlogDetail, {})} ${renderComponent($$result2, "AboutCtc", $$AboutCtc, {})} ${renderComponent($$result2, "Footer", $$Footer, { "footer": site?.footer })} ` })}`;
}, "D:/D Drive/artisanal-byte/topklickz/src/pages/blog-inner.astro", void 0);

const $$file = "D:/D Drive/artisanal-byte/topklickz/src/pages/blog-inner.astro";
const $$url = "/blog-inner";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$BlogInner,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
