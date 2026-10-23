import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
    // repo: 'Artisanal-Byte/topklickz',
  },

  collections: {
    posts: collection({
      label: "Blog Posts",
      path: "src/content/posts/*",
      slugField: "title",
      format: { contentField: "content" },
      columns: ["title"],
      schema: {
        title: fields.slug({
          name: {
            label: "Title",
            validation: { isRequired: true },
          },
          slug: {
            label: "URL Slug",
            description: "The slug used in the article URL.",
          },
        }),

        coverImage: fields.image({
          label: "Cover Image",
          directory: "public/uploads/blog/posts",
          publicPath: "/uploads/blog/posts",
        }),

        content: fields.markdoc({
          label: "Article Content",
          options: {
            // Rich text controls stay inside Article Content.
            bold: true,
            italic: true,
            strikethrough: true,
            code: true,
            heading: [1, 2, 3, 4, 5, 6],
            blockquote: true,
            orderedList: true,
            unorderedList: true,
            link: true,
            divider: true,
            image: {
              directory: "public/uploads/blog/posts",
              publicPath: "/uploads/blog/posts",
            },
          },
        }),
      },
    }),
  },

  singletons: {
    site: singleton({
      label: "Home Page",
      path: "src/content/site",

      schema: {

        // =========================
        // SEO
        // =========================
        seo: fields.object({
          title: fields.text({
            label: "Title",
            validation: {
              isRequired: true,
              length: { min: 10, max: 60 },
            },
          }),
          description: fields.text({
            label: "Description",
            multiline: true,
            validation: {
              isRequired: true,
              length: { min: 50, max: 200 },
            },
          }),
          keywords: fields.text({
            label: "Keywords",
            validation: {
              isRequired: true,
            },
          }),
        },
          {
            label: "========== SEO ==========",
          }),
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

            videoUrl: fields.text({
              label: "Hero Video URL",
              description: "Optional MP4 or WebM path, for example /uploads/hero/hero/video.mp4",
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


    blog: singleton({
      label: "Blog Page",
      path: "src/content/blog",
      schema: {
        seo: fields.object({
          title: fields.text({
            label: "SEO Title",
            validation: { length: { max: 60 } },
          }),
          description: fields.text({
            label: "SEO Description",
            multiline: true,
            validation: { length: { max: 160 } },
          }),
          image: fields.image({
            label: "Social Share Image",
            directory: "public/uploads/blog",
            publicPath: "/uploads/blog",
          }),
        }, { label: "========== BLOG SEO ==========" }),

        hero: fields.object({
          eyebrow: fields.text({ label: "Eyebrow" }),
          titleLine1: fields.text({ label: "Title Line 1" }),
          titleLine2: fields.text({ label: "Title Line 2" }),
          titleLine3: fields.text({ label: "Title Line 3" }),
          highlight: fields.text({ label: "Highlighted Title" }),
          description: fields.text({
            label: "Description",
            multiline: true,
          }),
        }, { label: "========== BLOG HERO ==========" }),

        featuredPost: fields.object({
          badge: fields.text({
            label: "Badge",
            defaultValue: "FEATURED",
          }),
          post: fields.relationship({
            label: "Featured Post",
            collection: "posts",
            description: "Choose the post displayed in the large featured card.",
          }),
        }, { label: "========== FEATURED POST ==========" }),

        latestInsights: fields.object({
          title: fields.text({
            label: "Section Title",
            defaultValue: "Latest insights",
          }),
          viewAllText: fields.text({
            label: "View All Text",
            defaultValue: "View all insights",
          }),
          viewAllLink: fields.url({
            label: "View All Link",
            defaultValue: "/blog-inner",
          }),
          posts: fields.array(
            fields.object({
              slug: fields.text({
                label: "Post Slug",
                description: "First create the article in Blog Posts, then enter the exact same slug here, for example first-post.",
                validation: { isRequired: true },
              }),
              image: fields.image({
                label: "Card Image",
                directory: "public/uploads/blog/cards",
                publicPath: "/uploads/blog/cards",
                description: "Image shown on this blog card.",
              }),
              imageAlt: fields.text({
                label: "Card Image Alt Text",
              }),
              badge: fields.text({
                label: "Card Badge",
                defaultValue: "NEWS",
              }),
              title: fields.text({
                label: "Blog Title",
                validation: { isRequired: true },
              }),
              description: fields.text({
                label: "Blog Description",
                multiline: true,
                validation: { isRequired: true },
              }),
            }),
            {
              label: "Blog Cards",
              description: "Add cards to customize order, image, title and description. New Blog Posts not listed here are shown automatically.",
              validation: { length: { min: 1 } },
              itemLabel: (props) => props.fields.title.value || props.fields.slug.value || "Blog Card",
            }
          ),
        }, { label: "========== LATEST INSIGHTS ==========" }),

        newsletter: fields.object({
          image: fields.image({
            label: "Newsletter Image",
            directory: "public/uploads/blog",
            publicPath: "/uploads/blog",
          }),
          title: fields.text({ label: "Title" }),
          description: fields.text({
            label: "Description",
            multiline: true,
          }),
          placeholder: fields.text({
            label: "Email Placeholder",
            defaultValue: "Enter your email",
          }),
          buttonText: fields.text({
            label: "Button Text",
            defaultValue: "SUBSCRIBE",
          }),
        }, { label: "========== NEWSLETTER ==========" }),
      },
    }),

  },
});
