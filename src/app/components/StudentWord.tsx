const StudentWord = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          What Our Students Say
        </h2>
        <p className="text-lg text-gray-500 mb-12">
          Hear from international students who have found success with
          GlobalWay's mentorship and resources.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
            <p className="text-gray-700 mb-6">
              The academic guidance has been phenomenal!
            </p>
            <div className="flex flex-col items-center">
              <img
                src="sophia.PNG"
                alt="Sophia Martinez"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">Sophia Martinez</h3>
                <p className="text-sm text-gray-500">Mentored by</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
            <p className="text-gray-700 mb-6">
              The mentorship experience has truly been life-changing.
            </p>
            <div className="flex flex-col items-center">
              <img
                src="lin.PNG"
                alt="Isabella Lin"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">Isabella Lin</h3>
                <p className="text-sm text-gray-500">Mentored by</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg p-6 shadow hover:shadow-lg transition">
            <p className="text-gray-700 mb-6">
              Received amazing career advice personalized to my needs.
            </p>
            <div className="flex flex-col items-center">
              <img
                src="Tran.PNG"
                alt="Jackson Tran"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <div className="text-center">
                <h3 className="font-semibold text-gray-900">Jackson Tran</h3>
                <p className="text-sm text-gray-500">Mentored by</p>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-12">
          <button className="border border-[#247e9f] text-[#247e9f] hover:bg-[#247e9f] hover:text-white font-semibold py-3 px-8 rounded-lg transition">
            View More Testimonials
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentWord;
