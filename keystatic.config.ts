import { config, fields, collection, singleton } from '@keystatic/core';

// export default config({
//   storage: {
//     kind: 'local',
//   },
//   collections: {
//     posts: collection({
//       label: 'Posts',
//       slugField: 'title',
//       path: 'src/content/posts/*',
//       format: { contentField: 'content' },
//       schema: {
//         title: fields.slug({ name: { label: 'Title' } }),
//         content: fields.markdoc({
//           label: 'Content',
//           options: {
//             image: {
//               directory: 'src/assets/images/posts',
//               publicPath: '../../assets/images/posts/',
//             },
//           },
//         }),
//       },
//     }),
//   },
// });

export default config({
  storage: {
    kind: "local",
  },

  singletons: {
    site: singleton({
      label: "Home Page",
      path: "src/content/site",

      schema: {
        // =========================
        // Navbar
        // =========================
        navbar: fields.object({
          logo: fields.image({
            label: "Logo",
            directory: "public/uploads/logo",
            publicPath: "/uploads/logo",
          }),

          navigation: fields.array(
            fields.object({
              title: fields.text({
                label: "Menu Title",
              }),

              href: fields.text({
                label: "Link",
              }),
            }),
            {
              label: "Navigation",
              itemLabel: (props) => props.fields.title.value,
            }
          ),

          buttonText: fields.text({
            label: "Button Text",
          }),

          buttonLink: fields.text({
            label: "Button Link",
          }),

        },
          {
            label: "========== NAVBAR ==========",
          }
        ),


        // =========================
        // Hero Section
        // =========================
        hero: fields.object(
          {
            title: fields.text({
              label: "Title",
            }),

            subtitle: fields.text({
              label: "Subtitle",
            }),

            description: fields.text({
              label: "Description",
              multiline: true,
            }),

            buttonText: fields.text({
              label: "Button Text",
            }),

            buttonLink: fields.text({
              label: "Button Link",
            }),

            buttonIcon: fields.text({
              label: "Button Icon (Iconify)",
              description: "Example: mdi:arrow-down or lucide:arrow-down",
            }),

            image: fields.image({
              label: "Hero Image",
              directory: "public/uploads/hero",
              publicPath: "/uploads/hero",
            }),
          },
          {
            label: "========== HERO SECTION ==========",
          }
        ),

        // =========================
        // Studio Section
        // =========================
        studio: fields.object(
          {
            sectionNumber: fields.text({
              label: "Section Number",
            }),

            sectionTitle: fields.text({
              label: "Section Title",
            }),

            title: fields.text({
              label: "Main Title",
              multiline: true,
            }),

            description: fields.text({
              label: "Description",
              multiline: true,
            }),

            clientTitle: fields.text({
              label: "Client Title",
            }),

            clients: fields.array(
              fields.object({
                logo: fields.image({
                  label: "Client Logo",
                  directory: "public/uploads/clients",
                  publicPath: "/uploads/clients",
                }),
                alt: fields.text({
                  label: "Logo Alt",
                }),
              }),
              {
                label: "Client Logos",
                itemLabel: (props) => props.fields.alt.value,
              }
            ),

            buttonText: fields.text({
              label: "Button Text",
            }),

            buttonLink: fields.text({
              label: "Button Link",
            }),

            // buttonIcon: fields.text({
            //   label: "Button Icon (Iconify)",
            // }),
          },
          {
            label: "========== STUDIO SECTION ==========",
          }
        ),

        // =========================
        // Services Section
        // =========================
        services: fields.object(
          {
            title: fields.text({
              label: "Title",
            }),

            gradientTitle: fields.text({
              label: "Gradient Title",
            }),

            endTitle: fields.text({
              label: "End Title",
            }),

            items: fields.array(
              fields.object({
                number: fields.text({
                  label: "Number",
                }),

                title: fields.text({
                  label: "Service Title",
                }),

                description: fields.text({
                  label: "Description",
                  multiline: true,
                }),

                features: fields.array(
                  fields.text({
                    label: "Feature",
                  }),
                  {
                    label: "Features",
                  }
                ),

                image: fields.image({
                  label: "Service Image",
                  directory: "public/uploads/services",
                  publicPath: "/uploads/services",
                }),

                buttonText: fields.text({
                  label: "Button Text",
                }),

                buttonLink: fields.text({
                  label: "Button Link",
                }),

                buttonIcon: fields.text({
                  label: "Button Icon (Iconify)",
                }),
              }),
              {
                label: "Services",
                itemLabel: (props) => props.fields.title.value,
              }
            ),
          },
          {
            label: "========== SERVICES SECTION ==========",
          }
        ),

        // =========================
        // Selected Work Section
        // =========================
        work: fields.object(
          {
            title: fields.text({
              label: "Section Title",
            }),

            description: fields.text({
              label: "Section Description",
              multiline: true,
            }),

            buttonText: fields.text({
              label: "Button Text",
            }),

            buttonLink: fields.text({
              label: "Button Link",
            }),

            buttonIcon: fields.text({
              label: "Button Icon (Iconify)",
            }),

            projects: fields.array(
              fields.object({
                image: fields.image({
                  label: "Project Image",
                  directory: "public/uploads/work",
                  publicPath: "/uploads/work",
                }),

                title: fields.text({
                  label: "Project Title",
                }),

                category: fields.text({
                  label: "Categories",
                  description: "Example: Brand Identity • Packaging • Website",
                }),

                description: fields.text({
                  label: "Short Description",
                  multiline: true,
                }),

                link: fields.text({
                  label: "Project Link",
                }),
              }),
              {
                label: "Projects",
                itemLabel: (props) => props.fields.title.value,
              }
            ),
          },
          {
            label: "========== SELECTED WORK ==========",
          }
        ),


        // Trusted Brands Section
        trustedBrands: fields.object({
          title: fields.text({
            label: "Title",
          }),

          highlight: fields.text({
            label: "Highlighted Word",
          }),

          description: fields.text({
            label: "Description",
            multiline: true,
          }),

          logos: fields.array(
            fields.object({
              image: fields.image({
                label: "Logo",
                directory: "public/uploads/clients",
                publicPath: "/uploads/clients/",
              }),

              alt: fields.text({
                label: "Alt Text",
              }),

              url: fields.url({
                label: "Website URL",
              }),
            }),
            {
              label: "Client Logos",
              itemLabel: (props) => props.fields.alt.value || "Logo",
            }
          ),
        },
          {
            label: "========== TRUSTED BRANDS ==========",
          }
        ),

        // Testimonials Section
        testimonials: fields.object({
          title: fields.text({
            label: "Section Title",
          }),

          highlight: fields.text({
            label: "Highlighted Word",
          }),

          items: fields.array(
            fields.object({
              quote: fields.text({
                label: "Quote",
                multiline: true,
              }),

              image: fields.image({
                label: "Founder Image",
                directory: "public/uploads/testimonials",
                publicPath: "/uploads/testimonials/",
              }),

              name: fields.text({
                label: "Founder Name",
              }),

              designation: fields.text({
                label: "Designation",
              }),

              // company: fields.text({
              //   label: "Company",
              // }),
            }),
            {
              label: "Testimonials",
              itemLabel: (props) => props.fields.name.value || "Testimonial",
            }
          ),
        },
          {
            label: "========== TESTIMONIALS ==========",
          }
        ),


        // fieldNotes Section
        fieldNotes: fields.object({
          title: fields.text({
            label: "Title",
          }),

          highlight: fields.text({
            label: "Highlighted Word",
          }),

          buttonText: fields.text({
            label: "Button Text",
          }),
          buttonIcon: fields.text({
            label: "Button Icon (Iconify)",
            description: "Example: mdi:arrow-down or lucide:arrow-down",
          }),

          buttonLink: fields.url({
            label: "Button Link",
          }),

          posts: fields.array(
            fields.object({
              image: fields.image({
                label: "Cover Image",
                directory: "public/uploads/blogs",
                publicPath: "/uploads/blogs/",
              }),
              alt: fields.text({
                label: "Alt Text",
              }),

              title: fields.text({
                label: "Blog Title",
              }),

              description: fields.text({
                label: "Short Description",
                multiline: true,
              }),


            }),

          ),
        },
          {
            label: "========== FIELDNOTES ==========",
          }
        ),


        // Team Culture Section 
        teamCulture: fields.object({
          title: fields.text({
            label: "Title",
          }),

          highlight: fields.text({
            label: "Highlighted Text",
          }),

          descriptionOne: fields.text({
            label: "Description One",
            multiline: true,
          }),

          descriptionTwo: fields.text({
            label: "Description Two",
            multiline: true,
          }),

          image: fields.image({
            label: "Section Image",
            directory: "public/uploads/creative",
            publicPath: "/uploads/creative/",
          }),

          imageAlt: fields.text({
            label: "Image Alt Text",
          }),
        },
          {
            label: "========== TEAM CULTURE ==========",
          }
        ),


        // FAQ Section
        faq: fields.object({
          title: fields.text({
            label: "Title",
          }),

          highlight: fields.text({
            label: "Highlighted Text",
          }),

          items: fields.array(
            fields.object({
              question: fields.text({
                label: "Question",
              }),

              answer: fields.text({
                label: "Answer",
                multiline: true,
              }),

              defaultOpen: fields.checkbox({
                label: "Open by Default",
                defaultValue: false,
              }),
            }),
            {
              label: "FAQ Items",
              itemLabel: (props) => props.fields.question.value || "FAQ",
            }
          ),
        },
          {
            label: "========== FAQ ==========",
          }
        ),

        // CTA Section
        cta: fields.object({
          title: fields.text({
            label: "Title",
          }),

          highlight: fields.text({
            label: "Highlighted Text",
          }),

          description: fields.text({
            label: "Description",
            multiline: true,
          }),

          button: fields.object({
            text: fields.text({
              label: "Button Text",
            }),

            link: fields.url({
              label: "Button Link",
            }),

            icon: fields.text({
              label: "Button Icon (Iconify)",
              defaultValue: "lucide:arrow-right",
            }),
          }),
        },
          {
            label: "========== CTA ==========",
          }
        ),

        // footer Section

        footer: fields.object({
          logo: fields.image({
            label: "Footer Logo",
            directory: "public/uploads/footer",
            publicPath: "/uploads/footer",
          }),

          email: fields.text({
            label: "Email",
          }),

          phone: fields.text({
            label: "Phone",
          }),

          address: fields.text({
            label: "Address",
            multiline: true,
          }),

          policyText: fields.text({
            label: "Policy Text",
          }),

          copyright: fields.text({
            label: "Copyright",
          }),

          companyLinks: fields.array(
            fields.object({
              title: fields.text({
                label: "Title",
              }),

              href: fields.text({
                label: "Link",
              }),
            }),
            {
              label: "Company Links",
              itemLabel: (props) => props.fields.title.value || "Company Link",
            }
          ),

          serviceLinks: fields.array(
            fields.object({
              title: fields.text({
                label: "Title",
              }),

              href: fields.text({
                label: "Link",
              }),
            }),
            {
              label: "Service Links",
              itemLabel: (props) => props.fields.title.value || "Service Link",
            }
          ),

          socialLinks: fields.array(
            fields.object({
              title: fields.text({
                label: "Platform",
              }),

              href: fields.url({
                label: "URL",
              }),
            }),
            {
              label: "Social Links",
              itemLabel: (props) => props.fields.title.value || "Social Link",
            }
          ),

          marqueeImage: fields.image({
            label: "Bottom Large Image",
            directory: "public/uploads/footer",
            publicPath: "/uploads/footer",
          }),

          tagline: fields.text({
            label: "Bottom Tagline",
          }),
        },
          {
            label: "========== FOOTER ==========",
          }),

      },
    }),
  },
});