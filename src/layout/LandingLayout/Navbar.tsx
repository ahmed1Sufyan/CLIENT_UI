import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="border-b-[1px] border-gray-800 fixed inset-x-0 top-0 z-50 backdrop-blur-md shadow-sm  dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <div className="flex items-center">
            <MountainIcon className="text-gray-300 h-6 w-6" />
            <span className="ml-3 text-gray-300">RECRUIT IN</span>
          </div>
          <nav className="hidden md:flex gap-4 text-gray-300 font-sans">
            <div className="font-medium flex items-center text-sm transition-colors hover:underline">
              Home
            </div>
            <div className="font-medium flex items-center text-sm transition-colors hover:underline">
              About
            </div>
            <div className="font-medium flex items-center text-sm transition-colors hover:underline">
              Services
            </div>
            <div className="font-medium flex items-center text-sm transition-colors hover:underline">
              Contact
            </div>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="border-[1px] text-white border-white"
              size="sm"
            >
              Sign in
            </Button>
            <Button variant={"outline"} className="bg-white text-black">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
