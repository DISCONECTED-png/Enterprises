import React from 'react'
import dust from "../assets/dust.jpg"
import dust1 from "../assets/dust1.jpg"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
const Dustcollection = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="w-full  rounded-lg overflow-hidden">
        <div className="w-full rounded-lg overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="w-90 h-[500px] max-sm:w-[300px] max-sm:h-[500px]"
          >
            <SwiperSlide>
              <img
                src={dust}
                alt="Dust 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={dust1}
                alt="Dust 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        </div>
        <h1 className="mt-6 text-2xl lg:text-3xl font-bold text-blue-700 text-left">
        Dust Collector
        </h1>

        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p className="mb-2">
          In dust collection systems, Centrifugal Air Blower collects dust from generating point and carry it via ducting to Dust Collector. The dust collector may be of Bag Type/ Cyclone Type. The dust particles are trapped & collected in bin of dust collector and dust free clean air is exhausted to atmosphere. Dust collected by Industrial Blower Fan is mainly in powder or tiny particle form of low bulk density.Following data is considered in Selection of dust collector blower:
          </p>
          <p className="mb-2">
          1. Quantity of Dust to be removed.
          </p>
          <p className="mb-2">
          2. Dust Particle size.
          </p>
          <p className="mb-2">
          3. Density of dust particle.
          </p>
          <p className="mb-2">
          4. Type of Dust collector and its static pressure.
          </p>
          <p className="mb-2">
          5. Piping layout and sizes.
          </p>
          <p className="mb-2">
          6. Compatibility of dust with blower material.
          </p>
        </div>
       
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p className="mb-2">
          Based on the chemical reactivity of dust particles,Dust Collector for chemical dust and scrubber applications, can be made of following material
          </p>
          <p className="mb-2">
          1. Mild Steel Blowers with epoxy painting.
          </p>
          <p className="mb-2">
          2. PP Blowers (Polypropylene Blowers)
          </p>
          <p className="mb-2">
          3. FRP Blowers
          </p>
          <p className="mb-2">
          4. SS Blowers (Stainless Steel Blowers made from SS-304/316)
          </p>
        </div>

        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p className="mb-2">
          Dust Collector can be fitted either before or after the dust collector. It is recommended to connect the blower at the outlet side of dust collector. This way impeller (moving part of blower) does not comes is contact with dust particles, thus reducing blower wear, maintenance & chances of dust leakage.Some of the applications of Industrial Centrifugal Air Fans and Blowers for Dust Collection application are as follows
          </p>
          <p className="mb-2">
          1. Grinding dust of abrasive particles comming out of machining process carried by Dust Collection Blower.
          </p>
          <p className="mb-2">
          2. Powder dust in Chemical Industries, Polishing insdustries, Marble Industries carried in air by dust blower
          </p>
          <p className="mb-2">
          3. Saw dust generating in particle board/ furniture industries.
          </p>
         
        </div>
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p className="mb-2">
          We are supplies of Dust Collector for many of the dust collection system manufacturers in India.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dustcollection