import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  Menu, 
  X, 
  ArrowRight,
  Code,
  Search,
  Palette,
  Target,
  Users,
  Award,
  Star,
  ChevronLeft,
  ChevronRight,
  Globe,
  Smartphone,
  TrendingUp,
  Eye,
  Layers,
  Zap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle,
  PlayCircle,
  MessageCircle
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Website Development",
      description: "We design and build responsive, user-friendly websites tailored to your business goals. From corporate websites to e-commerce platforms, our development team ensures fast loading speeds, mobile compatibility, and secure hosting for a seamless digital presence."
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "App Development", 
      description: "We create powerful mobile and web applications that deliver exceptional user experiences. Our solutions include Android, iOS, and cross-platform apps with custom features, intuitive UI/UX, and robust performance to help businesses engage their customers anytime, anywhere.."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Our digital marketing strategies help brands grow their online visibility and conversions. From social media campaigns and content marketing to PPC advertising and analytics, we craft data-driven campaigns that deliver measurable ROI."
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Graphic Design",
      description: "We bring ideas to life with creative, high-quality graphic design. Whether it’s social media creatives, brochures, packaging, or advertisements, our designs are crafted to capture attention, communicate your message, and build strong brand recognition."
    },
    {
      icon: <Layers className="w-12 h-12" />,
      title: "Brand Identity",
      description: "We help businesses stand out by building strong and memorable brand identities. Our services cover logo design, color palettes, typography, and brand guidelines, ensuring consistency across all platforms and customer touchpoints."
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "Search Engine Optimization",
      description: "Boost your search rankings and drive organic traffic with our expert SEO services. We optimize websites with keyword research, technical SEO, content strategy, and backlink building to improve visibility and attract the right audience."
    }
  ];

  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Free Consultations",
      description: "Schedule a one-on-one consultation where we understand your business needs, challenges, and goals. Our experts guide you with the right strategy tailored for your project."
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Discover the product",
      description: "We research and analyze your industry, competitors, and target audience to design the right product strategy. This step ensures your solution is market-ready and customer-focused."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Wireframe & Production",
      description: "Our team creates a detailed wireframe and moves into the development stage. Every feature is carefully planned and tested to align with your objectives and deliver top-quality results."
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Prototype Application",
      description: "We deliver a working prototype for feedback and then launch the final product with full functionality. Continuous improvements and updates keep your solution ahead in the market."
    }
  ];

