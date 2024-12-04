import React from 'react'
import Navbar from './Navbar'
import '../styles/travelpackage.css';
import Services from '../components/Services'
import Gallery from './Gallery';

const TravelPackages = () => {
  const packages = [
    {
      id: 1,
      city: "Paris",
      description: "Enjoy the beauty of Paris with a 7-day package that includes guided tours, Eiffel Tower access, and more!",
      price: "$1500",
      image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      city: "New York",
      description: "Explore the city that never sleeps! This package includes a Broadway show, Statue of Liberty tour, and city sightseeing.",
      price: "$1200",
      image: "https://media.istockphoto.com/id/1167975236/photo/the-statue-of-liberty-over-the-scene-of-new-york-cityscape-river-side-which-location-is-lower.webp?a=1&b=1&s=612x612&w=0&k=20&c=YGjmE6DoiytqYUk9CcWXl8bDA3VWGXzxyDT1IB1NUqY=",
    },
    {
      id: 3,
      city: "Tokyo",
      description: "Experience the culture, technology, and food of Tokyo in this 6-day travel package.",
      price: "$1300",
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    },
    {
      id: 4,
      city: "London",
      description: "Experience the Royal English culture and food of London in this 6-day travel package.",
      price: "$1300",
      image: "https://media.istockphoto.com/id/533462679/photo/london-big-ben-and-houses-of-parliament-uk.webp?a=1&b=1&s=612x612&w=0&k=20&c=BYV5ErD6-IYW_fjfEN1t1H9sT7lyONrXqiT-EDz6yW8=",
    },
    {
      id: 5,
      city: "Dubai",
      description: "Discover luxury in Dubai with desert safaris, skyscrapers, and a thrilling shopping experience.",
      price: "$1800",
      image: "https://media.istockphoto.com/id/183371461/photo/city-lights-in-dubai-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=w1Ctywo-WPcV3ronyQDVCbwq5Hb2J1DI4QwSHsnnZwQ=",
    },
    {
      id: 6,
      city: "Sydney",
      description: "Relax in Sydney with a 5-day package that includes the Opera House, Bondi Beach, and more.",
      price: "$1400",
      image: "https://media.istockphoto.com/id/535455441/photo/view-of-sydney-harbour-australia.webp?a=1&b=1&s=612x612&w=0&k=20&c=ppqJgsi9-pLlVIq9UGFO0meliF-YYd4gE9ilRwxhx6I=",
    },
    {
      id: 7,
      city: "Rome",
      description: "Travel back in time with a tour of the historic city of Rome, including the Colosseum, Vatican, and more.",
      price: "$1100",
      image: "https://media.istockphoto.com/id/1464094211/photo/rome-italy.webp?a=1&b=1&s=612x612&w=0&k=20&c=wK13NVRQc5MXI_Gd8YjodJKIv_lrFOO8HJY3G2YwdA0=",
    },
    {
      id: 8,
      city: "Bangkok",
      description: "Explore Bangkok's vibrant street life, floating markets, and the Grand Palace in this exciting 4-day trip.",
      price: "$800",
      image: "https://media.istockphoto.com/id/1192427501/photo/wat-arun-landmark-in-bangkok-city-thailand.webp?a=1&b=1&s=612x612&w=0&k=20&c=5x6He_EGi9STCS7egAex5YpuobSUx77elcby8L-6LvQ=",
    },
    {
      id: 9,
      city: "Singapore",
      description: "Discover the charm of Singapore with a 5-day package including Marina Bay, Sentosa Island, and gardens.",
      price: "$1300",
      image: "https://media.istockphoto.com/id/482380340/photo/singapore-skyline-and-view-of-marina-bay-at-twilight.webp?a=1&b=1&s=612x612&w=0&k=20&c=wRIcEf8X0s6293kqjt06hFGk0KIR_BMhDjVmDwDf5Bo=",
    },
    {
      id: 10,
      city: "Cape Town",
      description: "Experience nature and adventure in Cape Town with Table Mountain, Cape Point, and beautiful beaches.",
      price: "$1500",
      image: "https://media.istockphoto.com/id/1623526535/photo/long-exposure-vertical-shot-of-hout-bay-town-harbour-and-the-fishermen-town-at-dusk-cape-town.webp?a=1&b=1&s=612x612&w=0&k=20&c=rZh9zTatfgzRV8nM3pxS4Xr3VC-j397ux-kqpJ9m618=",
    },
    {
      id: 11,
      city: "Barcelona",
      description: "Enjoy a 6-day trip to Barcelona, featuring Gaudi's architecture, beaches, and delicious Catalan cuisine.",
      price: "$1200",
      image: "https://media.istockphoto.com/id/1418575808/photo/barcelona-eixample-residential-district-and-famous-basilica-sagrada-familia-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Ak_eGDsCRGC2613trZhdCeKqwTnYf4jWVLjgPJMYYI=",
    },
    {
      id: 12,
      city: "Istanbul",
      description: "Discover the beauty of Istanbul with a Bosphorus cruise, Hagia Sophia, and local Turkish delicacies.",
      price: "$1000",
      image: "https://media.istockphoto.com/id/458012057/photo/istanbul-turkey.webp?a=1&b=1&s=612x612&w=0&k=20&c=ofu-qq9ShjpwnChsSyizYe6pWgbKiywq-0K5kmXgN0k=",
    },
    {
      id: 13,
      city: "Moscow",
      description: "Visit Moscow for a 5-day package with Red Square, Kremlin, and world-class museums.",
      price: "$1300",
      image: "https://media.istockphoto.com/id/482522546/photo/above-st-basils-cathedral-red-square-and-kremlin-panorama-moscow.webp?a=1&b=1&s=612x612&w=0&k=20&c=1oT7NYHoy4Bl9kVcK8PdO17KqrE1mmF_np3jsEXSRYA=",
    },
    {
      id: 14,
      city: "Athens",
      description: "Step into history with a 5-day trip to Athens, featuring the Acropolis, Plaka, and Greek cuisine.",
      price: "$900",
      image: "https://media.istockphoto.com/id/1028749698/photo/the-acropolis-of-athens-greece.webp?a=1&b=1&s=612x612&w=0&k=20&c=eHnOJqyLXt07MffAQcSK4QQpVk5sC126xuX6_fd2yak=",
    },
    {
      id: 15,
      city: "Rio de Janeiro",
      description: "Explore the vibrant culture of Rio with visits to Christ the Redeemer, Copacabana, and the Sugarloaf Mountain.",
      price: "$1500",
      image: "https://media.istockphoto.com/id/1312539295/photo/aerial-view-of-sanctuary-of-christ-the-king-or-santuario-de-cristo-rei-on-sunny-summer-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=0veSEuW-FOG9DfdLmirGqM83pbMVobuNjRWsknSynx8=",
    },
    {
      id: 16,
      city: "Seoul",
      description: "Dive into Korean culture with a 6-day package in Seoul featuring Gyeongbokgung Palace and street food tours.",
      price: "$1400",
      image: "https://media.istockphoto.com/id/1327824636/photo/cherry-blossom-in-spring-at-gyeongbokgung-palace.webp?a=1&b=1&s=612x612&w=0&k=20&c=oVHuZCEl5R27R_cCWS1iUBe-zMRWfc2oMVxXYcb9YJc=",
    },
    {
      id: 17,
      city: "Mumbai",
      description: "Experience the bustling life of Mumbai with a 5-day tour including Marine Drive, Gateway of India, and Bollywood sights.",
      price: "$700",
      image: "https://media.istockphoto.com/id/1390163309/photo/beautiful-gateway-of-india-near-taj-palace-hotel-on-the-mumbai-harbour-with-many-jetties-on.webp?a=1&b=1&s=612x612&w=0&k=20&c=bEMo0pOTW9Ksg5ybFwQQmL6GhR3CQsBXty_nei4yImY=",
    },
    {
      id: 18,
      city: "Amsterdam",
      description: "Cruise the canals of Amsterdam, visit the Anne Frank House, and enjoy Dutch art and cuisine on this 4-day trip.",
      price: "$1100",
      image: "https://media.istockphoto.com/id/1223433962/photo/amsterdam-canals-and-typical-canal-houses-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=AD5rfpxaNaRW5amNw0b_0_9VIrTICwyeDjJ8W7xu5zE=",
    },
    {
      id: 19,
      city: "San Francisco",
      description: "Explore the Golden Gate Bridge, Alcatraz, and the streets of San Francisco in this 5-day package.",
      price: "$1400",
      image: "https://media.istockphoto.com/id/476881195/photo/bay-bridge-and-san-francisco-skyline-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=CIER8QaNDY4ek0pXfJN8XKwTYLaInZutFZNHEtzLro0=",
    },
    {
      id: 20,
      city: "Cairo",
      description: "Discover the pyramids, Sphinx, and Egyptian Museum with this 6-day adventure in Cairo.",
      price: "$1200",
      image: "https://media.istockphoto.com/id/2145675143/photo/the-great-sphinx-bythe-pyramids-of-egypt-and-its-companions-in-the-sands-of-giza-desert-egypt.webp?a=1&b=1&s=612x612&w=0&k=20&c=powebXTP2hAiP7GAA3juArTwQ1kPW7oGtEo7rLzaSuA=",
    },
  ];
  
  return (
    <>
    
    <Navbar/>


    
    <div className="travel-packages">
      <h1>Travel Packages for Famous Cities</h1>
      <div className="packages-list">
        {packages.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <img src={pkg.image} alt={pkg.city} />
            <h2>{pkg.city}</h2>
            <p>{pkg.description}</p>
            <p className="price">{pkg.price}</p>
            <button>Book Now</button>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};


export default TravelPackages
