const SubscriptionPlans = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 text-gray-800">
          Subscription Plans
        </h2>
        <p className="text-lg text-gray-500 mb-12">
          Choose the plan that's right for your educational journey.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Free</h3>
              <p className="text-4xl font-bold text-[#247e9f] mb-6">$0</p>
              <ul className="space-y-4 mb-6">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <button className="border border-[#247e9f] text-[#247e9f] hover:bg-[#247e9f] hover:text-white font-semibold py-3 px-6 rounded-lg transition">
              Get Started
            </button>
          </div>

          {/* Standard Plan (Most Popular) */}
          <div className="border-2 border-[#247e9f] rounded-lg p-8 hover:shadow-lg transition flex flex-col justify-between relative">
            <div className="absolute top-0 left-0 right-0">
              <div className="bg-[#247e9f] text-white text-xs font-semibold py-1 rounded-t-md">
                Most Popular
              </div>
            </div>
            <div className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">Standard</h3>
              <p className="text-4xl font-bold text-[#247e9f] mb-6">
                $60
                <span className="text-lg font-normal text-gray-600">
                  /month
                </span>
              </p>
              <ul className="space-y-4 mb-6">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <button className="bg-[#247e9f] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#1b6c89] transition">
              Subscribe Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="border rounded-lg p-8 hover:shadow-lg transition flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Premium</h3>
              <p className="text-4xl font-bold text-[#247e9f] mb-6">
                $150
                <span className="text-lg font-normal text-gray-600">
                  /month
                </span>
              </p>
              <ul className="space-y-4 mb-6">
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <button className="border border-[#247e9f] text-[#247e9f] hover:bg-[#247e9f] hover:text-white font-semibold py-3 px-6 rounded-lg transition">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
