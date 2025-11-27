import { Link } from "wouter-preact";
import DarkToggle from "./DarkToggle.jsx";

export default function NavBar() {
  return (
    <header>
      <h1>المدرسة الرقمية</h1>
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
    </header>
  );
}
