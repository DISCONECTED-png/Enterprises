import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import post1 from '../assets/centrifugal.jpg'
import post2 from '../assets/centrifugal2.jpg' // Add another image to your assets

const Centrifugal = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Swiper Carousel */}
        <div className="w-full rounded-lg overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="w-150 h-[500px] max-sm:w-[300px] max-sm:h-[300px]"
          >
            <SwiperSlide>
              <img
                src={post1}
                alt="Centrifugal Air Blower 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={post2}
                alt="Centrifugal Air Blower 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Title and Description */}
        <h1 className="text-2xl lg:text-3xl font-bold text-blue-700 text-left">
          Centrifugal Air Blowers
        </h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl text-left">
          Centrifugal Fans and Blowers are used for delivering air at substantial pressure.
          Suraj Systems <span className="text-blue-600 font-semibold">Centrifugal Air Blowers</span>
          are designed to work at precise operating flow and pressure conditions. All our
          <span className="text-blue-600 font-semibold"> Centrifugal Air Blowers</span> comply
          with IS-4894 code India. Please scroll down to view the
          <span className="text-blue-600 font-semibold"> Centrifugal Blowers</span> selection catalogue.
        </p>

        {/* Section: Selection Specifications */}
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-600 text-left">
            Selection of <span className="text-gray-800">Centrifugal Air Blowers</span> Specifications
          </h2>
          <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left space-y-2">
            <p>1. Air flow rate required by the process in m³/hr or CFM (cubic feet/min).</p>
            <p>2. Static pressure offered by the ducting (in inches/mm of wc).</p>
            <p>3. Temperature of air entering the blower.</p>
            <p>4. Specific application of the centrifugal fan or blower.</p>
          </div>
        </div>

        {/* Section: Technical Parameters */}
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-600 text-left mt-10">
            <span className="text-gray-800">Centrifugal Air Blowers</span>
          </h2>
          <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left space-y-2">
            <p>1. Blower Wheel Diameter</p>
            <p>2. Rotation speed (RPM)</p>
            <p>3. Power Consumption (HP or kW)</p>
            <p>4. Motor Power (HP)</p>
          </div>
        </div>

        {/* Section: Testing */}
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-600 text-left mt-10">
            Inspection and Testing of Centrifugal Fans & Blowers
          </h2>
          <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left space-y-2">
            <p>1. Impeller Wheel Balancing Certificate</p>
            <p>
              2. Operating characteristics curve showing blower performance at different static pressures,
              tested per BIS:4894 code
            </p>
            <p>3. Blower noise levels at the operating point</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Centrifugal
