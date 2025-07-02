const SupportSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-12 text-gray-800">
          How GlobalWay Supports Your Journey
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition">
            <div className="flex justify-center mb-6">
              <div className="bg-[#247e9f] p-4 rounded-full">
                <span className="text-white text-3xl">👤</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">
              1-on-1 Mentor Meetings
            </h3>
            <p className="text-gray-600 mb-4">
              Connect directly with experienced mentors who understand your
              unique challenges.
            </p>
            <a
              href="#"
              className="text-[#247e9f] font-semibold hover:underline"
            >
              Book a Meeting
            </a>
          </div>

          {/* Card 2 */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition">
            <div className="flex justify-center mb-6">
              <div className="bg-[#247e9f] p-4 rounded-full">
                <span className="text-white text-3xl">🎥</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Video Course Library</h3>
            <p className="text-gray-600 mb-4">
              Access our extensive library of educational videos tailored for
              international students.
            </p>
            <a
              href="#"
              className="text-[#247e9f] font-semibold hover:underline"
            >
              Browse Courses
            </a>
          </div>

          {/* Card 3 */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition">
            <div className="flex justify-center mb-6">
              <div className="bg-[#247e9f] p-4 rounded-full">
                <span className="text-white text-3xl">🏛️</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">University Resources</h3>
            <p className="text-gray-600 mb-4">
              Discover personalized guides and resources for your academic
              journey.
            </p>
            <a
              href="#"
              className="text-[#247e9f] font-semibold hover:underline"
            >
              View Resources
            </a>
          </div>

          {/* Card 4 */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition">
            <div className="flex justify-center mb-6">
              <div className="bg-[#247e9f] p-4 rounded-full">
                <span className="text-white text-3xl">✏️</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Curated Blog Posts</h3>
            <p className="text-gray-600 mb-4">
              Stay informed with articles and interviews relevant to
              international student life.
            </p>
            <a
              href="#"
              className="text-[#247e9f] font-semibold hover:underline"
            >
              Read Blog
            </a>
          </div>

          {/* Card 5 */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition">
            <div className="flex justify-center mb-6">
              <div className="bg-[#247e9f] p-4 rounded-full">
                <span className="text-white text-3xl">👑</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Subscription Plans</h3>
            <p className="text-gray-600 mb-4">
              Choose from various subscription options to unlock premium content
              and features.
            </p>
            <a
              href="#"
              className="text-[#247e9f] font-semibold hover:underline"
            >
              View Plans
            </a>
          </div>

          {/* Card 6 */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition">
            <div className="flex justify-center mb-6">
              <div className="bg-[#247e9f] p-4 rounded-full">
                <span className="text-white text-3xl">💻</span>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-4">Become a Mentor</h3>
            <p className="text-gray-600 mb-4">
              Share your experience and guide international students on their
              educational journey.
            </p>
            <a
              href="#"
              className="text-[#247e9f] font-semibold hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
