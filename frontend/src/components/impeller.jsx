import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

import impeller1 from '../assets/impeller.jpg'
import impeller2 from '../assets/impeller2.jpg'

const Impeller = () => {
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
                src={impeller1}
                alt="Impeller Blower 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={impeller2}
                alt="Impeller Blower 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Title and Description */}
        <h1 className="text-2xl lg:text-3xl font-bold text-blue-700 text-left">
          Impeller
        </h1>

        <p className="text-gray-700 leading-relaxed max-w-3xl text-left">
          Suraj Enterprises manufactures high-performance{" "}
          <span className="text-blue-600 font-semibold">Impeller</span> that are
          crucial for industrial air handling systems. Our impellers are engineered with precision
          to ensure efficient airflow, optimal pressure generation, and durable performance in
          demanding applications.
        </p>

        {/* Section: Applications */}
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-600 text-left">
            Typical <span className="text-gray-800">Applications</span>
          </h2>
          <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left space-y-2">
            <p>1. Industrial Ventilation Systems</p>
            <p>2. HVAC Units and Air Handling</p>
            <p>3. Dust Collection Systems</p>
            <p>4. Boiler Combustion Air Supply</p>
          </div>
        </div>

        {/* Section: Features */}
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-600 text-left mt-10">
            Key <span className="text-gray-800">Features</span>
          </h2>
          <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left space-y-2">
            <p>1. Aerodynamically designed blades for higher efficiency</p>
            <p>2. Built with heavy-duty materials for longer life</p>
            <p>3. Available in multiple blade profiles (Backward, Forward, Radial)</p>
            <p>4. Custom sizes to meet your system requirements</p>
          </div>
        </div>

        {/* Section: Quality & Testing */}
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-blue-600 text-left mt-10">
            Quality & Testing
          </h2>
          <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left space-y-2">
            <p>1. Dynamic and Static Impeller Balancing</p>
            <p>2. Precision machining for vibration-free operation</p>
            <p>3. Performance testing under standard and custom conditions</p>
            <p>4. Material certification and test reports on request</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Impeller
