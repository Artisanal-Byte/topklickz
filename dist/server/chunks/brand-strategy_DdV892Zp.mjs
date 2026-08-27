import { c as createComponent } from './astro-component_JDSnf13e.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, d as renderTemplate, e as renderComponent } from './server_r20cRXJ1.mjs';
import { $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_CNhL9zDA.mjs';
import { c as config } from './keystatic.config_Df-6VW00.mjs';
import { createReader } from '@keystatic/core/reader';
import 'clsx';
import { $ as $$BrandPhilosophy } from './BrandPhilosophy_B28uSNMl.mjs';

const $$BrandStrategyHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BrandStrategyHero;
  const {
    number = "01",
    category = "Brand Strategy",
    title = "Brand",
    gradientTitle = "Strategy.",
    description = "We help brands discover their voice, define their position and create a foundation for sustainable growth.",
    exploreText = "Explore the Discipline",
    exploreLink = "#discipline",
    projectText = "Start a project",
    projectLink = "/contact",
    image = "/img/service.png",
    imageAlt = "Brand strategy"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full overflow-hidden bg-white"> <div class="mx-auto max-w-7xl px-4 lg:px-8 lg:py-16 py-10"> <!-- Breadcrumb --> <div class="flex
				items-center
				gap-[10px]
				font-['Geist']
				text-[10px]
				font-normal
				uppercase
				leading-none
				tracking-[0.02em]
				text-[#CCCCCC]
				lg:text-[11px]"> <a href="/services" class="transition-colors
					duration-300
					hover:text-black font-clash">
Services
</a> <span class="text-[#DDDDDD]">/</span> <span class="font-clash gradient-text"> ${category} </span> </div> <!-- Content --> <div class="mt-[31px]
				grid
				grid-cols-1
				gap-[44px]
				md:mt-10
				md:gap-[55px]
				lg:mt-[38px]
				lg:grid-cols-2
				lg:gap-10"> <!-- LEFT --> <div class="flex flex-col items-start"> <div> <!-- Number --> <p class="mb-5
							font-geist
							text-[22px]
							font-light
							leading-none
							text-[#333333]
							md:text-[25px]
							lg:mb-[25px]
							lg:text-[27px]"> ${number} </p> <!-- Heading --> <h1 class="font-clash text-[60px] font-[550] leading-[90%] tracking-normal text-black lg:text-[90px]"> <span class="block"> ${title} </span> <span class="block
								pb-[12px]
								pr-[10px]
								gradient-text"> ${gradientTitle} </span> </h1> </div> <!-- Explore button --> <a${addAttribute(exploreLink, "href")} class="site-btn"> <!-- Gradient circle --> <span class="h-[22px] w-[22px] gradient-bg rounded-full"></span> <span> ${exploreText} </span> </a> </div> <!-- RIGHT --> <div class="w-full"> <!-- Description --> <p class="max-w-[600px]
						font-geist
						text-[18px]
						leading-[1.35]
						tracking-[-0.02em]
						text-[#151515]
						md:text-[20px]
						lg:max-w-[480px]
						lg:text-[24px]
						lg:leading-[1.24]
						lg:tracking-[-0.028em]"> ${description} </p> <!-- Start Project --> <a${addAttribute(projectLink, "href")} class="group
						mt-[25px]
						inline-flex
						items-center
						gap-[17px]
						font-geist
						text-[15px]
						font-normal
						text-[#202020]
						no-underline
						lg:mt-[33px]
						lg:text-[18px]"> <span> ${projectText} </span> <span class="flex items-center"> <span class="h-px
								w-[27px]
								bg-[linear-gradient(90deg,#FF8A3D,#DF3A8B,#6544F4)]
								transition-all
								duration-300
								group-hover:w-[38px]"></span> <svg viewBox="0 0 8 12" fill="none" class="-ml-[1px]
								h-[11px]
								w-[7px]
								text-[#663CFF]" aria-hidden="true"> <path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </span> </a> <!-- Image --> <div class="group
						mt-[27px]
						aspect-[1.45/1]
						w-full
						overflow-hidden
						rounded-[4px]
						bg-[#F2F0EB]
						sm:aspect-[1.7/1]
						lg:mt-[31px]
						lg:max-w-[520px]
						lg:aspect-[1.94/1]"> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} loading="eager" class="h-full
							w-full
							object-cover
							transition-transform
							duration-500
							ease-out
							group-hover:scale-[1.025]"> </div> </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/services/BrandStrategyHero.astro", void 0);

const $$BrandStrategyDetails = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BrandStrategyDetails;
  const disciplines = [
    {
      title: "Research",
      active: true
    },
    {
      title: "Positioning",
      active: false
    },
    {
      title: "Messaging",
      active: false
    },
    {
      title: "Brand Architecture",
      active: false
    },
    {
      title: "Customer Insights",
      active: false
    }
  ];
  const {
    title = "Brand Strategy",
    description = "Strategy is the spine of everything we build. Without a clear strategic foundation, even the most beautiful brand falls flat. We create the thinking that makes your brand impossible to ignore — and hard to forget.",
    descriptionTwo = "Our brand strategy practice combines market intelligence, audience psychology and creative intuition to give you a positioning that is both defensible and distinctive. We work collaboratively, embedding with your team to surface insights that no external consultant could find alone.",
    image = "/img/brandstratagy.png",
    imageAlt = "Brand strategy work"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="mx-auto max-w-7xl px-4 lg:px-8 lg:py-0 py-10"> <!-- Top button --> <a href="#what-we-do" class="site-btn !mt-0"> <span class="
					gradient-bg
					h-[18px]
					w-[18px]
					shrink-0
					rounded-full
				"></span> <span>What We Do</span> </a> <!-- Content Grid --> <div class="
				mt-[32px]
				grid
				grid-cols-1
				gap-[45px]
				lg:grid-cols-[540px_minmax(0,1fr)]
				lg:gap-[20px]
			"> <!-- LEFT --> <div> <h2 class="
						font-clash
						text-[34px]
						font-bold
						leading-[1]
						tracking-[-0.04em]
						text-black
						lg:text-[62px]
					"> ${title} </h2> <!-- Discipline List --> <div class="mt-[20px]"> <ul class="space-y-[7px]"> ${disciplines.map((item) => renderTemplate`<li> <button type="button"${addAttribute([
    `
												block
												w-fit
												font-geist
												text-left
												text-[25px]
												leading-[1.12]
												tracking-[-0.02em]
												transition-colors
												duration-300
											`,
    item.active ? "font-normal text-[#171717]" : "font-normal text-[#B7B7B7] hover:text-black"
  ], "class:list")}> ${item.title} </button> </li>`)} </ul> <!-- small gradient line --> <div class="
							mt-[19px]
							h-[3px]
							w-[10px]
							rounded-full
							bg-[linear-gradient(90deg,#FF9B38_0%,#FF336F_45%,#693BFF_100%)]
						"></div> </div> </div> <!-- RIGHT --> <div class="max-w-[720px]"> <!-- Main description --> <p class="
						font-clash
						text-[15px]
						leading-[1.45]
						tracking-[-0.02em]
						text-[#171717]
						lg:text-[25px]
						lg:leading-[1.42]
					"> ${description} </p> <!-- Second description --> <p class="
						mt-[27px]
						max-w-[600px]
						font-clash
						text-[13px]
						font-normal
						leading-[1.55]
						tracking-[-0.01em]
						text-[#313131]
						lg:mt-[34px]
						lg:text-[18px]
						lg:leading-[1.6]
					"> ${descriptionTwo} </p> <!-- Image --> <div class="
						mt-[28px]
						w-full
						max-w-[720px]
						overflow-hidden
						bg-[#F5F1EC]

						lg:mt-[30px]
					"> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} loading="lazy" class="
							block
							aspect-[2.45/1]
							w-full
							object-cover
							transition-transform
							duration-500
							ease-out
							hover:scale-[1.02]
						"> </div> </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/services/BrandStrategyDetails.astro", void 0);

const $$ServicesGrid = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      number: "01",
      title: "Brand Strategy",
      href: "/services/branding",
      active: true
    },
    {
      number: "02",
      title: "Social Media",
      href: "/services/social-media"
    },
    {
      number: "03",
      title: "Web Design & Development",
      href: "/services/web-design-development"
    },
    {
      number: "04",
      title: "Performance Marketing",
      href: "/services/performance-marketing"
    },
    {
      number: "05",
      title: "Creative Production",
      href: "/services/creative-production"
    },
    {
      number: "06",
      title: "Creative Production",
      href: "/services/creative-production"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="
		relative
		w-full
		bg-white
		lg:pb-0
	"> <!-- Top Gradient Line --> <div class="
			absolute
			left-0
			top-0
			h-px
			w-full
			bg-[linear-gradient(90deg,#FFB33E_0%,#FF4D57_32%,#DB32B4_62%,#5A43F1_100%)]
		"></div> <div class="mx-auto max-w-7xl px-4 py-10 lg:px-8 lg:py-16"> <div class="
				grid
				grid-cols-1
				gap-[5px]
				lg:grid-cols-3
			"> ${services.map((service) => renderTemplate`<a${addAttribute(service.href, "href")}${addAttribute([
    `
								group
								block
								p-px
								no-underline
								transition-all
								duration-300
							`,
    service.active ? `
									bg-[linear-gradient(135deg,#FFB43E_0%,#FF5957_30%,#E12AA8_62%,#5342F2_100%)]
								` : `
									bg-[#ECECEC]
									hover:bg-[linear-gradient(135deg,#FFB43E_0%,#FF5957_30%,#E12AA8_62%,#5342F2_100%)]
								`
  ], "class:list")}> <div class="
								flex
								h-full
								min-h-[124px]
								flex-col
								justify-center
								bg-white
								px-[31px]
								py-[25px]
							"> <!-- Number --> <span${addAttribute([
    `
										mb-[13px]
										block
										font-clash
										text-[12px]
										font-light
										leading-none
										transition-colors
										duration-300
									`,
    service.active ? "text-[#777777]" : "text-[#D5D5D5] group-hover:text-[#999999]"
  ], "class:list")}> ${service.number} </span> <!-- Title --> <h3${addAttribute([
    `
										m-0
										font-clash
										text-[17px]
										leading-[1.25]
										tracking-[-0.025em]
										transition-colors
										duration-300
										sm:text-[18px]
									`,
    service.active ? "font-medium text-black" : "font-normal text-[#808080] group-hover:text-black"
  ], "class:list")}> ${service.title} </h3> <!-- Gradient Small Line --> <span${addAttribute([
    `
										mt-[15px]
										block
										h-[2px]
										rounded-full
										bg-[linear-gradient(90deg,#FF9F35_0%,#FF475A_45%,#7042F4_100%)]
										transition-all
										duration-300
									`,
    service.active ? "w-[18px]" : "w-0 group-hover:w-[18px]"
  ], "class:list")}></span> </div> </a>`)} </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/services/ServicesGrid.astro", void 0);

const $$OurApproachBrandStrategy = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Research",
      description: "We dig deep into your market, competitors and target audience — uncovering insights that form the bedrock of every strategic decision.",
      tags: [
        "Market Analysis",
        "Audience Research",
        "Competitive Audit"
      ]
    },
    {
      number: "02",
      title: "Positioning",
      description: "We define your unique space in the market — crafting a positioning that is both authentic to who you are and compelling to those you want to reach.",
      tags: [
        "Value Proposition",
        "Differentiation",
        "Market Fit"
      ]
    },
    {
      number: "03",
      title: "Messaging Architecture",
      description: "Your words become weapons. We build a messaging framework that speaks consistently across every touchpoint, from elevator pitch to long-form content.",
      tags: [
        "Brand Voice",
        "Tone of Voice",
        "Key Messages"
      ]
    },
    {
      number: "04",
      title: "Brand Architecture",
      description: "How your brand, sub-brands and products relate to each other — structured for clarity now and scale later.",
      tags: [
        "Portfolio Strategy",
        "Brand Hierarchy",
        "Naming System"
      ]
    },
    {
      number: "05",
      title: "Customer Insights",
      description: "We translate data and conversations into actionable understanding — helping you see your brand through your customers' eyes.",
      tags: [
        "Persona Development",
        "Journey Mapping",
        "Insight Synthesis"
      ]
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="
			mx-auto max-w-7xl px-4 lg:px-8 lg:py-0 py-5
		"> <!-- Top Button --> <a href="#approach" class="site-btn !mt-0"> <span class="
					gradient-bg
					h-[22px]
					w-[22px]
					shrink-0
					rounded-full
				"></span> <span>Our Approach</span> </a> <!-- Heading Area --> <div class="
				mt-[42px]
				grid
				grid-cols-1
				gap-7
				md:mt-[55px]
				md:grid-cols-[1fr_0.95fr]
				md:items-end
				md:gap-[70px]
				lg:grid-cols-[1fr_0.92fr]
				lg:gap-[120px]
			"> <!-- Heading --> <h2 class="
					max-w-[540px]
					font-clash
					text-[40px]
					font-semibold
					leading-[0.99]
					tracking-[-0.045em]
					text-black
					lg:text-[62px]
				">
Five steps to a
<span class="
						gradient-text
					">
distinctive
</span>
brand.
</h2> <!-- Intro Text --> <p class="
					max-w-[520px]
					font-geist
					text-[14px]
					font-normal
					leading-[1.55]
					tracking-[-0.015em]
					text-[#222222]
					lg:text-[20px]
					lg:leading-[1.5]
				">
Every brand strategy engagement follows a proven
				creative process — rigorous enough to deliver real
				insight, flexible enough to meet you where you are.
</p> </div> <!-- Steps --> <div class="mt-[55px] md:mt-[65px]"> ${steps.map((step) => renderTemplate`<div class="
							relative
							grid
							grid-cols-1
							gap-5
							py-[30px]
							md:grid-cols-[45px_minmax(180px,0.8fr)_minmax(260px,1fr)]
							md:gap-x-7
							md:gap-y-6
							md:py-[32px]
							lg:grid-cols-[70px_310px_minmax(330px,1fr)_minmax(260px,0.8fr)]
							lg:items-start
							lg:gap-x-[38px]
							lg:py-[38px]
						"> <!-- Top Gradient Border --> <div class="
								absolute
								left-0
								top-0
								h-px
								w-full
								bg-[linear-gradient(90deg,#FFB547_0%,#FF5B53_32%,#E12CA8_64%,#6F48F5_100%)]
							"></div> <!-- Number --> <div class="
								font-clash
								text-[24px]
								font-extralight
								leading-none
								tracking-[-0.03em]
								md:text-[26px]
							"> ${step.number} </div> <!-- Title --> <h3 class="
								font-clash
								text-[22px]
								font-medium
								leading-[1.1]
								tracking-[-0.03em]
								text-[#0B0B0B]
								sm:text-[24px]
								lg:text-[25px]
							"> ${step.title} </h3> <!-- Description --> <p class="
								max-w-[390px]
								font-geist
								text-[13px]
								font-normal
								leading-[1.55]
								tracking-[-0.01em]
								text-[#010101]
								lg:text-[18px]
								lg:leading-[1.6]
							"> ${step.description} </p> <!-- Tags --> <div class="
								flex
								flex-wrap
								items-start
								gap-[8px]
								md:col-start-3
								lg:col-start-auto
								lg:justify-end
							"> ${step.tags.map((tag) => renderTemplate`<span class="
											inline-flex
											min-h-[27px]
											font-geist
											items-center
											justify-center
											whitespace-nowrap
											rounded-full
											border
											border-[#DCDCDC]
											bg-white
											px-[13px]
											py-[5px]
											font-clash
											text-[16px]
											font-normal
											leading-none
											text-[#4A4A4A]
											transition-all
											duration-300
											hover:border-[#A9A9A9]
											hover:text-black
										"> ${tag} </span>`)} </div> </div>`)} <!-- Last Bottom Gradient Line --> <div class="
					h-px
					w-full
					bg-[linear-gradient(90deg,#FFB547_0%,#FF5B53_32%,#E12CA8_64%,#6F48F5_100%)]
				"></div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/services/OurApproachBrandStrategy.astro", void 0);

const $$WhatYouGetBrandStrategy = createComponent(($$result, $$props, $$slots) => {
  const deliverables = [
    {
      number: "01",
      title: "Brand Strategy Document"
    },
    {
      number: "02",
      title: "Positioning Statement"
    },
    {
      number: "03",
      title: "Core Messaging Framework"
    },
    {
      number: "04",
      title: "Brand Voice Guidelines"
    },
    {
      number: "05",
      title: "Audience Personas"
    },
    {
      number: "06",
      title: "Competitive Landscape Report"
    },
    {
      number: "07",
      title: "Brand Architecture Map"
    },
    {
      number: "08",
      title: "Customer Journey Map"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-black text-white lg:mt-20 mt-0"> <div class="mx-auto max-w-7xl px-4 lg:px-8 lg:py-18 py-10"> <!-- Top Button --> <a href="#" class="
				site-btn
				!mt-0
				!border-[#C78B32]
				!bg-transparent
				!text-white
				hover:!bg-white/[0.04]
			"> <span class="
					gradient-bg
					h-[22px]
					w-[22px]
					shrink-0
					rounded-full
				"></span> <span>What You Get</span> </a> <!-- Main Content --> <div class="
				mt-[42px]
				grid
				grid-cols-1
				gap-[50px]

				md:mt-[55px]
				lg:grid-cols-[300px_minmax(0,1fr)]
				lg:gap-[70px]

				xl:grid-cols-[360px_minmax(0,1fr)]
				xl:gap-[90px]
			"> <!-- LEFT --> <div> <h2 class="
						max-w-[320px]
						font-clash
						text-[42px]
						font-semibold
						leading-[0.96]
						tracking-[-0.04em]
						text-white

						sm:text-[48px]

						lg:text-[52px]
					">
Every
<br>
engagement
<br>
includes
</h2> <p class="
						mt-[25px]
						max-w-[310px]
						font-clash
						text-[14px]
						font-normal
						leading-[1.6]
						tracking-[-0.01em]
						text-[#7A7A7A]
						lg:text-[16px]
					">
A clear, actionable set of deliverables that give
					your team everything needed to build and grow
					your brand with confidence.
</p> </div> <!-- RIGHT --> <div class="w-full lg:pt-[12px]"> <div class="
						grid
						grid-cols-1

						md:grid-cols-2
						md:gap-x-[36px]

						xl:gap-x-[54px]
					"> ${deliverables.map((item) => renderTemplate`<div class="
									group
									flex
									min-h-[78px]
									items-center
									gap-[14px]
									border-b
									border-[#1D1D1D]
									transition-colors
									duration-300

									hover:border-[#3A3A3A]

									sm:gap-[16px]
									md:min-h-[82px]
								"> <!-- Number --> <span class="
										shrink-0
										font-clash
										text-[18px]
										font-normal
										leading-none
										text-[#282828]
										transition-colors
										duration-300
										group-hover:text-[#676767]
									"> ${item.number} </span> <!-- Title --> <h3 class="
										font-clash
										text-[14px]
										font-normal
										leading-[1.3]
										tracking-[-0.02em]
										text-[#D8D8D8]
										transition-colors
										duration-300
										group-hover:text-white
										lg:text-[18px]
									"> ${item.title} </h3> </div>`)} </div> </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/services/WhatYouGetBrandStrategy.astro", void 0);

const $$SelectedWorkBrandStrategy = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$SelectedWorkBrandStrategy;
  const defaultWorks = [
    {
      number: "01",
      title: "Afro Cafe",
      categories: "Brand Strategy • Brand Identity • Packaging",
      description: "Creating a premium hospitality experience through strategy, design and storytelling.",
      image: "/img/selected-work/afro-cafe.webp",
      link: "/portfolio/afro-cafe"
    },
    {
      number: "02",
      title: "Bainbridge",
      categories: "Brand Strategy • Website • Social Media",
      description: "Building a clear identity and digital presence that truly represents who they are.",
      image: "/img/selected-work/bainbridge.webp",
      link: "/portfolio/bainbridge"
    }
  ];
  const {
    title = "Selected Work",
    seeAllText = "See All",
    seeAllLink = "/portfolio",
    works = defaultWorks
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="
			mx-auto max-w-7xl px-4 lg:px-8 lg:py-18 py-10
		"> <!-- Header --> <div class="flex items-center justify-between gap-6"> <h2 class="
					font-clash
					text-[38px]
					font-semibold
					leading-none
					tracking-[-0.045em]
					text-black
					sm:text-[46px]
					lg:text-[56px]
				"> ${title} </h2> <a${addAttribute(seeAllLink, "href")} class="
					group
					inline-flex
					shrink-0
					items-center
					gap-[14px]
					font-clash
					text-[13px]
					font-normal
					text-[#171717]
					no-underline

					sm:text-[14px]
				"> <span>${seeAllText}</span> <span class="flex items-center"> <span class="
							h-px
							w-[22px]
							bg-[linear-gradient(90deg,#FF8E3D_0%,#F13A8A_48%,#6843F5_100%)]
							transition-all
							duration-300
							group-hover:w-[32px]
						"></span> <svg viewBox="0 0 8 12" fill="none" class="
							-ml-px
							h-[10px]
							w-[7px]
							text-[#6A43F4]
						" aria-hidden="true"> <path d="M1 1L6 6L1 11" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path> </svg> </span> </a> </div> <!-- Work Grid --> <div class="
				mt-[42px]
				grid
				grid-cols-1
				gap-x-[24px]
				gap-y-[48px]

				md:grid-cols-2

				lg:mt-[55px]
				lg:gap-x-[26px]
			"> ${works.map((work) => renderTemplate`<article class="group"> <!-- Image --> <a${addAttribute(work.link, "href")} class="
								block
								overflow-hidden
								rounded-[5px]
								bg-[#F3F3F3]
							"> <img${addAttribute(work.image, "src")}${addAttribute(work.title, "alt")} loading="lazy" class="
									aspect-[1.52/1]
									w-full
									object-cover
									transition-transform
									duration-700
									ease-out

									group-hover:scale-[1.025]
								"> </a> <!-- Information --> <div class="
								mt-[15px]
								flex
								items-start
								gap-[9px]
							"> <!-- Number --> <span class="
									mt-[3px]
									shrink-0
									font-clash
									text-[20px]
									font-extralight
									leading-none
									tracking-[-0.04em]
									text-[#010101]
									lg:text-[23px]
								"> ${work.number} </span> <div class="min-w-0"> <!-- Title --> <a${addAttribute(work.link, "href")} class="no-underline"> <h3 class="
											font-clash
											text-[28px]
											font-semibold
											leading-[0.95]
											tracking-[-0.04em]
											text-black
											transition-opacity
											duration-300
											group-hover:opacity-70
											lg:text-[35px]
										"> ${work.title} </h3> </a> <!-- Categories --> <p class="
										mt-[5px]
										font-clash
										text-[15px]
										font-normal
										leading-[1.25]
										tracking-[-0.025em]
										text-[#272727]
										lg:text-[25px]
									"> ${work.categories} </p> <!-- Description --> <p class="
										mt-[5px]
										max-w-[590px]
										font-clash
										text-[12px]
										font-medium
										leading-[1.45]
										tracking-[-0.01em]
										text-[#777777]
										lg:text-[16px]
									"> ${work.description} </p> </div> </div> </article>`)} </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/services/SelectedWorkBrandStrategy.astro", void 0);

const $$StatsStripBrandStrategy = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    {
      value: "94%",
      label: "Client retention rate"
    },
    {
      value: "3×",
      label: "Average growth in brand recall"
    },
    {
      value: "48h",
      label: "Strategy workshop delivery"
    },
    {
      value: "60+",
      label: "Brands transformed"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="mx-auto max-w-7xl px-4 lg:px-8 lg:pb-10 pb-10"> <!-- Top Gradient Line --> <div class="
				h-px
				w-full
				bg-[linear-gradient(90deg,#FFB547_0%,#FF5A55_34%,#E72CA5_66%,#6848F5_100%)]
			"></div> <!-- Stats Grid --> <div class="
				grid
				grid-cols-1

				sm:grid-cols-2

				lg:grid-cols-4
			"> ${stats.map((stat, index) => renderTemplate`<div${addAttribute([
    `
								flex
								min-h-[175px]
								flex-col
								justify-center
								px-[26px]
								py-[28px]

								sm:min-h-[180px]
								sm:px-[32px]

								lg:min-h-[178px]
								lg:px-[44px]
								lg:py-[35px]
							`,
    index !== 0 ? "border-t border-[#ECECEC] sm:border-t-0 sm:border-l" : "",
    index >= 2 ? "sm:border-t lg:border-t-0" : ""
  ], "class:list")}> <!-- Value --> <h3 class="
								font-clash
								text-[46px]
								font-semibold
								leading-none
								tracking-[-0.045em]
                                gradient-text
								lg:text-[56px]
							"> ${stat.value} </h3> <!-- Label --> <p class="
								mt-[12px]
								max-w-[170px]
								font-geist
								text-[16px]
								font-normal
								leading-[1.45]
								tracking-[0.015em]
								text-[#010101]
							"> ${stat.label} </p> </div>`)} </div> <!-- Bottom Gradient Line --> <div class="
				h-px
				w-full
				bg-[linear-gradient(90deg,#FFB547_0%,#FF5A55_34%,#E72CA5_66%,#6848F5_100%)]
			"></div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/services/StatsStripBrandStrategy.astro", void 0);

const $$BrandsBrandStrategy = createComponent(($$result, $$props, $$slots) => {
  const brands = [
    {
      name: "Nymora",
      image: "/img/bb.png"
    },
    {
      name: "Afro House",
      image: "/img/ab.png"
    },
    {
      name: "Veer Prabhu",
      image: "/img/gf.png"
    },
    {
      name: "Brand 04",
      image: "/img/Layer_1 2.png"
    },
    {
      name: "Sawaca",
      image: "/img/neujin.png"
    },
    {
      name: "Brand 06",
      image: "/img/neulearn.png"
    },
    {
      name: "Artisanal Byte",
      image: "/img/veer.png"
    },
    {
      name: "Brand 08",
      image: "/img/Vector.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-black"> <div class="mx-auto max-w-4xl px-4 lg:px-8 lg:py-10 py-10"> <!-- Heading --> <h2 class="
				text-center
				font-clash
				text-[18px]
				font-normal
				leading-none
				tracking-[-0.02em]
				text-white
				lg:text-[28px]
			">
Brands we've helped
</h2> <!-- Logos --> <div class="
				mt-[30px]
				grid
				grid-cols-2
				items-center
				gap-x-8
				gap-y-8
				sm:grid-cols-3
				md:grid-cols-5
				lg:mt-[34px]
				lg:grid-cols-8
				lg:gap-x-[30px]
			"> ${brands.map((brand) => renderTemplate`<div class="
							group
							flex
							h-[42px]
							w-full
							items-center
							justify-center
						"> <img${addAttribute(brand.image, "src")}${addAttribute(brand.name, "alt")} loading="lazy" class="
								max-h-[34px]
								max-w-[90px]
								object-contain
								opacity-90
								transition-all
								duration-300

								group-hover:opacity-100
								group-hover:scale-105

								lg:max-h-[31px]
								lg:max-w-[92px]
							"> </div>`)} </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/services/BrandsBrandStrategy.astro", void 0);

const $$FaqBrandStrategy = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "What makes your brand strategy different?",
      answer: "Our approach combines research, positioning, messaging and creative thinking to build a strategy that is practical, distinctive and aligned with your business goals."
    },
    {
      question: "How long does a brand strategy project take?",
      answer: "Most brand strategy engagements take several weeks depending on the scope, complexity and level of research required."
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Yes. We work with early-stage startups as well as established businesses that need stronger positioning, messaging and brand direction."
    },
    {
      question: "What do we need to bring to the process?",
      answer: "We ask you to bring your business context, goals, customer understanding and an openness to collaborate throughout the strategy process."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="mx-auto
			grid
			w-full
			max-w-7xl
			grid-cols-1
			gap-[45px]
			px-5
			py-[65px]
			sm:px-6
			md:py-[80px]
			lg:grid-cols-[300px_minmax(0,1fr)]
			lg:gap-[95px]
			lg:px-8
			lg:py-[95px]
			xl:grid-cols-[360px_minmax(0,1fr)]
			xl:gap-[110px]"> <!-- LEFT --> <div> <h2 class="
					max-w-[540px]
					font-clash
					text-[40px]
					font-semibold
					leading-[0.99]
					tracking-[-0.045em]
					text-black
					lg:text-[55px]
					uppercase
				"> <span class="block"> Frequently </span> <span class="block
						w-fit
						bg-[linear-gradient(90deg,#FF9E45_0%,#FF4C55_30%,#DE2B9D_62%,#6742ED_100%)]
						bg-clip-text
						text-transparent">
Asked
</span> </h2> </div> <!-- RIGHT / FAQ --> <!-- RIGHT / FAQ --> <div class="w-full"> <!-- First Top Gradient Line --> <div class="
			h-px
			w-full
			bg-[linear-gradient(90deg,#FFB547_0%,#FF5A55_32%,#E12CA8_65%,#6848F5_100%)]
		"></div> ${faqs.map((faq) => renderTemplate`<details name="faq-group" class="
					group
					border-b
					border-transparent
					[border-image:linear-gradient(90deg,#FFB547_0%,#FF5A55_32%,#E12CA8_65%,#6848F5_100%)_1]
				"> <!-- Question --> <summary class="
						flex
						min-h-[50px]
						cursor-pointer
						list-none
						items-center
						justify-between
						gap-5
						py-[20px]
						[&::-webkit-details-marker]:hidden
					"> <h3 class="
							m-0
							font-clash
							text-[18px]
							font-medium
							leading-[1.3]
							tracking-[-0.025em]
							text-[#111111]
							lg:text-[20px]
						"> ${faq.question} </h3> <!-- Plus / Minus --> <span class="
							relative
							flex
							h-[30px]
							w-[30px]
							shrink-0
							items-center
							justify-center
							rounded-full
							border
							border-[#FFB547]
						"> <!-- Horizontal --> <span class="
								absolute
								h-px
								w-[10px]
								bg-[linear-gradient(90deg,#FF983F,#E82F91,#6742ED)]
							"></span> <!-- Vertical --> <span class="
								absolute
								h-[10px]
								w-px
								bg-[linear-gradient(180deg,#FF983F,#E82F91,#6742ED)]
								transition-transform
								duration-300
								group-open:scale-y-0
							"></span> </span> </summary> <!-- Answer --> <div class="
						max-w-[760px]
						pb-[10px]
						pr-[50px]
					"> <p class="
							m-0
							font-clash
							text-[14px]
							font-normal
							leading-[1.65]
							text-[#737373]

							sm:text-[15px]
						"> ${faq.answer} </p> </div> </details>`)} </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/services/FaqBrandStrategy.astro", void 0);

const $$BrandStrategy = createComponent(async ($$result, $$props, $$slots) => {
  const reader = createReader(process.cwd(), config);
  const site = await reader.singletons.site.read();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "navbar": site?.navbar })} ${renderComponent($$result2, "BrandStrategyHero", $$BrandStrategyHero, {})} ${renderComponent($$result2, "ServiceGrid", $$ServicesGrid, {})} ${renderComponent($$result2, "BrandStrategyDetails", $$BrandStrategyDetails, {})} ${renderComponent($$result2, "OurApproachBrandStrategy", $$OurApproachBrandStrategy, {})} ${renderComponent($$result2, "WhatYouGetBrandStrategy", $$WhatYouGetBrandStrategy, {})} ${renderComponent($$result2, "SelectedWorkBrandStrategy", $$SelectedWorkBrandStrategy, {})} ${renderComponent($$result2, "StatsStripBrandStrategy", $$StatsStripBrandStrategy, {})} ${renderComponent($$result2, "BrandBrandStrategy", $$BrandsBrandStrategy, {})} ${renderComponent($$result2, "Faq", $$FaqBrandStrategy, {})} ${renderComponent($$result2, "BrandPhilosophy", $$BrandPhilosophy, {})} ${renderComponent($$result2, "Footer", $$Footer, { "footer": site?.footer })} ` })}`;
}, "D:/D Drive/artisanal-byte/topklickz/src/pages/brand-strategy.astro", void 0);

const $$file = "D:/D Drive/artisanal-byte/topklickz/src/pages/brand-strategy.astro";
const $$url = "/brand-strategy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$BrandStrategy,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
