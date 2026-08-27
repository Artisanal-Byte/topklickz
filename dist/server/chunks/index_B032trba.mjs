import { c as createComponent } from './astro-component_km9ZCO3C.mjs';
import 'piccolore';
import { m as maybeRenderHead, c as addAttribute, e as renderComponent, d as renderTemplate, F as Fragment } from './server_C4kATRpT.mjs';
import { r as renderScript, $ as $$Layout, a as $$Header, b as $$Footer } from './Footer_IE2GM_rV.mjs';
import { a as $$Icon, $ as $$Cta } from './Cta_BX2_cMVn.mjs';
import { createReader } from '@keystatic/core/reader';
import { c as config } from './keystatic.config_B9neeRdH.mjs';
import { $ as $$Image } from './_astro_assets_CYKeaiqj.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Hero;
  const { hero } = Astro2.props;
  const youtubeId = "w6uX9jamcwQ";
  const youtubeSrc = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&autohide=1&modestbranding=1&showinfo=0&disablekb=1&fs=0&rel=0&playsinline=1&iv_load_policy=3`;
  return renderTemplate`${maybeRenderHead()}<section data-hero-scroll class="
        relative
        h-[185svh]
        w-full
        bg-white
        motion-reduce:h-auto
    "> <div data-hero-stage class="
            sticky
            top-0
            h-svh
            w-full
            overflow-hidden
            bg-white
            motion-reduce:relative
            motion-reduce:h-auto
            motion-reduce:min-h-screen
            motion-reduce:overflow-visible
        "> <div class="
                relative
                z-20
                mx-auto
                h-full
                max-w-7xl
                px-4
                pt-10
                lg:px-8
                lg:pt-[8vh]
            "> <div data-hero-copy class="
                    relative
                    z-20
                    max-w-[990px]
                    will-change-[transform,opacity]
                "> <!-- Title --> <h1 class="
                        font-clash
                        text-[40px]
                        font-bold
                        leading-[0.93]
                        tracking-[-0.02em]
                        text-black
                        md:text-[58px]
                        lg:text-[70px]
                    "> ${hero?.title} </h1> <!-- Gradient Subtitle --> <h2 class="
                        mt-2
                        bg-gradient-to-r
                        from-[#FEC053]
                        via-[#F2203E]
                        to-[#5342D6]
                        bg-clip-text
                        font-clash
                        text-[40px]
                        font-semibold
                        leading-[0.93]
                        tracking-[-0.02em]
                        text-transparent
                        md:text-[58px]
                        lg:text-[70px]
                    "> ${hero?.subtitle} </h2> <!-- Description --> <h3 class="
                        mt-2
                        max-w-[950px]
                        font-clash
                        text-[40px]
                        font-bold
                        leading-[0.93]
                        tracking-[-0.02em]
                        text-black
                        md:text-[58px]
                        lg:text-[68px]
                    "> ${hero?.description} </h3> <!-- CTA --> <a${addAttribute(hero?.buttonLink || "#studio", "href")} class="
                        group
                        mt-7
                        inline-flex
                        items-center
                        gap-3
                        font-geist
                        text-[18px]
                        font-normal
                        leading-none
                        text-black
                        lg:mt-14
                        lg:gap-4
                        lg:text-[28px]
                    "> <span> ${hero?.buttonText} </span> ${renderComponent($$result, "Icon", $$Icon, { "name": hero?.buttonIcon || "mdi:arrow-down", "class": "\r\n                            h-6\r\n                            w-6\r\n                            shrink-0\r\n                            transition-transform\r\n                            duration-300\r\n                            ease-out\r\n                            group-hover:translate-y-1\r\n                            lg:h-8\r\n                            lg:w-8\r\n                        " })} </a> </div> </div> <div data-hero-media class="
                absolute
                z-10
                overflow-hidden
                bg-black
                shadow-[0_24px_70px_rgba(15,15,17,0.14)]
                will-change-[left,top,width,height,border-radius]
            "> <div class="
                    pointer-events-none
                    absolute
                    inset-0
                    overflow-hidden
                    bg-black
                "> <iframe${addAttribute(youtubeSrc, "src")} title="Hero background video" tabindex="-1" aria-hidden="true" allow="autoplay; encrypted-media" class="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-[56.25vw]
                        min-h-[30%]
                        w-[177.77778vh]
                        min-w-[110%]
                        -translate-x-1/2
                        -translate-y-1/2
                        scale-[1.04]
                        border-0
                    "></iframe> </div> <div aria-hidden="true" class="
                    pointer-events-none
                    absolute
                    inset-0
                    z-10
                    bg-black/[0.02]
                "></div> </div> </div> </section> ${renderScript($$result, "D:/D Drive/artisanal-byte/topklickz/src/components/Hero.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/Hero.astro", void 0);

const $$Studio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Studio;
  const { studio } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="studio" class="bg-black py-12 lg:py-0"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="rounded-sm px-0 py-0 lg:px-14 lg:py-8"> <!-- Top --> <div class="mb-8 sm:mb-10"> <span class="text-sm text-gray-400"> ${studio.sectionNumber}/${studio.sectionTitle} </span> </div> <!-- Heading --> <div class="mx-auto max-w-5xl text-center"> <h2 class="font-clash text-lg font-semibold leading-[114%] text-center text-white sm:text-2xl lg:text-[32px]"> ${studio.title} </h2> <p class="mx-auto mt-6 max-w-3xl font-clash text-base leading-[150%] text-center text-white/70 sm:mt-8 sm:text-lg lg:text-[20px]"> ${studio.description} </p> </div> <!-- Clients --> <div class="mt-12 overflow-hidden sm:mt-14"> <h3 class="mb-6 text-center text-xl font-medium text-white sm:mb-8 sm:text-2xl"> ${studio.clientTitle} </h3> <div class="relative mx-auto overflow-hidden max-w-4xl"> <div class="flex w-max animate-marquee gap-8 sm:gap-12"> <!-- First Set --> ${studio.clients.map((client) => renderTemplate`<div class="flex h-10 w-54 shrink-0 items-center justify-center sm:h-16 sm:w-30"> ${renderComponent($$result, "Image", $$Image, { "src": client.logo, "alt": client.alt, "width": 360, "height": 100, "class": "h-14 w-auto object-contain opacity-90 transition hover:opacity-100 sm:h-10" })} </div>`)} <!-- Duplicate Set --> ${studio.clients.map((client) => renderTemplate`<div class="flex h-14 w-36 shrink-0 items-center justify-center sm:h-16 sm:w-48"> ${renderComponent($$result, "Image", $$Image, { "src": client.logo, "alt": client.alt, "width": 260, "height": 100, "class": "h-8 w-auto object-contain opacity-90 transition hover:opacity-100 sm:h-10" })} </div>`)} </div> </div> </div> <!-- Button --> <div class="mt-8 flex justify-center mb-10"> <a${addAttribute(studio?.buttonLink, "href")} class="gradient-expand-btn
			inline-flex

			rounded-full
			p-[1px]
			bg-[radial-gradient(50%_83.67%_at_50%_50%,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
			lg:w-auto"> <span class="gradient-expand-btn-inner
				flex
				h-12
				w-full
				items-center
				justify-center
				rounded-full
				bg-black
				px-4
				font-clash
				text-base
				font-medium
				leading-none
				text-white"> <span class="gradient-expand-btn-bg"></span> <!-- Button text --> <span class="gradient-expand-btn-text"> ${studio?.buttonText} </span> </span> </a> </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/Studio.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Services;
  const { services } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<section class="relative overflow-visible bg-white" data-services-section> <!-- Section Heading --> <div class="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 md:pb-20 md:pt-24 lg:px-8"> <h2 class="font-clash text-3xl font-semibold leading-[90%] text-black uppercase sm:text-4xl lg:text-[50px]"> ', ' </h2> <h2 class="mt-4 font-clash text-3xl font-semibold leading-[90%] uppercase sm:text-4xl lg:text-[50px]"> <span class="gradient-text"> ', ' </span> <span class="text-black"> ', ' </span> </h2> </div> <!-- Services --> <div class="relative w-full overflow-visible" data-services-stack> ', ' </div> </section> <script>\n  // @ts-nocheck\n\n  (() => {\n    let serviceGroups = [];\n    let animationFrameId = 0;\n\n    const clamp = (value, minimum, maximum) => {\n      return Math.min(\n        Math.max(value, minimum),\n        maximum,\n      );\n    };\n\n    const collectServicePanels = () => {\n      const sections = document.querySelectorAll(\n        "[data-services-section]",\n      );\n\n      serviceGroups = Array.from(sections).map(\n        (section) => {\n          const panels = Array.from(\n            section.querySelectorAll(\n              "[data-service-panel]",\n            ),\n          )\n            .map((panel) => {\n              const content = panel.querySelector(\n                "[data-service-content]",\n              );\n\n              if (!content) {\n                return null;\n              }\n\n              return {\n                panel,\n                content,\n              };\n            })\n            .filter(Boolean);\n\n          return {\n            section,\n            panels,\n          };\n        },\n      );\n    };\n\n    const initializeFeatureLists = () => {\n      const featureLists =\n        document.querySelectorAll(\n          "[data-features-list]",\n        );\n\n      featureLists.forEach((list) => {\n        if (\n          list.dataset.initialized === "true"\n        ) {\n          return;\n        }\n\n        list.dataset.initialized = "true";\n\n        const items = Array.from(\n          list.querySelectorAll(\n            "[data-feature-item]",\n          ),\n        );\n\n        if (!items.length) {\n          return;\n        }\n\n        const setActiveItem = (selectedItem) => {\n          items.forEach((item) => {\n            item.dataset.active =\n              item === selectedItem\n                ? "true"\n                : "false";\n          });\n        };\n\n        const getFeatureItem = (event) => {\n          if (\n            !(event.target instanceof Element)\n          ) {\n            return null;\n          }\n\n          const item = event.target.closest(\n            "[data-feature-item]",\n          );\n\n          if (\n            !item ||\n            !list.contains(item)\n          ) {\n            return null;\n          }\n\n          return item;\n        };\n\n        list.addEventListener(\n          "pointerover",\n          (event) => {\n            if (\n              !window.matchMedia(\n                "(hover: hover)",\n              ).matches\n            ) {\n              return;\n            }\n\n            const item = getFeatureItem(event);\n\n            if (item) {\n              setActiveItem(item);\n            }\n          },\n        );\n\n        list.addEventListener(\n          "click",\n          (event) => {\n            const item = getFeatureItem(event);\n\n            if (item) {\n              setActiveItem(item);\n            }\n          },\n        );\n\n        list.addEventListener(\n          "focusin",\n          (event) => {\n            const item = getFeatureItem(event);\n\n            if (item) {\n              setActiveItem(item);\n            }\n          },\n        );\n\n        list.addEventListener(\n          "pointerleave",\n          () => {\n            if (\n              window.matchMedia(\n                "(hover: hover)",\n              ).matches\n            ) {\n              setActiveItem(items[0]);\n            }\n          },\n        );\n\n        list.addEventListener(\n          "focusout",\n          (event) => {\n            const nextElement =\n              event.relatedTarget;\n\n            if (\n              !(nextElement instanceof Node) ||\n              !list.contains(nextElement)\n            ) {\n              setActiveItem(items[0]);\n            }\n          },\n        );\n      });\n    };\n\n    const resetServicePanels = () => {\n      serviceGroups.forEach((group) => {\n        group.panels.forEach((entry) => {\n          entry.content.style.transform =\n            "translate3d(0, 0, 0) scale(1)";\n\n          entry.content.style.opacity = "1";\n        });\n      });\n    };\n\n    const updateServicePanels = () => {\n      const reducedMotion =\n        window.matchMedia(\n          "(prefers-reduced-motion: reduce)",\n        ).matches;\n\n      if (reducedMotion) {\n        resetServicePanels();\n        return;\n      }\n\n      const viewportHeight =\n        window.innerHeight ||\n        document.documentElement.clientHeight;\n\n      serviceGroups.forEach((group) => {\n        group.panels.forEach(\n          (entry, index) => {\n            const nextEntry =\n              group.panels[index + 1];\n\n            if (!nextEntry) {\n              entry.content.style.transform =\n                "translate3d(0, 0, 0) scale(1)";\n\n              entry.content.style.opacity = "1";\n              return;\n            }\n\n            const nextPanelTop =\n              nextEntry.panel\n                .getBoundingClientRect()\n                .top;\n\n            const animationRange =\n              viewportHeight * 0.68;\n\n            const progress = clamp(\n              (viewportHeight - nextPanelTop) /\n                animationRange,\n              0,\n              1,\n            );\n\n            const translateY = progress * -18;\n            const scale = 1 - progress * 0.012;\n            const opacity = 1 - progress * 0.22;\n\n            entry.content.style.transform = `\n              translate3d(\n                0,\n                ${translateY.toFixed(2)}px,\n                0\n              )\n              scale(${scale.toFixed(4)})\n            `;\n\n            entry.content.style.opacity =\n              opacity.toFixed(3);\n          },\n        );\n      });\n    };\n\n    const requestServiceUpdate = () => {\n      if (animationFrameId) {\n        return;\n      }\n\n      animationFrameId =\n        window.requestAnimationFrame(() => {\n          updateServicePanels();\n          animationFrameId = 0;\n        });\n    };\n\n    const initializeServices = () => {\n      collectServicePanels();\n      initializeFeatureLists();\n      requestServiceUpdate();\n    };\n\n    initializeServices();\n\n    if (\n      document.documentElement.dataset\n        .servicesEventsBound !== "true"\n    ) {\n      document.documentElement.dataset\n        .servicesEventsBound = "true";\n\n      window.addEventListener(\n        "scroll",\n        requestServiceUpdate,\n        {\n          passive: true,\n        },\n      );\n\n      window.addEventListener(\n        "resize",\n        () => {\n          collectServicePanels();\n          requestServiceUpdate();\n        },\n        {\n          passive: true,\n        },\n      );\n\n      document.addEventListener(\n        "astro:page-load",\n        initializeServices,\n      );\n    }\n  })();\n<\/script>'], ["", '<section class="relative overflow-visible bg-white" data-services-section> <!-- Section Heading --> <div class="mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 md:pb-20 md:pt-24 lg:px-8"> <h2 class="font-clash text-3xl font-semibold leading-[90%] text-black uppercase sm:text-4xl lg:text-[50px]"> ', ' </h2> <h2 class="mt-4 font-clash text-3xl font-semibold leading-[90%] uppercase sm:text-4xl lg:text-[50px]"> <span class="gradient-text"> ', ' </span> <span class="text-black"> ', ' </span> </h2> </div> <!-- Services --> <div class="relative w-full overflow-visible" data-services-stack> ', ' </div> </section> <script>\n  // @ts-nocheck\n\n  (() => {\n    let serviceGroups = [];\n    let animationFrameId = 0;\n\n    const clamp = (value, minimum, maximum) => {\n      return Math.min(\n        Math.max(value, minimum),\n        maximum,\n      );\n    };\n\n    const collectServicePanels = () => {\n      const sections = document.querySelectorAll(\n        "[data-services-section]",\n      );\n\n      serviceGroups = Array.from(sections).map(\n        (section) => {\n          const panels = Array.from(\n            section.querySelectorAll(\n              "[data-service-panel]",\n            ),\n          )\n            .map((panel) => {\n              const content = panel.querySelector(\n                "[data-service-content]",\n              );\n\n              if (!content) {\n                return null;\n              }\n\n              return {\n                panel,\n                content,\n              };\n            })\n            .filter(Boolean);\n\n          return {\n            section,\n            panels,\n          };\n        },\n      );\n    };\n\n    const initializeFeatureLists = () => {\n      const featureLists =\n        document.querySelectorAll(\n          "[data-features-list]",\n        );\n\n      featureLists.forEach((list) => {\n        if (\n          list.dataset.initialized === "true"\n        ) {\n          return;\n        }\n\n        list.dataset.initialized = "true";\n\n        const items = Array.from(\n          list.querySelectorAll(\n            "[data-feature-item]",\n          ),\n        );\n\n        if (!items.length) {\n          return;\n        }\n\n        const setActiveItem = (selectedItem) => {\n          items.forEach((item) => {\n            item.dataset.active =\n              item === selectedItem\n                ? "true"\n                : "false";\n          });\n        };\n\n        const getFeatureItem = (event) => {\n          if (\n            !(event.target instanceof Element)\n          ) {\n            return null;\n          }\n\n          const item = event.target.closest(\n            "[data-feature-item]",\n          );\n\n          if (\n            !item ||\n            !list.contains(item)\n          ) {\n            return null;\n          }\n\n          return item;\n        };\n\n        list.addEventListener(\n          "pointerover",\n          (event) => {\n            if (\n              !window.matchMedia(\n                "(hover: hover)",\n              ).matches\n            ) {\n              return;\n            }\n\n            const item = getFeatureItem(event);\n\n            if (item) {\n              setActiveItem(item);\n            }\n          },\n        );\n\n        list.addEventListener(\n          "click",\n          (event) => {\n            const item = getFeatureItem(event);\n\n            if (item) {\n              setActiveItem(item);\n            }\n          },\n        );\n\n        list.addEventListener(\n          "focusin",\n          (event) => {\n            const item = getFeatureItem(event);\n\n            if (item) {\n              setActiveItem(item);\n            }\n          },\n        );\n\n        list.addEventListener(\n          "pointerleave",\n          () => {\n            if (\n              window.matchMedia(\n                "(hover: hover)",\n              ).matches\n            ) {\n              setActiveItem(items[0]);\n            }\n          },\n        );\n\n        list.addEventListener(\n          "focusout",\n          (event) => {\n            const nextElement =\n              event.relatedTarget;\n\n            if (\n              !(nextElement instanceof Node) ||\n              !list.contains(nextElement)\n            ) {\n              setActiveItem(items[0]);\n            }\n          },\n        );\n      });\n    };\n\n    const resetServicePanels = () => {\n      serviceGroups.forEach((group) => {\n        group.panels.forEach((entry) => {\n          entry.content.style.transform =\n            "translate3d(0, 0, 0) scale(1)";\n\n          entry.content.style.opacity = "1";\n        });\n      });\n    };\n\n    const updateServicePanels = () => {\n      const reducedMotion =\n        window.matchMedia(\n          "(prefers-reduced-motion: reduce)",\n        ).matches;\n\n      if (reducedMotion) {\n        resetServicePanels();\n        return;\n      }\n\n      const viewportHeight =\n        window.innerHeight ||\n        document.documentElement.clientHeight;\n\n      serviceGroups.forEach((group) => {\n        group.panels.forEach(\n          (entry, index) => {\n            const nextEntry =\n              group.panels[index + 1];\n\n            if (!nextEntry) {\n              entry.content.style.transform =\n                "translate3d(0, 0, 0) scale(1)";\n\n              entry.content.style.opacity = "1";\n              return;\n            }\n\n            const nextPanelTop =\n              nextEntry.panel\n                .getBoundingClientRect()\n                .top;\n\n            const animationRange =\n              viewportHeight * 0.68;\n\n            const progress = clamp(\n              (viewportHeight - nextPanelTop) /\n                animationRange,\n              0,\n              1,\n            );\n\n            const translateY = progress * -18;\n            const scale = 1 - progress * 0.012;\n            const opacity = 1 - progress * 0.22;\n\n            entry.content.style.transform = \\`\n              translate3d(\n                0,\n                \\${translateY.toFixed(2)}px,\n                0\n              )\n              scale(\\${scale.toFixed(4)})\n            \\`;\n\n            entry.content.style.opacity =\n              opacity.toFixed(3);\n          },\n        );\n      });\n    };\n\n    const requestServiceUpdate = () => {\n      if (animationFrameId) {\n        return;\n      }\n\n      animationFrameId =\n        window.requestAnimationFrame(() => {\n          updateServicePanels();\n          animationFrameId = 0;\n        });\n    };\n\n    const initializeServices = () => {\n      collectServicePanels();\n      initializeFeatureLists();\n      requestServiceUpdate();\n    };\n\n    initializeServices();\n\n    if (\n      document.documentElement.dataset\n        .servicesEventsBound !== "true"\n    ) {\n      document.documentElement.dataset\n        .servicesEventsBound = "true";\n\n      window.addEventListener(\n        "scroll",\n        requestServiceUpdate,\n        {\n          passive: true,\n        },\n      );\n\n      window.addEventListener(\n        "resize",\n        () => {\n          collectServicePanels();\n          requestServiceUpdate();\n        },\n        {\n          passive: true,\n        },\n      );\n\n      document.addEventListener(\n        "astro:page-load",\n        initializeServices,\n      );\n    }\n  })();\n<\/script>'])), maybeRenderHead(), services.title, services.gradientTitle, services.endTitle, services.items.map((service, serviceIndex) => renderTemplate`<article class="
            sticky top-0 isolate w-full border-t border-gray-200 bg-white py-6 sm:py-7 lg:py-8
          "${addAttribute(`z-index: ${serviceIndex + 10};`, "style")} data-service-panel> <div class="
              mx-auto grid w-full max-w-7xl content-center gap-10 px-5 pt-12 transition-[transform,opacity] duration-300 ease-out
              will-change-transform
              sm:px-6
              lg:grid-cols-2
              lg:gap-16
              lg:px-8
              lg:pt-16
            " data-service-content> <!-- Left Content --> <div> <div class="
                  flex items-start
                  gap-4
                  sm:gap-7
                  lg:gap-8
                "> <!-- Service Number --> <span class="
                    w-9 shrink-0
                    font-clash text-2xl
                    font-light text-gray-400

                    sm:w-12 sm:text-3xl
                    lg:text-4xl
                  "> ${service.number} </span> <div class="min-w-0 flex-1"> <!-- Service Title --> <h3 class="
                      font-clash
                      text-3xl font-bold
                      leading-[93%] text-black

                      sm:text-[40px]
                      lg:text-[48px]
                    "> ${service.title} </h3> <!-- Features --> <ul class="
                      mt-7 space-y-3
                      sm:mt-8
                    "${addAttribute(`${service.title} features`, "aria-label")} data-features-list> ${service.features?.map(
    (feature, featureIndex) => renderTemplate`<li class="
                              group flex cursor-pointer
                              items-center gap-3

                              font-clash
                              text-lg font-normal
                              leading-[106%]
                              text-gray-400

                              outline-none

                              transition-all
                              duration-300 ease-out

                              hover:translate-x-0.5
                              hover:text-black

                              focus-visible:translate-x-0.5
                              focus-visible:text-black
                              focus-visible:outline-none

                              data-[active=true]:translate-x-0.5
                              data-[active=true]:text-black

                              sm:text-[22px]
                              lg:text-[32px]
                            " data-feature-item${addAttribute(
      featureIndex === 0 ? "true" : "false",
      "data-active"
    )} tabindex="0"> <!-- Gradient Indicator --> <span class="
                                block h-[5px] w-0
                                shrink-0 rounded-full

                                bg-gradient-to-r
                                from-orange-500
                                via-pink-500
                                to-violet-600

                                opacity-0

                                transition-all
                                duration-300 ease-out

                                group-hover:w-[18px]
                                group-hover:opacity-100

                                group-focus-visible:w-[18px]
                                group-focus-visible:opacity-100

                                group-data-[active=true]:w-[18px]
                                group-data-[active=true]:opacity-100
                              " aria-hidden="true"></span> <span>${feature}</span> </li>`
  )} </ul> <!-- Button --> <a${addAttribute(service.buttonLink, "href")} class="
                      group relative mt-10 inline-flex h-[52px] min-w-[220px]
                      items-center overflow-hidden rounded-full
                      bg-[linear-gradient(135deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
                      p-[1.5px]
                      sm:mt-14 sm:h-[58px] sm:min-w-[270px]
                    "> <!-- White inner background --> <span class="
                        absolute inset-[1.5px]
                        rounded-full bg-white
                      "></span> <!-- Gradient Circle --> <span class="
                        absolute left-[10px] top-1/2 z-[2]
                        h-10 w-10
                        -translate-y-1/2
                        rounded-full
                        bg-[linear-gradient(135deg,#FEC053_0%,#F2203E_33%,#B729A8_65%,#5342D6_100%)]
                        transition-all
                        duration-500
                        ease-in-out
                        group-hover:left-[1.5px]
                        group-hover:h-[calc(100%-3px)]
                        group-hover:w-[calc(100%-3px)]
                      "></span> <!-- Text --> <span class="
                        relative z-10
                        flex w-full
                        items-center
                        justify-center
                        pl-14 pr-5
                        font-clash
                        text-[20px]
                        font-medium
                        leading-[100%]
                        tracking-[0]
                        text-black
                        transition-all
                        duration-500
                        ease-in-out
                        group-hover:pl-14
                        group-hover:pr-14
                        group-hover:text-white
                      "> ${service.buttonText} </span> <!-- Arrow --> <span class="
                        absolute left-[20px] top-1/2 z-20
                        flex -translate-y-1/2
                        items-center justify-center
                        transition-all
                        duration-500
                        ease-in-out
                        group-hover:left-[calc(100%-38px)]
                      "> ${renderComponent($$result, "Icon", $$Icon, { "name": service.buttonIcon, "class": "h-5 w-5 text-white" })} </span> </a> </div> </div> </div> <!-- Right Content --> <div class="lg:pt-1"> <!-- Description --> <p class="
                  max-w-xl
                  font-clash
                  text-sm leading-relaxed
                  text-gray-800
                  lg:text-2xl
                  lg:leading-relaxed
                "> ${service.description} </p> <!-- Image --> ${service.image && renderTemplate`<div class="
                      group mt-6 overflow-hidden
                      rounded-xl
                      bg-gray-100
                      md:mt-12
                    "> ${renderComponent($$result, "Image", $$Image, { "src": service.image, "alt": service.title, "width": 800, "height": 500, "loading": serviceIndex === 0 ? "eager" : "lazy", "decoding": "async", "class": "\r\n                        h-auto w-full max-h-[220px]\r\n                        object-cover\r\n\r\n                        transition-transform\r\n                        duration-700 ease-out\r\n\r\n                        sm:max-h-none\r\n                        group-hover:scale-[1.025]\r\n                      " })} </div>`} </div> </div> </article>`));
}, "D:/D Drive/artisanal-byte/topklickz/src/components/Services.astro", void 0);

const $$Work = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Work;
  const { work } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-white py-16 sm:py-20 lg:py-24"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <!-- Header --> <div class="
        mb-12 flex flex-col gap-6 pb-8
        lg:flex-row lg:items-start lg:justify-between
      "> <h2 class="
          font-clash text-4xl font-semibold
          leading-[93%] tracking-[0]
          md:text-[48px]
          lg:text-[50px] uppercase
        "> ${work.title} </h2> <p class="
          max-w-xl
          font-geist text-base
          leading-[134%] tracking-[0]
          sm:text-lg
          lg:text-[22px]
        "> ${work.description} </p> <a${addAttribute(work.buttonLink, "href")} class="
          group mt-2 inline-flex items-center gap-2
          font-geist text-lg font-light
          leading-[114%] tracking-[0]
          text-black
          transition-colors duration-300
          hover:text-violet-600
          sm:text-[22px]
        "> <span>${work.buttonText}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": work.buttonIcon, "class": "\r\n            h-5 w-5\r\n            transition-transform duration-300\r\n            group-hover:translate-x-1\r\n          " })} </a> </div> <!-- Projects --> <div class="grid gap-12 md:grid-cols-2"> ${work.projects.map((project) => renderTemplate`<a${addAttribute(project.link, "href")} class="group block"> <!-- Image --> <div class="overflow-hidden rounded-md"> ${renderComponent($$result, "Image", $$Image, { "src": project.image, "alt": project.title, "width": 700, "height": 500, "class": "\r\n                  h-[240px] w-full object-cover\r\n                  transition-transform duration-700 ease-out\r\n                  group-hover:scale-[1.03]\r\n                  sm:h-[280px]\r\n                  lg:h-[320px]\r\n                " })} </div> <!-- Content --> <div class="mt-4"> <h3 class="
                  font-clash text-[26px] font-semibold
                  leading-[93%] tracking-[0]
                  transition-colors duration-300
                  group-hover:text-violet-600
                  md:text-[34px]
                  lg:text-[35px]
                "> ${project.title} </h3> <p class="
                  mt-3
                  font-clash text-lg font-normal
                  leading-[93%] tracking-[0]
                  text-black
                  sm:text-[20px]
                "> ${project.category} </p> <p class="
                  mt-3 max-w-md
                  font-clash text-sm font-medium
                  leading-[140%] tracking-[0]
                  text-gray-500
                  sm:text-base
                "> ${project.description} </p> </div> </a>`)} </div> </div> <!-- Full-width Bottom Gradient Border --> <div class="
      pointer-events-none
      absolute inset-x-0 bottom-0
      h-[3px]
      bg-gradient-to-r
      from-orange-500
      via-pink-500
      to-violet-600
    " aria-hidden="true"></div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/Work.astro", void 0);

const $$TrustedBrands = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TrustedBrands;
  const { trustedBrands } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative bg-white py-14" data-astro-cid-b536r6ey> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-astro-cid-b536r6ey> <div class="grid grid-cols-1
    gap-12
    lg:grid-cols-[1.7fr_1fr]
    lg:items-center
    lg:gap-16" data-astro-cid-b536r6ey> <!-- Left Content --> <div class="w-full" data-astro-cid-b536r6ey> <h2 class="font-clash text-4xl font-semibold leading-[93%] tracking-[0] uppercase md:text-[48px] lg:text-[50px]" data-astro-cid-b536r6ey> ${trustedBrands.title} <span class="gradient-text" data-astro-cid-b536r6ey> ${" "} ${trustedBrands.highlight} </span> </h2> <p class="mt-3 max-w-xl font-geist text-lg leading-[114%] tracking-[0] text-black sm:text-[22px] lg:text-[25px]" data-astro-cid-b536r6ey> ${trustedBrands.description} </p> </div> <!-- Animated Brand Orbit --> <div class="trusted-orbit" aria-label="Brands trusted by Topklickz" data-astro-cid-b536r6ey> ${[
    { name: "inner", radius: "clamp(88px, 11vw, 124px)", offset: 0 },
    { name: "middle", radius: "clamp(122px, 15vw, 166px)", offset: 45 },
    { name: "outer", radius: "clamp(158px, 19vw, 208px)", offset: 90 }
  ].map((orbit) => renderTemplate`<div${addAttribute(`trusted-orbit__ring trusted-orbit__ring--${orbit.name}`, "class")}${addAttribute(`--orbit-radius: ${orbit.radius}`, "style")} data-astro-cid-b536r6ey> <span class="trusted-orbit__track" aria-hidden="true" data-astro-cid-b536r6ey></span> ${trustedBrands.logos.filter((_, index) => index % 3 === ["inner", "middle", "outer"].indexOf(orbit.name)).map((logo, index) => renderTemplate`<a${addAttribute(logo.url, "href")} target="_blank" rel="noopener noreferrer" class="trusted-orbit__item"${addAttribute(`--orbit-angle: ${orbit.offset + index * 180}deg`, "style")}${addAttribute(logo.alt, "aria-label")} data-astro-cid-b536r6ey> <span class="trusted-orbit__item-inner" data-astro-cid-b536r6ey> ${renderComponent($$result, "Image", $$Image, { "src": logo.image, "alt": logo.alt, "width": 180, "height": 90, "loading": "eager", "class": "trusted-orbit__logo", "data-astro-cid-b536r6ey": true })} </span> </a>`)} </div>`)} <div class="trusted-orbit__center" data-astro-cid-b536r6ey> ${renderComponent($$result, "Image", $$Image, { "src": "/uploads/logo/navbar/logo.png", "alt": "Topklickz", "width": 30, "height": 30, "loading": "eager", "class": "trusted-orbit__center-logo", "data-astro-cid-b536r6ey": true })} </div> </div> </div> </div> <!-- Full-width Bottom Gradient Border --> <div class="pointer-events-none
      absolute inset-x-0 bottom-0
      h-[3px]
      bg-gradient-to-r
      from-orange-500
      via-pink-500
      to-violet-600" aria-hidden="true" data-astro-cid-b536r6ey></div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/trustedBrands.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Testimonials;
  const { testimonials } = Astro2.props;
  const items = testimonials?.items ?? [];
  const pages = Array.from(
    { length: Math.ceil(items.length / 2) },
    (_, pageIndex) => items.slice(pageIndex * 2, pageIndex * 2 + 2)
  );
  return renderTemplate(_a || (_a = __template(["", '<section class="relative"> <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"> <h2 class="font-clash text-4xl font-semibold leading-[93%] tracking-[0] md:text-[48px] lg:text-[50px]"> ', ' <span class="gradient-text"> ', '</span> </h2> <div class="relative mt-8" data-testimonial-carousel> <div class="relative overflow-hidden transition-[height] duration-500 ease-out" data-testimonial-viewport> ', ' </div> <div class="pointer-events-none absolute inset-0 z-20 hidden overflow-visible sm:block"> <span class="absolute inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full gradient-bg px-3 py-2 font-clash text-sm font-bold uppercase tracking-[0.16em] text-white" data-hover-pill style="left: 50%; top: 50%;"> ', ' <span>Click to see next</span> </span> </div> </div> <div class="mt-5 flex justify-center sm:hidden"> <button type="button" class="inline-flex items-center gap-2 rounded-full gradient-bg px-4 py-3 font-clash text-sm font-bold uppercase tracking-[0.16em] text-white shadow-lg transition-transform duration-200 active:scale-[0.98] touch-manipulation" data-testimonial-next aria-label="Show next testimonials"> ', ' <span>Click to see next</span> </button> </div> </div> <div class="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600" aria-hidden="true"></div> </section> <script>\n  const carousel = document.querySelector("[data-testimonial-carousel]");\n\n  if (carousel) {\n    // const viewport = carousel.querySelector("[data-testimonial-viewport]");\n    const hoverPill = carousel.querySelector("[data-hover-pill]");\n    const nextButton = carousel.parentElement?.querySelector(\n      "[data-testimonial-next]",\n    );\n    const pages = Array.from(\n      carousel.querySelectorAll("[data-testimonial-page]"),\n    );\n    const cards = Array.from(\n      carousel.querySelectorAll("[data-testimonial-card]"),\n    );\n    let activeIndex = 0;\n\n    const goToNextPage = () => {\n      if (!pages.length) return;\n\n      setActivePage((activeIndex + 1) % pages.length);\n    };\n\n    const moveHoverPill = (event) => {\n      if (!(hoverPill instanceof HTMLElement)) return;\n\n      const rect = carousel.getBoundingClientRect();\n      const x = event.clientX - rect.left;\n      const y = event.clientY - rect.top;\n\n      hoverPill.style.left = `${x}px`;\n      hoverPill.style.top = `${y}px`;\n      hoverPill.style.opacity = "1";\n    };\n\n    const hideHoverPill = () => {\n      if (!(hoverPill instanceof HTMLElement)) return;\n\n      hoverPill.style.opacity = "0";\n    };\n\n    const setViewportHeight = (page) => {\n      if (!viewport || !page) return;\n      viewport.style.height = `${page.offsetHeight}px`;\n    };\n\n    const setActivePage = (nextIndex) => {\n      activeIndex = nextIndex;\n\n      pages.forEach((page, index) => {\n        const isActive = index === activeIndex;\n        page.style.opacity = isActive ? "1" : "0";\n        page.style.transform = isActive\n          ? "translate3d(0, 0, 0)"\n          : "translate3d(32px, 0, 0)";\n        page.style.pointerEvents = isActive ? "auto" : "none";\n        page.style.position = isActive ? "relative" : "absolute";\n        page.style.inset = isActive ? "auto" : "0";\n      });\n\n      setViewportHeight(pages[activeIndex]);\n    };\n\n    const handleResize = () => {\n      setViewportHeight(pages[activeIndex]);\n    };\n\n    cards.forEach((card) => {\n      card.addEventListener("click", goToNextPage);\n\n      card.addEventListener("pointerenter", (event) => {\n        if (event instanceof PointerEvent) {\n          moveHoverPill(event);\n        }\n      });\n\n      card.addEventListener("pointermove", (event) => {\n        if (event instanceof PointerEvent) {\n          moveHoverPill(event);\n        }\n      });\n\n      card.addEventListener("pointerleave", hideHoverPill);\n    });\n\n    if (nextButton instanceof HTMLButtonElement) {\n      nextButton.addEventListener("click", goToNextPage);\n    }\n\n    carousel.addEventListener("pointerleave", hideHoverPill);\n\n    const reducedMotion = window.matchMedia(\n      "(prefers-reduced-motion: reduce)",\n    ).matches;\n\n    if (reducedMotion) {\n      pages.forEach((page, index) => {\n        page.style.transition = "none";\n        page.style.transform = "none";\n        page.style.opacity = index === 0 ? "1" : "0";\n      });\n    }\n\n    setActivePage(0);\n    window.addEventListener("resize", handleResize, { passive: true });\n\n    document.addEventListener("astro:page-load", () => {\n      setActivePage(activeIndex);\n    });\n  }\n<\/script>'], ["", '<section class="relative"> <div class="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"> <h2 class="font-clash text-4xl font-semibold leading-[93%] tracking-[0] md:text-[48px] lg:text-[50px]"> ', ' <span class="gradient-text"> ', '</span> </h2> <div class="relative mt-8" data-testimonial-carousel> <div class="relative overflow-hidden transition-[height] duration-500 ease-out" data-testimonial-viewport> ', ' </div> <div class="pointer-events-none absolute inset-0 z-20 hidden overflow-visible sm:block"> <span class="absolute inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full gradient-bg px-3 py-2 font-clash text-sm font-bold uppercase tracking-[0.16em] text-white" data-hover-pill style="left: 50%; top: 50%;"> ', ' <span>Click to see next</span> </span> </div> </div> <div class="mt-5 flex justify-center sm:hidden"> <button type="button" class="inline-flex items-center gap-2 rounded-full gradient-bg px-4 py-3 font-clash text-sm font-bold uppercase tracking-[0.16em] text-white shadow-lg transition-transform duration-200 active:scale-[0.98] touch-manipulation" data-testimonial-next aria-label="Show next testimonials"> ', ' <span>Click to see next</span> </button> </div> </div> <div class="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600" aria-hidden="true"></div> </section> <script>\n  const carousel = document.querySelector("[data-testimonial-carousel]");\n\n  if (carousel) {\n    // const viewport = carousel.querySelector("[data-testimonial-viewport]");\n    const hoverPill = carousel.querySelector("[data-hover-pill]");\n    const nextButton = carousel.parentElement?.querySelector(\n      "[data-testimonial-next]",\n    );\n    const pages = Array.from(\n      carousel.querySelectorAll("[data-testimonial-page]"),\n    );\n    const cards = Array.from(\n      carousel.querySelectorAll("[data-testimonial-card]"),\n    );\n    let activeIndex = 0;\n\n    const goToNextPage = () => {\n      if (!pages.length) return;\n\n      setActivePage((activeIndex + 1) % pages.length);\n    };\n\n    const moveHoverPill = (event) => {\n      if (!(hoverPill instanceof HTMLElement)) return;\n\n      const rect = carousel.getBoundingClientRect();\n      const x = event.clientX - rect.left;\n      const y = event.clientY - rect.top;\n\n      hoverPill.style.left = \\`\\${x}px\\`;\n      hoverPill.style.top = \\`\\${y}px\\`;\n      hoverPill.style.opacity = "1";\n    };\n\n    const hideHoverPill = () => {\n      if (!(hoverPill instanceof HTMLElement)) return;\n\n      hoverPill.style.opacity = "0";\n    };\n\n    const setViewportHeight = (page) => {\n      if (!viewport || !page) return;\n      viewport.style.height = \\`\\${page.offsetHeight}px\\`;\n    };\n\n    const setActivePage = (nextIndex) => {\n      activeIndex = nextIndex;\n\n      pages.forEach((page, index) => {\n        const isActive = index === activeIndex;\n        page.style.opacity = isActive ? "1" : "0";\n        page.style.transform = isActive\n          ? "translate3d(0, 0, 0)"\n          : "translate3d(32px, 0, 0)";\n        page.style.pointerEvents = isActive ? "auto" : "none";\n        page.style.position = isActive ? "relative" : "absolute";\n        page.style.inset = isActive ? "auto" : "0";\n      });\n\n      setViewportHeight(pages[activeIndex]);\n    };\n\n    const handleResize = () => {\n      setViewportHeight(pages[activeIndex]);\n    };\n\n    cards.forEach((card) => {\n      card.addEventListener("click", goToNextPage);\n\n      card.addEventListener("pointerenter", (event) => {\n        if (event instanceof PointerEvent) {\n          moveHoverPill(event);\n        }\n      });\n\n      card.addEventListener("pointermove", (event) => {\n        if (event instanceof PointerEvent) {\n          moveHoverPill(event);\n        }\n      });\n\n      card.addEventListener("pointerleave", hideHoverPill);\n    });\n\n    if (nextButton instanceof HTMLButtonElement) {\n      nextButton.addEventListener("click", goToNextPage);\n    }\n\n    carousel.addEventListener("pointerleave", hideHoverPill);\n\n    const reducedMotion = window.matchMedia(\n      "(prefers-reduced-motion: reduce)",\n    ).matches;\n\n    if (reducedMotion) {\n      pages.forEach((page, index) => {\n        page.style.transition = "none";\n        page.style.transform = "none";\n        page.style.opacity = index === 0 ? "1" : "0";\n      });\n    }\n\n    setActivePage(0);\n    window.addEventListener("resize", handleResize, { passive: true });\n\n    document.addEventListener("astro:page-load", () => {\n      setActivePage(activeIndex);\n    });\n  }\n<\/script>'])), maybeRenderHead(), testimonials.title, testimonials.highlight, pages.map((page, pageIndex) => renderTemplate`<div${addAttribute([
    "grid gap-6 lg:grid-cols-2 lg:gap-8",
    pageIndex === 0 ? "relative opacity-100 translate-x-0" : "absolute inset-0 opacity-0 translate-x-8 pointer-events-none"
  ], "class:list")} data-testimonial-page${addAttribute(pageIndex, "data-page-index")}> ${page.map((item) => renderTemplate`<button type="button" class="group relative h-full lg:min-h-[340px] rounded-[28px] border border-black/10 bg-white p-6 text-left transition-all duration-500 ease-out sm:p-8 lg:p-10 touch-manipulation" data-testimonial-card aria-label="Show next testimonials"> <div class="flex h-full flex-col justify-between gap-4"> <p class="font-geist text-lg leading-[1.28] tracking-normal text-black sm:text-2xl lg:text-[28px]"> ${item.quote} </p> <div class="flex items-center gap-5 pt-2"> ${renderComponent($$result, "Image", $$Image, { "src": item.image, "alt": item.name, "width": 80, "height": 80, "class": "h-16 w-16 shrink-0 rounded-full object-cover sm:h-20 sm:w-20" })} <div> <h3 class="font-geist text-xl leading-[114%] tracking-normal text-black sm:text-[25px]"> ${item.name} </h3> <p class="mt-1 font-geist text-sm font-light leading-[114%] tracking-normal sm:text-base"> ${item.designation} </p> </div> </div> </div> </button>`)} </div>`), renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-top-right", "class": "h-4 w-4 shrink-0" }), renderComponent($$result, "Icon", $$Icon, { "name": "mdi:arrow-top-right", "class": "h-4 w-4 shrink-0" }));
}, "D:/D Drive/artisanal-byte/topklickz/src/components/Testimonials.astro", void 0);

