import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/*MOBILE*/}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-xl tracking-wide"></div>
        </Link>
      </div>
      {/*BIGGER SCREEN*/}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* LEFT */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12"></div>
        {/* RIGHT */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <Link href="/">Home</Link>
          <Link href="/mentors">Mentors</Link>
          <Link href="/contact">Courses</Link>
          <Link href="/contact">Resources</Link>
          <Link href="/contact">Blog</Link>
          <Link href="/contact">Profile</Link>
          <div className="px-6 py-2 text-black bg-[#60a5fa] rounded-full font-medium shadow-md hover:bg-gray-100 transition">
            <Link href="/contact">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
