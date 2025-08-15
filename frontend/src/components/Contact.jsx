import React, { useState } from "react";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      const result = await response.json();
      setButtonText("Send");
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        setStatus({ success: false, message: "Something went wrong. Try again." });
      }
    } catch (error) {
      setButtonText("Send");
      setStatus({ success: false, message: "Network error. Try later." });
    }
  };

  return (
    <section id="contact" className="pt-24 pb-16 px-6 md:px-16 bg-gray-50 text-black">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="hidden md:block">
          <img
            src="https://media.istockphoto.com/id/1450058572/photo/businessman-using-a-laptop-and-touching-on-virtual-screen-contact-icons-consists-of-telephone.jpg?s=612x612&w=0&k=20&c=R5wzCGHu6ZS-8EQpJ2Z1tkSbKGGdJH4apVhFM18EXSM="
            alt="Contact Illustration"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Form */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-800">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">First Name</label>
                <input
                  type="text"
                  value={formDetails.firstName}
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Last Name</label>
                <input
                  type="text"
                  value={formDetails.lastName}
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  required
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium">Email Address</label>
              <input
                type="email"
                value={formDetails.email}
                onChange={(e) => onFormUpdate("email", e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone No.</label>
              <input
                type="tel"
                value={formDetails.phone}
                onChange={(e) => onFormUpdate("phone", e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                rows="5"
                value={formDetails.message}
                onChange={(e) => onFormUpdate("message", e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                {buttonText}
              </button>
            </div>
            {status.message && (
              <p className={`mt-2 text-sm ${status.success ? "text-green-600" : "text-red-600"}`}>
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
