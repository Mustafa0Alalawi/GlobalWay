const Testimonials = () => {
  return (
    <>
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Hear what other <span className="text-blue-400">mentees</span> have
            to say
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Accompany you on your university journey
          </p>

          {/* Testimonial Video */}
          <div className="w-full flex justify-center">
            <video
              controls
              className="rounded-lg w-full md:w-2/3 lg:w-1/2 shadow-md"
            >
              <source src="/Mentors.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* GlobalWay's Mission Section */}
      <section
        className="py-24 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/everyone.png')" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>

        {/* Content on top */}
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">GlobalWay's Mission</h3>
          <p className="text-lg mb-8">
            Help Chinese international students (Gr10,11,12, freshman,
            sophomore) to better:
          </p>

          <ul className="list-disc list-inside space-y-2 text-left mx-auto max-w-md">
            <li>Search and understand universities</li>
            <li>Prepare for university applications</li>
            <li>
              Adapt to local university life (academics, socializing, career
              development, clubs, university resources)
            </li>
          </ul>

          {/* University Logos */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            <a href="university/queens">
              <img src="/logo1.JPG" alt="University Logo" className="h-16" />
            </a>
            <img src="/logo2.png" alt="University Logo" className="h-16" />
            <img src="/logo3.png" alt="University Logo" className="h-16" />
            <img src="/logo4.png" alt="University Logo" className="h-16" />
            <img src="/logo5.png" alt="University aLogo" className="h-16" />
            <img src="/logo6.png" alt="University Logo" className="h-16" />
            <img src="/logo7.png" alt="University Logo" className="h-16" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
