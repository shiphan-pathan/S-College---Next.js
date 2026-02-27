import Image from "next/image";
import Container from "@/features/shared/components/Container";
import Button from "@/features/shared/components/Button";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="pt-12 pb-24 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>

            <p className="text-gray-600 text-lg mb-8">
              Reach out to us with <span className="font-semibold text-gray-900">any questions </span> 
              or inquiries. <br /> We're here to assist you.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-600" />
                <p className="text-gray-700">
                  123 College Ave, Cityname, ST 12345
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-cyan-600" />
                <p className="text-gray-700">
                  info@college.edu
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-cyan-600" />
                <p className="text-gray-700">
                  (123) 456-7890
                </p>
              </div>
            </div>

            <Button className="px-6 py-3">
              Learn More
            </Button>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full h-125 ">


              <form className="w-full max-w-md space-y-4 bg-white/80 p-8 rounded-xl shadow-md">
                <div>
                  <label className="block text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Your Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-1">Message</label>
                  <textarea
                    rows={4}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                </div>

                <Button className="w-full py-3">
                  Send Message
                </Button>
              </form>

            </div>
          </div>
      </Container>
    </section>
  );
}