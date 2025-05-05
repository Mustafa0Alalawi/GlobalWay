const ContactForm = () => {
  return (
    <section className="py-20 bg-[#247e9f]">
      <div className="max-w-xl mx-auto px-6 text-center text-white">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-lg text-[#d1ecf4] mb-10">
          Have questions or need assistance? We're here to help!
        </p>

        {/* Contact Form */}
        <form className="bg-white rounded-lg shadow-lg p-8 text-left">
          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Type here..."
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#247e9f]"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              placeholder="Type here..."
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#247e9f]"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-semibold text-gray-700">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Type here..."
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#247e9f]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#247e9f] text-white py-3 rounded-md font-semibold hover:bg-[#1b6c89] transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
