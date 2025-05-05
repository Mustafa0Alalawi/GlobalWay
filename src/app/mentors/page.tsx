import Navbar from "../components/Navbar.tsx";

const MentorPage = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <main className="flex flex-col items-center">
        {/* HERO Section */}
        <section className="w-full bg-[#247e9f] text-white py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Connect with Global Mentors
          </h1>
          <p className="text-lg mb-10 max-w-2xl mx-auto">
            Schedule personalized 1-on-1 meetings with experienced mentors who
            understand your educational journey.
          </p>

          {/* Search Input */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <input
              type="text"
              placeholder="Enter mentor name"
              className="p-3 rounded-md w-80 text-black focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md">
              Find Mentors
            </button>
          </div>
        </section>

        {/* FILTERS Section */}
        <section className="w-full max-w-7xl mx-auto px-6 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* University Filter */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2">University</label>
              <select className="p-3 rounded-md border border-gray-300">
                <option>All Universities</option>
                {/* Add real options */}
              </select>
            </div>

            {/* Major Filter */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2">Major</label>
              <select className="p-3 rounded-md border border-gray-300">
                <option>All Majors</option>
                {/* Add real options */}
              </select>
            </div>

            {/* Available Date Filter */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2">Available Date</label>
              <input
                type="date"
                className="p-3 rounded-md border border-gray-300"
                defaultValue={new Date().toISOString().split("T")[0]}
              />
            </div>

            {/* Apply Filters Button */}
            <div className="flex items-end">
              <button className="bg-[#247e9f] hover:bg-[#1d6d89] text-white font-semibold px-6 py-3 rounded-md">
                Apply Filters
              </button>
            </div>
          </div>
        </section>

        {/* MENTORS Section */}
        <section className="w-full max-w-7xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Mentor Card */}
          <div className="border rounded-lg shadow-md hover:shadow-lg transition p-6 flex flex-col">
            {/* Mentor Profile */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/mentor1.jpg"
                alt="Mentor"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h2 className="font-bold text-lg">Steven Xiong</h2>
                <p className="text-gray-500 text-sm">Queens University</p>
                <p className="text-gray-500 text-sm">Business</p>
              </div>
            </div>

            {/* Availability and Interests */}
            <div className="flex flex-col gap-2 mb-6 text-gray-700">
              <div className="flex items-center gap-2">
                📅 <span>Weekdays</span>
              </div>
              <div className="flex items-center gap-2">
                ⭐ <span>Interests: Piano</span>
              </div>
            </div>

            {/* Book Button */}
            <a
              href="https://calendly.com/stevenxionghy/buddyup-mentorship-program-initial-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto block"
            >
              <button className="w-full bg-[#247e9f] text-white py-2 rounded-md font-semibold hover:bg-[#1d6d89]">
                Book Meeting
              </button>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default MentorPage;
