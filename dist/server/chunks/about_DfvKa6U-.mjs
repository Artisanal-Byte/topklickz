import { c as createComponent } from './astro-component_CBHne6EO.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, d as renderTemplate, e as renderComponent } from './server_DPeHzCWX.mjs';
import { r as renderScript, $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_BMrz0d2e.mjs';
import { c as config } from './keystatic.config_B9neeRdH.mjs';
import { createReader } from '@keystatic/core/reader';
import 'clsx';
import { $ as $$BrandPhilosophy } from './BrandPhilosophy_oeKePv-n.mjs';
import { $ as $$AboutCtc } from './AboutCtc_zLEBZxYF.mjs';

const $$WhoWeAre = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$WhoWeAre;
  const descriptions = [
    "We believe strong brands are built through clarity, consistency and craftsmanship.",
    "Every project is an opportunity to solve a real challenge, create a stronger connection and leave a lasting impression.",
    "We don't chase trends. We build systems that help businesses grow with purpose.",
    "Our goal is to inspire innovation and foster creativity in every aspect of our work."
  ];
  const stats = [
    {
      value: 8,
      suffix: "+",
      label: "YEARS OF EXPERIENCE"
    },
    {
      value: 150,
      suffix: "+",
      label: "PROJECTS DELIVERED"
    },
    {
      value: 30,
      suffix: "+",
      label: "BRANDS BUILT"
    },
    {
      value: 20,
      suffix: "+",
      label: "INDUSTRIES SERVED"
    },
    {
      value: 98,
      suffix: "%",
      label: "CLIENT RETENTION"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section> <div class="mx-auto max-w-5xl px-4 py-10 lg:px-8 lg:py-20"> <!-- Top Section --> <div class="
				grid grid-cols-1 gap-5
				lg:grid-cols-[0.8fr_1.5fr]
				lg:gap-24
			"> <!-- Left --> <div> <h2 class="
						m-0
						font-clash
						text-[22px]
						font-semibold
						uppercase
						leading-none
						tracking-[0.04em]
						text-[#111111]
					">
WHO WE ARE
</h2> <div class="
						mt-2
						h-[4px]
						w-[94px]
						bg-gradient-to-r
						from-[#ff9b42]
						via-[#ef2362]
						to-[#6944db]
					"></div> </div> <!-- Right --> <div class="
					max-w-[590px]
					font-geist
					text-[16px]
					font-normal
					leading-[24px]
					tracking-normal
					text-[#1d1d1d]
				"> ${descriptions.map((paragraph, index) => renderTemplate`<p${addAttribute(index === 0 ? "m-0" : "mb-0 mt-3 lg:mt-5", "class")}> ${paragraph} </p>`)} </div> </div> </div> <!-- Stats --> <div class="mx-auto max-w-7xl px-6 lg:px-8"> <div class="border-t [border-image:linear-gradient(to_right,#ff9b42,#ef2362,#6944db)_1]"> <div class="
					grid
					grid-cols-1
					sm:grid-cols-2
					lg:grid-cols-5
				"> ${stats.map((stat, index) => renderTemplate`<div${addAttribute([
    "min-h-[145px] px-5 py-9 sm:px-6 lg:px-5",
    index !== stats.length - 1 && "lg:border-r lg:[border-image:linear-gradient(to_bottom,#ff9b42,#ef2362,#6944db)_1]",
    index !== stats.length - 1 && "max-lg:border-b max-lg:[border-image:linear-gradient(to_right,#ff9b42,#ef2362,#6944db)_1]"
  ], "class:list")}> <h3 class="
									font-clash-display
									text-4xl
									font-[550]
									leading-[120%]
									tracking-normal
									gradient-text
									lg:text-[45px]
								"> <span class="counter"${addAttribute(stat.value, "data-target")}${addAttribute(stat.suffix, "data-suffix")}>
0${stat.suffix} </span> </h3> <p class="
									mb-0
									mt-3
									font-satoshi
									text-[15px]
									font-normal
									uppercase
									leading-[15.75px]
									tracking-[0.84px]
									text-[#858585]
								"> ${stat.label} </p> </div>`)} </div> </div> </div> </section> ${renderScript($$result, "D:/D Drive/artisanal-byte/topklickz/src/components/WhoWeAre.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/WhoWeAre.astro", void 0);

const $$OurStroy = createComponent(($$result, $$props, $$slots) => {
  const descriptions = [
    "Founded in Ahmedabad, TOPKLICKZ started with a simple belief:businesses deserve more than generic marketing.",
    "What began as a passion for design and communication has evolvedinto a multidisciplinary studio helping brands navigate growth through strategy, identity and digital experiences.",
    "Today, we work with founders, startups and established businesses tobuild brands people remember."
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-[#D9D9D93D] mt-10"> <div class="mx-auto max-w-5xl px-4 lg:px-8 py-10 lg:py-20"> <!-- Top Section --> <div class="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24"> <!-- Left --> <div> <h2 class="m-0
						font-clash
						text-[22px]
						font-semibold
						uppercase
						leading-none
						tracking-[0.04em]
						text-[#111111]">
OUR STORY
</h2> <div class="mt-2
						h-[4px]
						w-[94px]
						bg-gradient-to-r
						from-[#ff9b42]
						via-[#ef2362]
						to-[#6944db]"></div> </div> <!-- Right --> <div class="max-w-[590px] font-geist text-[16px] font-normal leading-[24px] tracking-normal text-[#1d1d1d]"> ${descriptions.map((paragraph, index) => renderTemplate`<p${addAttribute(index === 0 ? "m-0" : "mb-0 mt-3 lg:mt-5", "class")}> ${paragraph} </p>`)} </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/OurStroy.astro", void 0);

const $$WhatWeBelieve = createComponent(($$result, $$props, $$slots) => {
  const beliefs = [
    {
      number: "01",
      title: "CLARITY BEATS COMPLEXITY",
      description: "The best brands communicate simply, consistently and confidently."
    },
    {
      number: "02",
      title: "SYSTEMS OUTPERFORM CAMPAIGNS",
      description: "Long-term growth comes from strong foundations, not one-off tactics."
    },
    {
      number: "03",
      title: "CRAFT CREATES TRUST",
      description: "Every detail shapes perception. Thoughtful execution builds credibility."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="
			mx-auto max-w-7xl px-5 lg:px-8 py-10 lg:py-20
		"> <!-- Heading --> <div> <h2 class="
					m-0
					font-clash
					text-[24px]
					font-semibold
					uppercase
					leading-[1.2]
					tracking-[0.04em]
					text-[#0b0b0b]
				">
WHAT WE BELIEVE
</h2> <div class="
					mt-2
					h-[3px]
					w-[104px]
					bg-[linear-gradient(90deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
				"></div> </div> <!-- Beliefs --> <div class="
				mt-3
				grid
				grid-cols-1
				md:mt-16
				md:grid-cols-3
				lg:mt-7
			"> ${beliefs.map((belief, index) => renderTemplate`<div${addAttribute([
    "relative px-0 py-8 md:min-h-[218px]  lg:px-10",
    index !== beliefs.length - 1 && "border-b [border-image:linear-gradient(to_bottom,#ff9b42,#ef2362,#6944db)_1] md:border-r md:border-b-0",
    index === 0 && "md:pl-10 lg:pl-10",
    index === beliefs.length - 1 && "md:pr-0 lg:pl-10"
  ], "class:list")}> <!-- Number --> <p class="
								m-0
								font-satoshi
								text-[14px]
								font-normal
								leading-[22px]
								tracking-[0]
								text-[#7d7a76]
							"> ${belief.number} </p> <!-- Title --> <h3 class="
								mb-0
								mt-4
								font-clash-display
								text-[15px]
								font-semibold
								uppercase
								leading-[1.2]
								tracking-[-0.02em]
							"> ${belief.title} </h3> <!-- Description --> <p class="
                                    mb-0
                                    mt-3
                                    max-w-[340px]
                                    font-satoshi
                                    text-[13.5px]
                                    font-normal
                                    leading-[22.27px]
                                    tracking-[1px]
                                    text-[#6B6962]
                                "> ${belief.description} </p> </div>`)} </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/WhatWeBelieve.astro", void 0);

const $$OurProcess = createComponent(($$result, $$props, $$slots) => {
  const processSteps = [
    {
      number: "01",
      title: "DISCOVER",
      description: "We start by understanding your business, audience and goals."
    },
    {
      number: "02",
      title: "DEFINE",
      description: "We uncover opportunities, shape positioning and establish direction."
    },
    {
      number: "03",
      title: "DESIGN",
      description: "We create identities, experiences and content systems that bring ideas to life."
    },
    {
      number: "04",
      title: "DELIVER",
      description: "We launch, refine and support solutions designed for long-term impact."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-[#D9D9D93D]"> <div class="
			mx-auto
			max-w-7xl
			px-6
			py-10
			lg:px-8
			lg:py-16
		"> <!-- Heading --> <div> <h2 class="
					m-0
					font-clash
					text-[24px]
					font-semibold
					uppercase
					leading-[1.2]
					tracking-[0.04em]
					text-[#0b0b0b]
				">
OUR PROCESS
</h2> <!-- Gradient Line --> <div class="
					mt-2
					h-[3px]
					w-[104px]
					bg-[linear-gradient(90deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
				"></div> </div> <!-- Process Grid --> <div class="
				mt-8
				grid
				grid-cols-1
				border-t
				[border-image:linear-gradient(to_right,#ff9b42,#ef2362,#6944db)_1]
				md:grid-cols-2
				lg:grid-cols-4
			"> ${processSteps.map((step, index) => renderTemplate`<div${addAttribute([
    "relative px-0 py-5 lg:py-9 md:min-h-[168px] md:px-7 lg:px-8",
    /* Desktop vertical divider */
    index !== processSteps.length - 1 && "lg:border-r lg:border-[#D2D0CB]",
    /* Tablet dividers */
    index % 2 === 0 && "md:border-r md:border-[#D2D0CB] lg:border-r",
    /* Mobile horizontal divider */
    index !== processSteps.length - 1 && "border-b [border-image:linear-gradient(to_bottom,#ff9b42,#ef2362,#6944db)_1] md:border-b-0",
    /* First column alignment */
    index === 0 && "md:pl-0 lg:pl-0"
  ], "class:list")}> <!-- Number --> <p class="
								m-0
								font-satoshi
								text-[11px]
								font-normal
								leading-[16.5px]
								tracking-[1.1px]
								text-[#7D7A74]
							"> ${step.number} </p> <!-- Title --> <h3 class="
								mb-0
								mt-5
								font-clash-display
								text-[15px]
								font-semibold
								uppercase
								leading-[1.2]
								tracking-[0px]
								text-[#111111]
							"> ${step.title} </h3> <!-- Description --> <p class="
								mb-0
								mt-4
								max-w-[280px]
								font-satoshi
								text-[13.5px]
								font-normal
								leading-[22.27px]
								tracking-[0px]
								text-[#6B6962]
							"> ${step.description} </p> </div>`)} </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/OurProcess.astro", void 0);

const $$OurApproach = createComponent(($$result, $$props, $$slots) => {
  const approachItems = [
    {
      title: "STRATEGY FIRST",
      description: "Every project begins with insight and understanding."
    },
    {
      title: "DESIGN WITH INTENT",
      description: "Every decision serves a purpose."
    },
    {
      title: "SYSTEMS OVER CAMPAIGNS",
      description: "Consistency creates stronger brands."
    },
    {
      title: "CRAFT MATTERS",
      description: "Attention to detail elevates perception."
    },
    {
      title: "PARTNERSHIP MINDSET",
      description: "We work alongside our clients, not just for them."
    },
    {
      title: "LONG-TERM THINKING",
      description: "We focus on value that lasts beyond launch."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="mx-auto
			grid
			max-w-7xl
			grid-cols-1
			gap-12
			px-5
			py-10
			lg:grid-cols-[0.72fr_1.10fr]
			lg:gap-16
			lg:px-8
			lg:py-20"> <!-- Left Content --> <div> <p class="m-0
					font-satoshi
					text-[12px]
					font-bold
					uppercase
					leading-[18px]
					tracking-[2px]
					text-[#6B6962]">
OUR APPROACH
</p> <h2 class="mt-6
                        mb-0
                        font-clash-display
                        lg:text-[40px]
                        text-[25px]
                        font-semibold
                        uppercase
                        lg:leading-[44.4px]
                        tracking-[-0.4px]
                        text-[#0A0A0A]">
THOUGHTFUL WORK.<br> <span class="bg-[linear-gradient(90deg,#5342D6_0%,#663DE0_55%,#7A41DE_100%)]
			bg-clip-text
			text-transparent">
LASTING IMPACT.
</span> </h2> <div class="mt-3
					h-[3px]
					w-[104px]
					bg-[linear-gradient(90deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]"></div> </div> <!-- Right Grid --> <div class="grid
				grid-cols-1
				border
				[border-image:linear-gradient(to_right,#ff9b42,#ef2362,#6944db)_1]
				md:grid-cols-2
				lg:grid-cols-3"> ${approachItems.map((item, index) => renderTemplate`<div${addAttribute([
    "min-h-[150px] px-6 py-7",
    /* desktop vertical borders */
    index % 3 !== 2 && "lg:border-r lg:[border-image:linear-gradient(to_bottom,#ff9b42,#ef2362,#6944db)_1]",
    /* desktop first row bottom border */
    index < 3 && "lg:border-b lg:[border-image:linear-gradient(to_bottom,#ff9b42,#ef2362,#6944db)_1]",
    /* tablet borders */
    index % 2 === 0 && "md:border-r md:[border-image:linear-gradient(to_bottom,#ff9b42,#ef2362,#6944db)_1] lg:border-r",
    index < approachItems.length - 2 && "md:border-b md:[border-image:linear-gradient(to_bottom,#ff9b42,#ef2362,#6944db)_1] lg:border-b",
    /* mobile */
    index !== approachItems.length - 1 && "border-b [border-image:linear-gradient(to_bottom,#ff9b42,#ef2362,#6944db)_1] md:border-b"
  ], "class:list")}> <h3 class="
								m-0
								max-w-[190px]
								font-clash-display
								text-[15px]
								font-semibold
								uppercase
								leading-[22px]
								tracking-[0px]
								text-[#0A0A0A]
							"> ${item.title} </h3> <p class="
								mb-0
								mt-3
								max-w-[210px]
								font-satoshi
								text-[13.5px]
								font-normal
								leading-[22.27px]
								tracking-[0px]
								text-[#6B6962]
							"> ${item.description} </p> </div>`)} </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/OurApproach.astro", void 0);

const $$AboutWork = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "MAHAARAJAA",
      category: "Brand Identity, Packaging",
      image: "/img/mahaarajaa.jpg",
      link: "#"
    },
    {
      title: "GLOBOFARM",
      category: "Website, Content, Digital Experience",
      image: "/img/globofarm.jpg",
      link: "#"
    },
    {
      title: "PICKLEBALL COMMUNITY",
      category: "Identity, Website, Social Media",
      image: "/img/pickleball.jpg",
      link: "#"
    },
    {
      title: "AURUM CAFÉ",
      category: "Brand Identity, Website, Content",
      image: "/img/aurum-cafe.jpg",
      link: "#"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="
			mx-auto
			w-full
			max-w-7xl
			px-4
			py-3
			lg:px-8
			lg:py-0
		"> <!-- Top Content --> <div class="flex flex-col gap-5"> <!-- Label --> <p class="
					m-0
					font-satoshi
					text-[11px]
					font-bold
					uppercase
					leading-[16.5px]
					tracking-[2px]
					text-[#6B6962]
				">
SELECTED WORK
</p> <!-- Heading --> <div> <h2 class="
                        mb-0
                        font-clash-display
                        lg:text-[40px]
						text-[25px]
                        font-semibold
                        uppercase
                        lg:leading-[44.4px]
                        tracking-[-0.4px]
                        text-[#0A0A0A]
					">
WORK THAT<br>
SHAPES
<span class="
							bg-[linear-gradient(90deg,#F2203E_0%,#EE1F49_45%,#D42383_100%)]
							bg-clip-text
							text-transparent
						">
PERCEPTION
</span> </h2> <!-- Gradient underline --> <div class="
						mt-3
						h-[3px]
						w-[104px]
						bg-[linear-gradient(90deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
					"></div> </div> <!-- Description + See All --> <div class="
					flex
					flex-col
					gap-8
					lg:flex-row
					lg:items-end
					lg:justify-between
				"> <p class="
						m-0
						max-w-[560px]
						font-satoshi
						text-[14px]
						font-normal
						leading-[22.27px]
						tracking-[1px]
						text-[#6B6962]
					">
A selection of branding, digital and content projects
					created for ambitious businesses across industries.
</p> <a href="/portfolio" class="
						group
						inline-flex
						w-fit
						items-center
						gap-3
						font-satoshi
						text-[13px]
						font-semibold
						uppercase
						leading-none
						tracking-[2px]
						text-black
					">
SEE ALL
<span class="
							inline-block
							bg-[linear-gradient(135deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
							bg-clip-text
							font-clash-display
							text-[30px]
							font-normal
							leading-none
							text-transparent
							transition-transform
							duration-300
							group-hover:translate-x-1
							group-hover:-translate-y-1
						">
↗
</span> </a> </div> </div> <!-- Projects Grid --> <div class="
				mt-6
				grid
				grid-cols-1
				gap-6
				sm:grid-cols-2
				lg:mt-16
				lg:grid-cols-4
				lg:gap-10
			"> ${projects.map((project, index) => renderTemplate`<a${addAttribute(project.link, "href")}${addAttribute([
    "group relative block overflow-hidden bg-[#d8d8d8]",
    "aspect-[0.8/1]",
    index === 1 && "lg:mt-12"
  ], "class:list")}> <!-- Image --> <img${addAttribute(project.image, "src")}${addAttribute(project.title, "alt")} class="
								absolute
								inset-0
								h-full
								w-full
								object-cover
								transition-transform
								duration-700
								ease-out
								group-hover:scale-[1.04]
							" loading="lazy"> <!-- Overlay --> <div class="
								absolute
								inset-0
								bg-gradient-to-t
								from-black/55
								via-black/5
								to-transparent
							"></div> <!-- Arrow --> <span class="
								absolute
								right-5
								top-5
								font-satoshi
								text-[20px]
								font-light
								text-white
								transition-transform
								duration-300
								group-hover:translate-x-1
								group-hover:-translate-y-1
							">
↗
</span> <!-- Bottom Content --> <div class="
								absolute
								bottom-0
								left-0
								w-full
								p-5
								sm:p-6
							"> <h3 class="
									m-0
									font-clash-display
									text-[14px]
									font-semibold
									uppercase
									leading-[20px]
									tracking-[0]
									text-white
								"> ${project.title} </h3> <p class="
									mb-0
									mt-1
									font-satoshi
									text-[10.5px]
									font-normal
									leading-[15.75px]
									tracking-[0px]
									text-white/70
								"> ${project.category} </p> </div> </a>`)} </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/AboutWork.astro", void 0);

const $$ClientLogo = createComponent(($$result, $$props, $$slots) => {
  const clientLogos = [
    {
      name: "Artisanal Byte",
      image: "/img/ab.png"
    },
    {
      name: "Neujin Solutions",
      image: "/img/neujin.png"
    },
    {
      name: "NeuLearn",
      image: "/img/neulearn.png"
    },
    {
      name: "Mahaa Rajaa",
      image: "/img/mh.png"
    },
    {
      name: "Veer Prabhu Developers",
      image: "/img/veer.png"
    },
    {
      name: "Indian Pickleball Association",
      image: "/img/ipl.png"
    },
    {
      name: "Cafe & Kitchen",
      image: "/img/Vector.png"
    },
    {
      name: "Sawaca Enterprises",
      image: "/img/sawaca.png"
    },
    {
      name: "Pickleball",
      image: "/img/bb.png"
    },
    {
      name: "Afro House",
      image: "/img/Layer_1 2.png"
    },
    {
      name: "Anand Niketan",
      image: "/img/an.png"
    },
    {
      name: "Globo Farm",
      image: "/img/gf.png"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="
			mx-auto
			max-w-7xl
			px-4
			py-8
			lg:px-8
			lg:py-20
		"> <!-- Top Content --> <div class="
				grid
				grid-cols-1
				gap-8
				lg:grid-cols-[260px_1px_1fr]
				lg:items-center
				lg:gap-7
			"> <!-- Heading --> <div> <h2 class="
						m-0
						font-clash-display
						lg:text-[28px]
						text-[25px]
						font-semibold
						uppercase
						leading-[33px]
						tracking-[1px]
						text-[#090909]
					">
CLIENT<br>
PERSPECTIVES.
</h2> <div class="
						mt-3
						h-[3px]
						w-[126px]
						bg-[linear-gradient(90deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
					"></div> </div> <!-- Vertical Divider --> <div class="
					hidden
					h-[62px]
					w-px
					bg-[#CFCFCF]
					lg:block
				"></div> <!-- Description --> <div class="lg:pl-0"> <p class="
						m-0
						font-satoshi
						text-[14px]
						font-normal
						leading-[20px]
						tracking-[1px]
						text-[#6B6962]
					">
The strongest partnerships are built on trust, transparency
					and shared ambition.<br class="hidden md:block">
We work closely with founders, teams and organizations to
					create brands, experiences<br class="hidden md:block">
and systems that deliver meaningful impact.
</p> </div> </div> <!-- Logo Area --> <div class="
				mt-12
				w-full
				bg-black
				px-6
				py-10
				sm:px-8
				lg:mt-12
				lg:px-12
				lg:py-9
			"> <div class="
					grid
					items-center
					gap-x-8
					gap-y-10
					grid-cols-1
					md:grid-cols-4
					lg:grid-cols-6
					lg:gap-x-8
					lg:gap-y-9
				"> ${clientLogos.map((client) => renderTemplate`<div class="
								flex
								min-h-[58px]
								items-center
								justify-center
							"> <img${addAttribute(client.image, "src")}${addAttribute(client.name, "alt")} loading="lazy" class="
									max-h-[54px]
									w-auto
									max-w-[145px]
									object-contain
									brightness-0
									invert
									opacity-80
									transition-all
									duration-300
									hover:opacity-100
								"> </div>`)} </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/ClientLogo.astro", void 0);

const $$Team = createComponent(($$result, $$props, $$slots) => {
  const teamMembers = [
    {
      name: "Lorem Ipsum",
      role: "Technology Lead",
      image: "/img/team/team-1.jpg"
    },
    {
      name: "Lorem Ipsum",
      role: "Technology Lead",
      image: "/img/team/team-2.jpg"
    },
    {
      name: "Lorem Ipsum",
      role: "Technology Lead",
      image: "/img/team/team-3.jpg"
    },
    {
      name: "Lorem Ipsum",
      role: "Technology Lead",
      image: "/img/team/team-4.jpg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full lg:pl-30 overflow-hidden bg-white py-4 lg:py-0"> <!-- Heading --> <div class="mx-auto max-w-[1500px] px-4 lg:px-0"> <h2 class="
				m-0
				font-clash-display
				text-[26px]
				font-semibold
				uppercase
				leading-[32px]
				tracking-[2px]
				text-[#090909]
			">
TEAM
</h2> <div class="
				mt-1
				h-[4px]
				w-[90px]
				bg-[linear-gradient(90deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
			"></div> </div> <!-- Team Grid --> <div class="
			mx-auto
			mt-10
			grid
			max-w-[1650px]
			grid-cols-1
			gap-8
			px-4
			sm:grid-cols-2
			lg:grid-cols-4
			lg:items-start
			lg:gap-[30px]
			lg:px-0
		"> ${teamMembers.map((member) => renderTemplate`<article class="
						group
						relative
						cursor-pointer
					"> <!-- Image --> <div class="
							relative
							h-[340px]
							w-full
							overflow-hidden
							bg-[#eeeeee]
							transition-[height]
							duration-500
							ease-in-out

							lg:h-[305px]
							lg:group-hover:h-[455px]
						"> <img${addAttribute(member.image, "src")}${addAttribute(member.name, "alt")} loading="lazy" class="
								absolute
								inset-0
								h-full
								w-full
								object-cover
								object-top
								grayscale
								transition-all
								duration-500
								ease-in-out

								group-hover:grayscale-0
							"> </div> <!-- Gradient line --> <div class="
							h-[3px]
							w-full
							origin-left
							scale-x-0
							bg-[linear-gradient(90deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
							transition-transform
							duration-500
							ease-out

							group-hover:scale-x-100
						"></div> <!-- Content --> <div class="
							pt-5
							transition-all
							duration-500
							ease-out
						"> <h3 class="
								m-0
								font-clash-display
								text-[18px]
								font-semibold
								leading-[24px]
								tracking-[0px]
								text-[#111111]
							"> ${member.name} </h3> <p class="
								mb-0
								mt-2
								font-satoshi
								text-[15px]
								font-normal
								leading-[22px]
								tracking-[0px]
								text-[#6B6962]
							"> ${member.role} </p> </div> </article>`)} </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/Team.astro", void 0);

const $$StudioImages = createComponent(($$result, $$props, $$slots) => {
  const studioImages = [
    {
      image: "/img/studio/studio-1.jpg",
      alt: "Studio Image 1"
    },
    {
      image: "/img/studio/studio-2.jpg",
      alt: "Studio Image 2"
    },
    {
      image: "/img/studio/studio-3.jpg",
      alt: "Studio Image 3"
    },
    {
      image: "/img/studio/studio-4.jpg",
      alt: "Studio Image 4"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="
			mx-auto
			max-w-7xl
			px-4
			py-5
			lg:px-8
			lg:py-20
		"> <div> <!-- Heading --> <div> <h2 class="
					m-0
					font-clash-display
					lg:text-[35px]
					text-[25px]
					font-semibold
					uppercase
					leading-[42.4px]
					tracking-[-0.4px]
					text-[#090909]
				">
FROM THE STUDIO
</h2> <div class="
					mt-1
					h-[5px]
					w-[195px]
					bg-[linear-gradient(90deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
				"></div> </div> <!-- Studio Images --> <div class="
				mt-7
				grid
				grid-cols-1
				gap-6
				sm:grid-cols-2
				lg:mt-12
				lg:grid-cols-[0.9fr_1.5fr_0.9fr]
				lg:gap-x-[48px]
			"> <!-- LEFT TALL IMAGE --> <div class="
					group
					relative
					h-[420px]
					overflow-hidden
					bg-[#e5e3df]
					sm:h-[480px]
					lg:h-[500px]
				"> <img${addAttribute(studioImages[0].image, "src")}${addAttribute(studioImages[0].alt, "alt")} class="
						h-full
						w-full
						object-cover
						transition-transform
						duration-700
						ease-out
						group-hover:scale-[1.03]
					" loading="lazy"> </div> <!-- CENTER COLUMN --> <div class="
					flex
					flex-col
					gap-6
					sm:col-span-2
					lg:col-span-1
					lg:gap-[46px]
				"> <!-- CENTER TOP --> <div class="
						group
						relative
						h-[250px]
						overflow-hidden
						bg-[#e5e3df]
						lg:h-[218px]
					"> <img${addAttribute(studioImages[1].image, "src")}${addAttribute(studioImages[1].alt, "alt")} class="
							h-full
							w-full
							object-cover
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.03]
						" loading="lazy"> </div> <!-- CENTER BOTTOM --> <div class="
						group
						relative
						h-[250px]
						overflow-hidden
						bg-[#e5e3df]
						lg:ml-auto
						lg:h-[237px]
						lg:w-[82%]
					"> <img${addAttribute(studioImages[2].image, "src")}${addAttribute(studioImages[2].alt, "alt")} class="
							h-full
							w-full
							object-cover
							transition-transform
							duration-700
							ease-out
							group-hover:scale-[1.03]
						" loading="lazy"> </div> </div> <!-- RIGHT TALL IMAGE --> <div class="
					group
					relative
					h-[420px]
					overflow-hidden
					bg-[#e5e3df]
					sm:h-[480px]
					lg:h-[500px]
				"> <img${addAttribute(studioImages[3].image, "src")}${addAttribute(studioImages[3].alt, "alt")} class="
						h-full
						w-full
						object-cover
						transition-transform
						duration-700
						ease-out
						group-hover:scale-[1.03]
					" loading="lazy"> </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/StudioImages.astro", void 0);

const $$AboutTestimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      quote: "Topklickz truly understood our vision and translated it into a brand identity that feels authentic and premium. They are strategic, creative and reliable.",
      name: "Vivek Parekh",
      role: "Founder, Globofarm",
      position: "lg:absolute lg:left-10 lg:top-[180px] lg:w-[390px]",
      border: false
    },
    {
      quote: "Their approach is thoughtful, transparent and result-driven. They became an extension of our team and helped us achieve meaningful growth.",
      name: "Dr. Shailesh Shah",
      role: "Founder, Renukrish Wellness",
      position: "lg:absolute lg:left-[38%] lg:top-0 lg:w-[465px]",
      border: true
    },
    {
      quote: "Their approach is thoughtful, transparent and result-driven. They became an extension of our team and helped us achieve meaningful growth.",
      name: "Dr. Shailesh Shah",
      role: "Founder, Renukrish Wellness",
      position: "lg:absolute lg:left-[17%] lg:top-[430px] lg:w-[455px]",
      border: true
    },
    {
      quote: "Their approach is thoughtful, transparent and result-driven. They became an extension of our team and helped us achieve meaningful growth.",
      name: "Dr. Shailesh Shah",
      role: "Founder, Renukrish Wellness",
      position: "lg:absolute lg:left-[60%] lg:top-[315px] lg:w-[420px]",
      border: true
    },
    {
      quote: "Their approach is thoughtful, transparent and result-driven. They became an extension of our team and helped us achieve meaningful growth.",
      name: "Dr. Shailesh Shah",
      role: "Founder, Renukrish Wellness",
      position: "lg:absolute lg:left-[82%] lg:top-[80px] lg:w-[340px]",
      border: true
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="
			relative
			mx-auto
			w-full
			max-w-7xl
			px-4
			py-5
			md:px-8
			lg:min-h-[700px]
			lg:px-8
			lg:py-20
		"> <!-- Heading --> <div class="
				mb-12
				lg:absolute
				lg:left-8
				lg:top-0
				lg:mb-0
			"> <h2 class="
					m-0
					font-clash-display
					lg:text-[40px]
					text-[25px]
					font-semibold
					uppercase
					leading-[1.3]
					tracking-[1px]
					text-[#090909]
				">
CLIENT<br>
PERSPECTIVES.
</h2> <div class="
					mt-2
					h-[5px]
					w-[195px]
					bg-[linear-gradient(90deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
				"></div> </div> <!-- Testimonials --> <div class="
				grid
				grid-cols-1
				gap-10
				md:grid-cols-2
				lg:block
			"> ${testimonials.map((testimonial) => renderTemplate`<article${addAttribute([
    "relative",
    testimonial.position,
    testimonial.border && "lg:border-l [border-image:linear-gradient(to_bottom,#ff9b42,#ef2362,#6944db)_1] lg:pl-7 lg:pl-10"
  ], "class:list")}> <!-- Quote Icon --> <div class="
								mb-2
								inline-block
								gradient-text-static
								bg-[linear-gradient(135deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
								bg-clip-text
								font-clash-display
								text-[28px]
								font-semibold
								leading-none
								text-transparent
							">
&quot;
</div> <!-- Quote --> <p class="
								m-0
								font-satoshi
								text-[15px]
								font-normal
								leading-[25px]
								tracking-[0px]
								text-[#171717]
							"> ${testimonial.quote} </p> <!-- Author --> <div class="mt-6"> <h3 class="
									m-0
									font-satoshi
									text-[13px]
									font-semibold
									leading-[20px]
									text-[#111111]
								"> ${testimonial.name} </h3> <p class="
									mb-0
									mt-1
									font-satoshi
									text-[11px]
									font-normal
									leading-[17px]
									text-[#85817C]
								"> ${testimonial.role} </p> </div> </article>`)} </div> <!-- See More --> <a href="#" class="
				mt-12
				inline-flex
				items-center
				gap-3
				font-satoshi
				text-[14px]
				font-semibold
				uppercase
				tracking-[3px]
				text-[#77746F]
				lg:absolute
				lg:right-8
				lg:bottom-12
				lg:mt-0
			">
SEE MORE
<span class="
					inline-block
					bg-[linear-gradient(135deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
					bg-clip-text
					font-clash-display
					text-[30px]
					font-medium
					leading-none
					text-transparent
					transition-transform
					duration-300
					group-hover:translate-x-1
					group-hover:-translate-y-1
				">
↗
</span> </a> </div>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/AboutTestimonials.astro", void 0);

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const reader = createReader(process.cwd(), config);
  const site = await reader.singletons.site.read();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "navbar": site?.navbar })}  ${maybeRenderHead()}<section class="mx-auto max-w-7xl px-4 lg:px-8 lg:py-20 py-10"> <h1 class="font-clash text-2xl font-[550] leading-[120%] tracking-normal text-black lg:text-[64px]">
A <span class="gradient-text">GOOD MIX</span> OF<br>
STRATEGISTS, DESIGNERS,<br>
CREATORS, AND BUILDERS.
</h1> </section>  <section class="w-full h-full"> <img src="/img/about.webp" class="w-full h-full"> <section class="w-full bg-[#0a0a0a]"> <div class="mx-auto max-w-7xl px-4 lg:px-8 lg:py-14 py-10 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10"> <!-- Left Content --> <div> <h2 class="m-0 font-Clash_Grotesk text-[20px] leading-[25px] lg:text-[30px] font-medium uppercase lg:leading-[40px] tracking-[-0.03em] text-white"> <span class="gradient-text"> TOPKLICKZ </span>
IS A CREATIVE STUDIO
<br class="hidden sm:block">
BUILDING MEMORABLE BRANDS AND
<br class="hidden sm:block">
MEANINGFUL EXPERIENCES.
</h2> </div> <!-- Right Content --> <div class="lg:pt-6"> <p class="font-Geist text-[14px] font-normal leading-[22.4px] tracking-normal text-[#aaa7a7]">
We bring together strategy, design, content and
                        technology to help businesses communicate clearly,
                        connect deeply and grow confidently.
</p> </div> </div> </section> </section>  ${renderComponent($$result2, "Whoweare", $$WhoWeAre, {})}  ${renderComponent($$result2, "OurStroy", $$OurStroy, {})} ${renderComponent($$result2, "WhatWeBelieve", $$WhatWeBelieve, {})} ${renderComponent($$result2, "OurProcess", $$OurProcess, {})} ${renderComponent($$result2, "OurApproach", $$OurApproach, {})} ${renderComponent($$result2, "AboutWork", $$AboutWork, {})} ${renderComponent($$result2, "ClientLogo", $$ClientLogo, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "StudioImage", $$StudioImages, {})} ${renderComponent($$result2, "AboutTestimonials", $$AboutTestimonials, {})} ${renderComponent($$result2, "BrandPhilosophy", $$BrandPhilosophy, {})} ${renderComponent($$result2, "AboutCtc", $$AboutCtc, {})} ${renderComponent($$result2, "Footer", $$Footer, { "footer": site?.footer })} ` })}`;
}, "D:/D Drive/artisanal-byte/topklickz/src/pages/about.astro", void 0);

const $$file = "D:/D Drive/artisanal-byte/topklickz/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
