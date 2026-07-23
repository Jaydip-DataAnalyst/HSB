import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import m1 from "../assets/m1.jpg";
import m2 from "../assets/m2.jpg";
import m3 from "../assets/m3.jpeg";
import m4 from "../assets/m4.webp";
import m5 from "../assets/m5.jpeg";
import m6 from "../assets/m6.jpeg";
import m7 from "../assets/m7.webp";
import m8 from "../assets/m8.webp";
import m9 from "../assets/m9.webp";
import m10 from "../assets/m10.jpeg";
import m11 from "../assets/m11.jpeg";
import m12 from "../assets/m12.jpeg";
import e1 from "../assets/e1.avif";
import e2 from "../assets/e2.avif";
import e3 from "../assets/e3.png";
import e4 from "../assets/e4.png";
import e5 from "../assets/e5.png";
import general from "../assets/general.jpeg";
import premium from "../assets/premium.jpg";
import vip from "../assets/vip.jpeg";

export const Regions = [
  "North",
  "South",
  "East",
  "West",
];

export const banners = [banner1, banner2, banner3, banner4];

export const places = [

  {
    id: 1,
    title: "Taj Mahal",
    genre: "Mughal Architecture • UNESCO World Heritage",
    rating: 4.9,
    votes: "2.8M",
    img: m1,
    regions: "north",
    description: "One knows that The Taj is one amongst the Worlds Wonders"
  },
  {
    id: 2,
    title: "Qutub Minar",
    genre: "Historical Monument • UNESCO World Heritage",
    rating: 4.7,
    votes: "1.5M",
    img: m2,
    promoted: false,
  },
  {
    id: 3,
    title: "Red Fort",
    genre: "Fort • UNESCO World Heritage",
    rating: 4.7,
    votes: "1.8M",
    img: m3,
    promoted: true,
  },
  {
    id: 4,
    title: "Hampi",
    genre: "Ancient Ruins • UNESCO World Heritage",
    rating: 4.8,
    votes: "980K",
    img: m4,
    regions: "North", // Added quotes to make it a string
    certification: "natural", // Added quotes to make it a string
    opening_time : 9,
    description : `The Taj Mahal is an ivory-white marble mausoleum located on the right bank of the Yamuna River 
    in Agra, Uttar Pradesh, India. Commissioned in 1631 by the Mughal Emperor Shah Jahan, 
    it serves as the tomb of his favorite wife, Mumtaz Mahal.` 
  },
  {
    id: 5,
    title: "Ajanta Caves",
    genre: "Buddhist Cave Temples • UNESCO World Heritage",
    rating: 4.8,
    votes: "760K",
    img: m5,
    promoted: false,
  },
  
];

export const allPlaces = [
   {
    id: 1,
    title: "Taj Mahal",
    genre: "Mughal Architecture • UNESCO World Heritage",
    rating: 4.9,
    votes: "2.8M",
    img: m1,
    promoted: true,
  },
  {
    id: 2,
    title: "Qutub Minar",
    genre: "Historical Monument • UNESCO World Heritage",
    rating: 4.7,
    votes: "1.5M",
    img: m2,
    promoted: false,
  },
  {
    id: 3,
    title: "Red Fort",
    genre: "Fort • UNESCO World Heritage",
    rating: 4.7,
    votes: "1.8M",
    img: m3,
    promoted: true,
  },
  {
    id: 4,
    title: "Hampi",
    genre: "Ancient Ruins • UNESCO World Heritage",
    rating: 4.8,
    votes: "980K",
    img: m4,
    promoted: true,
  },
  {
    id: 5,
    title: "Ajanta Caves",
    genre: "Buddhist Cave Temples • UNESCO World Heritage",
    rating: 4.8,
    votes: "760K",
    img: m5,
    promoted: false,
  },
  {
    id: 6,
    title: "Ellora Caves",
    genre: "Rock-Cut Caves • UNESCO World Heritage",
    rating: 4.9,
    votes: "920K",
    img: m6,
    promoted: true,
  },
  {
    id: 7,
    title: "Konark Sun Temple",
    genre: "Temple • UNESCO World Heritage",
    rating: 4.8,
    votes: "690K",
    img: m7,
    promoted: false,
  },
  {
    id: 8,
    title: "Khajuraho Temples",
    genre: "Temple Complex • UNESCO World Heritage",
    rating: 4.7,
    votes: "610K",
    img: m8,
    promoted: false,
  },
  {
    id: 9,
    title: "Mysore Palace",
    genre: "Royal Palace",
    rating: 4.8,
    votes: "1.2M",
    img: m9,
    promoted: true,
  },
  {
    id: 10,
    title: "Gateway of India",
    genre: "Historical Monument",
    rating: 4.7,
    votes: "2.1M",
    img: m10,
    promoted: true,
  },
];

