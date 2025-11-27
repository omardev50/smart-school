import { Link } from "wouter-preact";
import DarkToggle from "./DarkToggle.jsx";

export default function NavBar() {
  return (
    <header class="flex justify-between">
      <h1 class="font-heading font-bold">المدرسة الرقمية</h1>
      <nav>
        <ul>
          <li><Link href="/" as="a">رئيسية</Link></li>
          <li><Link href="/dashboard" as="a">لوحة التحكم</Link></li>
          <li><Link href="/leaderboard" as="a">لوحة الصدارة</Link></li>
          <li><Link href="/subjects" as="a">المناهج الدراسية</Link></li>
          <li><Link href="/exams" as="a">الإختبارات</Link></li>
        </ul>
      </nav>

      <div>
        <DarkToggle />
      </div>

      <Link href="/profile" as="a">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      </Link>
    </header>
  );
}
