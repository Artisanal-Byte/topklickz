import { c as createComponent } from './astro-component_DMOcWQLD.mjs';
import 'piccolore';
import { m as maybeRenderHead, d as renderTemplate, c as addAttribute, e as renderComponent } from './server_BTM6RGa0.mjs';
import { $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_BIhY_CXq.mjs';
import 'clsx';
import { createReader } from '@keystatic/core/reader';
import { c as config } from './keystatic.config_B9neeRdH.mjs';
import { $ as $$AboutCtc } from './AboutCtc_CuUfF4UN.mjs';

const $$BlogHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogHero;
  const {
    titleLine1 = "UNCOVER IDEAS,",
    titleLine2 = "INSIGHTS,",
    titleLine3 = "AND",
    highlight = "GROWTH.",
    description = "Explore expert perspectives, practical strategies, and creative thinking on branding, digital marketing, web experiences, AI, and business growth. Designed to help ambitious brands stay ahead."
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full"> <div class="
			mx-auto
			w-full
			max-w-7xl   
			px-5
			py-12
			lg:px-12
			lg:py-20
		"> <!-- =========================
		     TOP CONTENT
		========================= --> <div class="max-w-[720px]"> <h2 class="
					text-[42px]
					font-medium
					uppercase
					leading-[1.00]
					tracking-[-2px]
					text-black
					lg:text-[60px]
					lg:tracking-[-3px]
                    font-clash
				"> <span class="block">${titleLine1}</span> <span class="block"> ${titleLine2} </span> <span class="block"> ${titleLine3} <span class="
							inline-block
							bg-[linear-gradient(90deg,#ee1765_0%,#d6248c_45%,#7548d7_100%)]
							bg-clip-text
							font-bold
							text-transparent
						"> ${highlight} </span> </span> </h2> <p class="
					mt-5
					max-w-[570px]
					text-[18px]
					font-normal
					leading-[1.45]
					text-black
				"> ${description} </p> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/blog/BlogHero.astro", void 0);

const $$BlogCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogCard;
  const {
    image = "/img/bloghero.png",
    title = "Why Strong Brands Win in Competitive Markets",
    badge = "FEATURED",
    link = "#"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-7xl px-5 lg:px-12"> <a${addAttribute(link, "href")} class="
		group
		relative
		block
		h-[395px]
		w-full
		overflow-hidden
		rounded-[14px]
		lg:h-[520px]
	"> <!-- Background Image --> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="
			absolute
			inset-0
			h-full
			w-full
			object-cover
			object-center
			transition-transform
			duration-700
			ease-out
			group-hover:scale-[1.03]
		"> <!-- Dark Overlay --> <div class="
			absolute
			inset-0
			bg-[linear-gradient(90deg,rgba(0,0,0,0.38)_0%,rgba(0,0,0,0.12)_48%,rgba(0,0,0,0)_75%)]
		"></div> <!-- Content --> <div class="
			absolute
			inset-0
			z-10
			flex
			flex-col
			p-6
			lg:p-8
		"> <!-- Badge --> <div> <span class="
					inline-flex
					items-center
					rounded-[4px]
					bg-black
					px-[10px]
					py-[7px]
					text-[8px]
					font-semibold
					uppercase
					leading-none
					tracking-[0.2px]
					text-white
				"> ${badge} </span> </div> <!-- Text --> <div class="
				mt-[60px]
				max-w-[330px]
				lg:mt-[72px]
				lg:max-w-[410px]
			"> <h2 class="
					text-[40px]
					font-bold
					leading-[1.08]
					tracking-[-2px]
					text-white
                    font-geist
					lg:text-[62px]
					lg:tracking-[-2.5px]
				"> ${title} </h2> </div> </div> </a> </div>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/blog/BlogCard.astro", void 0);

const $$LatestBlog = createComponent(($$result, $$props, $$slots) => {
  const insights = [
    {
      image: "/img/blog.png",
      category: "NEWS",
      title: "TOPKLICKZ Expands Creative & AI Services for Growing Businesses",
      date: "May 10, 2026",
      readTime: "6 min read",
      link: "#"
    },
    {
      image: "/img/blog.png",
      category: "NEWS",
      title: "TOPKLICKZ Expands Creative & AI Services for Growing Businesses",
      date: "May 10, 2026",
      readTime: "6 min read",
      link: "#"
    },
    {
      image: "/img/blog.png",
      category: "NEWS",
      title: "TOPKLICKZ Expands Creative & AI Services for Growing Businesses",
      date: "May 10, 2026",
      readTime: "6 min read",
      link: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white py-12 lg:py-16"> <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"> <!-- Header --> <div class="mb-8 flex items-center justify-between"> <h2 class="text-[25px] font-semibold text-black">
Latest insights
</h2> <a href="/blog-inner" class="flex items-center gap-3 text-[12px] font-medium text-black transition-opacity hover:opacity-60"> <span>View all insights</span> <span class="text-[20px] leading-none">→</span> </a> </div> <!-- Cards --> <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"> ${insights.map((item) => renderTemplate`<article class="group"> <a${addAttribute(item.link, "href")} class="block"> <!-- IMAGE AREA --> <div class="
									relative
									aspect-[1/1.08]
									w-full
									overflow-hidden
									rounded-[14px]
								"> <!-- Full light-blue image --> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="
										absolute
										inset-0
										h-full
										w-full
										object-cover
										object-center
										transition-transform
										duration-500
										ease-out
										group-hover:scale-[1.025]
									"> <!-- NEWS BADGE --> <span class="
										absolute
										left-4
										top-4
										z-10
										rounded-full
										bg-black
										px-[13px]
										py-[6px]
										text-[14px]
										font-semibold
										uppercase
										leading-none
										tracking-[0.3px]
										text-white
									"> ${item.category} </span> </div> <!-- Content --> <div class="pt-5"> <h3 class="
                                    font-geist
										max-w-[390px]
										text-[24px]
										font-semibold
										leading-[1.08]
										tracking-[-0.4px]
										text-black
									"> ${item.title} </h3> <div class="
										mt-5
										flex
										items-center
										gap-2
										text-[14px]
										text-black/45
									"> <span>${item.date}</span> <span>•</span> <span>${item.readTime}</span> </div> </div> </a> </article>`)} </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/blog/LatestBlog.astro", void 0);

const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Newsletter;
  const {
    image = "/img/email.png",
    title = "Stay ahead of the curve.",
    description = "Every brand strategy engagement follows a proven creative process — rigorous enough to deliver real insight, flexible enough to meet you where you are.",
    placeholder = "Enter your email",
    buttonText = "SUBSCRIBE"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="
			mx-auto
			grid
			max-w-5xl
			grid-cols-1
			gap-8
			px-5
			pb-12
			lg:grid-cols-[minmax(0,420px)_minmax(0,1fr)]
			lg:items-center
			lg:gap-0
			lg:px-12
			lg:pb-16
		"> <!-- LEFT --> <div class="flex items-start gap-5"> <!-- Image instead of email icon --> <div class="
					shrink-0
					overflow-hidden
					rounded-[10px]
				"> <img${addAttribute(image, "src")} alt="" class="
						h-[64px]
						w-[64px]
						object-cover
						lg:h-[58px]
						lg:w-[58px]
					"> </div> <!-- Content --> <div class="min-w-0"> <div class="flex items-center gap-3"> <h2 class="
							text-[20px]
							font-semibold
							leading-[1.1]
							tracking-[-0.4px]
							text-black
                            font-geist
						"> ${title} </h2> </div> <p class="
						mt-2
						max-w-[290px]
						text-[15px]
						font-normal
						leading-[1.55]
						text-black/75
					"> ${description} </p> </div> </div> <!-- RIGHT FORM --> <form class="
				flex
				w-full
				flex-col
				gap-4

				sm:flex-row
				sm:items-center
			"> <input type="email"${addAttribute(placeholder, "placeholder")} required class="
					h-[54px]
					min-w-0
					flex-1
					border-0
					bg-[#dddddd]
					px-5
					text-[14px]
					text-black
					outline-none
					placeholder:text-black/35
					focus:ring-1
					focus:ring-black/20
				"> <button type="submit" class="
					inline-flex
					h-[54px]
					shrink-0
					items-center
					justify-center
					gap-3
					bg-black
					px-6
					text-[14px]
					font-semibold
					uppercase
					tracking-[0.2px]
					text-white
					transition-all
					duration-300
					hover:bg-black/80
				"> <span>${buttonText}</span> <span class="text-[18px] leading-none">
→
</span> </button> </form> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/blog/Newsletter.astro", void 0);

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const reader = createReader(process.cwd(), config);
  const site = await reader.singletons.site.read();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "navbar": site?.navbar })} ${renderComponent($$result2, "BlogHero", $$BlogHero, {})} ${renderComponent($$result2, "BlogCard", $$BlogCard, {})} ${renderComponent($$result2, "LatestBlog", $$LatestBlog, {})} ${renderComponent($$result2, "Newsletter", $$Newsletter, {})} ${renderComponent($$result2, "AboutCtc", $$AboutCtc, {})} ${renderComponent($$result2, "Footer", $$Footer, { "footer": site?.footer })} ` })}`;
}, "D:/D Drive/artisanal-byte/topklickz/src/pages/blog.astro", void 0);

const $$file = "D:/D Drive/artisanal-byte/topklickz/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Blog,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
