import Image from "next/image";
import Container from "@/features/shared/components/Container";
import Button from "@/features/shared/components/Button";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <div className="relative w-full h-100 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/about.jpg"
              alt="College Campus"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Our College
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We are dedicated to{" "}
              <span className="font-semibold text-gray-900">
                academic excellence
              </span>
              ,{" "}
              <span className="font-semibold text-gray-900">
                groundbreaking research
              </span>
              , and a{" "}
              <span className="font-semibold text-gray-900">
                vibrant campus life
              </span>
              . Our mission is to empower students to achieve their
              fullest potential in an inclusive and supportive environment.
              Join our community and embark on a transformative educational journey.
            </p>

            <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3">
              Learn More
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}