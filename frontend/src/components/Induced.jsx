import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import induced from "../assets/induced.jpg"
import forced from "../assets/forced.jpg"
const Induced = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Image */}
        <div className="w-full rounded-lg overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="w-170 h-[600px]  max-sm:w-[300px] max-sm:h-[300px]"
          >
            <SwiperSlide>
              <img
                src={induced}
                alt="Centrifugal Air Blower 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={forced}
                alt="Centrifugal Air Blower 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <h1 className="mt-6 text-2xl lg:text-3xl font-bold text-blue-700 text-left">
          Induced & Forced Draft Fans for Industrial Use
        </h1>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          Induced Draft (ID) and Forced Draft (FD) Fans are widely used in industrial systems
          where high air volume and pressure are required for combustion, Shredding, and exhaust operations. 
          <span className="text-blue-600 font-semibold"> Suraj Draft Fans</span> are engineered to perform under demanding conditions and are tailored to meet specific industrial requirements.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          These fans are generally categorized as:
        </p>
        <ul className="list-disc list-inside text-gray-700 max-w-3xl text-left space-y-2 mt-2">
          <li>
            <strong>Induced Draft Fans (ID):</strong> Positioned at the outlet of systems to pull air or gas through the system and push it out through the stack.
          </li>
          <li>
            <strong>Forced Draft Fans (FD):</strong> Installed at the system inlet to force air into the combustion chamber or ducts.
          </li>
        </ul>

        <h2 className="mt-10 text-xl lg:text-2xl font-semibold text-blue-600 text-left">
          Typical Applications of Induced & Forced Draft Fans
        </h2>
        <ul className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left list-disc list-inside space-y-2">
          <li>Boiler systems in power plants</li>
          <li>Furnace combustion air supply</li>
          <li>Dust collection systems</li>
          <li>Material handling and drying systems</li>
          <li>Shredding and air pollution control</li>
          <li>Exhaust systems for gas and fumes</li>
        </ul>

        <h2 className="mt-10 text-xl lg:text-2xl font-semibold text-blue-600 text-left">
          Features of <span className="text-gray-800">"Suraj Make"</span> Draft Fans
        </h2>
        <ul className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left list-decimal list-inside space-y-2">
          <li>High-efficiency impellers for optimal airflow and pressure</li>
          <li>Dynamic balancing to ensure vibration-free and smooth operation</li>
          <li>Robust construction suitable for high-temperature and corrosive environments</li>
          <li>Customized inlet and outlet designs to match system requirements</li>
          <li>Direct drive and belt drive options available</li>
          <li>Powder-coated finish for enhanced durability and appearance</li>
          <li>Low maintenance design and superior performance</li>
        </ul>

        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p>
            Suraj also manufactures custom-built ID and FD fans for specific applications,
            including stainless steel construction and high-temperature designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Induced;