const $$FieldNotes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$FieldNotes;
  const { fieldNotes } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-14"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="flex flex-col gap-5 sm:items-start lg:flex-row lg:items-end lg:justify-between"> <div> <h2 class="font-clash text-4xl font-semibold leading-[100%] tracking-[0] md:text-[48px] lg:text-[50px]"> ${fieldNotes.title} <br> <span class="gradient-text mt-2"> ${fieldNotes.highlight} </span> </h2> <!-- <p class="text-6xl font-bold">FROM THE STUDIO.</p> --> </div> <a${addAttribute(fieldNotes?.buttonLink, "href")} class="inline-flex items-center gap-3 text-base font-medium group sm:text-lg lg:text-xl"> ${fieldNotes?.buttonText} ${renderComponent($$result, "Icon", $$Icon, { "name": fieldNotes.buttonIcon, "class": "w-6 h-6" })} </a> </div> <div class="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3"> ${fieldNotes.posts.map((post) => renderTemplate`<a${addAttribute(`/posts/${post.slug}`, "href")} class="group block cursor-pointer"> <div class="
                                overflow-hidden
                                rounded-[18px]
                                bg-black/5
                                shadow-[0_0_0_1px_rgba(0,0,0,0.04)]
                                transition-[box-shadow,background-color]
                                duration-500
                                ease-out
                                group-hover:bg-black/[0.03]
                                group-hover:shadow-[0_18px_50px_rgba(15,15,17,0.12)]
                            "> <div class="
                                    transform-gpu
                                    transition-transform
                                    duration-700
                                    ease-out
                                    group-hover:translate-y-3
                                "> ${renderComponent($$result, "Image", $$Image, { "src": post.image, "alt": post.title, "width": 500, "height": 350, "class": "h-auto w-full object-cover grayscale contrast-110 saturate-0 transition-[filter,opacity] duration-700 ease-out group-hover:grayscale-0 group-hover:contrast-100 group-hover:saturate-100" })} </div> </div> <div class="
                                mt-5
                                transition-transform
                                duration-500
                                ease-out
                                group-hover:translate-y-3
                            "> <h3 class="font-geist text-xl font-bold leading-[114%] tracking-normal text-black transition-colors duration-300 group-hover:text-black/95 sm:text-[24px]"> ${post.title} </h3> <p class="mt-3 font-geist text-sm leading-[114%] tracking-normal text-black/75 transition-colors duration-300 group-hover:text-black/90 sm:text-base"> ${post.description} </p> </div> </a>`)} </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/FieldNotes.astro", void 0);

