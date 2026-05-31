import React, { useState } from 'react';
import { ArrowRight, Image as ImageIcon, Monitor, Truck, FileImage, Zap, Check, Shirt, Scissors, FileText, Smartphone, Package, Layers, Tag, Clock } from 'lucide-react';

// @ts-ignore
import gearCompareImg from './assets/images/gear_vector_compare_1780232214771.png';
// @ts-ignore
import threeColorCompareImg from './assets/images/logo_three_color_compare_1780233907839.png';

const GUMROAD_CHECKOUT_URL = "https://digitalforbiz.gumroad.com/l/ProfessionalLogoVectorizationService";

const Button = ({ children, href, className = "" }: { children: React.ReactNode; href: string; className?: string }) => (
  <a
    href={href}
    className={`gumroad-button inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-black border-2 border-black transition-all duration-200 ${className}`}
    data-gumroad-overlay-checkout="true"
  >
    {children}
  </a>
);

const Navbar = () => (
  <nav className="w-full bg-white border-b-2 border-black sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
      <div className="text-2xl font-black tracking-tighter text-black uppercase">
        Vectors<span className="text-gray-500">Pro</span>
      </div>
      <Button href={GUMROAD_CHECKOUT_URL}>Get Started</Button>
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
    <section className="bg-white border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-[45%] space-y-8">
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black bg-gray-50 text-black text-xs font-bold uppercase tracking-widest">
              <Zap size={14} className="text-black" /> Professional Service
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 border-2 border-black bg-yellow-300 text-black text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_#000]">
              <Clock size={14} className="text-black inline" /> Max 48H Delivery
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-black leading-[0.95] tracking-tight uppercase">
            Turn Blurry Logos <br/> Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black">Vectors.</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-md border-l-4 border-black pl-6">
            Stop using pixelated, blurry PNGs. We manually trace your logos into high-quality, perfectly scalable SVG, EPS, and AI files. Crafted for any size, from tiny business cards to giant truck wraps.
          </p>
          <div className="flex flex-col gap-3 pt-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href={GUMROAD_CHECKOUT_URL} className="py-5 text-base">
                Vectorize My Logo <ArrowRight size={20} />
              </Button>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse inline-block"></span>
              Speed Guarantee: Completed in maximum 48 hours
            </p>
          </div>
        </div>
        
        <div className="lg:w-[55%] w-full">
          <div className="bg-gray-50 border-2 border-black p-4 md:p-6 shadow-[6px_6px_0px_#000]">
            <div className="flex border-b-2 border-black pb-4 mb-6 justify-between items-center flex-wrap gap-4">
              <span className="font-mono text-xs uppercase text-gray-500 tracking-wider">
                Interactive Tracing process:
              </span>
              <div className="flex border-2 border-black">
                {caseStudies.map((study, idx) => (
                  <button
                    key={study.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-4 py-2 text-xs font-black uppercase tracking-wider transition-colors border-r-2 last:border-r-0 border-black ${
                      activeTab === idx 
                        ? 'bg-black text-white' 
                        : 'bg-white text-black hover:bg-gray-100'
                    }`}
                  >
                    {study.tabTitle}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Product Comparison Image */}
              <div className="bg-white border-2 border-black p-2 relative overflow-hidden">
                <img 
                  src={currentCase.image} 
                  alt={currentCase.title} 
                  className="w-full h-auto object-cover max-h-[340px]" 
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Case Study Details & Process Breakdown */}
              <div className="bg-white border-2 border-black p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-black">
                    {currentCase.title}
                  </h3>
                  <p className="font-mono text-xs text-gray-500 mt-1 uppercase tracking-wider">
                    Precision Rebuilt Geometry
                  </p>
                </div>

                <div className="pt-4 border-t-2 border-black">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold block mb-2">
                    Manual Reconstruction Process Specs
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {currentCase.specs.map((spec, i) => (
                      <div key={i} className="bg-white border border-gray-200 p-2 text-left">
                        <div className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold">
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
    <section className="bg-gray-50 border-b-2 border-black">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Title / Info Header */}
        <div className="border-b-2 border-black pb-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-black leading-none uppercase">
              Why Vector?
            </h2>
            <p className="text-lg text-gray-800 font-medium leading-relaxed max-w-2xl">
              Raster images (JPG, PNG) break apart and pixelate when zoomed or printed physically. Vector files are mathematically perfect at any size.
            </p>
          </div>
        </div>

        {/* 9 Grid Highlight */}
        <div>
          <div className="mb-6 flex justify-between items-center">
            <span className="font-mono text-xs uppercase text-gray-500 tracking-wider">
              9 Core Real World Applications:
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <div 
                key={index} 
                className="bg-white border-2 border-black p-6 flex flex-col justify-between hover:bg-gray-100 transition-colors shadow-[4px_4px_0px_#000]"
              >
                <div className="space-y-4">
                  <div className="bg-black text-white p-3 w-fit">
                    {app.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase mb-2">{app.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
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
  <section className="bg-white border-b-2 border-black">
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-4">How It Works</h2>
        <div className="w-24 h-1 bg-black mx-auto"></div>
      </div>
      
      <div className="grid md:grid-cols-3 border-t-2 border-l-2 border-black">
        {[
          { icon: <FileImage size={32} />, title: "01. Upload", desc: "Send us your low-quality PNG or JPG." },
          { icon: <ImageIcon size={32} />, title: "02. Vectorize", desc: "We manually trace it into SVG/EPS." },
          { icon: <Check size={32} />, title: "03. Delivered ≤ 48H", desc: "Get high-res vector files ready for print in maximum 48 hours." }
        ].map((step, index) => (
          <div key={index} className="border-r-2 border-b-2 border-black p-12 flex flex-col items-center text-center bg-white hover:bg-gray-50 transition-colors">
            <div className="mb-6 text-black">
              {step.icon}
            </div>
            <h3 className="text-2xl font-black text-black uppercase mb-4">{step.title}</h3>
            <p className="text-gray-600 font-medium">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SubscribeSection = () => (
  <section className="bg-gray-50 border-b-2 border-black py-24">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-black text-black uppercase mb-4">Join The List</h2>
      <p className="text-gray-600 mb-10 font-medium">Subscribe to get the latest updates, tips, and exclusive offers directly to your inbox.</p>
      
      <style>{`
        #gumroad-follow-form-embed { display: flex; gap: 0.5rem; flex-wrap: wrap; justify-content: center; }
        #gumroad-follow-form-embed-button { display: inline-flex; cursor: pointer; align-items: center; justify-content: center; gap: 0.5rem; border-radius: 0.25rem; border: 1px solid #000; background-color: #000; color: #fff; font-weight: bold; text-transform: uppercase; letter-spacing: 0.05em; transition: all 0.2s; padding: 0.75rem 1.5rem; }
        #gumroad-follow-form-embed-button:hover { background-color: #333; transform: translateY(-2px); box-shadow: 4px 4px 0px #000; }
        #gumroad-follow-form-embed-input { display: block; width: 100%; flex: 1 1 300px; border-radius: 0.25rem; border: 1px solid #000; background-color: #fff; padding: 0.75rem 1rem; font-size: 1rem; outline: none; transition: all 0.2s; }
        #gumroad-follow-form-embed-input:focus { box-shadow: 4px 4px 0px #000; }
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
        <button type="submit" id="gumroad-follow-form-embed-button">
          Follow
        </button>
      </form>
    </div>
  </section>
);

const CTASection = () => (
  <section className="bg-black text-white border-b-2 border-black">
    <div className="max-w-4xl mx-auto px-6 py-32 text-center">
      <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight uppercase">
        Professionalize Your Brand
      </h2>
      <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto font-medium">
        Don't let a pixelated logo hurt your business. Get a perfectly scalable vector logo today.
      </p>
      <a 
        href={GUMROAD_CHECKOUT_URL}
        className="gumroad-button inline-flex items-center gap-2 bg-white text-black px-12 py-6 font-black text-lg uppercase tracking-wider hover:bg-gray-200 transition-all border-2 border-white"
        data-gumroad-overlay-checkout="true"
      >
        Order Now <ArrowRight size={24} />
      </a>
      <p className="mt-8 text-xs text-gray-500 uppercase tracking-widest">
        Secure Checkout via Gumroad
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white py-12">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-xl font-black tracking-tighter text-black uppercase">
        Vectors<span className="text-gray-400">Pro</span>
      </div>
      <p className="text-gray-500 text-sm font-medium uppercase tracking-wider">
        &copy; {new Date().getFullYear()} VectorsPro Service.
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">
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