const portfolioItems = [
  {
    category: "ARTIFICIAL INTELLIGENCE",
    title: "AI Chatbot for E-Commerce",
    client: "ShopEase GmbH",
    date: "10 Feb 2024",
    location: "Berlin, Germany",
    budget: "$15,000",
    image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/d8ec2132-ae7b-4540-9da5-d5fe79fa98ca.png"
  },
  {
    category: "WEB DEVELOPMENT",
    title: "FinTech Dashboard Platform",
    client: "CrediBank AG",
    date: "22 Mar 2024",
    location: "Munich, Germany",
    budget: "$25,000",
    image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/aeb1b51e-2fed-431d-a08f-de95aa07ae21.png"
  },
  {
    category: "MACHINE LEARNING",
    title: "Predictive Analytics for Healthcare",
    client: "MediCore Systems",
    date: "05 Apr 2024",
    location: "Hamburg, Germany",
    budget: "$30,000",
    image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/c7f72b32-b74c-4c06-a879-3c174634c1a7.png"
  },
  {
    category: "CLOUD COMPUTING",
    title: "Multi-Tenant SaaS Migration",
    client: "BrightData Technologies",
    date: "18 May 2024",
    location: "Frankfurt, Germany",
    budget: "$40,000",
    image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/37e0cf11-fdb9-4c37-b60c-d5299314f237.png"
  },
  {
    category: "DIGITAL BRANDING",
    title: "AI-Powered Marketing Automation",
    client: "Nova Brands GmbH",
    date: "07 Jun 2024",
    location: "Cologne, Germany",
    budget: "$20,000",
    image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/95964d24-7b95-4aa5-a589-c2cab3e829c3.png"
  },
  {
    category: "MOBILE APP DEVELOPMENT",
    title: "Smart IoT Home Controller",
    client: "HomeEase Innovations",
    date: "12 Jul 2024",
    location: "Stuttgart, Germany",
    budget: "$35,000",
    image: "https://user-gen-media-assets.s3.amazonaws.com/gpt4o_images/38d2bc1b-959d-432d-aaad-cd6f6a0aec2c.png"
  }
];


  const testimonials = [
    {
      name: "Michael Chen",
      role: "CEO",
      company: "BRIGHT ELECTRONICS",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Choosing SMART FLOW CRAFT for digital marketing was a game-changer. Our SEO ranking skyrocketed, leading to increased visibility and a significant boost in sales."
    },
    {
      name: "Anna Miller", 
      role: "Marketing Director",
      company: "FRESH BITES CATERING",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "Data analytics by SMART FLOW CRAFT provided invaluable insights. Their expertise helped us make informed decisions, leading to remarkable business growth."
    },
    {
      name: "Sarah Thompson",
      role: "Founder", 
      company: "THOMPSON & CO.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      content: "SMART FLOW CRAFT transformed our online presence! Their web development expertise and creative design elevated our brand, attracting more customers than ever before."
    }
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-60 h-60 rounded-full opacity-50 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)',
            left: '10%',
            top: '20%',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            animationDelay: '0s',
            animationDuration: '12s'
          }}
        />
        <div 
          className="absolute w-60 h-60 rounded-full opacity-30 animate-float-reverse"
          style={{
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)',
            right: '15%',
            top: '40%',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * 0.015}px)`,
            animationDelay: '5s',
            animationDuration: '12s'
          }}
        />
        <div 
          className="absolute w-32 h-32 rounded-full opacity-30 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
            left: '70%',
            top: '10%', 
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * -0.01}px)`,
            animationDelay: '10s',
            animationDuration: '12s'
          }}
        />
        <div 
          className="absolute w-48 h-48 rounded-full opacity-20 animate-float-reverse"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.6) 0%, transparent 70%)',
            left: '20%',
            bottom: '30%',
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * 0.01}px)`,
            animationDelay: '15s',
            animationDuration: '35s'
          }}
        />
        <div 
          className="absolute w-56 h-56 rounded-full opacity-15 animate-float"
          style={{
            background: 'radial-gradient(circle, rgba(244, 114, 182, 0.5) 0%, transparent 70%)',
            right: '25%',
            bottom: '20%',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * -0.02}px)`,
            animationDelay: '20s', 
            animationDuration: '28s'
          }}
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-8 h-8 text-pink-500" />
              <span className="text-xl font-bold">SMART FLOW CRAFT</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="hover:text-pink-400 transition-colors">Homepage</button>
              <button onClick={() => scrollToSection('about')} className="hover:text-pink-400 transition-colors">About us</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-pink-400 transition-colors">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-pink-400 transition-colors">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="hover:text-pink-400 transition-colors">Contact us</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-pink-400 transition-colors">Pages</button>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                GET STARTED
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
              <nav className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-left hover:text-pink-400 transition-colors">Homepage</button>
                <button onClick={() => scrollToSection('about')} className="text-left hover:text-pink-400 transition-colors">About us</button>
                <button onClick={() => scrollToSection('services')} className="text-left hover:text-pink-400 transition-colors">Services</button>
                <button onClick={() => scrollToSection('portfolio')} className="text-left hover:text-pink-400 transition-colors">Portfolio</button>
                <button onClick={() => scrollToSection('contact')} className="text-left hover:text-pink-400 transition-colors">Contact us</button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 text-center"
                >
                  GET STARTED
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-24 pb-16 px-6">
        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="inline-block bg-gray-800 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-gray-700">
              WELCOME TO SMART FLOW CRAFT
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Path to Digital
            <br />
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Excellence
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            At SMART FLOW CRAFT, we help businesses transform ideas into powerful digital solutions. From strategy and design to execution and growth, we provide end-to-end services that ensure your brand stays ahead in today’s competitive landscape. Our focus is on innovation, performance, and long-term success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              GET STARTED
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="border-2 border-gray-600 px-8 py-3 rounded-full hover:border-pink-500 hover:text-pink-400 transition-all duration-300 font-medium"
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 relative z-10">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Join over 300,000+ businesses to
              </h2>
              <p className="text-xl text-gray-300">
                create unique brand designs.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-40">
                <div className="flex justify-center">
                  <div className="text-gray-0 font-bold text-lg">
                    <img src="https://1000logos.net/wp-content/uploads/2023/11/Copilot-Logo.png" alt="" />
                    <p className="flex justify-center">Co-Pilot</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="text-gray-0 font-bold text-lg">
                    <img src="https://www.carlogos.org/logo/Volkswagen-logo-2015-1920x1080.png" alt="" />
                    <p className="flex justify-center">Volkswagen</p>
                  </div>
                </div><div className="flex justify-center">
                  <div className="text-gray-0 font-bold text-lg">
                    <img src="https://img.icons8.com/?size=96&id=Oi106YG9IoLv&format=png" alt="" />
                    <p className="flex justify-center">Deutsche Telekom</p>
                  </div>
                </div><div className="flex justify-center">
                  <div className="text-gray-0 font-bold text-lg">
                    <img src="https://img.icons8.com/?size=96&id=j7n0pGktmI2d&format=png" alt="" />
                    <p className="flex justify-center">Deutsche Radios</p>
                  </div>
                </div><div className="flex justify-center">
                  <div className="text-gray-0 font-bold text-lg">
                    <img src="https://img.icons8.com/?size=96&id=jD-fJzVguBmw&format=png" alt="" />
                    <p className="flex justify-center">Redux</p>
                  </div>
                </div><div className="flex justify-center">
                  <div className="text-gray-0 font-bold text-lg">
                    <img src="https://img.icons8.com/?size=96&id=34350&format=png" alt="" />
                    <p className="flex justify-center">Union Pay</p>
                  </div>
                </div><div className="flex justify-center">
                  <div className="text-gray-0 font-bold text-lg">
                    <img src="https://img.icons8.com/?size=96&id=40604&format=png" alt="" />
                    <p className="flex justify-center">B-Magic</p>
                  </div>
                </div><div className="flex justify-center">
                  <div className="text-gray-0 font-bold text-lg">
                    <img src="https://img.icons8.com/?size=96&id=106536&format=png" alt="" />
                    <p className="flex justify-center">Art Station</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlight Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="https://img.freepik.com/free-photo/business-hand-robot-handshake-artificial-intelligence-digital-transformation_53876-138972.jpg?semt=ais_hybrid&w=740&q=80"
                alt="Team working together"
                className="rounded-2xl w-full h-96 object-cover"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-3">
                <span className="text-sm font-bold">Premium</span>
              </div>
            </div>
            
            <div>
              <span className="text-pink-500 font-medium mb-4 block">WHO WE ARE</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
               Your Digital Future, Our Expertise: SMART FLOW CRAFT Delivers Excellence.
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                At SMART FLOW CRAFT, we specialize in building digital solutions that empower businesses to grow and innovate. With a team of creative designers, skilled developers, and strategic marketers, we deliver high-quality services tailored to your unique goals. Our mission is to blend technology with creativity, ensuring long-term success for every client we partner with.
              </p>
              <button 
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                DISCOVER MORE
              </button>
            </div>
          </div>

          {/* Additional Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 relative">
              <div className="absolute -top-3 left-8 bg-purple-600 rounded-full p-3">
                <Target className="w-6 h-6" />
              </div>
              <div className="pt-4">
                <span className="text-purple-400 font-medium text-sm block mb-2">OUR VISION</span>
                <h3 className="text-2xl font-bold mb-4">
                  Elevate Your Digital Presence with SMART FLOW CRAFT Expertise</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our vision is to empower businesses by creating impactful digital experiences that inspire growth, innovation, and long-lasting connections. We aim to be a trusted partner for brands striving to achieve excellence in the digital landscape.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 p-8 rounded-2xl border border-pink-500/20 relative">
              <div className="absolute -top-3 left-8 bg-pink-600 rounded-full p-3">
                <Zap className="w-6 h-6" />
              </div>
              <div className="pt-4">
                <span className="text-pink-400 font-medium text-sm block mb-2">OUR MISSION</span>
                <h3 className="text-2xl font-bold mb-4">
                  Unleash Your Potential in the Digital Realm with SMART FLOW CRAFT</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our mission is to deliver tailored digital solutions through creativity, technology, and strategy. We focus on helping businesses harness their true potential, ensuring measurable results and sustainable success in an ever-evolving digital world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-pink-500 font-medium mb-4 block">WHAT WE OFFER</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Where Strategy Meets Digital. Your Success Story Begins with SMART FLOW CRAFT.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 group">
                <div className="text-purple-500 mb-6 group-hover:text-pink-500 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                  LEARN MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">56K+</div>
              <div className="text-purple-100 font-medium">PROJECTS DONE</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">38K+</div>
              <div className="text-purple-100 font-medium">HAPPY CLIENTS</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.7</div>
              <div className="text-purple-100 font-medium">CLIENT RATINGS</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">35+</div>
              <div className="text-purple-100 font-medium">AWARD WINNING</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-pink-500 font-medium mb-4 block">HOW IT WORKS</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Unlock Astonishing Results with Just 4 Simple Steps!
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 rounded-full text-sm font-medium hover:from-pink-600 hover:to-purple-700 transition-all duration-300 mt-4">
                  LEARN MORE
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="text-pink-500 font-medium mb-4 block">NAVIGATING DIGITAL HORIZONS WITH SMART FLOW CRAFT: YOUR TRUSTED PARTNER</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
               Experience the innovation of SMART FLOW CRAFT. Let’s discuss your project and bring your vision to life.
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
               At SMART FLOW CRAFT, we combine creativity and technology to deliver impactful digital solutions. Our team focuses on understanding your goals, building tailored strategies, and executing with precision to help your business thrive in the digital era.
              </p>
              
              {/* Skills Progress Bars */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Design & Branding</span>
                    <span className="text-purple-400">87%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Web & App Developer</span>
                    <span className="text-purple-400">91%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '91%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Digital Marketing</span>
                    <span className="text-purple-400">74%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '74%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Social Media Management</span>
                    <span className="text-purple-400">83%</span>
                  </div>
                  <div className="bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '83%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-gray-700">
                <Globe className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Timely and Transparent Communication</h3>
                <p className="text-gray-300 text-sm">
                  We believe in clear, honest, and consistent communication. Our team keeps you updated at every stage of your project, ensuring there are no surprises — only results.
                </p>
             
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 p-6 rounded-2xl border border-purple-500/20">
                <TrendingUp className="w-12 h-12 text-pink-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Boost Traffic & Sales</h3>
                <p className="text-gray-300 text-sm">
                  Drive measurable growth with our data-driven strategies. From SEO to digital marketing, we focus on increasing your visibility, attracting the right audience, and maximizing your ROI.
                </p>
                
              </div>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 p-6 rounded-2xl border border-pink-500/20">
                <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">Premium Support</h3>
               {/* <div className="text-2xl font-bold text-pink-400 mb-2">(888) 4000-2234</div> */}
                <p className="text-gray-300 text-sm mb-4">
                  Our dedicated support team is always ready to assist you. Whether it's a query, a technical issue, or ongoing guidance, we ensure your business never slows down.
                </p>
               
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="text-4xl font-bold mb-2">4.7+</div>
            <div className="text-gray-300 mb-4">Client Ratings</div>
            <div className="flex justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-300 max-w-md mx-auto">
              Duis autem vel eum iriure dolor in hendrerit vulputate velit esse molestie consequat.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-pink-500 font-medium mb-4 block">FEATURED PROJECT</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Unleashing the Power of Innovation and Creativity.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-xs text-purple-400 font-medium mb-1">{item.category}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
                        <div>
                          <div className="text-xs text-purple-400">Client</div>
                          <div>{item.client}</div>
                        </div>
                        <div>
                          <div className="text-xs text-purple-400">Date</div>
                          <div>{item.date}</div>
                        </div>
                        <div>
                          <div className="text-xs text-purple-400">Location</div>
                          <div>{item.location}</div>
                        </div>
                        <div>
                          <div className="text-xs text-purple-400">Budget</div>
                          <div>{item.budget}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Portfolio CTA */}
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 p-8 rounded-2xl border border-purple-500/20 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Pioneering Digital Excellence: Discover the SMART FLOW CRAFT Advantage.
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              At SMART FLOW CRAFT, we combine creativity, technology, and strategy to deliver solutions that drive real impact. From innovative design to powerful development and marketing, we help businesses thrive in the ever-changing digital world.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <span className="text-pink-500 font-medium mb-4 block">TESTIMONIAL</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Client Feedback & Reviews
            </h2>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`bg-gray-800 p-8 rounded-2xl border border-gray-700 transition-all duration-500 ${
                    index === currentTestimonial ? 'transform scale-105 border-purple-500' : ''
                  }`}
                >
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-purple-400 text-xs font-medium">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{testimonial.content}</p>
                  <div className="flex mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-purple-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-pink-500 font-medium mb-4 block">GET IN TOUCH</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Digital Journey?
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Let's discuss your project and discover how we can help you achieve 
                digital excellence. Our team is ready to bring your vision to life.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-purple-500" />
                  <span>info@smartflowcraft.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-purple-500" />
                  <span>(888) 4000-2234</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-purple-500" />
                  <span>An d. Georg-Viktor-Quelle, 34537 Bad Wildungen, Germany</span>
                </div>
              </div>
              
              
            </div>
            
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
   {/*    <footer className="bg-gray-900 border-t border-gray-800 py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <BarChart3 className="w-8 h-8 text-pink-500" />
                <span className="text-xl font-bold">SMART FLOW CRAFT</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming Ideas into Digital Excellence. Elevate your online presence 
                with innovative solutions and strategic digital services.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Website Development</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">App Development</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Graphic Design</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Brand Identity</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Search Engine Optimization</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Live Support</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Email Support</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Article & News</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Legal Notices</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              Copyright 2025 SMART FLOW CRAFT All rights reserved. Powered by MintCreative.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of use</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>*/}
      <p className="text-gray-400 text-sm">
              Copyright 2025 SMART FLOW CRAFT All rights reserved. Powered by MintCreative.
            </p>
    </div>
  );
}

export default App;