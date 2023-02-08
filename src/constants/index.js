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

export const packages = [
  {
    id: 1,
    type: "Paket Basic",
    price: "Rp 1.500.000",
    features: [
      "(Landing Page, Web brochure, portofolio)",
      "1 Halaman",
      "Gratis Domain.com",
      "Gratis Hosting Server",
      "Gratis SSL",
      "Setup Free",
      "Design New Trend",
      "( Lama pengerjaan 5 hari )",
    ],
  },{
    id: 2,
    type: "Paket Middle",
    price: "Rp 3.000.000",
    features: [
      "(Company profile kebutuhan perusahaan / brand)",
      "3 Halaman",
      "Gratis Domain.com",
      "Gratis Hosting Server",
      "Gratis SSL",
      "Setup Free",
      "Design New Trend",
      "( Lama pengerjaan 10 hari )",
    ],
  },
  {
    id: 3,
    type: "Paket Pro",
    price: "Rp 10.000.000",
    features: [
      "(Cocok untuk bisnis yang menggunakan sistem transaksi )",
      "7 Halaman",
      "Gratis Domain.com",
      "Gratis Hosting Server",
      "Gratis SSL",
      "Setup Free",
      "Design New Trend",
      "( Lama pengerjaan 15 hari )",
    ],
  },
];
