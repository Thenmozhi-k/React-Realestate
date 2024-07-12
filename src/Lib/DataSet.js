import testimonial1 from '../assets/testimonial1.avif'
import testimonial2 from '../assets/testimonial2.avif'
import testimonial3 from '../assets/testimonial3.avif'
import user from '../assets/user.avif'


import sp1 from '../assets/sp1.avif'
import sp2 from '../assets/sp2.avif'
import sp3 from '../assets/sp3.avif'
import sp4 from '../assets/sp5.avif'

import img1 from '../assets/apartment1.jpg'
import img2 from '../assets/apartment2.jpg'
import img3 from '../assets/apartment3.jpg'
import img4  from '../assets/apartment4.jpg'
import img5 from '../assets/apartment6.jpg'
import img6 from '../assets/apartment5.jpg'
import img7 from '../assets/apartment7.jpg'
import img8 from '../assets/land7.jpg'
import img9 from '../assets/apartment8.avif'
import img10 from '../assets/condo1.webp'
import img11 from '../assets/condo2.webp'
import img12 from '../assets/condo3.avif'
import img13 from '../assets/condo4.avif'
import img14 from '../assets/condo5.avif'
import img15 from '../assets/condo6.avif'
import img16 from '../assets/condo7.jpg'
import img17 from '../assets/home1.jpg'
import img18 from '../assets/home2.jpg'
import img19 from '../assets/home3.jpg'
import img20 from '../assets/home4.jpg'
import img21 from '../assets/home5.jpg'
import img22 from '../assets/home6.jpg'
import img23 from '../assets/home7.jpg'
import img24 from '../assets/home8.jpg'
import img25 from '../assets/land1.jpg'
import img26 from '../assets/land2.webp'
import img27 from '../assets/land3.webp'
import img28 from '../assets/land4.jpg'
import img29 from '../assets/land5.jpg'
import img30 from '../assets/land6.jpg'


