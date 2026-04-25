import Link from "next/link";
import { Mail, Phone, Code, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-16" id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Let's build something <span className="text-primary text-gray-500">extraordinary</span> together.
            </h2>
            <p className="text-gray-400 max-w-md text-lg mb-8 font-light">
              Open for opportunities, collaborations, or just a chat. Let's create impactful digital experiences.
            </p>
            <a
              href="mailto:arifarman7862@gmail.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-wider text-gray-400">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:arifarman7862@gmail.com" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Mail size={18} />
                  arifarman7862@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+8801857055057" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone size={18} />
                  01857055057
                </a>
              </li>
              <li className="text-gray-300 mt-4">
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-6 uppercase tracking-wider text-gray-400">Social</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://github.com/arifarman22" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Code size={18} />
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/arif-arman-70398a18b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Briefcase size={18} />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Arif Arman. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
