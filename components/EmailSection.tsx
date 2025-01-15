import React from "react";

const EmailSection: React.FC = () => {
  return (
    <section className="grid md:grid-cols-2 py-24 gap-4 relative bg-gradient-to-r from-secondary via-background to-secondary px-8">
      <div className="z-10">
        <h5 id="contact-section" className="text-2xl font-bold text-primary mb-4">
          Let's Connect
        </h5>
        <p className="text-secondary mb-6 max-w-md">
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
              className="block mb-2 text-sm font-medium text-primary"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-background border border-secondary placeholder-secondary text-text text-sm rounded-lg block w-full p-3 focus:ring-primary focus:border-primary"
              placeholder="jacob@google.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-primary"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="bg-background border border-secondary placeholder-secondary text-text text-sm rounded-lg block w-full p-3 focus:ring-primary focus:border-primary"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-primary"
            >
              Message
            </label>
            <textarea
              id="message"
              className="bg-background border border-secondary placeholder-secondary text-text text-sm rounded-lg block w-full p-3 focus:ring-primary focus:border-primary"
              placeholder="Let's talk about..."
              rows={4}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary-dark hover:to-purple-600 text-text font-semibold py-3 px-5 rounded-lg w-full transition duration-300"
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
