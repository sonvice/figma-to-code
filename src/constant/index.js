import { presto, boldo } from "../assets/logos";
import {
  arrowRight,
  avatar1,
  avatar2,
  avatar3,
  // chandler,
  chandlerBing,
  check,
  coolFeature,
  eventCooler,
  eye,
  feather,
  // monica,
  monicaGeller,
  // rachel,
  rachelGreen,
  sun,
} from "../assets/images";

export const nav = [
  { href: "/", target: "Product", active: true },
  { href: "/about", target: "About", active: false },
  { href: "/blog", target: "Blog", active: false },
];

export const logos = [
  { logo: presto, id: "presto" },
  { logo: boldo, id: "boldo" },
  { logo: presto, id: "presto" },
  { logo: boldo, id: "boldo" },
  { logo: presto, id: "presto" },
  { logo: presto, id: "presto" },
  { logo: boldo, id: "boldo" },
  { logo: boldo, id: "boldo" },
];

export const infographic = [
  {
    img: coolFeature,
    title: "Cool feature title",
    paragraph: "Learning curve network effects return on investment.",
    link: "Explore page",
    icon: arrowRight,
    dataAos: "fade",
    delay: "",
  },
  {
    img: eventCooler,
    title: "Even cooler feature",
    paragraph: "Learning curve network effects return on investment.",
    link: "Explore page",
    icon: arrowRight,
    dataAos: "fade",
    delay: 200,
  },
  {
    img: coolFeature,
    title: "Cool feature title",
    paragraph: "Learning curve network effects return on investment.",
    link: "Explore page",
    icon: arrowRight,
    dataAos: "fade",
    delay: 400,
  },
];

export const connectCustomers = [
  { icon: check, paragraph: "We connect our customers with the best." },
  { icon: check, paragraph: "Advisor success customer launch party." },
  { icon: check, paragraph: "Business-to-consumer long tail." },
];

export const listCustomer = [
  { icon: feather, paragraph: "We connect our customers with the best." },
  { icon: eye, paragraph: "Advisor success customer launch party." },
  { icon: sun, paragraph: "Business-to-consumer long tail." },
];

export const testimonials = [
  {
    text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    name: "Albus Dumbledore",
    manager: "Manager @ Howarts",
    avatar: avatar1,
  },
  {
    text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    name: "Severus Snape",
    manager: "Manager @ Slytherin",
    avatar: avatar2,
  },
  {
    text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    name: "Harry Potter",
    manager: "Team Leader @ Gryffindor",
    avatar: avatar3,
  },
  {
    text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    name: "Albus Dumbledore",
    manager: "Manager @ Howarts",
    avatar: avatar1,
  },
  {
    text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    name: "Severus Snape",
    manager: "Manager @ Slytherin",
    avatar: avatar2,
  },
  {
    text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    name: "Harry Potter",
    manager: "Team Leader @ Gryffindor",
    avatar: avatar3,
  },
];

export const blogCard = [
  {
    img: "chandler",
    category: "Category",
    date: "November 22, 2021",
    paragraph: "Pitch termsheet backing validation focus release.",
    avatar: chandlerBing,
    name: "Chandler Bing",
    dataAos: "fade-up",
  },
  {
    img: "rachel",
    category: "Category",
    date: "November 22, 2021",
    paragraph:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    avatar: rachelGreen,
    name: "Rachel Green",
    dataAos: "fade-up",
    delay: 200,
  },
  {
    img: "monica",
    category: "Category",
    date: "November 22, 2021",
    paragraph:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    avatar: monicaGeller,
    name: "Monica Geller",
    dataAos: "fade-up",
    delay: 400,
  },
  {
    img: "imgBlog3",
    category: "Category",
    date: "November 22, 2021",
    paragraph: "Pitch termsheet backing validation focus release.",
    avatar: chandlerBing,
    name: "Chandler Bing",
    dataAos: "fade-up",
    delay: 600,
  },
  {
    img: "imgBlog4",
    category: "Category",
    date: "November 22, 2021",
    paragraph:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    avatar: rachelGreen,
    name: "Rachel Green",
    dataAos: "fade-up",
    delay: 800,
  },
  {
    img: "imgBlog5",
    category: "Category",
    date: "November 22, 2021",
    paragraph:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    avatar: monicaGeller,
    name: "Monica Geller",
    dataAos: "fade-up",
    delay: 1000,
  },
];

export const footerNavLandings = [
  { href: "/", target: "Landing" },
  { href: "/", target: "Home" },
  { href: "/about", target: "About" },
  { href: "/", target: "Services" },
];

export const footerNavCompany = [
  { href: "/", target: "Company" },
  { href: "/", target: "Home" },
  { href: "/", target: "Careers" },
  { href: "/", target: "Services" },
];

export const footerNavResources = [
  { href: "/", target: "Resources" },
  { href: "/blog", target: "Blog" },
  { href: "/about", target: "About" },
  { href: "/", target: "Services" },
];

//About
import { gridImg, statsNumbers, team, values } from "./about";
//import { imgBlog4, imgBlog5 } from "../assets/images/blog";

export { gridImg, statsNumbers, team, values };
