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
      label: "Navbar",
      path: "src/content/site",

      schema: {
        // Logo
        logo: fields.image({
          label: "Logo",
          directory: "public/uploads/logo",
          publicPath: "/uploads/logo",
        }),

        // Navigation Menu
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

        // CTA Button
        buttonText: fields.text({
          label: "Button Text",
        }),

        buttonLink: fields.text({
          label: "Button Link",
        }),
      },
    }),
  },
});