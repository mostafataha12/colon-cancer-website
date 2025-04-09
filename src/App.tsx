import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Home, Upload, FileText, Users, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import HomePage from './pages/HomePage';
import UploadPage from './pages/UploadPage';
import ResultPage from './pages/ResultPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <nav className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <FileText className="h-8 w-8" />
                  <span className="font-bold text-xl">MedScan AI</span>
                </Link>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-4">
                  <NavLink to="/" icon={<Home className="h-4 w-4" />} text="Home" />
                  <NavLink to="/upload" icon={<Upload className="h-4 w-4" />} text="Upload" />
                  <NavLink to="/about" icon={<Users className="h-4 w-4" />} text="About" />
                  <NavLink to="/contact" icon={<Mail className="h-4 w-4" />} text="Contact" />
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md hover:bg-blue-700 focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <MobileNavLink to="/" text="Home" icon={<Home className="h-4 w-4" />} />
                <MobileNavLink to="/upload" text="Upload" icon={<Upload className="h-4 w-4" />} />
                <MobileNavLink to="/about" text="About" icon={<Users className="h-4 w-4" />} />
                <MobileNavLink to="/contact" text="Contact" icon={<Mail className="h-4 w-4" />} />
              </div>
            </div>
          )}
        </nav>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <footer className="bg-blue-600 text-white mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <FileText className="h-8 w-8" />
                  <span className="font-bold text-xl">MedScan AI</span>
                </div>
                <p className="text-blue-100">
                  Revolutionizing colon cancer detection through artificial intelligence.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-blue-100 hover:text-white">Home</Link></li>
                  <li><Link to="/upload" className="text-blue-100 hover:text-white">Upload Scan</Link></li>
                  <li><Link to="/about" className="text-blue-100 hover:text-white">About Us</Link></li>
                  <li><Link to="/contact" className="text-blue-100 hover:text-white">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>DELTA university</li>
                  <li>support@delta.com</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-100 hover:text-white">
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white">
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-blue-100 hover:text-white">
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-blue-500 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="text-blue-100">© 2025 DELTA AI. All rights reserved.</p>
                <div className="flex space-x-6 text-blue-100">
                  <a href="#" className="hover:text-white">Privacy Policy</a>
                  <a href="#" className="hover:text-white">Terms of Service</a>
                  <a href="#" className="hover:text-white">Cookie Policy</a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-700"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

function MobileNavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default App;