import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const WhyChooseUs = () => {
  const [ref, inView] = useInView({ triggerOnce: false });

  return (
    <div className="bg-white py-16 px-4" ref={ref}>
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-12">
          Here’s Why You Should Choose <br className="hidden sm:block" /> Suraj Enterprises
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          <div>
            <p className="text-4xl font-bold text-gray-900">
              {inView && <CountUp end={30} duration={2} />}+
            </p>
            <p className="mt-2 text-gray-600">Years of Industry Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900">
              {inView && <CountUp end={92} duration={2} />}%
            </p>
            <p className="mt-2 text-gray-600">Repeat Client Rate</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900">
              {inView && <CountUp end={25} duration={2} />}+
            </p>
            <p className="mt-2 text-gray-600">Cities Served in India</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-gray-900">
              {inView && <CountUp end={15000} duration={3} separator="," />}+
            </p>
            <p className="mt-2 text-gray-600">Blowers Installed</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