const $$TeamCulture = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$TeamCulture;
  const { teamCulture } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="py-14"> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"> <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"> <!-- Left Content --> <div> <h2 class="font-clash text-3xl font-semibold leading-[114%] tracking-normal uppercase sm:text-[36px] lg:text-[40px]"> ${teamCulture.title} <span class="gradient-text"> ${" "} ${teamCulture.highlight} </span> </h2> <p class="mt-6 font-geist text-base leading-[120%] tracking-normal sm:text-lg lg:text-[20px]"> ${teamCulture.descriptionOne} </p> <p class="mt-4 font-geist text-base leading-[120%] tracking-normal sm:text-lg lg:text-[20px]"> ${teamCulture.descriptionTwo} </p> </div> <!-- Right Image --> <div> ${renderComponent($$result, "Image", $$Image, { "src": teamCulture.image, "alt": teamCulture.imageAlt, "width": 900, "height": 700, "class": "w-full rounded-lg object-cover" })} </div> </div> </div> </section>`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/TeamCulture.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Faq;
  const { faq } = Astro2.props;
  const items = faq.items.map((item, index) => ({
    ...item,
    isDefaultOpen: item.defaultOpen || index === 0
  }));
  return renderTemplate`${maybeRenderHead()}<section class="py-10 sm:py-14" data-astro-cid-z6gx6xcw> <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-astro-cid-z6gx6xcw> <h2 class="font-clash text-4xl font-semibold leading-[93%] tracking-[0] uppercase md:text-[48px] lg:text-[50px]" data-astro-cid-z6gx6xcw> ${faq.title} <span class="gradient-text" data-astro-cid-z6gx6xcw> ${" "} ${faq.highlight} </span> </h2> <div class="mt-8" data-astro-cid-z6gx6xcw> <div class="h-px w-full bg-gradient-to-r from-[#FEC053] via-[#F2203E] via-50% to-[#5342D6] opacity-90" data-astro-cid-z6gx6xcw></div> ${items.map((faq2, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-z6gx6xcw": true }, { "default": ($$result2) => renderTemplate` <div class="py-6" data-faq-item${addAttribute(faq2.isDefaultOpen ? "true" : "false", "data-open")} data-astro-cid-z6gx6xcw> <button type="button" class="
                    flex w-full flex-wrap
                    cursor-pointer
                    items-center
                    justify-between
                    gap-4
                    text-left
                    font-clash
                    text-[25px]
                    font-medium
                    leading-[28.8px]
                    tracking-normal
                  "${addAttribute(faq2.isDefaultOpen ? "true" : "false", "aria-expanded")} data-faq-trigger data-astro-cid-z6gx6xcw> <span class="
		font-medium
		text-[20px]
	" data-astro-cid-z6gx6xcw> ${faq2.question} </span> <span class="text-[24px] transition-transform duration-300" data-faq-icon data-astro-cid-z6gx6xcw>
+
</span> </button> <div class="faq-panel"${addAttribute(faq2.isDefaultOpen ? "false" : "true", "aria-hidden")} data-faq-panel data-astro-cid-z6gx6xcw> <div class="overflow-hidden" data-astro-cid-z6gx6xcw> <p class="
                        pt-5
                        max-w-3xl
                        font-geist
                        text-base
                        leading-[28.8px]
                        tracking-normal
                        text-[#010101]
                        sm:text-[18px]
                      " data-astro-cid-z6gx6xcw> ${faq2.answer} </p> </div> </div> </div> ${index < items.length - 1 && renderTemplate`<div class="h-px w-full bg-gradient-to-r from-[#FEC053] via-[#F2203E] via-50% to-[#5342D6] opacity-90" data-astro-cid-z6gx6xcw></div>`}` })}`)} <div class="h-px w-full bg-gradient-to-r from-[#FEC053] via-[#F2203E] via-50% to-[#5342D6] opacity-90" data-astro-cid-z6gx6xcw></div> </div> </div> </section>  ${renderScript($$result, "D:/D Drive/artisanal-byte/topklickz/src/components/Faq.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/D Drive/artisanal-byte/topklickz/src/components/Faq.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const reader = createReader(process.cwd(), config);
  const site = await reader.singletons.site.read();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": site?.seo?.title, "description": site?.seo?.description, "keywords": site?.seo?.keywords }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "navbar": site?.navbar })} ${renderComponent($$result2, "Hero", $$Hero, { "hero": site?.hero })} ${renderComponent($$result2, "Studio", $$Studio, { "studio": site?.studio })} ${renderComponent($$result2, "Services", $$Services, { "services": site?.services })} ${renderComponent($$result2, "Work", $$Work, { "work": site?.work })} ${renderComponent($$result2, "TrustedBrands", $$TrustedBrands, { "trustedBrands": site?.trustedBrands })} ${renderComponent($$result2, "Testimonials", $$Testimonials, { "testimonials": site?.testimonials })} ${renderComponent($$result2, "FieldNotes", $$FieldNotes, { "fieldNotes": site?.fieldNotes })} ${renderComponent($$result2, "TeamCulture", $$TeamCulture, { "teamCulture": site?.teamCulture })} ${renderComponent($$result2, "Faq", $$Faq, { "faq": site?.faq })} ${renderComponent($$result2, "Cta", $$Cta, { "cta": site?.cta })} ${renderComponent($$result2, "Footer", $$Footer, { "footer": site?.footer })} ` })}`;
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
