import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import post1 from '../assets/centrifugal.jpg';
import dust from "../assets/dust.jpg";
import furnace from "../assets/furnace.jpg";
import heat from "../assets/heatpump.jpg";
import induced from "../assets/induced.jpg";
import oil from "../assets/oil.jpg";
import shred from "../assets/shred.jpg";
import axial from '../assets/axial fans.jpg';
import impeller from '../assets/impeller.jpg';

const Range = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  const products = [
    {
      title: 'Centrifugal Blowers',
      description: 'Used for ventilation, air handling, and industrial applications requiring higher pressure.',
      image: post1,
      route: '/centrifugal',
    },
    {
      title: 'Axial Fans',
      description: 'High-volume, low-pressure fans ideal for cooling and exhaust.',
      image: axial,
      route: '/tubeaxialfans',
    },
    {
      title: 'Induced & Forced Draft Fans',
      description: 'Used in boilers and combustion systems to control air flow.',
      image: induced,
      route: '/inducedandforceddraft',
    },
    {
      title: 'Furnace Blowers',
      description: 'Designed for high-temperature air movement in furnaces.',
      image: furnace,
      route: '/furnace',
    },
    {
      title: 'Dust Collector',
      description: 'Effectively extract and filter dust from industrial environments.',
      image: dust,
      route: '/dustcollection',
    },
    {
      title: 'Shredding Machines',
      description: 'Built to assist material movement in shredding systems.',
      image: shred,
      route: '/Shredding',
    },
    {
      title: 'Heat Pumping Unit',
      description: 'Designed for thermal energy transfer and efficient temperature control.',
      image: heat,
      route: '/heatpumping',
    },
    {
      title: 'Oil Outflow Heater',
      description: 'Specialized units for heating oil in pipelines and tanks.',
      image: oil,
      route: '/oiloutflow',
    },
    {
      title: 'Impeller',
      description: 'High-efficiency impeller fans for optimized air flow in industrial systems.',
      image: impeller, 
      route: '/impeller',
    }
    
  ];

  return (
    <div className="bg-gray-200 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade">
          <h2 className="text-3xl font-bold text-blue-700">
            Best Range of Industrial Air Blowers in India
          </h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Explore Suraj Enterprises' comprehensive lineup of industrial air blowers built for performance,
            durability, and energy efficiency.
          </p>
        </div>

        {/* Carousel with AOS on each card */}
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3500}
          arrows={true}
          containerClass="carousel-container"
          itemClass="px-3"
        >
          {products.map((product, index) => (
            <div key={index} data-aos="fade-up">
              <Link
  to={product.route}
  className="group block bg-gray-100 rounded-2xl shadow-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl hover:bg-blue-600"
>
  <img
    src={product.image}
    alt={product.title}
    className="w-full h-48 object-cover transition-all duration-500 ease-in-out"
  />
  <div className="p-5 transition-colors duration-500 ease-in-out">
    <h3 className="text-xl font-semibold text-blue-600 group-hover:text-white transition-colors duration-500 ease-in-out">
      {product.title}
    </h3>
    <p className="text-sm text-gray-600 mt-2 group-hover:text-white transition-colors duration-500 ease-in-out">
      {product.description}
    </p>
  </div>
</Link>

            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Range;
