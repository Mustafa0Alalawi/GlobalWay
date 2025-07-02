import Link from "next/link";

const Navbar = () => {
  return (
    // Added border-b and border-gray-200 for a bottom border
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative border-b border-gray-200">
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
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-4">
          <Link href="/">Home</Link>
          <Link href="/mentors">Mentor</Link>
          <Link href="/mentee">Mentee</Link>
          <Link href="/university">University</Link>
          <Link href="/courses">Course</Link>
          <Link href="/resources">Resource</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/volunteer">Volunteer</Link>
          <div className="px-3 py-2 text-black bg-[#60a5fa] rounded-full font-medium shadow-md hover:bg-gray-100 transition whitespace-nowrap">
            <Link href="/apply/scholar">Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
