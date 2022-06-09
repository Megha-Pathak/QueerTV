import { v4 as uuid } from "uuid";

export const homePageContent = [
  {
    _id: uuid(),
    imageUrl: "/assets/homePageImageOne.svg",
    title: "Welcome to Queer TV",
    description:
      "QueerTV is an educational open sourced video library that acts like a centralized repository of resources that help it's users in educating themselves and exploring about Gender and Sexuality.",
    cta: "Explore",
    ctaLink: "http://queer-tv.vercel.app/explore",
  },

  {
    _id: uuid(),
    imageUrl: "/assets/homePageImageThree.svg",
    title: "Learn more about Sexuality Spectrum!",
    description:
      "The sexuality spectrum refers to the idea that people's sexual identities and orientations are complex and resist easy classification.",
    cta: "Explore types of Sexuality",
    ctaLink: "http://queer-tv.vercel.app/explore",
  },
  {
    _id: uuid(),
    imageUrl: "/assets/homePageImageTwo.svg",
    title: "Learn more about Genders.",
    description:
      "Gender expression is the way in which a person expresses their gender identity, typically through their appearance, dress, and behaviour.",
    cta: "Explore types of Gender",
    ctaLink: "http://queer-tv.vercel.app/explore",
  },
  {
    _id: uuid(),
    imageUrl: "/assets/homePageImageFour.svg",
    title: "Break the Stigma with your curosity.",
    description:
      "Educate yourself for breaking the stigma around gender and sexuality.",
    cta: "Move away from Stigma",
    ctaLink: "http://queer-tv.vercel.app/explore",
  },
  {
    _id: uuid(),
    imageUrl: "/assets/homePageImageFive.svg",
    title: "Contribute to this Open sourced project.",
    description:
      "You can contribute to this project by code, documentation, but most importantly by expanding it's Database by curating LGBTQIA+ videos. ",
    cta: "Contribute to this Project",
    ctaLink: "https://github.com/Megha-Pathak/QueerTV",
  },
  {
    _id: uuid(),
    imageUrl: "/assets/homePageImageSix.svg",
    title: "Share and Educate",
    description: "If you liked the project, spread a word about it!",
    cta: "Share it!",
    ctaLink: "https://github.com/Megha-Pathak/QueerTV",
  },
];