export const events = [ 
 {
    title: "AMUSEMENT PARK",
    subtitle: "20+ Events",
    img: e1,
  },
  {
    title: "THEATRE SHOWS",
    subtitle: "80+ Events",
    img: e2,
  },
  {
    title: "TEMPLES",
    subtitle: "150+ Events",
    img: e3,
  },
  {
    title: "NATIONAL PARKS ",
    subtitle: "60+ Events",
    img: e4,
  },
  {
    title:"WONDERS",
    subtitle:"15+ Events",
    img:e5

  },
];

export const timeslots = [
  {
    category: "General",
    timings: [
      { time: "9:00 AM", ticketsAvailable: 200 },
      { time: "10:00 AM", ticketsAvailable: 200 },
      { time: "11:00 AM", ticketsAvailable: 200 },
      { time: "12:00 PM", ticketsAvailable: 200 },
      { time: "1:00 PM", ticketsAvailable: 200 },
      { time: "2:00 PM", ticketsAvailable: 200 },
      { time: "3:00 PM", ticketsAvailable: 200 },
      { time: "4:00 PM", ticketsAvailable: 200 },
      { time: "5:00 PM", ticketsAvailable: 200 },
      { time: "6:00 PM", ticketsAvailable: 200 },
    ],
  },
  {
    category: "Premium",
    timings: [
      { time: "9:00 AM", ticketsAvailable: 200 },
      { time: "10:00 AM", ticketsAvailable: 200 },
      { time: "11:00 AM", ticketsAvailable: 200 },
      { time: "12:00 PM", ticketsAvailable: 200 },
      { time: "1:00 PM", ticketsAvailable: 200 },
      { time: "2:00 PM", ticketsAvailable: 200 },
      { time: "3:00 PM", ticketsAvailable: 200 },
      { time: "4:00 PM", ticketsAvailable: 200 },
      { time: "5:00 PM", ticketsAvailable: 200 },
      { time: "6:00 PM", ticketsAvailable: 200 },
    ],
  },
   {
    category: "VIP",
    timings: [
      { time: "9:00 AM", ticketsAvailable: 200 },
      { time: "10:00 AM", ticketsAvailable: 200 },
      { time: "11:00 AM", ticketsAvailable: 200 },
      { time: "12:00 PM", ticketsAvailable: 200 },
      { time: "1:00 PM", ticketsAvailable: 200 },
      { time: "2:00 PM", ticketsAvailable: 200 },
      { time: "3:00 PM", ticketsAvailable: 200 },
      { time: "4:00 PM", ticketsAvailable: 200 },
      { time: "5:00 PM", ticketsAvailable: 200 },
      { time: "6:00 PM", ticketsAvailable: 200 },
    ],
  },
];

export const ordersData = [
  {
    id: "TCAKJAB",
    title: "Taj Mahal",
    format: "2D",
    datetime: "Tue, 29 Apr 2025 | 9:45 PM",
    cinema: "PVR: Mani Square Mall, Kolkata",
    quantity: 5,
    seats: "PE-P9,P10,P11,P12,P13",
    bookingTime: "Apr 29 2025 07:46PM",
    paymentMethod: "Credit/Debit Card",
    poster: m11,
    total: 607.10,
    ticket: 495.00,
    fee: 112.10
  },
  {
    id: "XYCKAJS",
    title: "Kesari Chapter 2: The Untold Story of Jallianwala Bagh",
    format: "2D",
    datetime: "Sat, 26 Apr 2025 | 2:45 PM",
    cinema: "Miraj Cinemas: Newtown, Kolkata",
    quantity: 3,
    seats: "PE-P9,P10,P11,P12,P13",
    bookingTime: "Apr 25 2025 04:00PM",
    paymentMethod: "Credit/Debit Card",
    poster: m12,
    total: 607.10,
    ticket: 495.00,
    fee: 112.10
  }
];


export const tabs = ["Profile", "Your Orders"];

export const countryCodes = [
  { name: "India", code: "IN", dial_code: "+91" },
  { name: "United States", code: "US", dial_code: "+1" },
  { name: "United Kingdom", code: "GB", dial_code: "+44" },
  { name: "Australia", code: "AU", dial_code: "+61" },
  { name: "Canada", code: "CA", dial_code: "+1" },
  { name: "Germany", code: "DE", dial_code: "+49" },
  { name: "France", code: "FR", dial_code: "+33" },
  { name: "Japan", code: "JP", dial_code: "+81" },
  { name: "China", code: "CN", dial_code: "+86" },
  { name: "Brazil", code: "BR", dial_code: "+55" },
  { name: "United Arab Emirates", code: "AE", dial_code: "+971" },
  { name: "Bangladesh", code: "BD", dial_code: "+880" },
  { name: "Nepal", code: "NP", dial_code: "+977" },
  { name: "Pakistan", code: "PK", dial_code: "+92" },
  { name: "Russia", code: "RU", dial_code: "+7" },
  { name: "South Africa", code: "ZA", dial_code: "+27" },
  { name: "Sri Lanka", code: "LK", dial_code: "+94" },
  { name: "Thailand", code: "TH", dial_code: "+66" },
  { name: "Indonesia", code: "ID", dial_code: "+62" },
  { name: "Malaysia", code: "MY", dial_code: "+60" },
  // Add more if needed
];
