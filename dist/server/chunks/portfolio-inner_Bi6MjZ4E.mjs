import { c as createComponent } from './astro-component_DMOcWQLD.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, e as renderComponent, F as Fragment, d as renderTemplate } from './server_BTM6RGa0.mjs';
import { $ as $$Layout, r as renderScript, a as $$Header, b as $$Footer } from './Footer_BIhY_CXq.mjs';
import { c as config } from './keystatic.config_B9neeRdH.mjs';
import { createReader } from '@keystatic/core/reader';
import 'clsx';
import { $ as $$Cta } from './Cta_lBmc-l8K.mjs';

const $$PortfolioInnerHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$PortfolioInnerHero;
  const {
    category = "BRAND IDENTITY",
    client = "Nymora",
    year = "2024",
    scope = ["Brand Identity", "Packaging", "Art Direction"],
    title = "Nymora",
    subtitle = "Luxury brand identity rooted in nature and ritual",
    backText = "All Work",
    parentTitle = "NYMORA",
    backLink = "/portfolio"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="mx-auto
			w-full
			max-w-7xl
			px-5
			py-10
			md:py-14
			lg:px-8
			lg:pb-14
			lg:pt-16"> <!-- ======================================= --> <!-- BREADCRUMB --> <!-- ======================================= --> <div class="flex
				items-center
				gap-3
				font-geist
				text-[15px]
				font-normal
				text-[#9B9B9B]"> <a${addAttribute(backLink, "href")} class="group
					inline-flex
					items-center
					gap-2
					transition-colors
					duration-300
					hover:text-black"> <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="transition-transform
						duration-300
						group-hover:-translate-x-1"> <path d="M15 9H3M3 9L7 5M3 9L7 13" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path> </svg> <span>${backText}</span> </a> <span class="text-[#D0D0D0]">/</span> <span class="uppercase text-[#ADADAD]"> ${parentTitle} </span> </div> <!-- ======================================= --> <!-- CONTENT --> <!-- ======================================= --> <div class="mt-14
				grid
				grid-cols-1
				gap-12
				md:mt-16
				lg:mt-[40px]
				lg:grid-cols-[0.42fr_0.58fr]
				lg:gap-16
				xl:grid-cols-[440px_1fr]
				xl:gap-[95px]"> <!-- =================================== --> <!-- LEFT DETAILS --> <!-- =================================== --> <div> <!-- Category pill --> <div class="inline-flex
						rounded-full
						bg-[linear-gradient(90deg,#FF9E3D_0%,#F13B59_47%,#7146E5_100%)]
						p-[1px]"> <span class="inline-flex
							h-[30px]
							items-center
							justify-center
							rounded-full
							bg-white
							px-[14px]
							font-clash
							text-[14px]
							font-medium
							uppercase
							tracking-[0.04em]
							text-[#8D8D8D]"> ${category} </span> </div> <!-- Details --> <div class="mt-10
						space-y-8
						lg:mt-10
						lg:space-y-9"> <!-- Client --> <div> <p class="mb-2
								font-geist
								text-[15px]
								font-medium
								uppercase
								tracking-[0.12em]
								text-[#AFAFAF]">
CLIENT
</p> <p class="font-geist
								text-[18px]
								font-normal
								leading-[1.4]
								text-[#555555]"> ${client} </p> </div> <!-- Year --> <div> <p class="mb-2
								font-geist
								text-[15px]
								font-medium
								uppercase
								tracking-[0.12em]
								text-[#AFAFAF]">
YEAR
</p> <p class="font-geist
								text-[18px]
								font-normal
								leading-[1.4]
								text-[#555555]"> ${year} </p> </div> <!-- Scope --> <div> <p class="mb-2
								font-geist
								text-[15px]
								font-medium
								uppercase
								tracking-[0.12em]
								text-[#AFAFAF]">
SCOPE
</p> <p class="max-w-[390px]
								font-geist
								text-[18px]
								font-normal
								leading-[1.6]
								text-[#555555]
								sm:text-[16px]"> ${scope.map((item, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <span>${item}</span> ${index < scope.length - 1 && renderTemplate`<span class="mx-[5px]">·</span>`}` })}`)} </p> </div> </div> </div> <!-- =================================== --> <!-- RIGHT TITLE --> <!-- =================================== --> <div class="lg:pt-[4px]
					xl:pl-[10px]"> <h1 class="font-clash
						text-[64px]
						font-semibold
						leading-[0.95]
						tracking-[-0.055em]
						text-black
						md:text-[92px]
						lg:text-[88px]"> ${title} </h1> <p class="mt-8
						max-w-[760px]
						font-geist
						text-[20px]
						font-normal
						leading-[1.5]
						tracking-[-0.015em]
						text-[#949494]
						lg:mt-9
						lg:text-[27px]"> ${subtitle} </p> <!-- <img
					src="/img/blog.png"
					class="w-[200px] h-[240px] object-cover ml-auto mt-10"
				/> --> </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/portfolio/PortfolioInnerHero.astro", void 0);

const $$PortfolioInnerImage = createComponent(($$result, $$props, $$slots) => {
  const galleryImages = [
    {
      src: "/img/nymora-1.webp",
      alt: "Nymora storefront branding"
    },
    {
      src: "/img/nymora-2.webp",
      alt: "Nymora salon interior"
    },
    {
      src: "/img/nymora-3.webp",
      alt: "Nymora product packaging"
    },
    {
      src: "/img/nymora-4.webp",
      alt: "Nymora stationery"
    },
    {
      src: "/img/nymora-5.webp",
      alt: "Nymora shopping bag"
    },
    {
      src: "/img/nymora-6.webp",
      alt: "Nymora pattern design"
    },
    {
      src: "/img/nymora-7.webp",
      alt: "Nymora service menu"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-[#f7f6f2] py-5"> <div class="mx-auto w-full max-w-7xl px-4 lg:px-5"> <!-- =========================
			DESKTOP / TABLET
		========================= --> <div class="hidden md:block"> <!-- TOP ROW --> <div class="
					grid
					h-[280px]
					grid-cols-[46%_23%_1fr]
					gap-[7px]

					lg:h-[340px]
					xl:h-[420px]
				"> <!-- Image 1 --> <div class="
						group
						relative
						h-full
						w-full
						overflow-hidden
						rounded-[10px]
						bg-[#ecebe7]
					"> <img${addAttribute(galleryImages[0].src, "src")}${addAttribute(galleryImages[0].alt, "alt")} class="
							h-full
							w-full
							object-cover
							object-center
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.035]
						"> </div> <!-- Image 2 --> <div class="
						group
						relative
						h-full
						w-full
						overflow-hidden
						rounded-[10px]
						bg-[#ecebe7]
					"> <img${addAttribute(galleryImages[1].src, "src")}${addAttribute(galleryImages[1].alt, "alt")} class="
							h-full
							w-full
							object-cover
							object-center
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.035]
						"> </div> <!-- Image 3 --> <div class="
						group
						relative
						h-full
						w-full
						overflow-hidden
						rounded-[10px]
						bg-[#ecebe7]
					"> <img${addAttribute(galleryImages[2].src, "src")}${addAttribute(galleryImages[2].alt, "alt")} class="
							h-full
							w-full
							object-cover
							object-center
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.035]
						"> </div> </div> <!-- BOTTOM ROW --> <div class="
					mt-[7px]
					grid
					h-[240px]
					grid-cols-[24%_24%_28%_1fr]
					gap-[7px]

					lg:h-[300px]
					xl:h-[380px]
				"> <!-- Image 4 --> <div class="
						group
						relative
						h-full
						w-full
						overflow-hidden
						rounded-[10px]
						bg-[#ecebe7]
					"> <img${addAttribute(galleryImages[3].src, "src")}${addAttribute(galleryImages[3].alt, "alt")} class="
							h-full
							w-full
							object-cover
							object-center
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.035]
						"> </div> <!-- Image 5 --> <div class="
						group
						relative
						h-full
						w-full
						overflow-hidden
						rounded-[10px]
						bg-[#ecebe7]
					"> <img${addAttribute(galleryImages[4].src, "src")}${addAttribute(galleryImages[4].alt, "alt")} class="
							h-full
							w-full
							object-cover
							object-center
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.035]
						"> </div> <!-- Image 6 --> <div class="
						group
						relative
						h-full
						w-full
						overflow-hidden
						rounded-[10px]
						bg-[#ecebe7]
					"> <img${addAttribute(galleryImages[5].src, "src")}${addAttribute(galleryImages[5].alt, "alt")} class="
							h-full
							w-full
							object-cover
							object-center
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.035]
						"> </div> <!-- Image 7 --> <div class="
						group
						relative
						h-full
						w-full
						overflow-hidden
						rounded-[10px]
						bg-[#ecebe7]
					"> <img${addAttribute(galleryImages[6].src, "src")}${addAttribute(galleryImages[6].alt, "alt")} class="
							h-full
							w-full
							object-cover
							object-center
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.035]
						"> </div> </div> </div> <!-- =========================
			MOBILE
		========================= --> <div class="grid grid-cols-2 gap-2 md:hidden"> <!-- Image 1 --> <div class="
					group
					col-span-2
					h-[240px]
					overflow-hidden
					rounded-[10px]
				"> <img${addAttribute(galleryImages[0].src, "src")}${addAttribute(galleryImages[0].alt, "alt")} class="
						h-full
						w-full
						object-cover
						object-center
						transition-transform
						duration-700
						group-hover:scale-105
					"> </div> <!-- Image 2 --> <div class="
					group
					h-[200px]
					overflow-hidden
					rounded-[10px]
				"> <img${addAttribute(galleryImages[1].src, "src")}${addAttribute(galleryImages[1].alt, "alt")} class="
						h-full
						w-full
						object-cover
						object-center
						transition-transform
						duration-700
						group-hover:scale-105
					"> </div> <!-- Image 3 --> <div class="
					group
					h-[200px]
					overflow-hidden
					rounded-[10px]
				"> <img${addAttribute(galleryImages[2].src, "src")}${addAttribute(galleryImages[2].alt, "alt")} class="
						h-full
						w-full
						object-cover
						object-center
						transition-transform
						duration-700
						group-hover:scale-105
					"> </div> <!-- Image 4 --> <div class="
					group
					h-[190px]
					overflow-hidden
					rounded-[10px]
				"> <img${addAttribute(galleryImages[3].src, "src")}${addAttribute(galleryImages[3].alt, "alt")} class="
						h-full
						w-full
						object-cover
						object-center
						transition-transform
						duration-700
						group-hover:scale-105
					"> </div> <!-- Image 5 --> <div class="
					group
					h-[190px]
					overflow-hidden
					rounded-[10px]
				"> <img${addAttribute(galleryImages[4].src, "src")}${addAttribute(galleryImages[4].alt, "alt")} class="
						h-full
						w-full
						object-cover
						object-center
						transition-transform
						duration-700
						group-hover:scale-105
					"> </div> <!-- Image 6 --> <div class="
					group
					col-span-2
					h-[230px]
					overflow-hidden
					rounded-[10px]
				"> <img${addAttribute(galleryImages[5].src, "src")}${addAttribute(galleryImages[5].alt, "alt")} class="
						h-full
						w-full
						object-cover
						object-center
						transition-transform
						duration-700
						group-hover:scale-105
					"> </div> <!-- Image 7 --> <div class="
					group
					col-span-2
					h-[240px]
					overflow-hidden
					rounded-[10px]
				"> <img${addAttribute(galleryImages[6].src, "src")}${addAttribute(galleryImages[6].alt, "alt")} class="
						h-full
						w-full
						object-cover
						object-center
						transition-transform
						duration-700
						group-hover:scale-105
					"> </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/portfolio/PortfolioInnerImage.astro", void 0);

const $$PortfolioInnerOverview = createComponent(($$result, $$props, $$slots) => {
  const points = [
    "Primary & secondary logo system",
    "Packaging design across 12 SKUs",
    "Brand guidelines (120 pages)",
    "Art direction for launch campaign",
    "Retail display and POS materials",
    "Brand photography direction"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full py-14 md:py-20 lg:py-24"> <div class="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8"> <div class="grid items-start gap-10 md:grid-cols-[160px_minmax(0,1fr)] md:gap-14 lg:grid-cols-[300px_minmax(0,760px)] lg:gap-16"> <!-- Left side --> <div class="flex flex-col"> <div class="flex items-center gap-3"> <span class="text-[10px] font-medium uppercase tracking-[0.22em] text-[#9b9b9b]">
Overview
</span> <span class="h-px w-[120px] bg-gradient-to-r from-[#d9c089] via-[#c9a7f3] to-[#7aa2ff]"></span> </div> <div class="mt-5 text-[64px] font-semibold leading-none tracking-[-0.05em] text-[#cfcfcf] lg:text-[78px]">
01
</div> </div> <!-- Right side --> <div class=""> <p class="text-[24px] font-normal leading-[1.55] tracking-[-0.02em] text-[#1f1f1f] lg:text-[28px]">
Mammalua is a premium beauty brand rooted in the belief
					that nature holds the answers. We built their entire
					identity from the ground up — naming, visual language,
					packaging system and brand architecture — to create
					something that felt both ancient and completely modern.
</p> <div class="mt-8 flex flex-wrap gap-3"> ${points.map((item) => renderTemplate`<span class="inline-flex rounded-full border border-[#eceae6] bg-[#efeeeb] px-4 py-2 text-[12px] font-medium leading-none text-[#8a8a8a] sm:text-[13px]"> ${item} </span>`)} </div> </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/portfolio/PortfolioInnerOverview.astro", void 0);

const $$PortfolioInnerImagsSection = createComponent(($$result, $$props, $$slots) => {
  const gallery = {
    topLeft: "/img/nymora-01.webp",
    topRight: "/img/nymora-02.webp",
    bottomLeft: "/img/nymora-03.webp",
    bottomCenter: "/img/nymora-04.webp",
    pattern: "/img/nymora-05.webp",
    brandMark: "/img/nymora-06.webp",
    interiorSmall: "/img/nymora-07.webp",
    archSmall: "/img/nymora-08.webp",
    fabricSmall: "/img/nymora-09.webp"
  };
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-[#f7f7f4] py-4"> <div class="mx-auto w-full max-w-7xl px-2 sm:px-4 lg:px-5"> <!-- ============================= --> <!-- DESKTOP COLLAGE --> <!-- ============================= --> <div class="hidden overflow-hidden md:block"> <!-- TOP ROW --> <div class="grid grid-cols-2 gap-[3px]"> <!-- Top Left --> <div class="
						group
						h-[330px]
						overflow-hidden
						lg:h-[430px]
						xl:h-[520px]
					"> <img${addAttribute(gallery.topLeft, "src")} alt="Nymora salon branding" class="
							h-full
							w-full
							object-cover
							object-center
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.025]
                            bg-white
						"> </div> <!-- Top Right --> <div class="
						group
						h-[330px]
						overflow-hidden
						lg:h-[430px]
						xl:h-[520px]
					"> <img${addAttribute(gallery.topRight, "src")} alt="Nymora packaging" class="
							h-full
							w-full
							object-cover
							object-center
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.025]
                             bg-white
						"> </div> </div> <!-- ============================= --> <!-- BOTTOM ROW --> <!-- ============================= --> <div class="
					mt-[3px]
					grid
					h-[190px]
					grid-cols-[30%_30%_40%]
					gap-[3px]
					lg:h-[235px]
					xl:h-[275px]
				"> <!-- Bottom Left --> <div class="group overflow-hidden"> <img${addAttribute(gallery.bottomLeft, "src")} alt="Nymora stationery" class="
							h-full
							w-full
							object-cover
							object-center
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.03]
                             bg-white
						"> </div> <!-- Bottom Center --> <div class="group overflow-hidden"> <img${addAttribute(gallery.bottomCenter, "src")} alt="Nymora product collection" class="
							h-full
							w-full
							object-cover
							object-center
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.03]  bg-white
						"> </div> <!-- ============================= --> <!-- RIGHT NESTED COLLAGE --> <!-- ============================= --> <div class="grid min-w-0 grid-rows-2 gap-[3px]"> <!-- Pattern - Full Width --> <div class="group overflow-hidden"> <img${addAttribute(gallery.pattern, "src")} alt="Nymora brand pattern" class="
								h-full
								w-full
								object-cover
								object-center
								transition-transform
								duration-700
								ease-out
								group-hover:scale-[1.03]  bg-white
							"> </div> <!-- 4 SMALL IMAGES --> <div class="
							grid
							min-h-0
							grid-cols-[22%_12%_35%_31%]
							gap-[3px]
						"> <!-- Brand Mark --> <div class="group min-w-0 overflow-hidden"> <img${addAttribute(gallery.brandMark, "src")} alt="Nymora monogram" class="
									h-full
									w-full
									object-cover
									object-center
									transition-transform
									duration-700
									group-hover:scale-[1.04] bg-white
								"> </div> <!-- Small Interior --> <div class="group min-w-0 overflow-hidden"> <img${addAttribute(gallery.interiorSmall, "src")} alt="Nymora interior detail" class="
									h-full
									w-full
									object-cover
									object-center
									transition-transform
									duration-700
									group-hover:scale-[1.04] bg-white
								"> </div> <!-- Arch --> <div class="group min-w-0 overflow-hidden"> <img${addAttribute(gallery.archSmall, "src")} alt="Nymora salon arch" class="
									h-full
									w-full
									object-cover
									object-center
									transition-transform
									duration-700
									group-hover:scale-[1.04] bg-white
								"> </div> <!-- Fabric --> <div class="group min-w-0 overflow-hidden"> <img${addAttribute(gallery.fabricSmall, "src")} alt="Nymora brand texture" class="
									h-full
									w-full
									object-cover
									object-center
									transition-transform
									duration-700
									group-hover:scale-[1.04] bg-white
								"> </div> </div> </div> </div> </div> <!-- ============================= --> <!-- MOBILE --> <!-- ============================= --> <div class="grid grid-cols-2 gap-[3px] md:hidden"> <!-- Main image --> <div class="col-span-2 h-[270px] overflow-hidden"> <img${addAttribute(gallery.topLeft, "src")} alt="Nymora salon branding" class="h-full w-full object-cover"> </div> <!-- Packaging --> <div class="col-span-2 h-[260px] overflow-hidden"> <img${addAttribute(gallery.topRight, "src")} alt="Nymora packaging" class="h-full w-full object-cover"> </div> <!-- Bottom left --> <div class="h-[210px] overflow-hidden"> <img${addAttribute(gallery.bottomLeft, "src")} alt="Nymora stationery" class="h-full w-full object-cover"> </div> <!-- Bottom center --> <div class="h-[210px] overflow-hidden"> <img${addAttribute(gallery.bottomCenter, "src")} alt="Nymora product collection" class="h-full w-full object-cover"> </div> <!-- Pattern --> <div class="col-span-2 h-[130px] overflow-hidden"> <img${addAttribute(gallery.pattern, "src")} alt="Nymora brand pattern" class="h-full w-full object-cover"> </div> <!-- Four small images --> <div class="h-[150px] overflow-hidden"> <img${addAttribute(gallery.brandMark, "src")} alt="Nymora monogram" class="h-full w-full object-cover"> </div> <div class="h-[150px] overflow-hidden"> <img${addAttribute(gallery.interiorSmall, "src")} alt="Nymora interior" class="h-full w-full object-cover"> </div> <div class="h-[170px] overflow-hidden"> <img${addAttribute(gallery.archSmall, "src")} alt="Nymora arch" class="h-full w-full object-cover"> </div> <div class="h-[170px] overflow-hidden"> <img${addAttribute(gallery.fabricSmall, "src")} alt="Nymora texture" class="h-full w-full object-cover"> </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/portfolio/PortfolioInnerImagsSection.astro", void 0);

const $$PortfolioInnerProcess = createComponent(($$result, $$props, $$slots) => {
  const processItems = [
    {
      number: "01",
      title: "Discover",
      description: "We immerse ourselves in your world. Research, competitor mapping and stakeholder conversations give us the full picture before we write a single word or draw a single line."
    },
    {
      number: "02",
      title: "Define",
      description: "Insights become direction. We crystallise the strategy: positioning, architecture, messaging hierarchy and the creative brief that everything else is measured against."
    },
    {
      number: "03",
      title: "Design",
      description: "Where ideas become things. We craft the visual system, build out applications across every touchpoint and refine until every detail earns its place."
    },
    {
      number: "04",
      title: "Deliver",
      description: "Handoff with full intent. Comprehensive guidelines, organised files and a launch plan built to give you long-term consistency without needing us in the room."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full py-14 md:py-20 lg:py-24"> <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"> <div class="grid gap-12 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[340px_minmax(0,1fr)]"> <!-- Left Side --> <div class="flex flex-col"> <div class="flex items-center gap-3"> <span class="text-[11px] font-medium uppercase tracking-[0.22em] text-[#9e9e9e]">
Our Process
</span> </div> <div class="mt-4 h-px w-full max-w-[295px] bg-gradient-to-r from-[#d8bf88] via-[#d38af1] to-[#6a8cff]"></div> <div class="mt-8 text-[72px] font-semibold leading-none tracking-[-0.06em] text-[#cfcfcf] sm:text-[84px] lg:text-[92px]">
02
</div> </div> <!-- Right Side --> <div class="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:gap-x-14 lg:gap-y-14"> ${processItems.map((item) => renderTemplate`<div class="min-w-0"> <div class="flex items-center gap-4"> <span class="shrink-0 text-[14px] font-semibold tracking-[0.08em] text-[#b8b8b8]"> ${item.number} </span> <div class="h-px w-full bg-[#dddddd]"></div> </div> <h3 class="mt-8 text-[32px] font-semibold leading-none tracking-[-0.04em] text-black lg:text-[38px]"> ${item.title} </h3> <p class="mt-6 max-w-[500px] text-[18px] font-normal leading-[1.8] tracking-[-0.01em] text-[#7c7c7c] lg:text-[19px]"> ${item.description} </p> </div>`)} </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/portfolio/PortfolioInnerProcess.astro", void 0);

const $$PortfolioInnerThinking = createComponent(($$result, $$props, $$slots) => {
  const section = {
    label: "Thinking",
    number: "03",
    items: [
      {
        title: "The Challenge",
        description: "Create a luxury positioning that felt simultaneously earthy and aspirational, without leaning into tired wellness cliches. The brand needed to feel genuinely premium without feeling cold or clinical."
      },
      {
        title: "Our Approach",
        description: "We anchored the identity in ritual and texture — letting materiality guide the visual language. Custom display typography, a muted palette of ochre and stone, and tactile embossed packaging finishes made the brand feel unmistakably premium."
      }
    ]
  };
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-[#f5f5f3] py-14 md:py-20 lg:py-24"> <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8"> <div class="grid gap-12 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[185px_minmax(0,1fr)] xl:gap-20"> <!-- Left side --> <div> <div class="flex items-center gap-3"> <span class="text-[10px] font-medium uppercase tracking-[0.24em] text-[#a4a4a4]"> ${section.label} </span> <div class="h-px w-[130px] bg-gradient-to-r from-[#d9bf87] via-[#d78cf0] to-[#738dff]"></div> </div> <div class="mt-6 text-[68px] font-semibold leading-none tracking-[-0.06em] text-[#cdcdcd] sm:text-[76px] lg:text-[84px]"> ${section.number} </div> </div> <!-- Right side --> <div class="grid gap-10 md:grid-cols-2 md:gap-12 xl:gap-16"> ${section.items.map((item) => renderTemplate`<div class="min-w-0"> <h3 class="text-[24px] font-semibold leading-none tracking-[-0.03em] text-[#111111] md:text-[26px]"> ${item.title} </h3> <div class="mt-5 h-px w-full bg-[#dfdfdf]"></div> <p class="mt-6 max-w-[430px] text-[17px] font-normal leading-[1.9] tracking-[-0.01em] text-[#7f7f7f] lg:text-[18px]"> ${item.description} </p> </div>`)} </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/portfolio/PortfolioInnerThinking.astro", void 0);

const $$PortfolioInnerWork = createComponent(($$result, $$props, $$slots) => {
  const workSamples = {
    mainLarge: "/img/nymora-bag-main.webp",
    topRight: "/img/nymora-shades.webp",
    midRight: "/img/nymora-brand-book.webp",
    bottomLeft: "/img/nymora-salon.webp",
    bottomRight: "/img/nymora-products.webp"
  };
  return renderTemplate`${maybeRenderHead()}<section class="w-full py-14 md:py-20 lg:py-24"> <div class="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-8"> <!-- Heading --> <div class="mb-8 lg:mb-10"> <p class="text-[10px] font-medium uppercase tracking-[0.24em] text-[#a5a5a5]">
Work Samples
</p> <div class="mt-3 h-px w-[140px] bg-gradient-to-r from-[#d6bf87] via-[#d98cf0] to-[#6e8dff]"></div> </div> <!-- Desktop / Tablet Layout --> <div class="hidden md:block"> <div class="grid grid-cols-[1.18fr_0.94fr] gap-[4px] lg:gap-[5px]"> <!-- Left big image --> <div class="group overflow-hidden rounded-[4px] bg-[#ece9e4]"> <img${addAttribute(workSamples.mainLarge, "src")} alt="Nymora shopping bags" class="h-[350px] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:h-[470px] xl:h-[560px]"> </div> <!-- Right stacked images --> <div class="grid grid-rows-2 gap-[4px] lg:gap-[5px]"> <div class="group overflow-hidden rounded-[4px] bg-[#ece9e4]"> <img${addAttribute(workSamples.topRight, "src")} alt="Nymora color palette samples" class="h-[173px] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:h-[232px] xl:h-[277px]"> </div> <div class="group overflow-hidden rounded-[4px] bg-[#ece9e4]"> <img${addAttribute(workSamples.midRight, "src")} alt="Nymora brand book" class="h-[173px] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:h-[232px] xl:h-[277px]"> </div> </div> </div> <!-- Bottom row --> <div class="mt-[4px] grid grid-cols-[1.18fr_0.94fr] gap-[4px] lg:mt-[5px] lg:gap-[5px]"> <div class="group overflow-hidden rounded-[4px] bg-[#ece9e4]"> <img${addAttribute(workSamples.bottomLeft, "src")} alt="Nymora salon interior" class="h-[170px] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:h-[210px] xl:h-[240px]"> </div> <div class="group overflow-hidden rounded-[4px] bg-[#ece9e4]"> <img${addAttribute(workSamples.bottomRight, "src")} alt="Nymora beauty products" class="h-[170px] w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] lg:h-[210px] xl:h-[240px]"> </div> </div> </div> <!-- Mobile Layout --> <div class="grid grid-cols-1 gap-3 md:hidden"> <div class="group overflow-hidden rounded-[4px] bg-[#ece9e4]"> <img${addAttribute(workSamples.mainLarge, "src")} alt="Nymora shopping bags" class="h-[300px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"> </div> <div class="group overflow-hidden rounded-[4px] bg-[#ece9e4]"> <img${addAttribute(workSamples.topRight, "src")} alt="Nymora color palette samples" class="h-[220px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"> </div> <div class="group overflow-hidden rounded-[4px] bg-[#ece9e4]"> <img${addAttribute(workSamples.midRight, "src")} alt="Nymora brand book" class="h-[220px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"> </div> <div class="group overflow-hidden rounded-[4px] bg-[#ece9e4]"> <img${addAttribute(workSamples.bottomLeft, "src")} alt="Nymora salon interior" class="h-[220px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"> </div> <div class="group overflow-hidden rounded-[4px] bg-[#ece9e4]"> <img${addAttribute(workSamples.bottomRight, "src")} alt="Nymora beauty products" class="h-[220px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"> </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/portfolio/PortfolioInnerWork.astro", void 0);

const $$PortfolioInnerContext = createComponent(($$result, $$props, $$slots) => {
  const section = {
    eyebrow: "WORK IN CONTEXT",
    titleTop: "Craft that",
    titleGradient: "endures.",
    description: "Every system we build is designed to stay relevant and consistent long after we hand it over.",
    background: "/img/portfolioinner.png"
  };
  return renderTemplate`${maybeRenderHead()}<section class="
		relative
		min-h-[100svh]
		w-full
		overflow-hidden
		bg-black
		lg:min-h-[100svh]
	"> <!-- Background Image --> <img${addAttribute(section.background, "src")} alt="Nymora salon storefront" class="
			absolute
			inset-0
			h-full
			w-full
			object-cover
			object-center
		"> <!-- Overall Dark Overlay --> <div class="absolute inset-0 bg-black/35"></div> <!-- Left Side Strong Dark Gradient --> <div class="
			absolute
			inset-0
			bg-gradient-to-r
			from-black/80
			via-black/45
			to-black/5
		"></div> <!-- Slight Bottom Shade --> <div class="
			absolute
			inset-x-0
			bottom-0
			h-[35%]
			bg-gradient-to-t
			from-black/45
			to-transparent
		"></div> <!-- Content --> <div class="
			relative
			z-10
			mx-auto
			flex
			w-full
			max-w-7xl
			items-center
			px-5
			md:px-8
			lg:min-h-[620px]
			lg:px-12
		"> <div class="
				max-w-[370px]
				lg:pt-4
				pt-30
				lg:max-w-[560px]
			"> <!-- Eyebrow --> <p class="
					mb-5
					text-[9px]
					font-medium
					uppercase
					tracking-[0.24em]
					text-white/45
					sm:text-[10px]
				"> ${section.eyebrow} </p> <!-- Heading --> <h2 class="
					text-[48px]
					font-semibold
					leading-[0.94]
					tracking-[-0.055em]
					text-white
					sm:text-[58px]
					md:text-[64px]
					lg:text-[70px]
					xl:text-[76px]
				"> <span class="block"> ${section.titleTop} </span> <span class="
						mt-1
						block
						bg-gradient-to-r
						from-[#ff9b42]
						via-[#ff2b76]
						to-[#7448ff]
						bg-clip-text
						text-transparent
					"> ${section.titleGradient} </span> </h2> <!-- Description --> <p class="
					mt-7
					max-w-[430px]
					text-[15px]
					font-normal
					leading-[1.75]
					text-white/55
					sm:text-[16px]
					md:text-[17px]
					lg:mt-8
				"> ${section.description} </p> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/portfolio/PortfolioInnerContext.astro", void 0);

const $$PortfolioInnerKeyResults = createComponent(($$result, $$props, $$slots) => {
  const keyResults = [
    {
      value: "+68%",
      title: "Brand recognition",
      description: "Within 3 months of launch"
    },
    {
      value: "3×",
      title: "Retail placement",
      description: "New stockists acquired"
    },
    {
      value: "12",
      title: "Press features",
      description: "In design and lifestyle media"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-black"> <div class="
			mx-auto
			grid
			w-full
			max-w-7xl
			grid-cols-1
			gap-y-10
			px-5
			py-12
			md:grid-cols-2
			md:gap-x-12
			md:gap-y-12
			lg:min-h-[250px]
			lg:grid-cols-[200px_repeat(3,minmax(0,1fr))]
			lg:items-center
			lg:gap-x-[60px]
			lg:px-10
			lg:py-8
		"> <!-- Left --> <div class="flex flex-col"> <p class="
					text-[8px]
					font-medium
					uppercase
					leading-none
					tracking-[1.8px]
					text-white/70
				">
KEY RESULTS
</p> <div class="
					mt-[11px]
					h-px
					w-full
					max-w-[200px]
					bg-gradient-to-r
					from-[#DDA52C]
					via-[#DC214D]
					to-[#6232C8]
				"></div> <h2 class="mt-6 text-[68px] font-semibold leading-none tracking-[-0.06em] text-[#cdcdcd] sm:text-[76px] lg:text-[84px]">
04
</h2> </div> <!-- Results --> ${keyResults.map((item) => renderTemplate`<div class="flex flex-col lg:justify-center"> <h3 class="
							w-fit
							bg-[linear-gradient(90deg,#FFBC40_0%,#FF4940_28%,#F3215C_50%,#C91C9D_73%,#7139DC_100%)]
							bg-clip-text
							text-[48px]
							font-bold
							leading-[0.9]
							tracking-[-2.5px]
							text-transparent
							lg:text-[62px]
						"> ${item.value} </h3> <h4 class="
							mt-[17px]
							lg:text-[18px]
                            text-[12px]
							font-semibold
							leading-none
							text-white
						"> ${item.title} </h4> <p class="
							mt-[11px]
							text-[14px]
							font-normal
							leading-[1.3]
							text-white/25
						"> ${item.description} </p> </div>`)} </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/portfolio/PortfolioInnerKeyResults.astro", void 0);

const $$PortfolioInnerTestimonial = createComponent(($$result, $$props, $$slots) => {
  const testimonial = {
    label: "WHAT THEY SAID",
    quote: "TOPKLICKZ didn't just design a logo — they built a world. Every touchpoint feels intentional, premium and completely us.",
    name: "Priya Sharma",
    role: "Founder, Mammalua Luxe"
  };
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-[#f3f3f3]"> <div class="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 py-14 sm:px-8 md:px-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14 lg:px-12 lg:py-20 xl:px-16"> <!-- Left label --> <div class="flex flex-col lg:pt-2"> <p class="text-[10px] font-medium uppercase tracking-[1.8px] text-black/35"> ${testimonial.label} </p> <div class="mt-3 h-px w-full max-w-[190px] bg-[linear-gradient(90deg,#f3b33e_0%,#f24f63_45%,#7c5cff_100%)]"></div> </div> <!-- Right content --> <div class="max-w-[860px]"> <div class="text-[64px] font-semibold leading-none text-black/6 lg:text-[90px]" aria-hidden="true">
“
</div> <h2 class="font-geist max-w-[860px] text-[28px] font-semibold leading-[1.18] tracking-[-0.02em] text-black text-[34px] lg:text-[33px]"> ${testimonial.quote} </h2> <div class="mt-10 flex items-center gap-4"> <div class="h-11 w-11 rounded-full bg-[linear-gradient(135deg,#ff8c3a_0%,#ff3f6c_45%,#6e4dff_100%)] shrink-0"></div> <div> <h3 class="text-[16px] font-semibold leading-none text-black"> ${testimonial.name} </h3> <p class="mt-2 text-[14px] leading-none text-black/30"> ${testimonial.role} </p> </div> </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/portfolio/PortfolioInnerTestimonial.astro", void 0);

const $$NextProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$NextProject;
  const {
    label = "NEXT PROJECT",
    title = "GLOBOFARM",
    description = "Brand strategy and website for next-gen agri-tech",
    image = "/img/nextproject.jpg",
    // tamari image path ahiya aapo
    tags = ["WEBSITE DESIGN", "BRAND STRATEGY"],
    buttonText = "VIEW CASE STUDY",
    buttonLink = "/case-study"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-[#efefef]"> <div class="mx-auto w-full"> <!-- top heading area --> <div class="px-5 pt-8 px-8 lg:px-12 max-w-7xl w-full mx-auto"> <p class="text-[9px] font-medium uppercase tracking-[1.8px] text-black/35"> ${label} </p> <div class="mt-3 h-px w-full bg-[linear-gradient(90deg,#e7b24c_0%,#f15e7e_50%,#8767ff_100%)]"></div> </div> <!-- banner --> <div class="relative mt-8 min-h-[320px] overflow-hidden sm:min-h-[420px] lg:min-h-[320px]"> <!-- bg image --> <img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="absolute inset-0 h-full w-full object-cover"> <!-- dark overlay --> <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.62)_0%,rgba(0,0,0,0.28)_35%,rgba(0,0,0,0.08)_100%)]"></div> <!-- soft top overlay --> <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_35%)]"></div> <!-- content --> <div class="relative z-10 flex min-h-[320px] items-center lg:min-h-[450px] max-w-7xl mx-auto"> <div class=""> <!-- tags --> <div class="mb-5 flex flex-wrap gap-2"> ${tags.map((tag) => renderTemplate`<span class="rounded-full border border-white/20 px-3 py-[7px] text-[9px] font-medium uppercase tracking-[0.8px] text-white/85"> ${tag} </span>`)} </div> <!-- title --> <h2 class="max-w-[720px] text-[42px] font-black uppercase leading-[0.95] tracking-[-0.03em] text-white md:text-[68px] lg:text-[56px]"> ${title} </h2> <!-- description --> <p class="mt-4 max-w-[520px] text-[15px] font-normal leading-[1.5] text-white/65 sm:text-[16px]"> ${description} </p> <!-- button --> <a${addAttribute(buttonLink, "href")} class="mt-8 inline-flex items-center gap-3 rounded-full border border-white/35 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.5px] text-white transition duration-300 hover:border-white hover:bg-white hover:text-black"> <span>${buttonText}</span> <span class="text-[14px] leading-none">→</span> </a> </div> </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/portfolio/NextProject.astro", void 0);

const $$PortfolioInner = createComponent(async ($$result, $$props, $$slots) => {
  const reader = createReader(process.cwd(), config);
  const site = await reader.singletons.site.read();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-yzzepktl": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "navbar": site?.navbar, "data-astro-cid-yzzepktl": true })} ${maybeRenderHead()}<section data-portfolio-context-scroll class="relative h-[185svh] w-full bg-white motion-reduce:h-auto" data-astro-cid-yzzepktl> <div data-portfolio-context-stage class="sticky top-0 h-svh w-full overflow-hidden bg-white motion-reduce:relative motion-reduce:h-auto motion-reduce:overflow-visible" data-astro-cid-yzzepktl> <div data-portfolio-context-hero class="absolute inset-0 z-10 overflow-y-auto bg-white will-change-[transform,opacity]" data-astro-cid-yzzepktl> ${renderComponent($$result2, "PortfolioInnerHero", $$PortfolioInnerHero, { "data-astro-cid-yzzepktl": true })} </div> <div data-portfolio-context-layer class="pointer-events-none absolute inset-0 z-20 overflow-hidden bg-black opacity-0 will-change-[transform,opacity]" aria-hidden="true" data-astro-cid-yzzepktl> ${renderComponent($$result2, "PortfolioInnerContext", $$PortfolioInnerContext, { "data-astro-cid-yzzepktl": true })} </div> </div> </section> ${renderComponent($$result2, "PortfolioInnerImage", $$PortfolioInnerImage, { "data-astro-cid-yzzepktl": true })} ${renderComponent($$result2, "PortfolioInnerOverview", $$PortfolioInnerOverview, { "data-astro-cid-yzzepktl": true })} ${renderComponent($$result2, "PortfolioInnerImageSection", $$PortfolioInnerImagsSection, { "data-astro-cid-yzzepktl": true })} ${renderComponent($$result2, "PortfolioInnerProcess", $$PortfolioInnerProcess, { "data-astro-cid-yzzepktl": true })} ${renderComponent($$result2, "PortfolioInnerThinking", $$PortfolioInnerThinking, { "data-astro-cid-yzzepktl": true })} ${renderComponent($$result2, "PortfolioInnerWrok", $$PortfolioInnerWork, { "data-astro-cid-yzzepktl": true })}  ${renderComponent($$result2, "PortfolioInnerKeyResults", $$PortfolioInnerKeyResults, { "data-astro-cid-yzzepktl": true })} ${renderComponent($$result2, "PortfolioInnerTestimonial", $$PortfolioInnerTestimonial, { "data-astro-cid-yzzepktl": true })} ${renderComponent($$result2, "NextProject", $$NextProject, { "data-astro-cid-yzzepktl": true })} ${renderComponent($$result2, "Cta", $$Cta, { "cta": site?.cta, "data-astro-cid-yzzepktl": true })} ${renderComponent($$result2, "Footer", $$Footer, { "footer": site?.footer, "data-astro-cid-yzzepktl": true })} ` })} ${renderScript($$result, "D:/D Drive/artisanal-byte/topklickz/src/pages/portfolio-inner.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/D Drive/artisanal-byte/topklickz/src/pages/portfolio-inner.astro", void 0);

const $$file = "D:/D Drive/artisanal-byte/topklickz/src/pages/portfolio-inner.astro";
const $$url = "/portfolio-inner";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$PortfolioInner,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