const listdata = [
  {
    id: 1,
    title: "Modern Apartment in City Center",
    description: "A beautiful modern apartment located in the heart of the city.",
    address: "123 Main St, Cityville",
    img: img1,
    bedrooms: 2,
    bathrooms: 2,
    price: 250000,
    longitude: -74.006,
    latitude: 40.7128
  },
  {
    id: 2,
    title: "Cozy Suburban Home",
    description: "A cozy home in a quiet suburban neighborhood.",
    address: "456 Elm St, Suburbia",
    img: img2,
    bedrooms: 3,
    bathrooms: 2,
    price: 350000,
    longitude: -73.935242,
    latitude: 40.73061
  },
  {
    id: 3,
    title: "Luxury Condo with Ocean View",
    description: "A luxurious condo with stunning ocean views.",
    address: "789 Ocean Dr, Beachside",
    img: img3,
    bedrooms: 4,
    bathrooms: 3,
    price: 750000,
    longitude: -118.491191,
    latitude: 34.019454
  },
  {
    id: 4,
    title: "Charming Cottage in the Woods",
    description: "A charming cottage nestled in a peaceful forest setting.",
    address: "101 Pine Rd, Forestville",
    img: img4,
    bedrooms: 2,
    bathrooms: 1,
    price: 200000,
    longitude: -121.4944,
    latitude: 38.5816
  },
  {
    id: 5,
    title: "Spacious Ranch Home",
    description: "A spacious ranch home with a large backyard.",
    address: "202 Oak Ln, Countryside",
    img: img5,
    bedrooms: 3,
    bathrooms: 2,
    price: 300000,
    longitude: -96.797,
    latitude: 32.7767
  },
  {
    id: 6,
    title: "Urban Loft with Rooftop Deck",
    description: "An urban loft with a private rooftop deck and city views.",
    address: "303 Maple Ave, Metropolis",
    img: img6,
    bedrooms: 1,
    bathrooms: 1,
    price: 450000,
    longitude: -87.6298,
    latitude: 41.8781
  },
  {
    id: 7,
    title: "Historic Townhouse",
    description: "A beautifully restored historic townhouse.",
    address: "404 Cedar St, Oldtown",
    img: img7,
    bedrooms: 4,
    bathrooms: 3,
    price: 600000,
    longitude: -77.0369,
    latitude: 38.9072
  },
  {
    id: 8,
    title: "Modern Farmhouse",
    description: "A modern farmhouse with rustic charm.",
    address: "505 Birch Rd, Farmland",
    img: img8,
    bedrooms: 5,
    bathrooms: 4,
    price: 550000,
    longitude: -97.7431,
    latitude: 30.2672
  },
  {
    id: 9,
    title: "Beachfront Villa",
    description: "A stunning beachfront villa with private beach access.",
    address: "606 Shoreline Dr, Seaside",
    img: img9,
    bedrooms: 6,
    bathrooms: 5,
    price: 1250000,
    longitude: -80.1918,
    latitude: 25.7617
  },
  {
    id: 10,
    title: "Downtown Penthouse",
    description: "A luxurious penthouse in the heart of downtown.",
    address: "707 Skyline Blvd, Cityscape",
    img: img10,
    bedrooms: 3,
    bathrooms: 3,
    price: 850000,
    longitude: -122.4194,
    latitude: 37.7749
  },
  {
    id: 11,
    title: "Cozy Cabin Retreat",
    description: "A cozy cabin perfect for a mountain retreat.",
    address: "808 Mountain Rd, Hilltop",
    img: img11,
    bedrooms: 2,
    bathrooms: 1,
    price: 150000,
    longitude: -104.9903,
    latitude: 39.7392
  },
  {
    id: 12,
    title: "Spacious Family Home",
    description: "A spacious home ideal for a growing family.",
    address: "909 Walnut St, Homestead",
    img: img12,
    bedrooms: 5,
    bathrooms: 3,
    price: 400000,
    longitude: -93.6091,
    latitude: 41.6005
  },
  {
    id: 13,
    title: "Urban Studio Apartment",
    description: "A compact studio apartment in a bustling city.",
    address: "1010 Vine St, Urbania",
    img: img13,
    bedrooms: 1,
    bathrooms: 1,
    price: 200000,
    longitude: -122.3321,
    latitude: 47.6062
  },
  {
    id: 14,
    title: "Luxury Mansion",
    description: "A luxury mansion with all the amenities.",
    address: "1111 Estate Dr, Beverly Hills",
    img: img14,
    bedrooms: 8,
    bathrooms: 10,
    price: 5000000,
    longitude: -118.4004,
    latitude: 34.0736
  },
  {
    id: 15,
    title: "Country Cottage",
    description: "A quaint cottage in the countryside.",
    address: "1212 Country Ln, Ruralville",
    img: img15,
    bedrooms: 3,
    bathrooms: 2,
    price: 275000,
    longitude: -86.1581,
    latitude: 39.7684
  },
  {
    id: 16,
    title: "Modern High-Rise Apartment",
    description: "A sleek apartment in a modern high-rise building.",
    address: "1313 Tower Blvd, Skyline",
    img: img16,
    bedrooms: 2,
    bathrooms: 2,
    price: 350000,
    longitude: -79.9959,
    latitude: 40.4406
  },
  {
    id: 17,
    title: "Lakefront Cabin",
    description: "A cozy cabin with stunning lake views.",
    address: "1414 Lake Dr, Lakeside",
    img: img17,
    bedrooms: 3,
    bathrooms: 2,
    price: 320000,
    longitude: -81.6944,
    latitude: 41.4993
  },
  {
    id: 18,
    title: "Victorian Home",
    description: "A beautiful Victorian home with historic charm.",
    address: "1515 Historic Ln, Heritage",
    img: img18,
    bedrooms: 4,
    bathrooms: 3,
    price: 450000,
    longitude: -80.8431,
    latitude: 35.2271
  },
  {
    id: 19,
    title: "Urban Townhome",
    description: "A modern townhome in an urban setting.",
    address: "1616 City St, Uptown",
    img: img19,
    bedrooms: 3,
    bathrooms: 2,
    price: 380000,
    longitude: -87.6501,
    latitude: 41.8500
  },
  {
    id: 20,
    title: "Country Estate",
    description: "A sprawling estate in the countryside.",
    address: "1717 Estate Rd, Greenfields",
    img: img20,
    bedrooms: 6,
    bathrooms: 5,
    price: 900000,
    longitude: -94.5786,
    latitude: 39.0997
  },
  {
    id: 21,
    title: "Secluded Mountain Cabin",
    description: "A secluded cabin in the mountains, perfect for a getaway.",
    address: "1818 Mountain Pass, Highland",
    img: img21,
    bedrooms: 2,
    bathrooms: 1,
    price: 220000,
    longitude: -105.2705,
    latitude: 40.0150
  },
  {
    id: 22,
    title: "Urban Penthouse",
    description: "A luxurious penthouse with panoramic city views.",
    address: "1919 Skyline Dr, Downtown",
    img: img22,
    bedrooms: 4,
    bathrooms: 4,
    price: 1200000,
    longitude: -122.6765,
    latitude: 45.5231
  },
  {
    id: 23,
    title: "Historic Brownstone",
    description: "A beautifully preserved historic brownstone.",
    address: "2020 Heritage St, Old City",
    img: img23,
    bedrooms: 4,
    bathrooms: 3,
    price: 700000,
    longitude: -71.0589,
    latitude: 42.3601
  },
  {
    id: 24,
    title: "Riverside Condo",
    description: "A modern condo with stunning river views.",
    address: "2121 River Rd, Riverside",
    img: img24,
    bedrooms: 3,
    bathrooms: 2,
    price: 500000,
    longitude: -83.0458,
    latitude: 42.3314
  },
  {
    id: 25,
    title: "Luxury Lakehouse",
    description: "A luxurious house with direct lake access.",
    address: "2222 Lakefront Dr, Laketown",
    img: img25,
    bedrooms: 5,
    bathrooms: 4,
    price: 950000,
    longitude: -93.2638,
    latitude: 44.9833
  },
  {
    id: 26,
    title: "Modern Suburban Home",
    description: "A modern home in a quiet suburban neighborhood.",
    address: "2323 Suburbia Ln, Quietville",
    img: img26,
    bedrooms: 4,
    bathrooms: 3,
    price: 420000,
    longitude: -84.3880,
    latitude: 33.7490
  },
  {
    id: 27,
    title: "Beachside Cottage",
    description: "A cozy cottage steps away from the beach.",
    address: "2424 Beach St, Coastline",
    img: img27,
    bedrooms: 2,
    bathrooms: 1,
    price: 300000,
    longitude: -119.4179,
    latitude: 36.7783
  },
  {
    id: 28,
    title: "Mountain Lodge",
    description: "A spacious lodge with mountain views.",
    address: "2525 Mountain Rd, Peakville",
    img: img28,
    bedrooms: 6,
    bathrooms: 5,
    price: 800000,
    longitude: -106.6504,
    latitude: 35.0844
  },
  {
    id: 29,
    title: "Chic Downtown Loft",
    description: "A chic loft in the heart of downtown.",
    address: "2626 Urban Ave, Cityscape",
    img: img29,
    bedrooms: 1,
    bathrooms: 1,
    price: 330000,
    longitude: -90.1994,
    latitude: 38.6270
  },
  {
    id: 30,
    title: "Seaside Villa",
    description: "A luxurious villa with private beach access.",
    address: "2727 Ocean Dr, Seaville",
    img: img30,
    bedrooms: 7,
    bathrooms: 6,
    price: 1500000,
    longitude: -80.1918,
    latitude: 25.7617
  }
];

