import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="">
    <footer className="bg-black text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        {/* Footer Sections with Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 border-b border-gray-600 pb-8">
          {/* Company Info and Copyright */}
          <div className="text-center lg:text-left">
            <p className="mb-2">© 2025 Your Company. All rights reserved.</p>
            <p>
              <a href="/terms" className="hover:text-blue-500">Terms & Conditions</a> | 
              <a href="/privacy" className="hover:text-blue-500"> Privacy Policy</a>
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-500">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-500">Our Services</a></li>
              <li><a href="/contact" className="hover:text-blue-500">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>Email: <a href="mailto:contact@yourcompany.com" className="hover:text-blue-500">contact@yourcompany.com</a></p>
            <p>Phone: (123) 456-7890</p>
            <p>Location: 123 Main St, City, Country</p>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center lg:text-left">
            <h4 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
            <form action="/subscribe" method="post" className="flex flex-col items-center lg:items-start space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                required 
                className="p-3 w-full max-w-xs rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="submit" 
                className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaFacebook size={30} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaTwitter size={30} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaInstagram size={30} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </footer>
  
    </div>
  );
}
