import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar'
import '../styles/travelpackage.css';
import Footer from './Footer'

const TravelPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      city: "Paris",
      description: "Enjoy the beauty of Paris with a 7-day package that includes guided tours, Eiffel Tower access, and more!",
      price: "₹124,500",
      image: "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      city: "New York",
      description: "Explore the city that never sleeps! This package includes a Broadway show, Statue of Liberty tour, and city sightseeing.",
      price: "₹1,70,000",
      image: "https://media.istockphoto.com/id/1167975236/photo/the-statue-of-liberty-over-the-scene-of-new-york-cityscape-river-side-which-location-is-lower.webp?a=1&b=1&s=612x612&w=0&k=20&c=YGjmE6DoiytqYUk9CcWXl8bDA3VWGXzxyDT1IB1NUqY=",
    },
    {
      id: 3,
      city: "Tokyo",
      description: "Experience the culture, technology, and food of Tokyo in this 6-day travel package.",
      price: "₹107,900",
      image: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
    },
    {
      id: 4,
      city: "London",
      description: "Experience the Royal English culture and food of London in this 6-day travel package.",
      price: "₹99,900",
      image: "https://media.istockphoto.com/id/533462679/photo/london-big-ben-and-houses-of-parliament-uk.webp?a=1&b=1&s=612x612&w=0&k=20&c=BYV5ErD6-IYW_fjfEN1t1H9sT7lyONrXqiT-EDz6yW8=",
    },
    {
      id: 5,
      city: "Dubai",
      description: "Discover luxury in Dubai with desert safaris, skyscrapers, and a thrilling shopping experience.",
      price: "₹159,400",
      image: "https://media.istockphoto.com/id/183371461/photo/city-lights-in-dubai-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=w1Ctywo-WPcV3ronyQDVCbwq5Hb2J1DI4QwSHsnnZwQ=",
    },
    {
      id: 6,
      city: "Sydney",
      description: "Relax in Sydney with a 5-day package that includes the Opera House, Bondi Beach, and more.",
      price: "₹116,200",
      image: "https://media.istockphoto.com/id/535455441/photo/view-of-sydney-harbour-australia.webp?a=1&b=1&s=612x612&w=0&k=20&c=ppqJgsi9-pLlVIq9UGFO0meliF-YYd4gE9ilRwxhx6I=",
    },
    {
      id: 7,
      city: "Rome",
      description: "Travel back in time with a tour of the historic city of Rome, including the Colosseum, Vatican, and more.",
      price: "₹91,300",
      image: "https://media.istockphoto.com/id/1464094211/photo/rome-italy.webp?a=1&b=1&s=612x612&w=0&k=20&c=wK13NVRQc5MXI_Gd8YjodJKIv_lrFOO8HJY3G2YwdA0=",
    },
    {
      id: 8,
      city: "Bangkok",
      description: "Explore Bangkok's vibrant street life, floating markets, and the Grand Palace in this exciting 4-day trip.",
      price: "₹66,400",
      image: "https://media.istockphoto.com/id/1192427501/photo/wat-arun-landmark-in-bangkok-city-thailand.webp?a=1&b=1&s=612x612&w=0&k=20&c=5x6He_EGi9STCS7egAex5YpuobSUx77elcby8L-6LvQ=",
    },
    {
      id: 9,
      city: "Singapore",
      description: "Discover the charm of Singapore with a 5-day package including Marina Bay, Sentosa Island, and gardens.",
      price: "₹107,900",
      image: "https://media.istockphoto.com/id/482380340/photo/singapore-skyline-and-view-of-marina-bay-at-twilight.webp?a=1&b=1&s=612x612&w=0&k=20&c=wRIcEf8X0s6293kqjt06hFGk0KIR_BMhDjVmDwDf5Bo=",
    },
    {
      id: 10,
      city: "Cape Town",
      description: "Experience nature and adventure in Cape Town with Table Mountain, Cape Point, and beautiful beaches.",
      price: "₹70,000",
      image: "https://media.istockphoto.com/id/1623526535/photo/long-exposure-vertical-shot-of-hout-bay-town-harbour-and-the-fishermen-town-at-dusk-cape-town.webp?a=1&b=1&s=612x612&w=0&k=20&c=rZh9zTatfgzRV8nM3pxS4Xr3VC-j397ux-kqpJ9m618=",
    },
    {
      id: 11,
      city: "Barcelona",
      description: "Explore the architectural beauty of Barcelona, including Gaudi's Sagrada Familia and the Gothic Quarter.",
      price: "₹83,700",
      image: "https://media.istockphoto.com/id/1418575808/photo/barcelona-eixample-residential-district-and-famous-basilica-sagrada-familia-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=1Ak_eGDsCRGC2613trZhdCeKqwTnYf4jWVLjgPJMYYI=",
    },
    {
      id: 12,
      city: "Machu Picchu",
      description: "Trek to the lost city of the Incas with a 5-day adventure to Machu Picchu in Peru.",
      price: "₹122,000",
      image: "https://media.istockphoto.com/id/1665266205/photo/panoramic-view-of-machu-picchu-peru.webp?a=1&b=1&s=612x612&w=0&k=20&c=QvLY5S-1_imXM0FlNFc2SeSAaNCAyH_AxSF97iFoF5E=",
    },
    {
      id: 13,
      city: "Kyoto",
      description: "Experience the cultural heart of Japan with a 6-day trip to Kyoto, including temples, gardens, and traditional tea ceremonies.",
      price: "₹91,600",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8a3lvdG98ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 14,
      city: "Istanbul",
      description: "Discover the historic beauty of Istanbul, with its rich blend of cultures, palaces, and bustling bazaars.",
      price: "₹80,000",
      image: "https://media.istockphoto.com/id/903934818/photo/istanbul-views.webp?a=1&b=1&s=612x612&w=0&k=20&c=HgZNMI2PR8tr2c3-dY6XAdYNp0R3SESkqJbcQqtsnVk=",
    },
    {
      id: 15,
      city: "Amsterdam",
      description: "Explore the canals and rich cultural scene of Amsterdam with a 5-day vacation package.",
      price: "₹99,000",
      image: "https://media.istockphoto.com/id/477307170/photo/night-city-view-of-amsterdam-the-netherlands.webp?a=1&b=1&s=612x612&w=0&k=20&c=999pJ1ej4pEbqTIQ_ueN6yETii3fGE6jyExVw2wQZdA=",
    },
    {
      id: 16,
      city: "Moscow",
      description: "Visit Moscow for a 5-day package with Red Square, Kremlin, and world-class museums.",
      price: "₹1,10,000",
      image: "https://media.istockphoto.com/id/482522546/photo/above-st-basils-cathedral-red-square-and-kremlin-panorama-moscow.webp?a=1&b=1&s=612x612&w=0&k=20&c=1oT7NYHoy4Bl9kVcK8PdO17KqrE1mmF_np3jsEXSRYA=",
    },
    {
      id: 17,
      city: "Athens",
      description: "Step into history with a 5-day trip to Athens, featuring the Acropolis, Plaka, and Greek cuisine.",
      price: "₹1,90,000",
      image: "https://media.istockphoto.com/id/1028749698/photo/the-acropolis-of-athens-greece.webp?a=1&b=1&s=612x612&w=0&k=20&c=eHnOJqyLXt07MffAQcSK4QQpVk5sC126xuX6_fd2yak=",
    },
    {
      id: 18,
      city: "Rio de Janeiro",
      description: "Explore the vibrant culture of Rio with visits to Christ the Redeemer, Copacabana, and the Sugarloaf Mountain.",
      price: "₹75,000",
      image: "https://media.istockphoto.com/id/1312539295/photo/aerial-view-of-sanctuary-of-christ-the-king-or-santuario-de-cristo-rei-on-sunny-summer-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=0veSEuW-FOG9DfdLmirGqM83pbMVobuNjRWsknSynx8=",
    },
    {
    id: 19,
    city: "Seoul",
    description: "Dive into Korean culture with a 6-day package in Seoul featuring Gyeongbokgung Palace and street food tours.",
    price: "₹1,00,000",
    image: "https://media.istockphoto.com/id/1327824636/photo/cherry-blossom-in-spring-at-gyeongbokgung-palace.webp?a=1&b=1&s=612x612&w=0&k=20&c=oVHuZCEl5R27R_cCWS1iUBe-zMRWfc2oMVxXYcb9YJc=",
  },
  {
    id: 20,
    city: "San Francisco",
    description: "Explore the Golden Gate Bridge, Alcatraz, and the streets of San Francisco in this 5-day package.",
    price: "₹1,40,000",
    image: "https://media.istockphoto.com/id/476881195/photo/bay-bridge-and-san-francisco-skyline-at-sunset.webp?a=1&b=1&s=612x612&w=0&k=20&c=CIER8QaNDY4ek0pXfJN8XKwTYLaInZutFZNHEtzLro0=",
  },
  {
    id: 20,
    city: "Cairo",
    description: "Discover the pyramids, Sphinx, and Egyptian Museum with this 6-day adventure in Cairo.",
    price: "₹77,000",
    image: "https://media.istockphoto.com/id/2145675143/photo/the-great-sphinx-bythe-pyramids-of-egypt-and-its-companions-in-the-sands-of-giza-desert-egypt.webp?a=1&b=1&s=612x612&w=0&k=20&c=powebXTP2hAiP7GAA3juArTwQ1kPW7oGtEo7rLzaSuA=",
  },

    
  ];
  


  const indianPackages = [
    {
      id: 21,
      city: "Leh-Ladakh",
      description: "Ride through rugged terrains and pristine landscapes of Ladakh.",
      price: "₹20000",
      image: "https://media.istockphoto.com/id/1218830644/photo/beautiful-lake.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZaxyR5eUzrggJ5GTvJuo0YjiiAP0LzqUf6taZfwPF3Y=",
    },
    {
      id: 22,
      city: "Goa",
      description: "Dive into the vibrant nightlife and stunning beaches of Goa.",
      price: "₹19000",
      image: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z29hfGVufDB8fDB8fHww",
    },
    {
      id: 23,
      city: "Manali",
      description: "Escape to the lush valleys and tranquil vibe of Manali.",
      price: "₹7000",
      image: "https://media.istockphoto.com/id/158858021/photo/manali-himachal-pradesh-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=7KLMYTf-RVgFVRDlQZkb-3eqzd9zxESCFsB_UZ37IwE=",
    },
    {
      id: 24,
      city: "Jaipur",
      description: "Uncover the regal charm of Jaipur, the Pink City.",
      price: "₹7000",
      image: "https://plus.unsplash.com/premium_photo-1661962404003-e0ca40da40ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8amFpcHVyfGVufDB8fDB8fHww",
    },
    {
      id: 25,
      city: "Udaipur",
      description: "Discover romance by the lakes in the City of Lakes, Udaipur.",
      price: "₹8500",
      image: "https://media.istockphoto.com/id/1343698822/photo/udaipur-city-palace-beside-beautiful-lake-pichola-at-udaipur-rajasthan-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZEj2EfXW2qNwZ8GKEjBIU_ixuwtV5FXW76-Ead_PUZY=",
    },
    {
      id: 26,
      city: "Varanasi",
      description: "Dive into spirituality by the sacred Ganges in Varanasi.",
      price: "₹6500",
      image: "https://media.istockphoto.com/id/827065008/photo/holy-town-varanasi-and-the-river-ganges.webp?a=1&b=1&s=612x612&w=0&k=20&c=QtEgeqRAUw0e45r54qW9I79H0hxqk0_3klw_B3xD_rY=",
    },
    {
      id: 27,
      city: "Shimla",
      description: "Experience the serenity of snow-capped mountains in Shimla.",
      price: "₹10000",
      image: "https://plus.unsplash.com/premium_photo-1697729690458-2d64ca777c04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 28,
      city: "Rishikesh",
      description: "Find peace and adventure in the Yoga Capital of the World.",
      price: "₹4000",
      image: "https://media.istockphoto.com/id/1270273473/photo/river-ganga-in-rishikesh-during-monsoon.webp?a=1&b=1&s=612x612&w=0&k=20&c=P-TZ8dUZAGGvLHz1e9J9M_DhrCjtNqmFIKLJPmkEgCE=",
    },
    {
      id: 29,
      city: "Darjeeling",
      description: "Wake up to the aroma of tea and majestic mountain views.",
      price: "₹11000",
      image: "https://media.istockphoto.com/id/512978969/photo/darjeeling-town-and-tea-plantation-with-himalaya-mountains.webp?a=1&b=1&s=612x612&w=0&k=20&c=SJ03zILzRXHk7Wo44EQPsitm4MZ5YunfRMgZs9Wh50g=",
    },
    {
      id: 30,
      city: "Ooty",
      description: "Revel in the lush greenery and scenic charm of Ooty.",
      price: "₹16000",
      image: "https://media.istockphoto.com/id/537064629/photo/tea-plantations-around-the-emerald-lake-in-ooty.webp?a=1&b=1&s=612x612&w=0&k=20&c=E5yKr6mXwi14CtvU0iMmESgJLbZagJbfwz-dqABsE24=",
    },
    {
      id: 31,
      city: "Hampi",
      description: "Step back in time with the ancient ruins of Hampi.",
      price: "₹4500",
      image: "https://media.istockphoto.com/id/654223518/photo/sunset-over-hills-near-hampi-karnataka.webp?a=1&b=1&s=612x612&w=0&k=20&c=f_hRP6H0zy4tjwMzc8ak1AJpHuniCOCJTpbMwwiyszk=",
    },
    {
      id: 32,
      city: "Coorg",
      description: "Relax in the coffee-scented air of Coorg’s rolling hills.",
      price: "₹9000",
      image: "https://media.istockphoto.com/id/1646250510/photo/a-charming-waterfall-named-malalli-flows-gracefully-in-the-idyllic-locales-of-coorg-hill.webp?a=1&b=1&s=612x612&w=0&k=20&c=SK9o50FC4OX4iXEBsuhtvTwwWbxXs_wU77DPxEY6n7Y=",
    },
    {
      id: 33,
      city: "Agra",
      description: "Marvel at the timeless beauty of the Taj Mahal in Agra.",
      price: "₹3000",
      image: "https://media.istockphoto.com/id/1394071400/photo/hot-air-balloons-soaring-over-the-taj-mahal-in-agra-city.webp?a=1&b=1&s=612x612&w=0&k=20&c=mVteBL09roDO69O21BmHAbWIQB9b9cXkhHw-TbuK4n4=",
    },
    {
      id: 34,
      city: "Mysore",
      description: "Explore the royal heritage of the grand Mysore Palace.",
      price: "₹7500",
      image: "https://media.istockphoto.com/id/172124032/photo/mysore-palace-at-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=tfzI-I3e4YpuOz95NFWfJ6VuPwR-njeJqd2s7MDjYtY=",
    },
    {
      id: 35,
      city: "Andaman Islands",
      description: "Relax on pristine beaches and explore coral reefs in paradise.",
      price: "₹20000",
      image: "https://media.istockphoto.com/id/1188259049/photo/whitehaven-beach-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=zbVLecu6duv5IL7Y8ZKNhDmzJU4Q1tvQ91_l47G1mbw=",
    },
    {
      id: 36,
      city: "Kashmir",
      description: "Witness the heavenly beauty of the Kashmir Valley.",
      price: "23000",
      image: "https://media.istockphoto.com/id/1323846766/photo/a-beautiful-view-of-dal-lake-in-winter-srinagar-kashmir-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=66SpftUPpEa6YmhgcV_yJAIKEgGaLpYk43y8yc3v-OI=",
    },
    {
      id: 37,
      city: "Ranthambore",
      description: "Spot majestic tigers in their natural habitat at Ranthambore.",
      price: "₹9000",
      image: "https://media.istockphoto.com/id/471854078/photo/bengal-tigers-in-front-of-tourist-car.webp?a=1&b=1&s=612x612&w=0&k=20&c=UOIFsArVVwk17-AOXUKT7cwWF5uKOA-6Kw5xyjHHp2k=",
    },
    {
      id: 38,
      city: "Khajuraho",
      description: "Explore the intricate artistry of Khajuraho temples.",
      price: "₹5500",
      image: "https://media.istockphoto.com/id/860947212/photo/parvati-and-vishwanath-temple-in-the-kharjuraho-western-group-of-temples.webp?a=1&b=1&s=612x612&w=0&k=20&c=LXZB6Qrdv_kqs1swL0KRwdpDDxocYQvr5xIdFYHJdf0=",
    },
    {
      id: 39,
      city: "Rann of Kutch",
      description: "Walk across the breathtaking White Desert at Rann of Kutch.",
      price: "₹18000",
      image: "https://media.istockphoto.com/id/1276749215/photo/landscape-view-of-rainbow-over-the-mountains-at-bhujiya-hills-bhuj-kutch-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=CX0pHIaK1dii13QMZS_mpmQraIVU0UV92YJHzR9Rl-o=",
    },
    {
      id: 37,
      city: "Kerala",
      description: "Relax in the backwaters and enjoy the vibrant culture of Kerala.",
      price: "₹22000",
      image: "https://media.istockphoto.com/id/472560442/photo/backwaters-of-kerala.webp?a=1&b=1&s=612x612&w=0&k=20&c=8ofjtyOQM45DhYqmt73Jz1mpPPn1BbnZaN3aGmBELyg=",
    }
  ];
  

    // Handle image click
    const handleClick = (pkg) => {
      setSelectedPackage(pkg);
    };
  
    // Function to close the modal
    const closeModal = () => {
      setSelectedPackage(null);
    };
  
    // Close the modal when clicking outside of it
    const handleBackdropClick = (e) => {
      if (e.target.classList.contains('modal')) {
        closeModal();
      }
    };
  
    return (
      <>
        <Navbar />
  
        <div className="travel-packages">
          <div className='package-heading'>
            <h1>"Unwrap your dream getaway with our exclusive vacation packages—best deals, unforgettable memories!"</h1>
          </div>
  
          {/* Travel Packages Section */}
          <div className="packages-list">
            {packages.map((pkg) => (
              <div key={pkg.id} className="package-card" onClick={() => handleClick(pkg)}>
                <img src={pkg.image} alt={pkg.city} />
                <h2>{pkg.city}</h2>
                <p>{pkg.description}</p>
                <p className="price">{pkg.price}</p>
                <button>Book Now</button>
              </div>
            ))}
          </div>
        </div>
  
        {/* Indian Travel Packages Section */}
        <div>
          <h1>Travel Packages Within India</h1>
          <div className="packages-list">
            {indianPackages.map((pkg) => (
              <div key={pkg.id} className="package-card" onClick={() => handleClick(pkg)}>
                <img src={pkg.image} alt={pkg.city} />
                <h2>{pkg.city}</h2>
                <p>{pkg.description}</p>
                <p className="price">{pkg.price}</p>
                <button>Book Now</button>
              </div>
            ))}
          </div>
        </div>
  
        {/* Modal for Selected Package */}
        {selectedPackage && (
          <div className="modal" onClick={handleBackdropClick}>
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              <img src={selectedPackage.image} alt={selectedPackage.city} />
              <h2>{selectedPackage.city}</h2>
              <p>{selectedPackage.description}</p>
              <p><strong>Price: {selectedPackage.price}</strong></p>
              <button>Book Now</button>
            </div>
          </div>
        )}
  
        <Footer />
      </>
    );
  };
  
  export default TravelPackages;