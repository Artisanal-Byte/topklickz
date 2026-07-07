import { config as config$1, singleton, fields } from '@keystatic/core';

const config = config$1({
  storage: {
    kind: "local"
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
          publicPath: "/uploads/logo"
        }),
        // Navigation Menu
        navigation: fields.array(
          fields.object({
            title: fields.text({
              label: "Menu Title"
            }),
            href: fields.text({
              label: "Link"
            })
          }),
          {
            label: "Navigation",
            itemLabel: (props) => props.fields.title.value
          }
        ),
        // CTA Button
        buttonText: fields.text({
          label: "Button Text"
        }),
        buttonLink: fields.text({
          label: "Button Link"
        })
      }
    })
  }
});

export { config as c };