export default listdata;

export const singlePostData = {
  id: 1,
    title: "Modern Family Home",
    price: 350000,
    images: [
     sp1,
      sp2,
      sp3,
      sp4
      // "src/assets/sp4.avif",
      
    ],
    bedrooms: 4,
    bathrooms: 3,
    size: 2500, // in square feet
    longitude: -87.6501,
    latitude: 41.8500,
    city: "Chicago",
    address: "123 Main St, Chicago, CA 94105",
    school: "Lincoln High School",
    bus: "Route 12",
    restaurant: "The Golden Gate Restaurant",
    description: "A beautiful modern family home located in the heart of Chicago with stunning city views and easy access to local amenities."
  }

  export const userData = {
      id:1,
      name:'Aravind',
      img:user,
      mail:"aravind@gmail.com"
  }

  export const testimonial = [
  {
    img: testimonial1,
    name: 'Sarah Johnson',
    description: 'Professional and efficient service! Their team guided us seamlessly through the home buying process, ensuring we found our dream home within our budget.',
    review:'4'
  },

  {
    img: testimonial2,
    name: 'Michael Smith',
    description: 'Highly recommend! They listened attentively to our needs and matched us with the perfect property. The entire transaction was smooth and stress-free.',
    review:'4'
  },

  {
    img: testimonial3,
    name: 'Emily Davis',
    description: 'Outstanding expertise and support! From listing to closing, they were proactive and communicative, making the sale of our home a straightforward and rewarding experience.',
    review:'4'
  },
]



  