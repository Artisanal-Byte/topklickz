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


      },
    }),
  },
});