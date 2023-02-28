import {
  people01,
  people02,
  people03,
  instagram,
  linkedin,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Features",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Trusted",
    content:
      "We provide several solutions that help your company's needs such as building websites, designing products, managing content and more.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Safe And Secure",
    content:
      "We take proactive steps to ensure the information and data you provide is secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Operability",
    content:
      "We will make everything to be used intuitive and attractive appearance and easy to operate.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "The design made is very good and in accordance with the team we want. the workmanship is quite fast and on time",
    name: "Aang Suryaman",
    title: "Co-Founder",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "the service provided is very helpful for my team in introducing the products I make with a design that is easy to understand.",
    name: "Justin Sutama",
    title: "Founder",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "fast workmanship & smooth communication and satisfying results in creating a website for our company.",
    name: "Fadhlan Bahrul Ihsan",
    title: "Lead Business Development",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Completed Project",
    value: "20+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "10+",
  },
  {
    id: "stats-3",
    title: "Years Experience",
    value: "2+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/billutions.id/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/billutions-id/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const PACKAGE_CONTENT = [
  {
    id: 1,
    type: "Package Standard",
    price: "Mulai 1,5jt",
    // Tambah harga diskon untuk client pertama
    // disc: "Rp 1.200.000",
    purpose: "(Landing Page, Web brochure, portofolio)",
    features: [
      { label: "1 Page", status: true },
      { label: "Free Domain", status: true },
      { label: "Free SSL", status: true },
      { label: "Free Design Assets", status: false },
      // Request revisi berapa hari
      { label: "Support Account Manager", status: true },
      { label: "SEO Friendly", status: true },
      { label: "Estimation 5-7 Days", status: true },
    ],
    isRecommended: false,
  },
  {
    id: 2,
    type: "Package Favorite",
    price: "Mulai 3,5jt",
    purpose: "Need Company Profile & Brand Product",
    features: [
      { label: "3 Page", status: true },
      { label: "Free Domain", status: true },
      { label: "Free SSL", status: true },
      { label: "Free Design Assets", status: true },
      // Request revisi berapa hari
      { label: "Support Account Manager", status: true },
      { label: "SEO Friendly", status: true },
      { label: "Estimation 7-10 Days", status: true },
    ],
    isRecommended: true,
  },
  {
    id: 3,
    type: "Package Pro",
    price: "Mulai 10jt",
    purpose: "Suitable for businesses that use for E-commerce",
    features: [
      { label: "7 Page", status: true },
      { label: "Free Domain", status: true },
      { label: "Free SSL", status: true },
      { label: "Free Hosting Server", status: true },
      { label: "Free Design Assets", status: true },
      // Request revisi berapa hari
      { label: "Support Account Manager", status: true },
      { label: "SEO Friendly", status: true },
      { label: "Estimation 14-20 Days", status: true },
    ],
    isRecommended: false,
  },
  {
    id: 4,
    type: "Package Custom",
    price: "Mulai 15jt",
    purpose: "Request according to what you want and we will give you the best",
    features: [
      { label: "More than 7 Page", status: true },
      { label: "Free Domain", status: true },
      { label: "Free SSL", status: true },
      { label: "Free Hosting Server", status: true },
      { label: "Free Design Assets + Customize", status: true },
      // Request revisi berapa hari
      { label: "Support Account Manager", status: true },
      { label: "SEO Friendly", status: true },
      { label: "Estimation 5-7 Days", status: true },
    ],
    isRecommended: false,
  },
];
