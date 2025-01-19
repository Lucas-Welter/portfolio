import React from "react";

const EmailSection: React.FC = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-gradient-to-b from-gradient-bg via-secondary-bg to-gradient-bg">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div>
          <h5
            id="contact-section"
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
          >
            Let's Connect
          </h5>
          <p className="text-secondary-text text-lg leading-relaxed mt-6">
            I'm currently looking for new opportunities, and my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
        </div>

        {/* Form */}
        <div className="bg-card-bg shadow-lg rounded-lg p-10 border border-border">
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-semibold text-primary"
              >
                Your Email <span className="text-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="bg-background border border-border placeholder-secondary-text text-text text-base rounded-lg block w-full p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:shadow-sm"
                placeholder="jacob@google.com"
                required
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-semibold text-primary"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="bg-background border border-border placeholder-secondary-text text-text text-base rounded-lg block w-full p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:shadow-sm"
                placeholder="Just saying hi"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-semibold text-primary"
              >
                Message
              </label>
              <textarea
                id="message"
                className="bg-background border border-border placeholder-secondary-text text-text text-base rounded-lg block w-full p-4 focus:ring-2 focus:ring-primary focus:border-primary transition-all hover:shadow-sm"
                placeholder="Let's talk about..."
                rows={5}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-button-text font-semibold py-3 px-6 rounded-lg w-full hover:shadow-lg active:scale-95 transition-transform duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
