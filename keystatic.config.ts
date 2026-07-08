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

            buttonIcon: fields.image({
              label: "Button Icon",
              directory: "public/uploads/icons",
              publicPath: "/uploads/icons",
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
        )
      },
    }),
  },
});