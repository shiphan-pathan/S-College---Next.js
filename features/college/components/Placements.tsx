import Image from "next/image";
import Container from "@/features/shared/components/Container";
import Button from "@/features/shared/components/Button";

export default function Placements() {
  return (
    <section id="placements" className="pt-24 pb-12 bg-gray-50">
      <Container>
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Career Placement & Success
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We provide comprehensive career support to help students succeed
              in securing jobs at top companies. Our dedicated team offers
              guidance, resources, and connections to industry leaders to ensure
              a smooth transition from college to career.
            </p>

            <Button className=" px-6 py-3">
              Learn More
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative w-full h-100 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/placement.jpg"
              alt="Placement Interview"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Company Logos */}
          <div className="flex flex-col md:flex-row items-center justify-around gap-10">
            <Image
              src="/assets/google.png"
              alt="Google"
              width={220}
              height={60}
              className="object-contain"
            />

            <Image
              src="/assets/amazon.png"
              alt="Amazon"
              width={220}
              height={60}
              className="object-contain"
            />

            <Image
              src="/assets/microsoft.png"
              alt="Microsoft"
              width={220}
              height={60}
              className="object-contain"
            />
          </div>

      </Container>
    </section>
  );
}