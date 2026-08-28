export type Language = "ar" | "en";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
}

export interface PortfolioSection {
  title: string;
  description: string;
}

export interface ValueProp {
  title: string;
  description: string;
}

export interface Translations {
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    slogan: string;
    mission: string;
  };
  nav: {
    home: string;
    services: string;
    portfolio: string;
    about: string;
    contact: string;
  };
  layout: {
    getInTouch: string;
    openMenu: string;
    closeMenu: string;
    footer: {
      quickLinks: string;
      servicesHeading: string;
      contactHeading: string;
      socialHeading: string;
      tagline: string;
    };
  };
  services: {
    heading: string;
    subheading: string;
    items: ServiceItem[];
  };
  portfolio: {
    heading: string;
    subheading: string;
    completed: PortfolioSection;
    inProgress: PortfolioSection;
    future: PortfolioSection;
  };
  home: {
    hero: {
      eyebrow: string;
      headline: string;
      subheadline: string;
      ctaPrimary: string;
      ctaSecondary: string;
      stats: string[];
    };
    servicesPreview: {
      heading: string;
      subheading: string;
      viewAll: string;
    };
    portfolioPreview: {
      heading: string;
      subheading: string;
      viewAll: string;
      statusCompleted: string;
      statusInProgress: string;
      statusFuture: string;
    };
    valueProps: {
      heading: string;
      subheading: string;
      items: ValueProp[];
    };
    finalCta: {
      heading: string;
      subheading: string;
      ctaSecondary: string;
    };
  };
  common: {
    switchLanguageTo: string;
    ctaPrimary: string;
    ctaSecondary: string;
    comingSoon: string;
    backHome: string;
    contactForm: {
      heading: string;
      name: string;
      email: string;
      message: string;
      submit: string;
    };
    footer: {
      rights: string;
      privacy: string;
      terms: string;
    };
  };
}
