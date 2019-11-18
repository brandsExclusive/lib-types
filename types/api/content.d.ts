export namespace Content {
  interface Link {
    href: string;
  }

  interface Links {
    self: Link;
  }

  interface ContentPagesResult {
    _links: Links;
    status: number;
    message: string;
    total: number;
    result: ContentPage[];
  }

  interface ContentPageResult {
    status: number;
    message: string;
    result: ContentPage;
  }

  interface ContentPage {
    _links: Links;
    id: string;
    contentType: ContentType;
    createdAt: Date;
    updatedAt: Date;
    lang: string;
    fields: Fields;
  }

  interface ContentType {
    type: string;
    linkType: string;
    id: string;
  }

  interface Fields {
    title: string;
    destinationSubtitle: string;
    slug: string;
    headerImage: string;
    content?: Content;
    locations: string[];
    brand: FieldsClass;
    metaTitle?: string;
    metaDescription?: string;
  }

  interface FieldsClass {
    name: string;
  }

  interface Content {
    title: string;
    description: string;
    brand?: ContentBrand;
    videoUrl?: string;
  }

  interface ContentBrand {
    fields: ContentBrandFields;
  }

  interface ContentBrandFields {
    name: string;
  }
}
