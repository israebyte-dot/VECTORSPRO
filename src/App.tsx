import React, { useState } from 'react';
import { ArrowRight, Image as ImageIcon, Monitor, Truck, FileImage, Zap, Check, Shirt, Scissors, FileText, Smartphone, Package, Layers, Tag, Clock } from 'lucide-react';

// @ts-ignore
import gearCompareImg from './assets/images/gear_vector_compare_1780232214771.png';
// @ts-ignore
import threeColorCompareImg from './assets/images/logo_three_color_compare_1780233907839.png';

const GUMROAD_CHECKOUT_URL = "https://digitalforbiz.gumroad.com/l/ProfessionalLogoVectorizationService";

const triggerCheckout = (e?: React.MouseEvent | React.TouchEvent | any) => {
  if (e && typeof e.preventDefault === 'function') {
    e.preventDefault();
  }
  const trigger = document.getElementById('hidden-gumroad-trigger');
  if (trigger) {
    trigger.click();
  } else {
    window.open(GUMROAD_CHECKOUT_URL, '_blank');
  }
};

const Button = ({ children, onClick, className = "" }: { children: React.ReactNode; onClick?: (e: any) => void; className?: string }) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3.5 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-black border border-black transition-colors duration-200 cursor-pointer rounded-none font-sans ${className}`}
  >
    {children}
  </button>
);

const Navbar = () => (
  <nav className="w-full bg-white border-b border-black sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex justify-between items-center">
      <div className="text-xl md:text-2xl font-black tracking-tighter text-black uppercase font-sans">
        VECTORS<span className="text-[#a0aab8]">PRO</span>
      </div>
      <div className="flex flex-col items-end">
        <Button onClick={triggerCheckout} className="px-4 py-2 text-[11px] md:px-6 md:py-3 md:text-xs">
          Get Started
        </Button>
        <span className="text-[8px] md:text-[9px] text-gray-500 font-bold uppercase tracking-widest mt-1 hidden sm:block">
          Secure checkout VIA GUMROAD
        </span>
        <span className="text-[8px] md:text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5 hidden sm:block">
          50% DEPOSIT / 50% UPON COMPLETION
        </span>
      </div>
    </div>
  </nav>
);

const caseStudies = [
  {
    id: 1,
    label: "Case Study 01",
    tabTitle: "Leaf & Gear",
    title: "Symmetrical Natural Gear Badge",
    image: gearCompareImg,
    specs: [
      { label: "Vector Symmetry Alignment", value: "Perfect 1:1 Mirroring" },
      { label: "Curves Reconstruction", value: "Hand-aligned Bezier Handles" },
      { label: "Final Vector Outputs", value: "SVG, EPS, High-Res PNG" }
    ]
  },
  {
    id: 2,
    label: "Case Study 02",
    tabTitle: "PRO LOGO",
    title: "Minimalist Geometric Emblem",
    image: threeColorCompareImg,
    specs: [
      { label: "Vector Color Isolation", value: "3 Solid Tone Separation" },
      { label: "Border Re-tracing", value: "Pixel-perfect Alignment" },
      { label: "Geometric Definition", value: "Symmetrical Node Cleanup" }
    ]
  }
];

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentCase = caseStudies[activeTab];

  return (
    <section className="bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        <div className="lg:w-[45%] w-full space-y-6 md:space-y-8">
          <div className="flex flex-wrap gap-2 md:gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-neutral-100 border border-black text-neutral-850 text-[10px] md:text-xs font-semibold uppercase tracking-widest rounded-none">
              <Zap size={14} className="text-neutral-700" /> Professional Service
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-yellow-300 border border-black text-black text-[10px] md:text-xs font-black uppercase tracking-widest rounded-none shadow-sm">
              <Clock size={14} className="text-black inline" /> Max 48H Delivery
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-black leading-[0.95] tracking-tight uppercase font-sans">
            Turn Blurry Logos <br/> Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black">Vectors.</span>
          </h1>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md border-l-2 border-black pl-4 md:pl-6 font-medium">
            Stop using pixelated, blurry PNGs. We manually trace your logos into high-quality, perfectly scalable SVG, EPS, and AI files. Crafted for any size, from tiny business cards to giant truck wraps.
          </p>
          <div className="flex flex-col gap-3 pt-2 md:pt-4">
            <div className="flex flex-col items-stretch sm:items-start gap-1">
              <Button onClick={triggerCheckout} className="py-4 md:py-5 text-sm md:text-base w-full sm:w-auto">
                Vectorize My Logo <ArrowRight size={18} />
              </Button>
              <div className="text-sm md:text-base font-bold text-black mt-2 text-left leading-tight tracking-tight">
                50% deposit upfront,<br />
                50% upon completion.
              </div>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-2 mt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse inline-block border border-black"></span>
              Speed Guarantee: Completed in maximum 48 hours
            </p>
          </div>
        </div>
        
        <div className="lg:w-[55%] w-full">
          <div className="bg-[#fcfcf9] border border-black p-4 md:p-6 rounded-none">
            <div className="flex border-b border-black pb-4 mb-4 md:mb-6 justify-between items-center flex-col sm:flex-row gap-4">
              <span className="font-mono text-[10px] md:text-xs uppercase text-black tracking-wider font-extrabold">
                Interactive Tracing process:
              </span>
              <div className="flex p-0.5 bg-neutral-200 border border-black rounded-none w-full sm:w-auto">
                {caseStudies.map((study, idx) => (
                  <button
                    key={study.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all duration-200 rounded-none flex-1 text-center cursor-pointer ${
                      activeTab === idx 
                        ? 'bg-black text-white' 
                        : 'text-neutral-600 hover:text-black hover:bg-white'
                    }`}
                  >
                    {study.tabTitle}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Product Comparison Image */}
              <div className="bg-white border border-black p-1.5 rounded-none overflow-hidden">
                <img 
                  src={currentCase.image} 
                  alt={currentCase.title} 
                  className="w-full h-auto object-cover max-h-[340px]" 
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Case Study Details & Process Breakdown */}
              <div className="bg-white border border-black p-6 space-y-6 rounded-none">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-black">
                    {currentCase.title}
                  </h3>
                  <p className="font-mono text-xs text-neutral-500 mt-1 uppercase tracking-wider font-semibold">
                    Precision Rebuilt Geometry
                  </p>
                </div>

                <div className="pt-4 border-t border-black">
                  <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold block mb-2">
                    Manual Reconstruction Process Specs
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {currentCase.specs.map((spec, i) => (
                      <div key={i} className="bg-[#fcfcf9] border border-black p-3 text-left rounded-none">
                        <div className="text-[9px] uppercase tracking-wider text-neutral-500 font-semibold font-mono">
                          {spec.label}
                        </div>
                        <div className="text-xs font-bold text-black mt-0.5">
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LargeFormatShowcase = () => {
  const applications = [
    {
      icon: <Truck size={24} />,
      title: "Vehicle Wraps",
      desc: "Printing a blurry logo on a company van looks unprofessional. Our vectors ensure razor-sharp branding on any fleet vehicle."
    },
    {
      icon: <Monitor size={24} />,
      title: "Billboards",
      desc: "Massive outdoor signage requires perfect edges. Vector graphics guarantee crisp printing at hundreds of feet of scale."
    },
    {
      icon: <Shirt size={24} />,
      title: "Apparel & Embroidery",
      desc: "Perfect vector paths designed for modern stitch-digitization engines, caps, activewear, and custom uniforms."
    },
    {
      icon: <Scissors size={24} />,
      title: "Laser Cutting & CNC",
      desc: "Closed paths and clean vector coordinates necessary for physical metal, wood, and acrylic custom sign production."
    },
    {
      icon: <FileText size={24} />,
      title: "Business Stationery",
      desc: "Ultra-sharp printing for corporate letterheads, premium textures, and high-contrast letterpress business cards."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Retina-Ready UI",
      desc: "Lightweight, ultra-fast loading SVGs optimized to remain perfectly sharp on high-DPI screens and mobile devices."
    },
    {
      icon: <Package size={24} />,
      title: "Product Packaging",
      desc: "Guaranteed sharp printing on corrugated shipping boxes, modern retail packaging, cans, and cosmetic containers."
    },
    {
      icon: <Layers size={24} />,
      title: "Exhibitions & Exhibits",
      desc: "Massive trade show display walls, physical backdrops, roll-up stands, and booths that look immaculate up close."
    },
    {
      icon: <Tag size={24} />,
      title: "Swag & Merch",
      desc: "Clear outlines and exact spot-color layers for vinyl stickers, printed mug layouts, and laser engraved tumblers."
    }
  ];

  return (
    <section className="bg-[#fcfcf9] border-b border-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
        {/* Title / Info Header */}
        <div className="border-b border-black pb-8 md:pb-12 mb-10 md:mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-black leading-none uppercase font-sans">
              Why Vector?
            </h2>
            <p className="text-base md:text-lg text-gray-600 font-medium leading-relaxed max-w-2xl">
              Raster images (JPG, PNG) break apart and pixelate when zoomed or printed physically. Vector files are mathematically perfect at any size.
            </p>
          </div>
        </div>

        {/* 9 Grid Highlight */}
        <div>
          <div className="mb-6 flex justify-between items-center">
            <span className="font-mono text-[10px] md:text-xs uppercase text-neutral-500 tracking-wider font-extrabold">
              9 Core Real World Applications:
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div 
                key={index} 
                className="bg-white border border-black p-5 md:p-6 flex flex-col justify-between transition-colors duration-300 rounded-none shadow-none"
              >
                <div className="space-y-4">
                  <div className="bg-black text-white p-3.5 border border-black rounded-none w-fit">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-black uppercase mb-2 text-black font-sans">{app.title}</h3>
                    <p className="text-xs text-neutral-600 leading-relaxed font-medium">
                      {app.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => (
  <section className="bg-white border-b border-black">
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-black uppercase mb-4 font-sans">How It Works</h2>
        <div className="w-16 h-1 bg-black mx-auto rounded-none"></div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: <FileImage size={32} />, title: "01. Upload", desc: "Send us your low-quality PNG or JPG." },
          { icon: <ImageIcon size={32} />, title: "02. Vectorize", desc: "We manually trace it into SVG/EPS." },
          { icon: <Check size={32} />, title: "03. Delivered ≤ 48H", desc: "Get high-res vector files ready for print in maximum 48 hours." }
        ].map((step, index) => (
          <div key={index} className="border border-black rounded-none p-8 md:p-12 flex flex-col items-center text-center bg-white transition-all duration-300">
            <div className="mb-6 text-black bg-[#fcfcf9] border border-black p-4 rounded-none">
              {step.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-black text-black uppercase mb-4 font-sans">{step.title}</h3>
            <p className="text-sm text-neutral-600 font-semibold">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SubscribeSection = () => (
  <section className="bg-[#fcfcf9] border-b border-black py-12 md:py-24">
    <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
      <h2 className="text-2xl md:text-4xl font-black text-black uppercase mb-4 font-sans">Join The List</h2>
      <p className="text-sm md:text-neutral-600 mb-8 md:mb-10 font-semibold font-mono">Subscribe to get the latest updates, tips, and exclusive offers directly to your inbox.</p>
      
      <style>{`
        #gumroad-follow-form-embed { display: flex; gap: 0rem; flex-wrap: wrap; justify-content: center; }
        #gumroad-follow-form-embed-button { display: inline-flex; cursor: pointer; align-items: center; justify-content: center; gap: 0.5rem; border-radius: 0px; border: 1px solid #000; background-color: #000; color: #fff; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; transition: all 0.2s; padding: 0.75rem 1.5rem; font-size: 0.875rem; }
        #gumroad-follow-form-embed-button:hover { background-color: #fff; color: #000; }
        #gumroad-follow-form-embed-input { display: block; width: 100%; flex: 1 1 250px; border-radius: 0px; border: 1px solid #000; background-color: #fff; padding: 0.75rem 1rem; font-size: 1rem; outline: none; transition: all 0.2s; }
        #gumroad-follow-form-embed-input:focus { border-color: #000; background-color: #fafaf9; }
      `}</style>
      
      <form action="https://gumroad.com/follow_from_embed_form" method="post" id="gumroad-follow-form-embed" className="max-w-lg mx-auto">
        <input type="hidden" name="seller_id" value="6225431218317"/>
        <input 
          id="gumroad-follow-form-embed-input" 
          type="email" 
          placeholder="Your email address" 
          name="email" 
          required 
        />
        <button type="submit" id="gumroad-follow-form-embed-button" className="w-full sm:w-auto">
          Follow
        </button>
      </form>
    </div>
  </section>
);

const CTASection = () => (
  <section className="bg-neutral-950 text-white border-b border-black">
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-16 md:py-32 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 md:mb-8 tracking-tight uppercase text-white font-sans">
        Professionalize Your Brand
      </h2>
      <p className="text-neutral-400 text-sm md:text-lg mb-8 md:mb-12 max-w-2xl mx-auto font-semibold">
        Don't let a pixelated logo hurt your business. Get a perfectly scalable vector logo today.
      </p>
      <div className="flex flex-col items-center">
        <button 
          onClick={triggerCheckout}
          className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 md:px-12 md:py-5 font-black text-xs md:text-sm uppercase tracking-widest hover:bg-black hover:text-white hover:border-white border border-transparent transition-all cursor-pointer w-full sm:w-auto justify-center rounded-none shadow-none"
        >
          Order Now <ArrowRight size={20} />
        </button>
        <p className="mt-4 text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-black">
          Secure checkout VIA GUMROAD
        </p>
        <div className="mt-2 text-sm md:text-base font-bold text-gray-300 leading-tight tracking-tight text-center">
          50% deposit upfront,<br />
          50% upon completion.
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white py-12 border-t border-black">
    <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-xl font-black tracking-tighter text-black uppercase font-sans">
        VECTORS<span className="text-[#a0aab8]">PRO</span>
      </div>
      <p className="text-gray-400 text-xs md:text-sm font-medium uppercase tracking-wider">
        &copy; {new Date().getFullYear()} VectorsPro Service.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
      {/* Hidden Gumroad Trigger for overlay checking and programmatic actions */}
      <a 
        href={GUMROAD_CHECKOUT_URL}
        id="hidden-gumroad-trigger"
        className="gumroad-button hidden"
        data-gumroad-overlay-checkout="true"
        aria-hidden="true"
        style={{ display: 'none' }}
      >
        Checkout
      </a>

      <Navbar />
      <Hero />
      <LargeFormatShowcase />
      <HowItWorks />
      <CTASection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}
