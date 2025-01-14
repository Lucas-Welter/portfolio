import React from "react";

const EmailSection: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2 py-24 gap-4 relative bg-gradient-to-r from-gray-800 via-gray-900 to-black px-8">
      <div className="z-10">
        <h5  id="contact-section" className="text-2xl font-bold text-yellow-400 mb-4">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-6 max-w-md">
          I'm currently looking for new opportunities, and my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
      </div>
      <div>
        <form>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-yellow-400"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-800 border border-gray-600 placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-3 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="jacob@google.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-yellow-400"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-gray-800 border border-gray-600 placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-3 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-yellow-400"
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-gray-800 border border-gray-600 placeholder-[#9CA2A9] text-gray-200 text-sm rounded-lg block w-full p-3 focus:ring-yellow-500 focus:border-yellow-500"
              placeholder="Let's talk about..."
              rows={4}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-5 rounded-lg w-full transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
