import React from 'react';
import { Link } from 'react-router-dom';

const Footers = () => {
    return (
        <footer className="bg-[#0c0c0c] text-white pt-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold text-blue-500">Suraj Enterprises</h2>
                    <p className="mt-3 text-sm text-gray-300">
                        Founded in 1990, <span className="font-semibold">Suraj Enterprises</span> has been a trusted name in the manufacturing of high-performance industrial blowers and furnace equipment for over three decades. Built on a legacy of quality craftsmanship and customer-centric service, we cater to a wide range of industries with reliable, efficient, and durable solutions.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link to="/#aboutus" className="hover:text-blue-400">About Us</Link></li>
                        <li><Link to="/#contact" className="hover:text-blue-400">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Product Links */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Product List</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                        <li><Link to="/centrifugal" className="hover:text-blue-400">Centrifugal Blowers</Link></li>
                        <li><Link to="/tubeaxialfans" className="hover:text-blue-400">Axial Fans</Link></li>
                        <li><Link to="/inducedandforceddraft" className="hover:text-blue-400">Induced and Forced Draft Fans</Link></li>
                        <li><Link to="/furnace" className="hover:text-blue-400">Furnace Blowers</Link></li>
                        <li><Link to="/dustcollection" className="hover:text-blue-400">Dust Collector</Link></li>
                        <li><Link to="/Shredding" className="hover:text-blue-400">Shredding Machines</Link></li>
                        <li><Link to="/heatpumping" className="hover:text-blue-400">Heat Pumping Unit</Link></li>
                        <li><Link to="/oiloutflow" className="hover:text-blue-400">Oil Outflow Heater</Link></li>
                        <li><Link to="/impeller" className="hover:text-blue-400">Impeller</Link></li>
                    </ul>
                </div>

                {/* Contact Info & Map */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Location</h3>
                    <div className="w-full h-40 mb-4">
                    <iframe
    title="Map"
    className="w-full h-full rounded-md"
    src="https://www.google.com/maps?q=28.7505378723145,77.1433944702148&z=15&output=embed"
    loading="lazy"
/>

                    </div>
                    <h3 className="font-semibold text-white mb-1">Factory Address</h3>
                    <p className="text-sm text-gray-300 mb-3">
                        B-195, Plot Pyarelal, Libaspur,<br />
                        Samaypur Badli, Delhi-110042
                    </p>

                    <h3 className="font-semibold text-white mb-1">Contact Number</h3>
                    <p className="text-sm text-blue-400 mb-3">+91 9811796630, +91 9811226307</p>

                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-sm">
                        <a href="mailto:info.surajenterprises23@gmail.com" className="hover:text-blue-400">
                            info.surajenterprises23@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-10 py-4 px-6 flex flex-col md:flex-row items-center justify-between text-sm bg-[#0c0c0c] text-gray-400">
                <p>© 2025 <span className="text-blue-400">Suraj Enterprises Pvt. Ltd.</span> All Rights Reserved.</p>
                <div className="flex space-x-4 mt-3 md:mt-0">
                    
                </div>
            </div>
        </footer>
    );
};

export default Footers;
