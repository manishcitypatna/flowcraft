import React, { useEffect, useState } from "react";
import {
  BarChart3,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Policies() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animated background like home
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen relative overflow-hidden">
      {/* Animated Orbs Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-60 h-60 rounded-full opacity-50 animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.6) 0%, transparent 70%)",
            left: "10%",
            top: "20%",
            transform: `translate(${mousePosition.x * 0.02}px, ${
              mousePosition.y * 0.02
            }px)`,
          }}
        />
        <div
          className="absolute w-56 h-56 rounded-full opacity-30 animate-float-reverse"
          style={{
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)",
            right: "15%",
            top: "40%",
            transform: `translate(${mousePosition.x * -0.01}px, ${
              mousePosition.y * 0.015
            }px)`,
          }}
        />
        <div
          className="absolute w-48 h-48 rounded-full opacity-20 animate-float"
          style={{
            background:
              "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)",
            left: "70%",
            top: "10%",
            transform: `translate(${mousePosition.x * 0.025}px, ${
              mousePosition.y * -0.01
            }px)`,
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
              <Link to="/" className="text-xl font-bold">
                SMART FLOW CRAFT
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="hover:text-pink-400 transition-colors">
                Homepage
              </Link>
              <a href="#terms-of-use" className="hover:text-pink-400">
                Terms of Use
              </a>
              <a href="#privacy-policy" className="hover:text-pink-400">
                Privacy Policy
              </a>
              <a href="#cookie-policy" className="hover:text-pink-400">
                Cookie Policy
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Nav */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="hover:text-pink-400">
                  Homepage
                </Link>
                <a href="#terms-of-use" className="hover:text-pink-400">
                  Terms of Use
                </a>
                <a href="#privacy-policy" className="hover:text-pink-400">
                  Privacy Policy
                </a>
                <a href="#cookie-policy" className="hover:text-pink-400">
                  Cookie Policy
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Page Content */}
      <main className="relative z-10 pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-5xl font-bold mb-10 text-center gradient-text">
            Legal Policies
          </h1>
          <p className="text-gray-300 mb-16 text-center max-w-3xl mx-auto">
            Our policies reflect our dedication to transparency, privacy, and ethical business practices.
            Please review the details below to understand how SMART FLOW CRAFT operates responsibly.
          </p>

          {/* Terms of Use */}
          <section id="terms-of-use" className="mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-pink-500">
              Terms of Use
            </h2>
            <p className="text-gray-300 mb-4">
              Welcome to SMART FLOW CRAFT. By accessing our website or using our services, you agree to comply with these Terms of Use.
              These terms apply to all visitors, users, and clients of SMART FLOW CRAFT. If you do not agree, please discontinue using our services.
            </p>
            <p className="text-gray-300 mb-4">
              Our website content is protected by intellectual property laws. You may not reproduce, distribute, or modify
              our materials without written permission. SMART FLOW CRAFT reserves the right to make changes or improvements
              to this website at any time without notice.
            </p>
            <p className="text-gray-300 mb-4">
              You agree not to misuse the site or interfere with security features. We reserve the right to suspend or terminate access
              if we detect misuse, fraudulent activity, or violations of law.
            </p>
            <p className="text-gray-400 italic">Last updated: October 2025</p>
          </section>

          {/* Privacy Policy */}
          <section id="privacy-policy" className="mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-pink-500">
              Privacy Policy
            </h2>
            <p className="text-gray-300 mb-4">
              At SMART FLOW CRAFT, we are committed to protecting your personal information and ensuring your privacy. This policy explains how we handle your data.
            </p>
            <p className="text-gray-300 mb-4">
              We collect information such as your name, email, and communication details when you contact us. This data helps us deliver better
              service, respond to inquiries, and enhance user experience. All data is securely stored and processed in compliance with GDPR standards.
            </p>
            <p className="text-gray-300 mb-4">
              We never sell or rent your data. Third-party services (such as analytics or email systems) we use comply with strict privacy agreements.
              You can request data deletion or correction anytime by emailing{" "}
              <span className="text-purple-400">info@smartflowcraft.com</span>.
            </p>
            <p className="text-gray-400 italic">Last updated: October 2025</p>
          </section>

          {/* Cookie Policy */}
          <section id="cookie-policy" className="mb-20">
            <h2 className="text-3xl font-semibold mb-6 text-pink-500">
              Cookie Policy
            </h2>
            <p className="text-gray-300 mb-4">
              Our website uses cookies to improve functionality, analyze usage, and personalize your experience. Cookies are small text files stored
              on your device when you visit our website.
            </p>
            <p className="text-gray-300 mb-4">
              We use different types of cookies including essential, analytical, and preference cookies. You can manage or disable cookies
              through your browser settings, but disabling them may affect site performance.
            </p>
            <p className="text-gray-300 mb-4">
              By continuing to use our website, you consent to the use of cookies as described in this policy.
            </p>
            <p className="text-gray-400 italic">Last updated: October 2025</p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12 px-6 relative z-10">
        <div className="container mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <BarChart3 className="w-6 h-6 text-pink-500" />
            <span className="font-bold text-lg">SMART FLOW CRAFT</span>
          </div>
          <p className="text-gray-400 mb-4">
            © 2025 SMART FLOW CRAFT. All Rights Reserved. Designed with passion in Germany.
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <Link to="/policies#terms-of-use" className="hover:text-purple-400">
              Terms of Use
            </Link>
            <Link to="/policies#privacy-policy" className="hover:text-purple-400">
              Privacy Policy
            </Link>
            <Link to="/policies#cookie-policy" className="hover:text-purple-400">
              Cookie Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
