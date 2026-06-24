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

            {/* SVG Illustration - flat design people */}
            <svg viewBox="0 0 520 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <defs>
                <filter id="card-shadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="3" stdDeviation="4" floodColor="#00000018"/>
                </filter>
              </defs>

              {/* ── PERSON 1: Man holding phone (top-left, blue shirt) ── */}
              {/* Body/torso */}
              <rect x="28" y="108" width="52" height="58" rx="14" fill="#6366f1"/>
              {/* Neck */}
              <rect x="48" y="98" width="12" height="14" rx="6" fill="#FBBF6A"/>
              {/* Head */}
              <ellipse cx="54" cy="80" rx="22" ry="24" fill="#FBBF6A"/>
              {/* Hair - dark short */}
              <path d="M32 72 Q33 50 54 48 Q75 50 76 72 Q72 60 54 58 Q36 60 32 72Z" fill="#1e293b"/>
              {/* Eye left */}
              <ellipse cx="46" cy="80" rx="3" ry="3.5" fill="#1e293b"/>
              <ellipse cx="46" cy="79" rx="1.2" ry="1.2" fill="white"/>
              {/* Eye right */}
              <ellipse cx="62" cy="80" rx="3" ry="3.5" fill="#1e293b"/>
              <ellipse cx="62" cy="79" rx="1.2" ry="1.2" fill="white"/>
              {/* Eyebrows */}
              <path d="M42 73 Q46 71 50 73" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              <path d="M58 73 Q62 71 66 73" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              {/* Smile */}
              <path d="M46 88 Q54 95 62 88" stroke="#e07b39" strokeWidth="2" strokeLinecap="round" fill="none"/>
              {/* Tie */}
              <path d="M50 108 L54 118 L58 108" fill="#1e293b"/>
              <path d="M52 118 L54 145 L56 118Z" fill="#1e293b"/>
              {/* Left arm down */}
              <path d="M28 120 Q10 130 12 155" stroke="#FBBF6A" strokeWidth="13" strokeLinecap="round" fill="none"/>
              {/* Right arm holding phone */}
              <path d="M80 118 Q98 112 102 130" stroke="#FBBF6A" strokeWidth="13" strokeLinecap="round" fill="none"/>
              {/* Phone */}
              <rect x="96" y="118" width="22" height="36" rx="4" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5"/>
              <rect x="99" y="122" width="16" height="24" rx="2" fill="#6366f1"/>
              <circle cx="107" cy="150" r="2" fill="#94a3b8"/>
              {/* Legs */}
              <rect x="32" y="162" width="18" height="40" rx="8" fill="#1e293b"/>
              <rect x="56" y="162" width="18" height="40" rx="8" fill="#1e293b"/>
              {/* Shoes */}
              <ellipse cx="41" cy="204" rx="14" ry="7" fill="#0f172a"/>
              <ellipse cx="65" cy="204" rx="14" ry="7" fill="#0f172a"/>

              {/* ── PERSON 2: Woman with long hair holding phone to ear (center) ── */}
              {/* Body */}
              <rect x="208" y="112" width="54" height="60" rx="14" fill="#1e293b"/>
              {/* Neck */}
              <rect x="229" y="100" width="12" height="16" rx="6" fill="#F5C5A3"/>
              {/* Head */}
              <ellipse cx="235" cy="80" rx="23" ry="25" fill="#F5C5A3"/>
              {/* Long wavy hair */}
              <path d="M212 68 Q210 45 235 42 Q260 45 258 68 Q256 50 235 48 Q214 50 212 68Z" fill="#c4a882"/>
              {/* Hair sides flowing down */}
              <path d="M212 68 Q205 90 208 130" stroke="#c4a882" strokeWidth="14" strokeLinecap="round" fill="none"/>
              <path d="M258 68 Q265 90 262 130" stroke="#c4a882" strokeWidth="14" strokeLinecap="round" fill="none"/>
              {/* Eyes */}
              <ellipse cx="226" cy="80" rx="3" ry="3.5" fill="#1e293b"/>
              <ellipse cx="226" cy="79" rx="1.2" ry="1.2" fill="white"/>
              <ellipse cx="244" cy="80" rx="3" ry="3.5" fill="#1e293b"/>
              <ellipse cx="244" cy="79" rx="1.2" ry="1.2" fill="white"/>
              {/* Eyebrows */}
              <path d="M222 72 Q226 70 230 72" stroke="#8B6340" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              <path d="M240 72 Q244 70 248 72" stroke="#8B6340" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              {/* Smile */}
              <path d="M228 89 Q235 95 242 89" stroke="#c0604a" strokeWidth="2" strokeLinecap="round" fill="none"/>
              {/* Left arm crosses body */}
              <path d="M208 125 Q215 145 230 148" stroke="#F5C5A3" strokeWidth="12" strokeLinecap="round" fill="none"/>
              {/* Right arm up to ear with phone */}
              <path d="M262 122 Q272 105 268 90" stroke="#F5C5A3" strokeWidth="12" strokeLinecap="round" fill="none"/>
              {/* Phone at ear */}
              <rect x="256" y="68" width="18" height="30" rx="4" fill="#374151" stroke="#1f2937" strokeWidth="1"/>
              <rect x="259" y="71" width="12" height="18" rx="1.5" fill="#6366f1"/>
              {/* Legs */}
              <rect x="213" y="168" width="18" height="40" rx="8" fill="#374151"/>
              <rect x="237" y="168" width="18" height="40" rx="8" fill="#374151"/>
              {/* Shoes */}
              <ellipse cx="222" cy="210" rx="14" ry="7" fill="#1f2937"/>
              <ellipse cx="246" cy="210" rx="14" ry="7" fill="#1f2937"/>

              {/* ── PERSON 3: Man with laptop (bottom-left, yellow shirt) ── */}
              {/* Body */}
              <rect x="78" y="182" width="52" height="52" rx="14" fill="#f59e0b"/>
              {/* Neck */}
              <rect x="98" y="170" width="12" height="16" rx="6" fill="#FBBF6A"/>
              {/* Head */}
              <ellipse cx="104" cy="150" rx="22" ry="23" fill="#FBBF6A"/>
              {/* Hair - black short */}
              <path d="M82 144 Q83 124 104 122 Q125 124 126 144 Q122 132 104 130 Q86 132 82 144Z" fill="#1e293b"/>
              {/* Eyes */}
              <ellipse cx="96" cy="150" rx="3" ry="3.5" fill="#1e293b"/>
              <ellipse cx="96" cy="149" rx="1.2" ry="1.2" fill="white"/>
              <ellipse cx="112" cy="150" rx="3" ry="3.5" fill="#1e293b"/>
              <ellipse cx="112" cy="149" rx="1.2" ry="1.2" fill="white"/>
              {/* Eyebrows */}
              <path d="M92 142 Q96 140 100 142" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              <path d="M108 142 Q112 140 116 142" stroke="#1e293b" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              {/* Smile */}
              <path d="M96 158 Q104 164 112 158" stroke="#c0604a" strokeWidth="2" strokeLinecap="round" fill="none"/>
              {/* Arms holding laptop */}
              <path d="M78 195 Q60 205 55 220" stroke="#FBBF6A" strokeWidth="12" strokeLinecap="round" fill="none"/>
              <path d="M130 195 Q148 205 153 220" stroke="#FBBF6A" strokeWidth="12" strokeLinecap="round" fill="none"/>
              {/* Laptop */}
              <rect x="52" y="218" width="108" height="62" rx="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5"/>
              <rect x="56" y="222" width="100" height="50" rx="3" fill="#1e293b"/>
              <rect x="60" y="226" width="92" height="42" rx="2" fill="#f97316" opacity="0.9"/>
              <rect x="64" y="230" width="50" height="4" rx="2" fill="white" opacity="0.8"/>
              <rect x="64" y="238" width="35" height="3" rx="1.5" fill="white" opacity="0.5"/>
              <rect x="64" y="245" width="42" height="3" rx="1.5" fill="white" opacity="0.5"/>
              <rect x="118" y="232" width="28" height="14" rx="3" fill="white" opacity="0.2"/>
              <text x="120" y="243" fontSize="7" fill="white" fontWeight="bold" opacity="0.9">₹PAY</text>

              {/* ── PERSON 4: Woman with phone (bottom-center, purple) ── */}
              {/* Body */}
              <rect x="298" y="178" width="52" height="55" rx="14" fill="#a855f7"/>
              {/* Neck */}
              <rect x="318" y="166" width="12" height="16" rx="6" fill="#F5C5A3"/>
              {/* Head */}
              <ellipse cx="324" cy="146" rx="22" ry="23" fill="#F5C5A3"/>
              {/* Blonde hair */}
              <path d="M302 138 Q302 118 324 116 Q346 118 346 138 Q342 126 324 124 Q306 126 302 138Z" fill="#fbbf24"/>
              <path d="M302 138 Q296 160 300 185" stroke="#fbbf24" strokeWidth="12" strokeLinecap="round" fill="none"/>
              <path d="M346 138 Q352 160 348 185" stroke="#fbbf24" strokeWidth="12" strokeLinecap="round" fill="none"/>
              {/* Eyes */}
              <ellipse cx="316" cy="147" rx="3" ry="3.5" fill="#1e293b"/>
              <ellipse cx="316" cy="146" rx="1.2" ry="1.2" fill="white"/>
              <ellipse cx="332" cy="147" rx="3" ry="3.5" fill="#1e293b"/>
              <ellipse cx="332" cy="146" rx="1.2" ry="1.2" fill="white"/>
              {/* Eyebrows */}
              <path d="M312 139 Q316 137 320 139" stroke="#8B6340" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              <path d="M328 139 Q332 137 336 139" stroke="#8B6340" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              {/* Smile */}
              <path d="M316 155 Q324 162 332 155" stroke="#c0604a" strokeWidth="2" strokeLinecap="round" fill="none"/>
              {/* Left arm down */}
              <path d="M298 192 Q280 200 278 218" stroke="#F5C5A3" strokeWidth="12" strokeLinecap="round" fill="none"/>
              {/* Right arm holding phone */}
              <path d="M350 190 Q362 185 364 170" stroke="#F5C5A3" strokeWidth="12" strokeLinecap="round" fill="none"/>
              {/* Phone */}
              <rect x="356" y="152" width="20" height="34" rx="4" fill="#374151" stroke="#1f2937" strokeWidth="1"/>
              <rect x="359" y="156" width="14" height="22" rx="2" fill="#16a34a"/>
              <rect x="362" y="159" width="8" height="2" rx="1" fill="white" opacity="0.7"/>
              <rect x="362" y="164" width="6" height="2" rx="1" fill="white" opacity="0.5"/>
              <rect x="362" y="169" width="7" height="2" rx="1" fill="white" opacity="0.5"/>
              {/* Legs */}
              <rect x="302" y="229" width="18" height="35" rx="8" fill="#7c3aed"/>
              <rect x="326" y="229" width="18" height="35" rx="8" fill="#7c3aed"/>
              {/* Shoes */}
              <ellipse cx="311" cy="266" rx="13" ry="6" fill="#4c1d95"/>
              <ellipse cx="335" cy="266" rx="13" ry="6" fill="#4c1d95"/>

              {/* ── PERSON 5: Man with tablet (right, light blue shirt) ── */}
              {/* Body */}
              <rect x="408" y="158" width="52" height="58" rx="14" fill="#93c5fd"/>
              {/* Neck */}
              <rect x="428" y="146" width="12" height="16" rx="6" fill="#FBBF6A"/>
              {/* Head */}
              <ellipse cx="434" cy="126" rx="22" ry="23" fill="#FBBF6A"/>
              {/* Hair - light brown short */}
              <path d="M412 119 Q413 100 434 98 Q455 100 456 119 Q452 108 434 106 Q416 108 412 119Z" fill="#92400e"/>
              {/* Eyes */}
              <ellipse cx="426" cy="127" rx="3" ry="3.5" fill="#1e293b"/>
              <ellipse cx="426" cy="126" rx="1.2" ry="1.2" fill="white"/>
              <ellipse cx="442" cy="127" rx="3" ry="3.5" fill="#1e293b"/>
              <ellipse cx="442" cy="126" rx="1.2" ry="1.2" fill="white"/>
              {/* Eyebrows */}
              <path d="M422 119 Q426 117 430 119" stroke="#92400e" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              <path d="M438 119 Q442 117 446 119" stroke="#92400e" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
              {/* Smile */}
              <path d="M426 135 Q434 141 442 135" stroke="#c0604a" strokeWidth="2" strokeLinecap="round" fill="none"/>
              {/* Both arms holding tablet in front */}
              <path d="M408 172 Q390 180 386 200" stroke="#FBBF6A" strokeWidth="12" strokeLinecap="round" fill="none"/>
              <path d="M460 172 Q475 185 476 208" stroke="#FBBF6A" strokeWidth="12" strokeLinecap="round" fill="none"/>
              {/* Tablet */}
              <rect x="382" y="194" width="98" height="68" rx="6" fill="#374151" stroke="#1f2937" strokeWidth="1.5"/>
              <rect x="386" y="198" width="90" height="56" rx="4" fill="#e2e8f0"/>
              <rect x="390" y="202" width="82" height="44" rx="2" fill="#16a34a" opacity="0.9"/>
              <rect x="394" y="207" width="55" height="4" rx="2" fill="white" opacity="0.8"/>
              <rect x="394" y="215" width="38" height="3" rx="1.5" fill="white" opacity="0.5"/>
              <rect x="394" y="222" width="45" height="3" rx="1.5" fill="white" opacity="0.5"/>
              <rect x="452" y="208" width="14" height="16" rx="2" fill="white" opacity="0.2"/>
              <text x="453" y="220" fontSize="6" fill="white" fontWeight="bold" opacity="0.9">✓</text>
              {/* Legs */}
              <rect x="412" y="212" width="18" height="40" rx="8" fill="#1e3a5f"/>
              <rect x="436" y="212" width="18" height="40" rx="8" fill="#1e3a5f"/>
              {/* Shoes */}
              <ellipse cx="421" cy="254" rx="14" ry="7" fill="#0f172a"/>
              <ellipse cx="445" cy="254" rx="14" ry="7" fill="#0f172a"/>

              {/* Floating payroll cards */}
              {/* Card: Net Pay */}
              <rect x="152" y="8" width="110" height="54" rx="10" fill="white" stroke="#fed7aa" strokeWidth="1.5" filter="url(#card-shadow)"/>
              <rect x="152" y="8" width="110" height="18" rx="10" fill="#f97316"/>
              <rect x="152" y="18" width="110" height="8" rx="0" fill="#f97316"/>
              <text x="162" y="21" fontSize="7" fill="white" fontWeight="bold">NET PAY</text>
              <text x="162" y="39" fontSize="14" fill="#1e293b" fontWeight="bold">₹61,299</text>
              <text x="162" y="52" fontSize="6" fill="#94a3b8">June 2026 · Approved ✓</text>

              {/* Card: Attendance */}
              <rect x="10" y="248" width="100" height="52" rx="10" fill="white" stroke="#bbf7d0" strokeWidth="1.5" filter="url(#card-shadow)"/>
              <rect x="10" y="248" width="100" height="18" rx="10" fill="#16a34a"/>
              <rect x="10" y="258" width="100" height="8" rx="0" fill="#16a34a"/>
              <text x="20" y="262" fontSize="7" fill="white" fontWeight="bold">ATTENDANCE</text>
              <text x="20" y="279" fontSize="11" fill="#1e293b" fontWeight="bold">21 Present</text>
              <text x="20" y="291" fontSize="6" fill="#94a3b8">0 LOP · 4 W/Off</text>

              {/* Decorative dots */}
              <circle cx="190" cy="95" r="5" fill="#fed7aa"/>
              <circle cx="176" cy="110" r="3.5" fill="#bbf7d0"/>
              <circle cx="200" cy="118" r="2.5" fill="#fca5a5"/>
              <circle cx="390" cy="140" r="4" fill="#fed7aa"/>
              <circle cx="402" cy="155" r="3" fill="#c4b5fd"/>
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
