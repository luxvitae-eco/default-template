---
type: PageLayout
title: Lux Vitae Eco - Frequent Asked Questions
sections:
  - type: CarouselSection
    items:
      - type: FeaturedItem
        title: Frequent Asked Questions
        tagline: FAQ
        subtitle: Information Center
        text: >
          This resource provides comprehensive answers to common inquiries from
          homeowners, architects, and builders. The information is designed to
          facilitate efficient exploration, comparison, and decision-making
          regarding our services and products.
        image:
          type: ImageBlock
          url: /images/img-placeholder.svg
          altText: Featured item
          styles:
            self:
              borderRadius: medium
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
      - type: FeaturedItem
        title: Submit an Inquiry
        tagline: Support
        subtitle: Dedicated Support
        text: >
          Should you not locate the required information within our FAQs, please
          feel free to contact us directly. We are committed to providing a
          personal response to all inquiries within 24 hours.
        image:
          type: ImageBlock
          url: /images/img-placeholder.svg
          altText: Business consulting
          elementId: ''
          styles:
            self:
              borderRadius: medium
        actions: []
        colors: bg-dark-fg-light
        styles:
          self:
            padding:
              - pt-9
              - pb-9
              - pl-9
              - pr-9
            textAlign: left
            borderRadius: large
            flexDirection: row
            justifyContent: center
    variant: tabs-nav
    colors: bg-light-fg-dark
    styles:
      self:
        justifyContent: center
      subtitle:
        textAlign: center
    subtitle: ''
  - type: FeaturedItemsSection
    title:
      type: TitleBlock
      text: Knowledge Base
      color: text-dark
      styles:
        self:
          textAlign: center
    subtitle: Find the Information You Need Below
    items:
      - type: FeaturedItem
        title: How much does an eco-home cost?
        subtitle: Development
        text: >
          Our eco-homes are competitively priced, often within 5–15% of
          conventional builds. While some systems, like solar or Energy Recovery
          Ventilator (ERV) add upfront cost, they slash utility bills by 60–80%,
          paying for themselves in 5–10 years. Plus, many regions offer green
          building grants or tax incentives.
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        tagline: ''
      - type: FeaturedItem
        title: How long does it take to build an eco-home?
        subtitle: Development
        text: >
          Typically 6–10 months from permit to keys, similar to custom homes.
          Our prefab components and integrated partner network reduce delays.
          Weather, site complexity, and customization can affect timeline, we'll
          map yours out in Week 1.
        actions: []
        colors: bg-dark-fg-light
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
        tagline: ''
      - type: FeaturedItem
        title: Do you build outside your service areas?
        subtitle: Development
        text: >
          We design and consult anywhere, but physical builds are currently
          focused in the Iberian Peninsula, Mediterranean, and the Balkans.
          Through our Partner Network, we can connect you with vetted local
          builders trained in our systems, so you get the Lux Vitae Eco
          standard, wherever you are.
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            borderRadius: x-large
            flexDirection: row
      - type: FeaturedItem
        title: What certifications do your homes meet?
        subtitle: Certification
        text: >
          All homes meet or exceed Passive House principles for energy
          efficiency and are designed with the EU Ecolabel criteria in
          mind—prioritizing low environmental impact, healthy indoor air
          quality, and resource-conscious construction. Rooted in the
          Mediterranean region, our designs respond to local climate, materials,
          and traditions, while supporting certifications aligned with your
          values: energy performance, sustainable sourcing, water stewardship,
          and wellness. Whether you seek compliance with EU green building
          standards or aspire to Living Building Challenge principles, we tailor
          each home to your vision.
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
      - type: FeaturedItem
        title: Can I customize the floor plan or materials?
        subtitle: Architectural Design
        text: >
          Absolutely. Our models are starting points, not templates. We'll adapt
          layouts, finishes, and systems to your lifestyle, site, and budget.
          Love reclaimed wood? Want a home office or creative studio? We'll make
          it happen, sustainably.
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
      - type: FeaturedItem
        title: What's included in the price?
        subtitle: Development
        text: >
          Our base price includes: architectural plans and permits,
          high-performance shell (walls, roof, windows), core systems
          (solar-ready, ERV, rainwater), interior finishes (flooring, paint,
          fixtures), landscaping (native, low-water), performance handover plus
          warranty.
        actions: []
        colors: bg-neutral-fg-dark
        styles:
          self:
            padding:
              - pt-8
              - pl-8
              - pb-8
              - pr-8
            textAlign: left
            borderRadius: x-large
            flexDirection: row
            justifyContent: center
    actions: []
    variant: toggle-list
    colors: bg-light-fg-dark
    styles:
      self:
        padding:
          - pb-40
          - pt-16
          - pl-3
          - pr-3
        justifyContent: center
      subtitle:
        textAlign: center
  - type: GenericSection
    title:
      type: TitleBlock
      text: Ask a Question
      color: text-dark
    subtitle: Personal Response Guaranteed
    text: |-
      If our FAQs didn't cover your query, please contact us directly. We believe in dedicated service and personally commit to responding to all inquiries within 24 hours.
    actions: []
    media:
      type: FormBlock
      fields:
        - type: TextFormControl
          name: name
          label: Name
          hideLabel: true
          placeholder: Your name
          isRequired: true
          width: full
        - type: EmailFormControl
          name: email
          label: Email
          hideLabel: true
          placeholder: Your email
          isRequired: true
          width: full
        - type: TextareaFormControl
          name: message
          label: Message
          hideLabel: true
          placeholder: Your message
          width: full
      submitButton:
        type: SubmitButtonFormControl
        label: Submit
        icon: arrowRight
        iconPosition: right
        style: primary
      elementId: contact-form
      styles:
        self:
          padding:
            - pt-6
            - pb-6
            - pl-6
            - pr-6
          borderColor: border-dark
          borderStyle: solid
          borderWidth: 1
          borderRadius: large
    badge:
      type: Badge
      label: Inquiry
      color: text-primary
    colors: bg-light-fg-dark
slug: faq
seo:
  type: Seo
  metaTitle: Lux Vitae Eco - Frequent Asked Questions
  metaDescription: Lux Vitae Eco Friendly House Frequent Asked Questions
  socialImage: \images\main-hero.jpg
  metaTags: []
---
