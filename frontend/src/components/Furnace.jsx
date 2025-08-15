import React from 'react'
import furnace from "../assets/furnace.jpg"
const Furnace = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="w-full rounded-lg overflow-hidden">
          <div className="relative w-120  max-sm:w-[300px] max-sm:h-[300px]">
            <img
              src={furnace}
              alt="Centrifugal Air Blower"
              className="w-full object-cover"
            />
          </div>
        </div>
        <h1 className="mt-6 text-2xl lg:text-3xl font-bold text-blue-700 text-left">
        Furnace Blowers / Combustion Blowers / High Pressure Blower
        </h1>

        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
        Centrifugal Air Blowers required in Furnaces for combusion purpose are generally high pressure blowers. These high pressure blowers are required for circulating combustion air (combustion blowers) and heated combustion air exhaust through furnace. Depending upon the inlet air temperature Furnace Blowers could be
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
        1. Direct Mounted Fans and Blower for Furnaces (Impeller directly mounted on motor shaft)
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
        2. Indirectly Mounted Fans and Blower for Furnaces (Impeller indirectly connected with motor shaft via. Belt drive)
        </p>
        <p className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
        High pressure blowers with inlet air temperature below 70deg. C. and direct mounting are compact in construction and runs with high speed motor. These blowers are mostly used for supplying fresh air to furnace for combustion purpose.
        </p>
        <div className="mt-4 text-gray-700 leading-relaxed max-w-3xl text-left">
          <p className="mb-2">
          Furnace blowers with inlet temperature above 100deg. C. are indirect belt drive blowers. Air blowers for Furnace/ Combustion application with inlet air temperature above 400deg. C. are manufactured from SS-304 material. furnace blowerpressure range from 500mm wg to 1500mm wg are available. Suraj Systems Furnace Blowers are heavy duty construction designed to work 24hrs for months without any maintenance.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Furnace