import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[#e8f3f3] text-sm">
      {/* TOP */}
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        {/* LEFT */}
        <div className="flex flex-col gap-6 max-w-md">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <Image
              src="/GW.png"
              alt="GlobalWay"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold text-[#247e9f]">GlobalWay</span>
          </div>

          {/* Description */}
          <p className="text-gray-600">
            Bridging cultural gaps and providing professional guidance to
            international students worldwide.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mt-4">
            <Link href="#">
              <Image src="/x.png" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="#">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image src="/wechat.svg" alt="WeChat" width={24} height={24} />
            </Link>
          </div>
        </div>

        {/* MIDDLE */}
        <div className="flex flex-col sm:flex-row gap-12">
          {/* Platform Links */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-lg mb-2">Platform</h1>
            <Link href="#" className="text-gray-600 hover:text-[#247e9f]">
              Find a Mentor
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#247e9f]">
              Video Courses
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#247e9f]">
              University Resources
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#247e9f]">
              Blog
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#247e9f]">
              AI
            </Link>
          </div>

          {/* Information Links */}
          <div className="flex flex-col gap-4">
            <h1 className="font-bold text-lg mb-2">Information</h1>
            <Link href="#" className="text-gray-600 hover:text-[#247e9f]">
              About Us
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#247e9f]">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#247e9f]">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-[#247e9f]">
              Contact Us
            </Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-6 max-w-sm">
          <h1 className="font-bold text-lg mb-2">Stay Updated</h1>
          <p className="text-gray-600">
            Subscribe to our newsletter for the latest resources and events.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="p-3 rounded-l-md border border-gray-300 w-full focus:outline-none"
            />
            <button className="bg-[#247e9f] text-white px-6 py-3 rounded-r-md hover:bg-[#1b6c89]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 gap-6">
        {/* COPYRIGHT */}
        <div className="text-gray-500">
          © 2025 GlobalWay. All rights reserved.
        </div>

        {/* Language Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Language:</span>
          <select className="border border-gray-300 rounded-md p-2">
            <option>English</option>
            <option>Chinese</option>
            <option>Spanish</option>
          </select>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
