import { Link } from "wouter-preact";
import DarkToggle from "./DarkToggle.jsx";

export default function NavBar() {
  const openSidebar = useState(false);

  return (
    <>
      <header className="flex items-center justify-between w-full bg-white dark:bg-slate-900 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] border-b border-slate-200 dark:border-slate-700 fixed top-0 z-50 px-4 py-3 lg:px-8 lg:py-4">

  {/* Logo - Always visible */}
  <div className="flex items-center gap-3 flex-shrink-0">
    <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-md">
      <span className="text-white font-heading font-800 text-sm md:text-lg">م</span>
    </div>
    <h1 className="font-heading text-lg md:text-xl lg:text-2xl font-800 text-slate-900 dark:text-white whitespace-nowrap">
      المدرسة الرقمية
    </h1>
  </div>

  {/* Navigation */}
  <nav className="flex items-center gap-4 lg:gap-6">

    {/* Mobile Menu Button - Shows on small screens */}
    <button className="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    </button>

    {/* Desktop Navigation - Shows on medium+ screens */}
    <ul className="hidden md:flex list-none items-center gap-4 lg:gap-6 xl:gap-8 mr-4 lg:mr-8">
      <li>
        <Link href="/" as="a" className="font-body text-sm lg:text-base text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-500 py-2 px-1 whitespace-nowrap">
          رئيسية
        </Link>
      </li>
      <li>
        <Link href="/dashboard" as="a" className="font-body text-sm lg:text-base text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-500 py-2 px-1 whitespace-nowrap">
          لوحة التحكم
        </Link>
      </li>
      <li>
        <Link href="/leaderboard" as="a" className="font-body text-sm lg:text-base text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-500 py-2 px-1 whitespace-nowrap">
          لوحة الصدارة
        </Link>
      </li>
      <li>
        <Link href="/subjects" as="a" className="font-body text-sm lg:text-base text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-500 py-2 px-1 whitespace-nowrap">
          المناهج الدراسية
        </Link>
      </li>
      <li>
        <Link href="/exams" as="a" className="font-body text-sm lg:text-base text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-500 py-2 px-1 whitespace-nowrap">
          الإختبارات
        </Link>
      </li>
    </ul>

    {/* Right Side Icons */}
    <div className="flex items-center gap-2 md:gap-4 lg:gap-6">

      {/* Dark Mode Toggle */}
      <div className="flex-shrink-0">
        <DarkToggle />
      </div>

      {/* Profile Icon */}
      <Link href="/profile" as="a" className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </Link>
    </div>
  </nav>
</header>

<div className="fixed hidden inset-0 bg-black bg-opacity-50 z-40 md:hidden">
  <div className="fixed top-16 right-0 w-64 h-full bg-white dark:bg-slate-900 shadow-2xl p-6 transform transition-transform">
    <ul className="flex flex-col gap-4 list-none">
      <li>
        <Link href="/" as="a" className="font-body text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-500 py-3 block text-lg border-b border-slate-100 dark:border-slate-800">
          رئيسية
        </Link>
      </li>
      <li>
        <Link href="/dashboard" as="a" className="font-body text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-500 py-3 block text-lg border-b border-slate-100 dark:border-slate-800">
          لوحة التحكم
        </Link>
      </li>
      <li>
        <Link href="/leaderboard" as="a" className="font-body text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-500 py-3 block text-lg border-b border-slate-100 dark:border-slate-800">
          لوحة الصدارة
        </Link>
      </li>
      <li>
        <Link href="/subjects" as="a" className="font-body text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-500 py-3 block text-lg border-b border-slate-100 dark:border-slate-800">
          المناهج الدراسية
        </Link>
      </li>
      <li>
        <Link href="/exams" as="a" className="font-body text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-500 py-3 block text-lg">
          الإختبارات
        </Link>
      </li>
    </ul>
  </div>
</div>
  </>
  );
}
