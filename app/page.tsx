'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Wrench, 
  Hammer, 
  Warehouse, 
  Sparkles, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ChevronRight, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

const SERVICES = [
  {
    id: "structural-truss",
    title: "Roof Truss & Industrial Sheds",
    tagline: "Heavy-Duty Weatherproof Frameworks",
    desc: "Engineered steel roof trusses, factory sheds, and covered car parking solutions designed to withstand heavy monsoon conditions.",
    badge: "Structural",
    icon: Warehouse,
  },
  {
    id: "gates-railings",
    title: "Designer Gates & Balcony Railings",
    tagline: "Custom Forged & Laser Cut Works",
    desc: "Modern motorized sliding gates, swing gates, wrought iron decorative designs, and corrosion-resistant SS304/GI balcony railings.",
    badge: "Residential",
    icon: ShieldCheck,
  },
  {
    id: "window-grills",
    title: "Safety Grills & Spiral Staircases",
    tagline: "Precision Welded Security Solutions",
    desc: "High-tensile MS and GI window security frames, space-saving spiral staircases, and heavy steel platform structures.",
    badge: "Custom Fabrication",
    icon: Hammer,
  },
  {
    id: "shutters-commercial",
    title: "Rolling Shutters & Commercial Enclosures",
    tagline: "Commercial Shopfront Security",
    desc: "Heavy-gauge manual and motorized rolling shutters, mezzanine storage platforms, and warehouse partitioning frames.",
    badge: "Commercial",
    icon: Wrench,
  },
];

const STATS = [
  { value: "15+", label: "Years Experience" },
  { value: "850+", label: "Completed Projects" },
  { value: "100%", label: "Precision Welding" },
  { value: "IS-Grade", label: "Certified Materials" },
];

