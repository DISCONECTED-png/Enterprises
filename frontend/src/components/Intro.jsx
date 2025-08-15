import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ban1 from "../assets/ban1.jpg"
const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="intro text-center px-6 py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800">
          Welcome to Suraj Enterprises
        </h1>
        <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Suraj Enterprises, based in Delhi, is a leading manufacturer of industrial air blowers in India.
          Known for trust, performance, and innovation, we deliver energy-efficient and high-performance blowers built for demanding industrial environments.
        </p>
      </div>

      {/* About Section */}
      <section id="aboutus" style={{ paddingTop: '100px', marginTop: '-100px' }}>
        <div className="flex justify-center items-center px-6 py-12">
          <div
            className="flex flex-col lg:flex-row max-w-6xl w-full bg-white shadow-xl rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <div className="w-full lg:w-1/2">
              <img
                src={ban1}
                alt="Industrial Air Blower"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full lg:w-1/2 p-8 space-y-6">
              <h2 className="text-3xl font-semibold text-blue-700">
                Trusted Industrial Air Blower Manufacturer in Delhi
              </h2>
              <p className="text-base leading-relaxed">
                Established in 1990 by Mr. P.L. Sharma, our company has been a trusted name in the manufacturing of industrial blowers and furnace equipment for over three decades. With a strong focus on quality, durability, and performance, we serve a wide range of industries across India with dependable and cost-effective solutions.

              </p>
              <p className="text-base leading-relaxed">

                Backed by deep technical expertise and a commitment to continuous improvement, we strive to deliver precision-engineered products that meet the highest standards of efficiency, reliability, and customer satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
