// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";

export interface ICategoryFields {
  /** Image */
  image: Asset;

  /** Title */
  title: string;
}

/** Basic content type for defining various categories of products available within Grocery Plus */

export interface ICategory extends Entry<ICategoryFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "category";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IProductFields {
  /** Images */
  images: Asset[];

  /** Description */
  description: string;

  /** summary */
  summary?: string | undefined;

  /** unit */
  unit: string;

  /** quantity */
  quantity: number;

  /** price */
  price: number;

  /** category */
  category?: string[] | undefined;

  /** discount */
  discount?: number | undefined;
}

/** Basic model for an individual product for Groceries-plus */

export interface IProduct extends Entry<IProductFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "product";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IUsersFields {
  /** name */
  name: string;

  /** contact */
  contact?: number | undefined;
}

/** content type for storing user data for user profiles */

export interface IUsers extends Entry<IUsersFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "users";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "category" | "product" | "users";

export type LOCALE_CODE = "en-US";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";
