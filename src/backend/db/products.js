import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title:"Ignited Minds",
    author: "A. P. J. Abdul Kalam",
    image:"https://i.ibb.co/G9qbtLk/ignited-minds.png",
    price:199,
    newPrice:"180",
    discount:10,
    Pages: 394,
    Language:"English",
    rating:4.7,
    categoryName:"self-help",
    cashOnDelivery:true,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"Rich Dad Poor Dad ",
    author: "Robert T. Kiyosaki",
    image:"https://i.ibb.co/VNV5QY1/rich-dad-poor-dad.png",
    price:599,
    newPrice:"299",
    discount:50,
    Pages: 334,
    Language:"English",
    rating:4.7,
    categoryName:"self-help",
    cashOnDelivery:true,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"Attitude is Everything:",
    author:"Keller Jeff",
    image:"https://i.ibb.co/JngdDcc/attitude-is-everything.png",
    price:225,
    newPrice:"149",
    discount:33,
    Pages: 144,
    Language:"English",
    rating:4.2,
    categoryName:"self-help",
    cashOnDelivery:true,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"Think Like a Monk",
    author:"Jay Shetty",
    image:"https://i.ibb.co/7QJ8Tj0/think-like-a-monl.png",
    price:499,
    newPrice:"256",
    discount:48,
    Pages: 328,
    Language:"English",
    rating:4.6,
    categoryName:"self-help",
    cashOnDelivery:true,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"You Can",
    author:"Adams George Matthew",
    image:"https://i.ibb.co/JngdDcc/attitude-is-everything.png",
    price:149,
    newPrice:99,
    discount:33,
    Pages: 232,
    Language:"English",
    rating:4.4,
    categoryName:"self-help",
    cashOnDelivery:true,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"Zero to One",
    author:"Peter Thiel",
    image:"https://i.ibb.co/YcYcm03/zero-to-one.png",
    price:382,
    newPrice:185,
    discount:51,
    Pages: 212,
    Language:"English",
    rating:4.4,
    categoryName:"self-help",
    cashOnDelivery:true,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"Silent Spring",
    author:"Carson Rachel",
    image:"https://i.ibb.co/9hfFx3Q/silent-spring.png",
    price:1482,
    newPrice:1285,
    discount:12,
    Pages: 400,
    Language:"English",
    rating:4,
    categoryName:"Non-Fiction",
    cashOnDelivery:true,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"The Richest Man in Babylon ",
    author:"Clason George S.",
    image:"https://i.ibb.co/LZRpj1h/richest-man-in-the-babylon.png",
    price:199,
    newPrice:99,
    discount:50,
    Pages: 400,
    Language:"English",
    rating:4.5,
    categoryName:"Non-Fiction",
    cashOnDelivery:true,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"Sapiens",
    author:"Harari Yuval Noah",
    image:"https://i.ibb.co/LJLqKnq/sapians.png",
    price:499,
    newPrice:195,
    discount:60,
    Pages: 520,
    Language:"English",
    rating:4.1,
    categoryName:"Non-Fiction",
    cashOnDelivery:false,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"Steve Jobs ",
    author:"Steve Jobs ",
    image:"https://i.ibb.co/0DkS3JG/steve-jobs.png",
    price:299,
    newPrice:195,
    discount:50,
    Pages: 568,
    Language:"English",
    rating:4.2,
    categoryName:"Non-Fiction",
    cashOnDelivery:false,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"Quiet",
    author:"Cain Susan",
    image:"https://i.ibb.co/FgKR2YQ/Quiet.png",
    price:599,
    newPrice:384,
    discount:50,
    Pages: 320,
    Language:"English",
    rating:4.4,
    categoryName:"Non-Fiction",
    cashOnDelivery:true,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"Gaban",
    author:"Premchand",
    image:"https://i.ibb.co/hVm6y7X/premchandra.png",
    price:199,
    newPrice:149,
    discount:25,
    Pages: 320,
    Language:"Hindi",
    rating:4.5,
    categoryName:"Non-Fiction",
    cashOnDelivery:true,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"ALL THE LIGHT WE CANNOT SEE",
    author:"Anthony Doerr",
    image:"https://i.ibb.co/YLtwS9R/light-we-can-not-see.png",
    price:559,
    newPrice:349,
    discount:34,
    Pages: 544,
    Language:"Hindi",
    rating:3.9,
    categoryName:"Non-Fiction",
    cashOnDelivery:true,
    fastDelivery:false, 
  },
  {
    _id: uuid(),
    title:"Believe in Yourself",
    author:"Joseph Murphy",
    image:"https://i.ibb.co/nkSyxWK/believe-in-yourself.png",
    price:100,
    newPrice:89,
    discount:11,
    Pages: 54,
    Language:"English",
    rating:4,
    categoryName:"self-help",
    cashOnDelivery:true,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"The Blue Umbrella",
    author:"Bond Ruskin",
    image:"https://i.ibb.co/jR1pHj7/blue-ambrella.png",
    price:"195",
    newPrice:95,
    discount:50,
    Pages: 90,
    Language:"English",
    rating:4.1,
    categoryName:"Fiction",
    cashOnDelivery:false,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"A Brief History Of Time",
    author:"Stephen Hawking",
    image:"https://i.ibb.co/LS7bzLD/a-brief-history-time.png",
    price:495,
    newPrice:195,
    discount:60,
    Pages: 240,
    Language:"English",
    rating:4.2,
    categoryName:"Fiction",
    cashOnDelivery:false,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"Harry Potter and the Philosopher's Stone",
    author:"Rowling J. K.",
    image:"https://i.ibb.co/rs8tSkP/harry-potter.png",
    price:495,
    newPrice:295,
    discount:40,
    Pages: 350,
    Language:"English",
    rating:4.3,
    categoryName:"Fiction",
    cashOnDelivery:false,
    fastDelivery:true, 
  },
  {
    _id: uuid(),
    title:"Ikigai",
    author:"HECTER GARCIA",
    image:"https://i.ibb.co/2cpW5r0/ekigai.png",
    price:150,
    newPrice:295,
    discount:70,
    Pages: 150,
    Language:"English",
    rating:4.3,
    categoryName:"Fiction",
    cashOnDelivery:false,
    fastDelivery:true, 
  },
];