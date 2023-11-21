import { SlPhone } from "react-icons/sl";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineClockCircle } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { LiaInstagram } from "react-icons/lia";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiSolidStar } from "react-icons/bi";
import { BiSolidStarHalf } from "react-icons/bi";
import { BiStar } from "react-icons/bi";

export const topNavLeftData = [
  {
    icon: <SlPhone />,
    title: "1-800-458-5678",
    id: 1,
  },
  {
    icon: <SlLocationPin />,
    title: "23 Bakery Street, London, UK",
    id: 2,
  },
  {
    icon: <AiOutlineClockCircle />,
    title: "Mon - Fri 8:00 - 18:00",
    id: 3,
  },
];

export const topNavRightData = [
  {
    icon: <TiSocialFacebook />,
    id: 1,
  },
  {
    icon: <TiSocialTwitter />,
    id: 2,
  },
  {
    icon: <LiaInstagram />,
    id: 3,
  },
  {
    icon: <TiSocialLinkedin />,
    id: 4,
  },
  {
    title: "Login",
    id: 5,
  },
  {
    title: "|",
    id: 6,
  },
  {
    title: "Register",
    id: 7,
  },
];

export const bottomNavbarData = [
  {
    title: "Home",
    route: "/",
    isActive: true,
    id: 1,
  },
  {
    title: "Listings",
    route: "/listings",
    isActive: true,
    id: 2,
  },
  {
    title: "Blog",
    route: "/blog",
    isActive: true,
    id: 3,
  },
  {
    title: "Pages",
    pageItem: [
      { title: "Shop", route: "/pages/shop", id: 1 },
      { title: "pricing", route: "/pages/pricing", id: 2 },
      { title: "Calculator", route: "/pages/calculator", id: 3 },
      { title: "Services", route: "/pages/services", id: 4 },
      { title: "FAQ", route: "/pages/faq", id: 5 },
    ],
    icon: <IoMdArrowDropdown />,
    isActive: true,
    id: 4,
  },
  {
    title: "About",
    route: "/about",
    isActive: true,
    id: 5,
  },
  {
    title: "Contact",
    route: "/contact",
    isActive: true,
    id: 6,
  },
];

export const quickContactData = {
  header1: "Quick Contact Info",
  para: "Fugiat veniam ullamco in aliqua amet quis laboris mollit minim ea non cillum culpa incididunt. Incididunt nulla est velit minim. Velit quis do Lorem aute est. Incididunt nulla est velit minim, Velit quis do Lorem aute est",
  header2: "Contact",
  tele: "+1 670 936 9368",
  email: "hello@carro.com",
  header3: "Office",
  address1: "Nigeria - ",
  address2: "419 Icreatedthispage Street,",
  address3: "Frontend Developer AGG 3289",
  header4: "Opening Hours",
  weekdays1: "Monday - Friday: 09:00AM - 09:00PM",
  weekdays2: "Saturday: 09:00AM - 07:00PM",
  weekdays3: "Sunday: Closed",
  offers1: "Keep in touch",
  offerPara: "Get latest updates and offers.",
  rights: "2023 - Carro. All Rights Reserved.",
};

export const slideData = [
  {
    img: "/assets/images/car1.jpg",
    year: "2021",
    carName: "BMW M4 G82",
    amount: "$598",
    amtImg: "/assets/images/vector.png",
    period: "Month",
    btn: "Learn More",
    id: 1,
  },
  {
    img: "/assets/images/car2.jpg",
    year: "2022",
    carName: "Audi R8 V10",
    amount: "$238",
    amtImg: "/assets/images/vector.png",
    period: "Month",
    btn: "Learn More",
    id: 2,
  },
  {
    img: "/assets/images/car3.jpeg",
    year: "2023",
    carName: "Mercedes-Benz SLS AMG",
    amount: "$340",
    amtImg: "/assets/images/vector.png",
    period: "Month",
    btn: "Learn More",
    id: 3,
  },
];

export const whychooseusData = [
  {
    wcuImg: "/assets/images/bestprice.svg",
    wcuTitle: "Best Price",
    wcuPara:
      "Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.",
    id: 1,
  },
  {
    wcuImg: "/assets/images/tbyt.svg",
    wcuTitle: "Trusted By Thousands",
    wcuPara:
      "Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.",
    id: 2,
  },
  {
    wcuImg: "/assets/images/wrob.svg",
    wcuTitle: "Wide Range of Brands",
    wcuPara:
      "Our Stress-Free Finance Department That Can Find Financial Solutions To Save You Money.",
    id: 3,
  },
];


