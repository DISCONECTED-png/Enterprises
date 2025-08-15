import React from 'react';
import oil from "../assets/oil.jpg"
import oil1 from "../assets/oil1.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
const OilOutflowHeater = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
      <div className="w-full rounded-lg overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="w-100 h-[500px] max-sm:w-[300px] max-sm:h-[300px]"
          >
            <SwiperSlide>
              <img
                src={oil}
                alt="Oil 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={oil1}
                alt="Oil 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <h1 className="mt-6 text-2xl lg:text-3xl font-bold text-blue-700 text-left">
          Oil Outflow Heater Units
        </h1>

        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p className="mb-4">
            <span className="font-semibold text-blue-600">Suraj Oil Outflow Heaters</span> are designed to preheat and maintain the temperature of heavy or viscous oils during outflow from storage tanks, pipelines, or containers. These units are essential in industries where fuel oil, lube oil, or edible oil needs to flow efficiently without clogging or thermal loss.
          </p>

          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            Typical Applications
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Preheating furnace oil for combustion</li>
            <li>Maintaining pumpable viscosity of fuel oils</li>
            <li>Outflow heating in edible oil processing plants</li>
            <li>Thermic fluid heating in jacketed systems</li>
            <li>Pipeline heating in cold environments</li>
          </ul>
        </div>

        <h2 className="mt-10 text-xl lg:text-2xl font-semibold text-blue-600 text-left">
          Selection Parameters
        </h2>
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <ul className="list-decimal list-inside space-y-2">
            <li>Type of oil to be heated (FO, LDO, HSD, edible oils, etc.)</li>
            <li>Desired outflow temperature (°C)</li>
            <li>Flow rate in liters/hour or m³/hour</li>
            <li>Tank or line size and orientation</li>
            <li>Ambient temperature conditions</li>
            <li>Power source availability (electric, steam, thermic fluid)</li>
          </ul>
        </div>

        <h2 className="mt-10 text-xl lg:text-2xl font-semibold text-blue-600 text-left">
          Key Features of Suraj Oil Outflow Heaters
        </h2>
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <ul className="list-disc list-inside space-y-2">
            <li>Electric and thermic fluid-based models available</li>
            <li>Custom-built heating coils with thermostatic control</li>
            <li>Integrated temperature sensors and controllers</li>
            <li>Available in flange or threaded immersion types</li>
            <li>Corrosion-resistant steel or alloy construction</li>
            <li>Suitable for hazardous area installation (on request)</li>
            <li>Safe and energy-efficient operation</li>
          </ul>
        </div>

        <div className="mt-6 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p>
            At <span className="font-semibold text-blue-600">Suraj</span>, our Oil Outflow Heaters are built to meet demanding industrial conditions, ensuring continuous flow and reduced downtime even in low-temperature environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OilOutflowHeater;