export default function Home() {
  const [selectedService, setSelectedService] = useState("Roof Truss & Industrial Sheds");
  const [formSent, setFormSent] = useState(false);

  const WHATSAPP_NUM = "9446167904"; 
  const MAP_URL = "https://maps.app.goo.gl/dmB4SfXSqoVBnVtV6";

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(`Hi Payyavoor Enterprises, I want an estimate for ${selectedService}.`);
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-amber-500 selection:text-black">
      
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2 text-center text-xs sm:text-sm font-semibold tracking-wide text-black flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4" />
        <span>Fabrication Workshop & Structural Engineering — Payyavoor, Kannur</span>
      </div>

      {/* 2. NAVIGATION BAR */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#090d16]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div>
            <span className="text-xl sm:text-2xl font-black tracking-tight uppercase text-white flex items-center gap-2">
              <span className="text-amber-500">PAYYAVOOR</span> ENTERPRISES
            </span>
            <p className="text-[11px] tracking-wider uppercase text-slate-400">Iron & Steel Works • Heavy Fabrication</p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
            <a href="#about" className="hover:text-amber-400 transition-colors">Why Us</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Works</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Location</a>
          </nav>

          <div className="flex items-center gap-3">
            <button 
              onClick={handleWhatsAppDirect}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all shadow-md shadow-emerald-950"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Estimate
            </button>
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all shadow-md shadow-amber-950"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f293d_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Trusted Fabrication Specialist
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.1]">
                Heavy-Duty Steel & <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                  Custom Iron Fabrication
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
                From precision residential gates and spiral staircases to commercial roof trusses and factory sheds. Delivering long-lasting metal structures built with certified steel and anti-rust finishes.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-bold flex items-center gap-2 transition-all shadow-lg shadow-amber-900/30"
                >
                  Request Consultation <ChevronRight className="w-4 h-4" />
                </a>
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium flex items-center gap-2 transition-all"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" /> Send Design Photo
                </button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
                {STATS.map((s, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">{s.value}</p>
                    <p className="text-xs text-slate-400 font-medium">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Quick Form Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative">
                <div className="absolute -top-3 right-6 px-3 py-1 bg-amber-500/20 border border-amber-500/40 text-amber-300 rounded-full text-xs font-semibold">
                  Fast Estimate
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Discuss Your Project</h3>
                <p className="text-sm text-slate-400 mb-6">Receive an on-site inspection schedule & material estimate.</p>

                {formSent ? (
                  <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-xl p-6 text-center space-y-2">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="font-semibold text-white">Inquiry Received</h4>
                    <p className="text-xs text-slate-300">We will call you back shortly with specifications and estimates.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setFormSent(true); }} className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Work Category</label>
                      <select 
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="mt-1 w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-amber-400"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Your Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="e.g., Rajesh Kumar" 
                        className="mt-1 w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 uppercase tracking-wide">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        placeholder="+91 98XXXXXXXX" 
                        className="mt-1 w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2.5 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-bold text-sm tracking-wide transition-all shadow-md"
                    >
                      Book Free Site Visit
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SERVICES BENTO GRID */}
      <section id="services" className="py-20 bg-slate-950/60 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Our Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Fabrication & Metal Engineering</h2>
            <p className="text-sm text-slate-400 mt-3">From light ornamental gates to heavy industrial truss work.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((svc) => {
              const Icon = svc.icon;
              return (
                <div 
                  key={svc.id}
                  className="group rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/80 p-8 transition-all duration-300 hover:border-amber-500/50 relative overflow-hidden"
                >
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {svc.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mt-6 group-hover:text-amber-400 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-amber-500/90 font-medium mt-1">{svc.tagline}</p>
                  <p className="text-sm text-slate-300 mt-3 leading-relaxed">{svc.desc}</p>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-400">Custom Sizing & Anti-Rust Coating</span>
                    <button 
                      onClick={() => {
                        setSelectedService(svc.title);
                        const el = document.getElementById("contact");
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Inquire <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. LOCATION, SHOP INFO & CONTACT */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Workshop details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Visit Our Workshop</span>
                <h2 className="text-3xl font-extrabold text-white mt-1">Payyavoor Enterprises</h2>
                <p className="text-sm text-slate-400 mt-2">Bring your architectural sketches or consult directly on-site.</p>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                  <p className="font-semibold text-white">Workshop Address</p>
                  <p className="text-slate-400 text-xs mt-1">
                    Payyavoor Enterprises,3H4J+QXH, Ulikkal - Mundanoor- Payyavoor Road, Payyavoor, Keralam 670633
                  </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Working Hours</p>
                    <p className="text-slate-400 text-xs mt-1">Monday – Saturday: 8:30 AM – 6:00 PM (Sunday Closed)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Direct Phone</p>
                    <p className="text-slate-400 text-xs mt-1">Direct Call & WhatsApp Available</p>
                  </div>
                </div>
              </div>

              <a
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-medium text-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-amber-400" /> Open in Google Maps
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="lg:col-span-7 h-[420px] rounded-2xl overflow-hidden border border-slate-800 shadow-xl bg-slate-900">
              <iframe
                title="Payyavoor Enterprises Location"
                src="https://maps.app.goo.gl/dmB4SfXSqoVBnVtV6"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "contrast(1.1) invert(0.9) hue-rotate(180deg)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>

          </div>
        </div>
      </section>

      {/* 6. PERSISTENT MOBILE ACTION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex border-t border-slate-800 bg-[#090d16]/95 backdrop-blur-md">
        <a
          href={`tel:+${WHATSAPP_NUM}`}
          className="flex-1 py-3 text-center text-xs font-bold text-white flex items-center justify-center gap-2 border-r border-slate-800 active:bg-slate-800"
        >
          <Phone className="w-4 h-4 text-amber-400" /> Call Workshop
        </a>
        <button
          onClick={handleWhatsAppDirect}
          className="flex-1 py-3 text-center text-xs font-bold text-black bg-amber-400 flex items-center justify-center gap-2 active:bg-amber-500"
        >
          <MessageSquare className="w-4 h-4" /> WhatsApp Quote
        </button>
      </div>

      {/* 7. FOOTER */}
      <footer className="border-t border-slate-800 bg-slate-950 py-10 pb-20 md:pb-10 text-center text-xs text-slate-400">
        <p>© 2026 Payyavoor Enterprises. All rights reserved.</p>
        <p className="mt-1 text-slate-500">Structural Metal Works • Roofing • Designer Gates • Heavy Iron Works</p>
      </footer>
    </div>
  );
}
