import { Link } from "wouter-preact";
import HeroImage from "../assets/images/hero.jpeg";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-12 px-4 bg-white dark:bg-slate-900
                bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]  dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]
                py-12 px-4 transition transition-50 ">
      <div className="flex-1 text-center md:text-right">
        <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-800 text-slate-900 dark:text-slate-100 mb-6 leading-[1.2] md:leading-[1.3]">المدرسة الرقمية
        <span className="block pt-2 font-bold text-blue-600 dark:text-blue-400">لتنشئة أجيال زكية</span>
        </h1>
        <p className="font-body text-slate-900 text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-md mx-auto md:mx-0 leading-relaxed">منصتنا التعليمية المتكاملة توفر شرحاً واضحاً للمناهج الدراسية، ومواد تفاعلية، ومتابعة دائمة لضمان تميز طفلك أكاديمياً و سلوكياً.</p>
        <Link as="a" href="/profile" className="decoration-none bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-heading font-500 px-8 py-3 rounded-lg text-2xl transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 focus:scale-105 transition-transform duration-200 ">ابدأ رحلة التعلم الآن</Link>
      </div>
      <div className="hover:rotate-1 transition-transform duration-300">
        <img
          src={HeroImage}
          alt="صورة طلاب يتعلمون من علي الهاتف"
          className="w-full max-w-md rounded-2xl shadow-2xl border-4 border-white dark:border-slate-800 transform hover:scale-105 transition-transform duration-300" style="transform: scaleX(-1)"
        />
      </div>
    </section>
  )
}

