import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import shred from "../assets/shred.jpg"
import shred2 from "../assets/shred2.jpg"
const Shredding = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Image Carousel */}
        <div className="w-full rounded-lg overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            className="w-130 h-[500px]  max-sm:w-[300px] max-sm:h-[300px]"
          >
            <SwiperSlide>
              <img
                src={shred2}
                alt="Centrifugal Air Blower 1"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={shred}
                alt="Centrifugal Air Blower 2"
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        <h1 className="mt-6 text-2xl lg:text-3xl font-bold text-blue-700 text-left">
          Industrial Shredding Machines
        </h1>
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p className="mb-4">
          Our Foam Shredding Machine is a high-performance, heavy-duty solution designed to handle all types of foam waste with ease and precision. Whether you are in the furniture, bedding, packaging, or insulation industry, this machine helps you recycle foam efficiently, reduce waste volume, and repurpose material for cost savings. Built with a rugged steel frame and advanced cutting technology, it delivers consistent performance, even under continuous operation.
          </p>
        </div>

        <h2 className="mt-10 text-xl lg:text-2xl font-semibold text-blue-600 text-left">
          <span className="text-gray-800">Applications of Shredding Machines</span>
        </h2>
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <ul className="list-disc list-inside space-y-2">
            <li>Furniture manufacturing and upholstery
</li>
            <li>Bedding and mattress production
</li>
            <li>Packaging material recycling
</li>
            <li>Insulation material repurposing
</li>
          </ul>
        </div>

        <h2 className="mt-10 text-xl lg:text-2xl font-semibold text-blue-600 text-left">
          <span className="text-gray-800">Key Features of Suraj Shredding Machines</span>
        </h2>
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <ul className="list-decimal list-inside space-y-2">
            <li>Processes large volumes of foam in minimal time, ensuring higher productivity.
</li>
            <li>Produces evenly sized foam particles, improving the quality of recycled products.
</li>
            <li>Heavy-duty steel construction for long-term use, even in demanding industrial environments.</li>
            <li>Simple control system for ease of use by both skilled and unskilled workers.</li>
            <li>Easy to clean and service, reducing downtime and operational costs.</li>
            <li>Optimized motor system for lower power consumption without compromising performance.</li>
          </ul>
        </div>

        <div className="mt-6 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p>
            Suraj also offers custom shredders tailored to your material type, size reduction needs, and space constraints. Reach out for consultation and sizing recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Shredding;
