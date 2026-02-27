import Container from "@/features/shared/components/Container";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <Container>

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Logo & About */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              <span className="text-cyan-600">S</span> College
            </h3>

            <p className="text-gray-600 mb-6">
              © 2026 College. <br />
              All rights reserved.
            </p>

            <div className="flex gap-4">
              <Facebook className="text-gray-600 hover:text-cyan-600 cursor-pointer" />
              <Twitter className="text-gray-600 hover:text-cyan-600 cursor-pointer" />
              <Linkedin className="text-gray-600 hover:text-cyan-600 cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Quick Links
            </h4>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-cyan-600 cursor-pointer">Home</li>
              <li className="hover:text-cyan-600 cursor-pointer">Admissions</li>
              <li className="hover:text-cyan-600 cursor-pointer">Programs</li>
              <li className="hover:text-cyan-600 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Resources
            </h4>

            <ul className="space-y-3 text-gray-600">
              <li className="hover:text-cyan-600 cursor-pointer">Campus Tours</li>
              <li className="hover:text-cyan-600 cursor-pointer">Academic Calendar</li>
              <li className="hover:text-cyan-600 cursor-pointer">Student Portal</li>
              <li className="hover:text-cyan-600 cursor-pointer">Alumni Network</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">
              Contact Us
            </h4>

            <ul className="space-y-3 text-gray-600">
              <li>123 College S,</li>
              <li>Cityname, ST 12345</li>
              <li>info@college.edu</li>
              <li>(123) 456-7890</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500">
          <p>
            Privacy Policy <span className="mx-2">|</span> Terms of Service
          </p>
        </div>

      </Container>
    </footer>
  );
}