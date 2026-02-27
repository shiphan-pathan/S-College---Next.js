"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Container from "../shared/components/Container";
import Button from "../shared/components/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl font-bold text-gray-900 cursor-pointer"
          >
            <span className="text-cyan-600">S</span> College
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 font-medium">
            <a href="#about" className="hover:text-cyan-600">
              About
            </a>
            <a href="#courses" className="hover:text-cyan-600">
              Courses
            </a>
            <a href="#placements" className="hover:text-cyan-600">
              Placements
            </a>
            <a href="#contact" className="hover:text-cyan-600">
              Contact
            </a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button>Apply Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 pb-4 font-medium">
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="#courses" onClick={() => setIsOpen(false)}>
              Courses
            </a>
            <a href="#placements" onClick={() => setIsOpen(false)}>
              Placements
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
            <Button className="w-full">Apply Now</Button>
          </div>
        )}
      </Container>
    </nav>
  );
}