export const testimonialsData = [
  {
    comment:
      "I believe in lifelong learning and Voiture is a great place to learn from experts. I've learned a lot and recommend it to all my friends.Programs are available in fall, spring, and summer semesters. Many fall and spring programs offer similar shorter programs in the summer, and some may be combined for a full academic year.",
    tdImg: "/assets/images/test3jpg.jpg",
    title: "Jesse Onyeachu",
    track: "Data Analyst",
    id: 1,
  },
  {
    comment:
      "Passionate and skilled programming enthusiast, well-versed in Python, Java, data structures, algorithms, and FastAPI for API development. Actively on the lookout for opportunities at your prestigious organization to put my technical abilities and unbridled tech enthusiasm to good use. Dedicated to adding value and further honing my skills in a professional environment. Eager to embark on a journey in the realm of technology!",
    tdImg: "/assets/images/test2.jpg",
    title: "Ahmad A. Muhammad",
    track: "Software Engineer",
    id: 2,
  },
  {
    comment:
      "Aute ea sit deserunt voluptate. In in commodo Lorem exercitation cupidatat reprehenderit ea sint do Lorem id. Mollit adipisicing consequat quis duis eiusmod fugiat minim incididunt ex et. Eu ex labore nulla officia fugiat ullamco aliqua tempor officia sit incididunt. Sit culpa dolore adipisicing nulla veniam nisi dolore enim consectetur.",
    tdImg: "/assets/images/test1.jpg",
    title: "Abbas Kasim",
    track: "Product Designer",
    id: 3,
  },
];

export const blogData = [
  {
    blogImg: "/assets/images/car2.jpg",
    category: "Classic cars",
    numberOfComments: 1,
    postDate: "January 7, 2021",
    blogTitle:
      "2022 Audi Hybrid gives up nothing with its optimized fuel economy",
    description:
      "This July, Auto Trader are giving away a funky Mini Electric worth £26,000 – plus up to £1,200 towards your car insurance, covered by Compare the Market. There are no catches or hidden fees – you just have to be over 18 years old, and a UK resident holding a full UK driver’s licence. You can check out the full terms and conditions here. Simply fill in the prize draw form at any time between 1 July 2021 and 31 July 2021 and this brand-new Mini Electric could be yours for free!",
    id: 1,
  },
  {
    blogImg: "/assets/images/car1.jpg",
    category: "Classic cars",
    numberOfComments: 1,
    postDate: "January 7, 2021",
    blogTitle:
      "2022 Audi Hybrid gives up nothing with its optimized fuel economy",
    description:
      "This July, Auto Trader are giving away a funky Mini Electric worth £26,000 – plus up to £1,200 towards your car insurance, covered by Compare the Market. There are no catches or hidden fees – you just have to be over 18 years old, and a UK resident holding a full UK driver’s licence. You can check out the full terms and conditions here. Simply fill in the prize draw form at any time between 1 July 2021 and 31 July 2021 and this brand-new Mini Electric could be yours for free!",
    id: 2,
  },
  {
    blogImg: "/assets/images/car2.jpg",
    category: "Classic cars",
    numberOfComments: 1,
    postDate: "January 7, 2021",
    blogTitle:
      "2022 Audi Hybrid gives up nothing with its optimized fuel economy",
    description:
      "This July, Auto Trader are giving away a funky Mini Electric worth £26,000 – plus up to £1,200 towards your car insurance, covered by Compare the Market. There are no catches or hidden fees – you just have to be over 18 years old, and a UK resident holding a full UK driver’s licence. You can check out the full terms and conditions here. Simply fill in the prize draw form at any time between 1 July 2021 and 31 July 2021 and this brand-new Mini Electric could be yours for free!",
    id: 3,
  },
  {
    blogImg: "/assets/images/car1.jpg",
    category: "Classic cars",
    numberOfComments: 1,
    postDate: "January 7, 2021",
    blogTitle:
      "2022 Audi Hybrid gives up nothing with its optimized fuel economy",
    description:
      "This July, Auto Trader are giving away a funky Mini Electric worth £26,000 – plus up to £1,200 towards your car insurance, covered by Compare the Market. There are no catches or hidden fees – you just have to be over 18 years old, and a UK resident holding a full UK driver’s licence. You can check out the full terms and conditions here. Simply fill in the prize draw form at any time between 1 July 2021 and 31 July 2021 and this brand-new Mini Electric could be yours for free!",
    id: 4,
  },
  {
    blogImg: "/assets/images/car2.jpg",
    category: "Classic cars",
    numberOfComments: 1,
    postDate: "January 7, 2021",
    blogTitle:
      "2022 Audi Hybrid gives up nothing with its optimized fuel economy",
    description:
      "This July, Auto Trader are giving away a funky Mini Electric worth £26,000 – plus up to £1,200 towards your car insurance, covered by Compare the Market. There are no catches or hidden fees – you just have to be over 18 years old, and a UK resident holding a full UK driver’s licence. You can check out the full terms and conditions here. Simply fill in the prize draw form at any time between 1 July 2021 and 31 July 2021 and this brand-new Mini Electric could be yours for free!",
    id: 5,
  },
  {
    blogImg: "/assets/images/car1.jpg",
    category: "Classic cars",
    numberOfComments: 1,
    postDate: "January 7, 2021",
    blogTitle:
      "2022 Audi Hybrid gives up nothing with its optimized fuel economy",
    description:
      "This July, Auto Trader are giving away a funky Mini Electric worth £26,000 – plus up to £1,200 towards your car insurance, covered by Compare the Market. There are no catches or hidden fees – you just have to be over 18 years old, and a UK resident holding a full UK driver’s licence. You can check out the full terms and conditions here. Simply fill in the prize draw form at any time between 1 July 2021 and 31 July 2021 and this brand-new Mini Electric could be yours for free!",
    id: 6,
  },
];

