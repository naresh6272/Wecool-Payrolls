import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";
import {
  FileSpreadsheet, Wallet, CalendarCheck, FileText,
  Users, ShieldCheck, BarChart3, Clock, CheckCircle
} from "lucide-react";

export default async function RootPage() {
  const session = await getSession();
  if (session) {
    if (session.role === "HR") redirect("/hr/dashboard");
    redirect("/employee/dashboard");
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">

      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 relative">
              <Image src="/wecool-logo.png" alt="Wecool Logo" fill className="object-contain" sizes="40px" quality={100} />
            </div>
            <div>
              <p className="text-gray-900 font-extrabold text-lg leading-none">Wecool</p>
              <p className="text-orange-500 text-[10px] font-bold tracking-widest uppercase">Payroll System</p>
            </div>
          </div>
          <Link href="/login"
            className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-xl transition-all shadow-md shadow-orange-200">
            Login →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-orange-50 via-white to-green-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 text-xs font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              Smart Payroll Management
            </div>
            <h1 className="text-5xl sm:text-6xl font-black text-gray-900 mb-4 leading-tight">
              Payroll made<br />
              <span className="text-orange-500">simple</span> &{" "}
              <span className="text-green-600">accurate</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 max-w-lg leading-relaxed">
              Wecool Payroll automates your entire payroll workflow — from attendance to payslips — with zero errors and full transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link href="/login"
                className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl text-base transition-all shadow-lg shadow-orange-200 hover:scale-105">
                Get Started →
              </Link>
              <div className="flex items-center gap-2 px-6 py-3.5 bg-white border border-gray-200 rounded-2xl text-sm text-gray-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                Secure & Role-based
              </div>
            </div>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start">
              {[
                { label: "Attendance Upload", color: "text-orange-500" },
                { label: "Auto Payslips", color: "text-green-600" },
                { label: "Leave Tracking", color: "text-red-500" },
              ].map(s => (
                <div key={s.label} className="flex items-center gap-2">
                  <CheckCircle className={`w-4 h-4 ${s.color}`} />
                  <span className="text-sm text-gray-600 font-medium">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side illustration */}
          <div className="flex-shrink-0 relative w-full max-w-lg">
            {/* Logo */}
            <div className="w-72 h-44 relative mx-auto">
              <Image src="/wecool-logo.png" alt="Wecool" fill className="object-contain" sizes="288px" quality={100} />
            </div>
            <p className="text-center mt-1 text-xl font-black text-gray-900">Wecool</p>
            <p className="text-center text-xs font-bold text-orange-500 tracking-widest uppercase mb-6">Payroll System</p>

            {/* SVG Illustration */}
            <svg viewBox="0 0 480 220" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">

              {/* Decorative background circles */}
              <circle cx="60" cy="180" r="50" stroke="#fed7aa" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6"/>
              <circle cx="420" cy="40" r="35" stroke="#bbf7d0" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6"/>
              <circle cx="240" cy="110" r="80" stroke="#fde68a" strokeWidth="1" strokeDasharray="8 6" opacity="0.3"/>

              {/* ── Person A: sitting at laptop (left) ── */}
              {/* Chair back */}
              <rect x="52" y="130" width="5" height="55" rx="2.5" fill="#cbd5e1"/>
              <rect x="38" y="128" width="32" height="5" rx="2.5" fill="#cbd5e1"/>
              {/* Head */}
              <circle cx="80" cy="90" r="18" fill="#fde68a" stroke="#f97316" strokeWidth="2"/>
              {/* Hair */}
              <path d="M62 88 Q63 72 80 70 Q97 72 98 88" fill="#1e3a5f" stroke="none"/>
              {/* Eyes */}
              <circle cx="73" cy="90" r="2.5" fill="#1e3a5f"/>
              <circle cx="87" cy="90" r="2.5" fill="#1e3a5f"/>
              {/* Smile */}
              <path d="M74 97 Q80 102 86 97" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              {/* Body */}
              <path d="M62 108 Q80 118 98 108 L100 155 L60 155 Z" fill="#3b82f6" stroke="#1e3a5f" strokeWidth="1.5"/>
              {/* Collar */}
              <path d="M74 108 L80 120 L86 108" stroke="white" strokeWidth="1.5" fill="none"/>
              {/* Left arm to desk */}
              <path d="M62 120 L30 145 L30 150" stroke="#fde68a" strokeWidth="8" strokeLinecap="round" fill="none"/>
              {/* Right arm to desk */}
              <path d="M98 120 L130 145 L130 150" stroke="#fde68a" strokeWidth="8" strokeLinecap="round" fill="none"/>
              {/* Desk */}
              <rect x="18" y="150" width="145" height="8" rx="4" fill="#94a3b8"/>
              <rect x="22" y="158" width="5" height="30" rx="2" fill="#94a3b8"/>
              <rect x="136" y="158" width="5" height="30" rx="2" fill="#94a3b8"/>
              {/* Laptop base */}
              <rect x="50" y="135" width="60" height="16" rx="3" fill="#1e293b"/>
              {/* Laptop screen */}
              <rect x="48" y="105" width="64" height="32" rx="4" fill="#1e293b"/>
              <rect x="51" y="108" width="58" height="26" rx="2" fill="#0ea5e9"/>
              {/* Screen content lines */}
              <rect x="54" y="112" width="30" height="3" rx="1.5" fill="white" opacity="0.7"/>
              <rect x="54" y="118" width="20" height="2" rx="1" fill="white" opacity="0.5"/>
              <rect x="54" y="123" width="25" height="2" rx="1" fill="white" opacity="0.5"/>
              {/* Salary badge on screen */}
              <rect x="86" y="111" width="20" height="8" rx="2" fill="#f97316"/>
              <text x="88" y="118" fontSize="4.5" fill="white" fontWeight="bold">₹PAY</text>
              {/* Legs */}
              <rect x="65" y="155" width="10" height="30" rx="3" fill="#1e3a5f"/>
              <rect x="83" y="155" width="10" height="30" rx="3" fill="#1e3a5f"/>
              {/* Shoes */}
              <ellipse cx="70" cy="186" rx="10" ry="5" fill="#0f172a"/>
              <ellipse cx="88" cy="186" rx="10" ry="5" fill="#0f172a"/>

              {/* ── Person B: standing with clipboard (right) ── */}
              {/* Head */}
              <circle cx="370" cy="75" r="20" fill="#fde68a" stroke="#f97316" strokeWidth="2"/>
              {/* Hair */}
              <path d="M350 73 Q352 55 370 53 Q388 55 390 73" fill="#7c3aed" stroke="none"/>
              {/* Eyes */}
              <circle cx="363" cy="75" r="2.5" fill="#1e3a5f"/>
              <circle cx="377" cy="75" r="2.5" fill="#1e3a5f"/>
              {/* Smile */}
              <path d="M364 83 Q370 88 376 83" stroke="#f97316" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              {/* Body */}
              <path d="M350 95 Q370 106 390 95 L393 160 L347 160 Z" fill="#16a34a" stroke="#14532d" strokeWidth="1.5"/>
              {/* Collar */}
              <path d="M364 95 L370 108 L376 95" stroke="white" strokeWidth="1.5" fill="none"/>
              {/* Right arm holding clipboard */}
              <path d="M390 110 L415 120" stroke="#fde68a" strokeWidth="8" strokeLinecap="round"/>
              {/* Left arm down */}
              <path d="M350 110 L335 140" stroke="#fde68a" strokeWidth="8" strokeLinecap="round"/>
              {/* Clipboard */}
              <rect x="408" y="108" width="36" height="46" rx="3" fill="white" stroke="#94a3b8" strokeWidth="1.5"/>
              <rect x="420" y="105" width="12" height="7" rx="2" fill="#94a3b8"/>
              <rect x="412" y="120" width="28" height="2.5" rx="1" fill="#f97316"/>
              <rect x="412" y="126" width="22" height="2" rx="1" fill="#e2e8f0"/>
              <rect x="412" y="131" width="25" height="2" rx="1" fill="#e2e8f0"/>
              <rect x="412" y="136" width="18" height="2" rx="1" fill="#e2e8f0"/>
              <rect x="412" y="141" width="28" height="2" rx="1" fill="#16a34a"/>
              <rect x="412" y="146" width="20" height="2" rx="1" fill="#e2e8f0"/>
              {/* Legs */}
              <rect x="355" y="160" width="12" height="35" rx="3" fill="#1e3a5f"/>
              <rect x="373" y="160" width="12" height="35" rx="3" fill="#1e3a5f"/>
              {/* Shoes */}
              <ellipse cx="361" cy="196" rx="12" ry="5" fill="#0f172a"/>
              <ellipse cx="379" cy="196" rx="12" ry="5" fill="#0f172a"/>

              {/* ── Floating cards ── */}
              {/* Card 1: Net Pay */}
              <rect x="155" y="20" width="105" height="52" rx="10" fill="white" stroke="#fed7aa" strokeWidth="1.5" filter="url(#shadow)"/>
              <rect x="155" y="20" width="105" height="14" rx="10" fill="#f97316"/>
              <rect x="155" y="27" width="105" height="7" rx="0" fill="#f97316"/>
              <text x="163" y="31" fontSize="6" fill="white" fontWeight="bold">NET PAY</text>
              <text x="163" y="46" fontSize="13" fill="#1e293b" fontWeight="bold">₹61,299</text>
              <text x="163" y="57" fontSize="5.5" fill="#94a3b8">May 2026 · Approved</text>
              <circle cx="244" cy="57" r="4" fill="#16a34a"/>
              <path d="M242 57 L244 59 L247 54" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none"/>

              {/* Card 2: Attendance */}
              <rect x="270" y="148" width="98" height="56" rx="10" fill="white" stroke="#bbf7d0" strokeWidth="1.5"/>
              <rect x="270" y="148" width="98" height="14" rx="10" fill="#16a34a"/>
              <rect x="270" y="155" width="98" height="7" rx="0" fill="#16a34a"/>
              <text x="278" y="160" fontSize="6" fill="white" fontWeight="bold">ATTENDANCE</text>
              <text x="278" y="175" fontSize="9" fill="#1e293b" fontWeight="bold">21 Present</text>
              <text x="278" y="185" fontSize="5.5" fill="#94a3b8">4 W/Off · 0 LOP</text>
              <rect x="278" y="190" width="60" height="4" rx="2" fill="#e2e8f0"/>
              <rect x="278" y="190" width="51" height="4" rx="2" fill="#16a34a"/>

              {/* Card 3: Leave */}
              <rect x="168" y="155" width="90" height="50" rx="10" fill="white" stroke="#fecaca" strokeWidth="1.5"/>
              <rect x="168" y="155" width="90" height="14" rx="10" fill="#ef4444"/>
              <rect x="168" y="162" width="90" height="7" rx="0" fill="#ef4444"/>
              <text x="176" y="167" fontSize="6" fill="white" fontWeight="bold">LEAVE BAL</text>
              <text x="176" y="182" fontSize="11" fill="#1e293b" fontWeight="bold">1.52 days</text>
              <text x="176" y="195" fontSize="5.5" fill="#94a3b8">of 7.52 allocated</text>

              {/* Dotted connecting lines */}
              <line x1="207" y1="72" x2="207" y2="155" stroke="#f97316" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>
              <line x1="213" y1="72" x2="320" y2="155" stroke="#16a34a" strokeWidth="1" strokeDasharray="4 3" opacity="0.4"/>

              {/* Small floating dots decoration */}
              <circle cx="140" cy="50" r="4" fill="#fed7aa"/>
              <circle cx="128" cy="70" r="3" fill="#bbf7d0"/>
              <circle cx="148" cy="80" r="2" fill="#fca5a5"/>
              <circle cx="450" cy="100" r="5" fill="#fed7aa"/>
              <circle cx="462" cy="120" r="3" fill="#bbf7d0"/>
              <circle cx="440" cy="125" r="2.5" fill="#fca5a5"/>
            </svg>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-gray-900 py-10 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "100%", label: "Accurate Calculations", color: "text-orange-400" },
            { value: "Auto", label: "Payslip Delivery", color: "text-green-400" },
            { value: "2 Roles", label: "HR & Employee", color: "text-red-400" },
            { value: "Full", label: "Audit Trail", color: "text-orange-400" },
          ].map(s => (
            <div key={s.label}>
              <p className={`text-3xl font-black mb-1 ${s.color}`}>{s.value}</p>
              <p className="text-gray-400 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3">Features</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">Everything your payroll team needs</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">One platform to handle attendance, payroll, leaves, and payslips — end to end.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: FileSpreadsheet, title: "Attendance Upload", desc: "Import device or Excel formats. Auto-matches employees and flags exceptions.", color: "bg-orange-50", iconColor: "text-orange-500", border: "border-orange-100" },
              { icon: Wallet, title: "Smart Payroll", desc: "Auto salary calc with LOP, late deductions, OT, leave balance and tax.", color: "bg-green-50", iconColor: "text-green-600", border: "border-green-100" },
              { icon: CalendarCheck, title: "Leave Management", desc: "Approve leaves, track balances, auto-accrue and convert LOP to paid leave.", color: "bg-red-50", iconColor: "text-red-500", border: "border-red-100" },
              { icon: FileText, title: "Payslip Generation", desc: "One-click payslip generation and email delivery with full salary breakdown.", color: "bg-orange-50", iconColor: "text-orange-500", border: "border-orange-100" },
              { icon: Users, title: "Employee Profiles", desc: "Complete records with salary structure, department, and designation.", color: "bg-green-50", iconColor: "text-green-600", border: "border-green-100" },
              { icon: BarChart3, title: "Payroll Review", desc: "Manually adjust any record before approval. Add bonuses or deductions.", color: "bg-red-50", iconColor: "text-red-500", border: "border-red-100" },
              { icon: ShieldCheck, title: "Role-based Access", desc: "Separate HR and Employee portals. Employees see only their own data.", color: "bg-orange-50", iconColor: "text-orange-500", border: "border-orange-100" },
              { icon: Clock, title: "Audit Trail", desc: "Every action logged with timestamp and actor for full compliance.", color: "bg-green-50", iconColor: "text-green-600", border: "border-green-100" },
            ].map(f => (
              <div key={f.title} className={`${f.color} border ${f.border} rounded-2xl p-5 hover:shadow-md transition-all`}>
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                  <f.icon className={`w-5 h-5 ${f.iconColor}`} />
                </div>
                <h3 className="text-gray-900 font-bold text-sm mb-2">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3">Simple workflow</p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900">How it works</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Upload Attendance", desc: "HR uploads the monthly attendance Excel. System auto-processes and matches all employees instantly.", color: "bg-orange-500", light: "bg-orange-50 text-orange-600" },
              { step: "02", title: "Review Payroll", desc: "HR reviews generated payroll, adjusts entries manually, and approves or flags individual records.", color: "bg-green-600", light: "bg-green-50 text-green-700" },
              { step: "03", title: "Generate Payslips", desc: "One click generates and delivers payslips to all employees via email automatically.", color: "bg-red-500", light: "bg-red-50 text-red-600" },
            ].map(s => (
              <div key={s.step} className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-5 shadow-lg`}>
                  <span className="text-white font-black text-xl">{s.step}</span>
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-32 h-24 relative mx-auto mb-6">
            <Image src="/wecool-logo.png" alt="Wecool" fill className="object-contain" sizes="128px" quality={100} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Ready to streamline<br />your payroll?
          </h2>
          <p className="text-gray-400 mb-8 text-base">Log in to your Wecool Payroll dashboard and take full control of your payroll process today.</p>
          <Link href="/login"
            className="inline-block px-10 py-4 bg-orange-500 hover:bg-orange-400 text-white font-bold rounded-2xl text-base transition-all shadow-xl shadow-orange-900/30 hover:scale-105">
            Login to Dashboard →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-6 relative">
              <Image src="/wecool-logo.png" alt="Wecool" fill className="object-contain" sizes="32px" quality={100} />
            </div>
            <span className="text-white font-bold text-sm">Wecool <span className="text-gray-500 font-normal">Payroll System</span></span>
          </div>
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Wecool. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
