import type { Schema, Struct } from '@strapi/strapi';

export interface IndustryChallenges extends Struct.ComponentSchema {
  collectionName: 'components_industry_challenges';
  info: {
    displayName: 'challenges';
  };
  attributes: {
    challengesContent: Schema.Attribute.Text;
    challengesHeading: Schema.Attribute.String;
  };
}

export interface IndustryChoosedata extends Struct.ComponentSchema {
  collectionName: 'components_industry_choosedata';
  info: {
    displayName: 'choosedata';
  };
  attributes: {
    chooseContent: Schema.Attribute.String;
    chooseHeading: Schema.Attribute.String;
  };
}

export interface IndustryFaqs extends Struct.ComponentSchema {
  collectionName: 'components_industry_faqs';
  info: {
    displayName: 'faqs';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface IndustryIndustryChild extends Struct.ComponentSchema {
  collectionName: 'components_industry_industry_children';
  info: {
    displayName: 'industry child';
  };
  attributes: {
    approachContent: Schema.Attribute.String;
    approaches: Schema.Attribute.Component<'industry.indutryapproach', true>;
    approachHeading: Schema.Attribute.String;
    approachheadingSpan: Schema.Attribute.Text;
    approachTagline: Schema.Attribute.String;
    challenges: Schema.Attribute.Component<'industry.challenges', true>;
    challengesContent: Schema.Attribute.Text;
    challengesHeading: Schema.Attribute.String;
    challengesheadingSpan: Schema.Attribute.String;
    challengesTagline: Schema.Attribute.String;
    choose: Schema.Attribute.Component<'industry.choosedata', true>;
    ctabtnText: Schema.Attribute.String;
    ctaContent: Schema.Attribute.String;
    ctaHeading: Schema.Attribute.String;
    engagementContent: Schema.Attribute.Text;
    engagementHeading: Schema.Attribute.String;
    engagementheadingSpan: Schema.Attribute.String;
    engagementTagline: Schema.Attribute.String;
    heroContent: Schema.Attribute.String;
    heroheadingSpan: Schema.Attribute.String;
    heroHeadng: Schema.Attribute.String;
    heroTagline: Schema.Attribute.String;
    industryFaq: Schema.Attribute.Component<'industry.faqs', true>;
    industryGrid: Schema.Attribute.Component<'industry.industry-grid', true>;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    navName: Schema.Attribute.String;
    sectorHeading: Schema.Attribute.String;
    sectorHeadingContent: Schema.Attribute.String;
    sectorHeadingSpan: Schema.Attribute.String;
    sectorTagline: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    whychooseContent: Schema.Attribute.Text;
    whychooseHeading: Schema.Attribute.String;
    whychooseheadingSpan: Schema.Attribute.String;
    whychooseTagline: Schema.Attribute.String;
  };
}

export interface IndustryIndustryGrid extends Struct.ComponentSchema {
  collectionName: 'components_industry_industry_grids';
  info: {
    displayName: 'industryGrid';
  };
  attributes: {
    industrydesrciption: Schema.Attribute.String;
    industryName: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    subchildindustries: Schema.Attribute.Component<
      'industry.industrygridfreature',
      true
    >;
  };
}

export interface IndustryIndustrygridfreature extends Struct.ComponentSchema {
  collectionName: 'components_industry_industrygridfreatures';
  info: {
    displayName: 'industrygridfreature';
  };
  attributes: {
    featuresubChild: Schema.Attribute.String;
    subchildSlug: Schema.Attribute.String;
  };
}

export interface IndustryIndutryapproach extends Struct.ComponentSchema {
  collectionName: 'components_industry_indutryapproaches';
  info: {
    displayName: 'indutryapproach';
  };
  attributes: {
    approacesContent: Schema.Attribute.String;
    approacesHeading: Schema.Attribute.String;
  };
}

export interface ServicesMethodologies extends Struct.ComponentSchema {
  collectionName: 'components_services_methodologies';
  info: {
    displayName: 'methodologies';
  };
  attributes: {
    content: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface ServicesServicesChild extends Struct.ComponentSchema {
  collectionName: 'components_services_services_children';
  info: {
    displayName: 'services child';
  };
  attributes: {
    coreDescription: Schema.Attribute.String;
    coreHeading: Schema.Attribute.String;
    coreheadingSpan: Schema.Attribute.String;
    coreServices: Schema.Attribute.Component<'services.services-grid', true>;
    coreTagline: Schema.Attribute.String;
    expertise: Schema.Attribute.Component<'services.services-expertise', true>;
    expertiseDescription: Schema.Attribute.String;
    expertiseHeading: Schema.Attribute.String;
    expertiseheadingSpan: Schema.Attribute.String;
    expertiseTagline: Schema.Attribute.String;
    faq: Schema.Attribute.Component<'services.services-faq', true>;
    heroContent: Schema.Attribute.String;
    heroHeading: Schema.Attribute.String;
    heroheadingSpan: Schema.Attribute.String;
    heroTagline: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
    methodolgies: Schema.Attribute.Component<'services.methodologies', true>;
    methodologyContent: Schema.Attribute.String;
    methodologyHeading: Schema.Attribute.String;
    methodologyheadingSpan: Schema.Attribute.String;
    methodologyTagline: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    visioncolcontentOne: Schema.Attribute.String;
    visioncolcontentTwo: Schema.Attribute.String;
    visioncolheadingOne: Schema.Attribute.String;
    visioncolheadingTwo: Schema.Attribute.String;
    visionContent: Schema.Attribute.String;
    visionHeading: Schema.Attribute.String;
    visionheadingSpan: Schema.Attribute.String;
    visiontagline: Schema.Attribute.String;
  };
}

export interface ServicesServicesExpertise extends Struct.ComponentSchema {
  collectionName: 'components_services_services_expertises';
  info: {
    displayName: 'services expertise';
  };
  attributes: {
    content: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface ServicesServicesFaq extends Struct.ComponentSchema {
  collectionName: 'components_services_services_faqs';
  info: {
    displayName: 'servicesFaq';
  };
  attributes: {
    answer: Schema.Attribute.String;
    question: Schema.Attribute.String;
  };
}

export interface ServicesServicesGrid extends Struct.ComponentSchema {
  collectionName: 'components_services_services_grids';
  info: {
    displayName: 'servicesGrid';
  };
  attributes: {
    serviceDescription: Schema.Attribute.String;
    serviceHeading: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    block1: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'industry.challenges': IndustryChallenges;
      'industry.choosedata': IndustryChoosedata;
      'industry.faqs': IndustryFaqs;
      'industry.industry-child': IndustryIndustryChild;
      'industry.industry-grid': IndustryIndustryGrid;
      'industry.industrygridfreature': IndustryIndustrygridfreature;
      'industry.indutryapproach': IndustryIndutryapproach;
      'services.methodologies': ServicesMethodologies;
      'services.services-child': ServicesServicesChild;
      'services.services-expertise': ServicesServicesExpertise;
      'services.services-faq': ServicesServicesFaq;
      'services.services-grid': ServicesServicesGrid;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
