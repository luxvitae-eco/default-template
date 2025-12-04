---
type: PageLayout
title: Lux Vitae Eco - Our Team
sections:
  - title:
      text: Our Team
      color: text-dark
      styles:
        self:
          textAlign: center
      type: TitleBlock
    subtitle: The right collaborators. The right place. The right way.
    text: >
      Whether you're a homeowner dreaming of a custom eco-retreat, or a
      developer scaling green housing, our curated network of local architects,
      builders, and sustainability experts ensures your project is built
      responsibly, and without the usual headaches.
    actions: []
    colors: bg-neutral-fg-dark
    styles:
      self:
        padding:
          - pt-40
          - pl-4
          - pb-40
          - pr-4
        alignItems: center
        flexDirection: row-reverse
        justifyContent: center
      text:
        textAlign: center
      subtitle:
        textAlign: center
    type: GenericSection
    backgroundImage:
      type: BackgroundImage
      altText: altText of the image
      backgroundSize: cover
      backgroundPosition: center
      backgroundRepeat: no-repeat
      opacity: 100
      url: /images/abstract-background.svg
  - type: FeaturedPeopleSection
    title:
      type: TitleBlock
      text: Our Leadership
      color: text-dark
      styles:
        self:
          textAlign: center
    people:
      - content/data/person2_henrik.json
      - content/data/person3_jasmine.json
      - content/data/person4_lo.json
      - content/data/person5_emma.json
      - content/data/person6_mila.json
      - content/data/person7_thomas.json
      - content/data/person8_achim.json
      - content/data/person9_gabriel.json
      - content/data/person10_helen.json
      - content/data/person11_marija.json
      - content/data/person12_carmen.json
    actions: []
    variant: three-col-grid
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pt-16
          - pl-16
          - pb-16
          - pr-16
        justifyContent: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: Grow with Us
      color: text-dark
    subtitle: Help shape the future of responsible building
    text: >
      We’re a lean, values-driven team united by a belief that great projects start with great collaboration. If you share our commitment to sustainability, integrity, and craft. Let’s build together.
    actions:
      - type: Button
        label: View Open Positions
        url: /careers
        icon: arrowRight
        iconPosition: right
        style: secondary
      - type: Link
        label: Professional Network
        url: /professional
        showIcon: true
        icon: arrowRight
        iconPosition: right
        style: primary
    media:
      type: ImageBlock
      url: /images/lux-vitae-network.jpg
      altText: Lux Vitae Eco Network
      imageClassName: rounded-2xl
    badge:
      type: Badge
      label: Join Our Team
      color: text-primary
    colors: bg-light-fg-dark
    styles:
      self:
        alignItems: center
        flexDirection: row-reverse
slug: team
seo:
  type: Seo
  metaTitle: About Lux Vitae - Team
  metaDescription: Lux Vitae Eco Network.
  socialImage: \images\main-hero.jpg
  metaTags:
    - type: MetaTag
      property: 'og:title'
      content: Lux Vitae Eco - Team
---
