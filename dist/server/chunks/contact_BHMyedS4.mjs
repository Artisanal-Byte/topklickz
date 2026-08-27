import { c as createComponent } from './astro-component_JDSnf13e.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, d as renderTemplate, e as renderComponent } from './server_r20cRXJ1.mjs';
import { $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_CNhL9zDA.mjs';
import { createReader } from '@keystatic/core/reader';
import { c as config } from './keystatic.config_Df-6VW00.mjs';
import 'clsx';
import { $ as $$AboutCtc } from './AboutCtc_BoJK-wOY.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const services = [
    "Brand Strategy",
    "Web Design",
    "Development",
    "Digital Marketing"
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="
			mx-auto
			grid
			max-w-7xl
			grid-cols-1
			gap-12
			px-5
			py-14
			lg:grid-cols-[minmax(0,1fr)_minmax(420px,520px)]
			lg:items-center
			lg:gap-16
			lg:px-12
			lg:py-20
		"> <!-- LEFT CONTENT --> <div class="max-w-[620px]"> <!-- Small label --> <div class="flex items-center gap-3"> <span class="
						h-[10px]
						w-[10px]
						rounded-full
						bg-[#d72ed4]
					"></span> <p class="
						text-[20px]
						font-semibold
						uppercase
						tracking-[0.2px]
						text-black
					">
CONTACT US
</p> </div> <!-- Heading --> <h2 class="
					mt-6
					text-[48px]
					font-medium
					leading-[1.02]
					tracking-[-2.2px]
					text-black
					lg:text-[80px]
					lg:tracking-[-3px]
				"> <span class="block">Let's Build</span> <span class="block">Something</span> <span class="
						mt-1
						gradient-text
					">
Exceptional.
</span> </h2> <p class="
					mt-7
					max-w-[470px]
					text-[18px]
					leading-[1.45]
					text-black/75
				">
Tell us about your project. We'll recommend the right strategy,
				team and timeline.
</p> </div> <!-- RIGHT FORM CARD --> <div class="
				w-full
				rounded-[30px]
				border
				border-black/20
				bg-white
				p-6
				lg:p-8
			"> <h3 class="
					text-[26px]
					font-semibold
					leading-none
					tracking-[-0.8px]
					text-black
				">
START YOUR PROJECT
</h3> <form class="mt-7"> <!-- 2 column row --> <div class="grid grid-cols-1 gap-3 sm:grid-cols-2"> <input type="text" placeholder="Full Name*" class="
							h-[46px]
							w-full
							border
							border-black/10
							bg-white
							px-4
							text-[12px]
							text-black
							outline-none
							placeholder:text-black/20
							transition
							focus:border-black/40
						"> <input type="email" placeholder="Work Email *" class="
							h-[46px]
							w-full
							border
							border-black/10
							bg-white
							px-4
							text-[12px]
							text-black
							outline-none
							placeholder:text-black/20
							transition
							focus:border-black/40
						"> <input type="text" placeholder="Company Name" class="
							h-[46px]
							w-full
							border
							border-black/10
							bg-white
							px-4
							text-[12px]
							text-black
							outline-none
							placeholder:text-black/20
							transition
							focus:border-black/40
						"> <input type="tel" placeholder="Phone Number" class="
							h-[46px]
							w-full
							border
							border-black/10
							bg-white
							px-4
							text-[12px]
							text-black
							outline-none
							placeholder:text-black/20
							transition
							focus:border-black/40
						"> </div> <!-- Service --> <div class="mt-3"> <select class="
							h-[46px]
							w-full
							border
							border-black/10
							bg-white
							px-4
							text-[12px]
							text-black/35
							outline-none
							transition
							focus:border-black/40
						"> <option value="" selected disabled>
What service do you need? *
</option> ${services.map((service) => renderTemplate`<option${addAttribute(service, "value")}> ${service} </option>`)} </select> </div> <!-- Message --> <div class="mt-3"> <textarea rows="5" placeholder="Tell us about your project *" class="
							min-h-[120px]
							w-full
							resize-none
							border
							border-black/10
							bg-white
							px-4
							py-4
							text-[12px]
							text-black
							outline-none
							placeholder:text-black/20
							transition
							focus:border-black/40
						"></textarea> </div> <!-- Button --> <button type="submit" class="
						mt-5
						flex
						h-[56px]
						w-full
						items-center
						justify-center
						gap-4
						bg-black
						px-6
						text-[16px]
						font-semibold
						uppercase
						tracking-[0.1px]
						text-white
						transition-all
						duration-300
						hover:bg-black/80
					"> <span>START YOUR PROJECT</span> <span class="text-[20px] leading-none">
→
</span> </button> </form> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/contact/hero.astro", void 0);

const $$ContactItems = createComponent(($$result, $$props, $$slots) => {
  const contactItems = [
    {
      type: "location",
      label: "LOCATION",
      line1: "Ahmedabad,",
      line2: "India"
    },
    {
      type: "email",
      label: "EMAIL",
      line1: "hello@topklickz.com",
      line2: ""
    },
    {
      type: "phone",
      label: "PHONE",
      line1: "+91 98765 43210",
      line2: ""
    },
    {
      type: "hours",
      label: "HOURS",
      line1: "Mon – Fri",
      line2: "10:00 AM – 7:00 PM"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"> <div class="
				grid
				grid-cols-1
				border-y
				border-black/10
				md:grid-cols-2
				lg:grid-cols-4
			"> ${contactItems.map((item, index) => renderTemplate`<div${addAttribute([
    "flex items-center gap-4 py-6",
    "md:px-5",
    "lg:min-h-[105px] lg:py-5",
    index !== 0 && "border-t border-black/10 md:border-t-0",
    index === 1 && "md:border-l md:border-black/10",
    index === 2 && "md:border-t md:border-black/10 lg:border-t-0 lg:border-l",
    index === 3 && "md:border-l md:border-black/10 lg:border-l"
  ], "class:list")}> <!-- ICON BOX --> <div class="
								flex
								h-[48px]
								w-[48px]
								shrink-0
								items-center
								justify-center
								rounded-[8px]
								border
								border-black/15
							"> <!-- LOCATION ICON --> ${item.type === "location" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" class="h-[23px] w-[23px] text-[#ef3eb7]" xmlns="http://www.w3.org/2000/svg"> <path d="M20 10C20 15 12 21 12 21C12 21 4 15 4 10C4 5.582 7.582 2 12 2C16.418 2 20 5.582 20 10Z" stroke="currentColor" stroke-width="1.6"></path> <circle cx="12" cy="10" r="2.5" stroke="currentColor" stroke-width="1.6"></circle> </svg>`} <!-- EMAIL ICON --> ${item.type === "email" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" class="h-[23px] w-[23px] text-[#ef3eb7]" xmlns="http://www.w3.org/2000/svg"> <path d="M21 3L3 10.5L10.5 13.5L13.5 21L21 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path> <path d="M10.5 13.5L21 3" stroke="currentColor" stroke-width="1.6"></path> </svg>`} <!-- PHONE ICON --> ${item.type === "phone" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" class="h-[22px] w-[22px] text-[#ef3eb7]" xmlns="http://www.w3.org/2000/svg"> <path d="M7.2 3H4.8C3.806 3 3 3.806 3 4.8C3 13.747 10.253 21 19.2 21C20.194 21 21 20.194 21 19.2V16.8L16.8 15.6L15.4 18.2C11.2 16.8 7.2 12.8 5.8 8.6L8.4 7.2L7.2 3Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path> </svg>`} <!-- HOURS ICON --> ${item.type === "hours" && renderTemplate`<svg viewBox="0 0 24 24" fill="none" class="h-[23px] w-[23px] text-[#ef3eb7]" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"></circle> <path d="M12 7.5V12H16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path> </svg>`} </div> <!-- CONTENT --> <div class="min-w-0"> <p class="
									text-[9px]
									font-normal
									uppercase
									leading-none
									tracking-[0.3px]
									text-black/35
								"> ${item.label} </p> <div class="
									mt-[8px]
									text-[12px]
									font-semibold
									leading-[1.35]
									text-black
								"> <p>${item.line1}</p> ${item.line2 && renderTemplate`<p>${item.line2}</p>`} </div> </div> </div>`)} </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/contact/contactItems.astro", void 0);

const $$Faqs = createComponent(($$result, $$props, $$slots) => {
  const faqs = [
    {
      question: "How soon can we start?",
      answer: "Once we understand your requirements and scope, we can confirm the project timeline and start date."
    },
    {
      question: "How do payments work?",
      answer: "Payments are usually structured in project milestones based on scope, timeline, and deliverables."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, we work with clients across different countries and time zones."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, ongoing support and maintenance can be arranged depending on your project requirements."
    },
    {
      question: "Can we sign an NDA?",
      answer: "Yes, we can sign an NDA before discussing confidential project details."
    },
    {
      question: "What information do you need to get started?",
      answer: "We typically need your project goals, requirements, references, timeline, and any existing brand or technical material."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16"> <!-- Header --> <div class="mb-6 flex items-center justify-between gap-6"> <h2 class="
					text-[18px]
					font-bold
					uppercase
					leading-none
					tracking-[-0.1px]
					text-black
				">
FREQUENTLY ASKED QUESTIONS
</h2> <a href="/faqs" class="
					hidden
					items-center
					gap-3
					text-[10px]
					font-medium
					uppercase
					text-[#b427b9]
					transition-opacity
					hover:opacity-60
					sm:flex
				"> <span>VIEW ALL FAQS</span> <span class="text-[18px] leading-none">→</span> </a> </div> <!-- FAQ GRID --> <div class="
				grid
				grid-cols-1
				gap-3
				lg:grid-cols-2
				lg:gap-x-8
				lg:gap-y-3
			"> ${faqs.map((faq) => renderTemplate`<details class="
							group
							rounded-[5px]
							border
							border-black/10
							bg-white
							transition-colors
							duration-300
							open:bg-black/[0.015]
						"> <summary class="
								flex
								min-h-[58px]
								cursor-pointer
								list-none
								items-center
								justify-between
								gap-5
								px-5
								py-4
								[&::-webkit-details-marker]:hidden
							"> <span class="
									text-[16px]
									font-semibold
									leading-[1.3]
									text-black
								"> ${faq.question} </span> <!-- PLUS / MINUS --> <span class="
									relative
									h-[18px]
									w-[18px]
									shrink-0
								" aria-hidden="true"> <span class="
										absolute
										left-1/2
										top-1/2
										h-px
										w-[13px]
										-translate-x-1/2
										-translate-y-1/2
										bg-black
									"></span> <span class="
										absolute
										left-1/2
										top-1/2
										h-[13px]
										w-px
										-translate-x-1/2
										-translate-y-1/2
										bg-black
										transition-transform
										duration-300
										group-open:rotate-90
										group-open:scale-y-0
									"></span> </span> </summary> <div class="px-5 pb-5"> <p class="
									max-w-[650px]
									text-[15px]
									leading-[1.55]
									text-black/60
								"> ${faq.answer} </p> </div> </details>`)} </div> <!-- Mobile View All --> <a href="/faqs" class="
				mt-6
				flex
				items-center
				gap-3
				text-[10px]
				font-medium
				uppercase
				text-[#b427b9]
				sm:hidden
			"> <span>VIEW ALL FAQS</span> <span class="text-[18px]">→</span> </a> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/contact/faqs.astro", void 0);

const $$Cta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Cta;
  const {
    titleLine1 = "READY TO BUILD",
    titleLine2 = "YOUR NEXT",
    highlight = "SUCCESS STORY?",
    description = "From strategy to scale, let's create impact together.",
    buttonText = "BOOK A DISCOVERY CALL",
    buttonLink = "#",
    decorativeImage = "/img/tk.png"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="w-full bg-white"> <div class="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12"> <div class="
				relative
				overflow-hidden
				rounded-[14px]
				bg-[#111111]
				px-6
				py-8
				text-white
				lg:flex
				lg:min-h-[135px]
				lg:items-center
				lg:px-10
				lg:py-7
			"> <!-- LEFT CONTENT --> <div class="
					relative
					z-10
					flex
					flex-col
					gap-8
					lg:flex-row
					lg:items-center
					lg:gap-10
				"> <!-- Heading --> <div class="max-w-[260px]"> <h2 class="
							text-[25px]
							font-bold
							uppercase
							leading-[1.0]
							tracking-[-1px]

						"> <span class="block">${titleLine1}</span> <span class="block">${titleLine2}</span> <span class="
								block
								bg-[linear-gradient(90deg,#ff8a1f_0%,#ff3c5c_38%,#d51bbd_72%,#7a35ff_100%)]
								bg-clip-text
								text-transparent
							"> ${highlight} </span> </h2> </div> <!-- Divider --> <div class="
						hidden
						h-[58px]
						w-px
						bg-white/25
						lg:block
					"></div> <!-- Description --> <p class="
						max-w-[160px]
						text-[14px]
						leading-[1.45]
						text-white/80
					"> ${description} </p> <!-- Button --> <a${addAttribute(buttonLink, "href")} class="
						inline-flex
						h-[42px]
						min-w-[180px]
						items-center
						justify-center
						gap-3
						rounded-[6px]
						bg-white
						px-5
						text-[12px]
						font-semibold
						uppercase
						text-black
						transition-all
						duration-300
						hover:bg-white/90
					"> <span>${buttonText}</span> <span class="text-[17px] leading-none">
→
</span> </a> </div> <!-- RIGHT DECORATIVE IMAGE --> <img${addAttribute(decorativeImage, "src")} alt="" class="
					pointer-events-none
					absolute
					right-10
					top-1/2
					hidden
					h-[150px]
					w-auto
					-translate-y-1/2
					object-contain
					opacity-20
					lg:block
				"> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/contact/cta.astro", void 0);

const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const reader = createReader(process.cwd(), config);
  const site = await reader.singletons.site.read();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "navbar": site?.navbar })} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "ContactItems", $$ContactItems, {})} ${renderComponent($$result2, "Faq", $$Faqs, {})} ${renderComponent($$result2, "Cta", $$Cta, {})} ${renderComponent($$result2, "AboutCtc", $$AboutCtc, {})} ${renderComponent($$result2, "Footer", $$Footer, { "footer": site?.footer })} ` })}`;
}, "D:/D Drive/artisanal-byte/topklickz/src/pages/contact.astro", void 0);

const $$file = "D:/D Drive/artisanal-byte/topklickz/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Contact,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
