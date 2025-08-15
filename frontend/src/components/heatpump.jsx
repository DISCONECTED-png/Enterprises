import React from 'react';
import heat from "../assets/heatpump.jpg"
import heat1 from "../assets/heatpump1.jpg"
import heat2 from "../assets/heatpump2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
const HeatPumping = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Image Carousel Placeholder */}
        <div className="w-full rounded-lg overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="w-130 h-[500px] max-sm:w-[300px] max-sm:h-[300px]"
          >
            <SwiperSlide>
              <img
                src={heat}
                alt="Heat"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={heat1}
                alt="Heat 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={heat2}
                alt="Heat 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <h1 className="mt-6 text-2xl lg:text-3xl font-bold text-blue-700 text-left">
          Industrial Heat Pumping Units
        </h1>

        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p className="mb-4">
            Our Heating Pumping Units are essential systems designed to circulate thermal oil or fluid to your furnace or heating system with precision and efficiency. Built for consistent performance, these units ensure uniform heat transfer, reduced energy loss, and safe temperature control in high-temperature environments.
          </p>

          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Types:
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Single-Pump Units – Compact, cost-effective & ideal for smaller systems.
            </li>
            <li>Dual-Pump Units – Designed with standby redundancy for uninterrupted operation.</li>
            <li>Skid-Mounted Systems – Fully integrated and easy to install, suitable for large-scale operations.
            </li>
          </ul>
        </div>

        <h2 className="mt-10 text-xl lg:text-2xl font-semibold text-blue-600 text-left">
          Key Applications
        </h2>
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <ul className="list-decimal list-inside space-y-2">
            <li>Heat treatment furnaces</li>
            <li>Chemical & pharmaceutical industries</li>
            <li>Oil & gas refineries</li>
            <li>Rubber, textile, and plastic processing</li>
            <li>Food processing plants</li>
          </ul>
        </div>

        <h2 className="mt-10 text-xl lg:text-2xl font-semibold text-blue-600 text-left">
          Key Features of Suraj Heat Pumping Units
        </h2>
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <ul className="list-disc list-inside space-y-2">
            <li>High-temperature handling (up to 350°C or more)
</li>
            <li>Energy-efficient circulation
</li>
            <li>
Safety valves, temperature sensors & digital controllers
</li>
            <li>Available in customized flow and pressure capacities</li>
          </ul>
        </div>

        <div className="mt-6 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p>
            Suraj provides custom-designed heat pumping solutions to meet unique client specifications. Our units are tested for performance and efficiency under real-world load conditions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeatPumping;
