import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  { _id: uuid(), categoryName: "All", description: "QueerTV | All" },
  {
    _id: uuid(),
    categoryName: "Gender",
    description: "QueerTV | Gender",
  },
  {
    _id: uuid(),
    categoryName: "Sexuality",
    description: "QueerTV | Sexuality",
  },
];