export const browseByTypeData = [
  {
    bbtImg: "/assets/images/car1.jpg",
    title: "Sedan",
    numberOfListings: 4,
    UC_: 1,
  },
  {
    bbtImg: "/assets/images/car2.jpg",
    title: "Sedan",
    numberOfListings: 2,
    UC_: 2,
  },
  {
    bbtImg: "/assets/images/car3.jpeg",
    title: "Sedan",
    numberOfListings: 7,
    UC_: 3,
  },
  {
    bbtImg: "/assets/images/car1.jpg",
    title: "Sedan",
    numberOfListings: 0,
    UC_: 4,
  },
  {
    bbtImg: "/assets/images/car3.jpeg",
    title: "Sedan",
    numberOfListings: 1,
    UC_: 5,
  },
  {
    bbtImg: "/assets/images/car3.jpeg",
    title: "Sedan",
    numberOfListings: 1,
    UC_: 6,
  },
];

export const pricingData = [
  {
    title: "Basic",
    Recommended: false,
    price: 199,
    listings: "30 Listings Posting",
    job: "Feature Job",
    duration: "Job Displayed For 30 Days",
    support: "Premium Support 24/7",
    id: 1,
    category: "Pricing"
  },
  {
    title: "Standard",
    Recommended: true,
    price: 499,
    listings: "60 Listings Posting",
    job: "Feature Job",
    duration: "Job Displayed For 60 Days",
    support: "Premium Support 24/7",
    id: 2,
    category: "Pricing"
  },
  {
    title: "Extended",
    Recommended: false,
    price: 799,
    listings: "100 Listings Posting",
    job: "Feature Job",
    duration: "Job Displayed For 90 Days",
    support: "Premium Support 24/7",
    id: 3,
    category: "Pricing"
  },
];

export const serviceData = {
  services: [
    {
      serviceImg: "/assets/images/service2.jpg",
      title: "Oil Changes",
      description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.      ",
      id: 1,
    },
    {
      serviceImg: "/assets/images/service3.jpg",
      title: "Air Conditioning​",
      description: "Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur.",
      id: 2
    },
    {
      serviceImg: "/assets/images/service4.jpg",
      title: "Auto Electric​",
      description: "Vel illum dolore eu feugiat nulla facilisis at vero eros et accu qui blandit praesent luptatum zzril.",
      id: 3
    },
  ]
}

export const aboutTeam = [
  {
    bbtImg: "/assets/images/15.jpg",
    title: "Alexander Jackson",
    track: "Service Support"
  },
  {
    bbtImg: "/assets/images/13.jpg",
    title: "Emma Johnson",
    track: "Marketing"
  },
  {
    bbtImg: "/assets/images/14.jpg",
    title: "Isabella Patel",
    track: "Nursing Assistant"
  },
  {
    bbtImg: "/assets/images/16.jpg",
    title: "Benjamin Kim",
    track: "Accountant"
  },
];

