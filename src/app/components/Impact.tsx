const ImpactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-center">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-6 leading-tight">
          Bridging Cultural Gaps for International Students
        </h2>

        {/* Subheading */}
        <p className="text-lg mb-10">
          Connect with experienced mentors, access tailored resources, and
          navigate your educational journey with confidence.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-14 flex-wrap">
          <button className="bg-white text-teal-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition">
            Find a Mentor
          </button>
          <button className="bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-400 transition">
            Explore Courses
          </button>
        </div>

        {/* Statistics */}
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white text-teal-700 px-8 py-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold mb-2">50+</h3>
            <p className="text-gray-600">Expert Mentors</p>
          </div>
          <div className="bg-white text-teal-700 px-8 py-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold mb-2">10+</h3>
            <p className="text-gray-600">Students Helped</p>
          </div>
          <div className="bg-white text-teal-700 px-8 py-6 rounded-lg shadow-md">
            <h3 className="text-3xl font-bold mb-2">20+</h3>
            <p className="text-gray-600">Countries</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
