import React from 'react'
import axial from '../assets/axial fans.jpg'
const Tubeaxial = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Image Carousel */}
        <div className="w-full  rounded-lg overflow-hidden">
          <div className="relative w-170  max-sm:w-[350px] ">
            <img
              src={axial} // Replace with actual image URL
              alt="Axial Air Blower"
              className="w-full object-cover"
            />
            
          </div>
        </div>

        <h1 className="mt-6 text-2xl lg:text-3xl font-bold text-blue-700 text-left">
          Heavy Duty Axial Flow Fans / Blowers & Man Coolers
        </h1>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          Industrial axial fans are designed to deliver high volumes of air at relatively low pressure. Their streamlined cylindrical housing allows for efficient airflow through the rotating blades. Our heavy-duty axial flow fans are available in the following configurations:
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          1. <strong>Flange Mounted:</strong> Axial fans can be directly bolted onto the inlet or outlet flange of a duct or pipeline.
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          2. <strong>Pedestal Mounted (Man Coolers):</strong> Commonly used on factory floors, these axial fans are mounted on adjustable stands. Our Man Coolers are designed to tilt at various angles to direct airflow as needed.
        </p>

        <h2 className="mt-10 text-xl lg:text-2xl font-semibold text-blue-600 text-left">
          Typical Industrial Applications of Axial Fans
        </h2>
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p className="mb-2">1. Air circulation in HVAC systems</p>
          <p className="mb-2">2. General industrial Shredding</p>
          <p className="mb-2">3. Kitchen exhaust systems in hotels and restaurants</p>
          <p className="mb-2">4. Factory exhaust applications</p>
          <p className="mb-2">5. Man Coolers for industrial personnel cooling</p>
          <p>6. Comfort cooling in industrial and commercial buildings</p>
        </div>

        <h2 className="mt-10 text-xl lg:text-2xl font-semibold text-blue-600 text-left">
          Features of our Axial Fans
        </h2>
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p className="mb-2">
            1. Lightweight aluminum impellers for maximum efficiency, corrosion resistance, and extended motor life
          </p>
          <p className="mb-2">
            2. Dynamically balanced rotors ensure smooth operation and reduced vibration
          </p>
          <p className="mb-2">
            3. Aerodynamic design for optimized airflow and performance
          </p>
          <p className="mb-2">
            4. Sturdy construction suitable for rugged industrial environments
          </p>
          <p className="mb-2">
            5. Standard axial fans and Man Coolers available in ready stock across India
          </p>
          <p className="mb-2">
            6. Powder-coated fan casing offering excellent aesthetics and durability
          </p>
          <p>
            7. Superior quality axial fans offered at competitive prices
          </p>
        </div>
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p className="mb-2">
            We also design and manufacture custom axial fans for special applications, such as high-temperature environments or stainless steel construction.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Tubeaxial
