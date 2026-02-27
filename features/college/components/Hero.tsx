import Image from "next/image";
import Container from "@/features/shared/components/Container";
import Button from "@/features/shared/components/Button";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/assets/Hero.png"
          alt="College Campus"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <Container>
        <div className="relative z-10 h-screen flex items-center">
          
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Shape Your Future With Us
            </h1>

            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Discover excellence in education.
              Join our vibrant campus life.
            </p>

            <div className="flex gap-4">
              <Button>Get Started</Button>

              <Button
                variant="secondary"
                className="bg-white text-gray-900 border-none"
              >
                Explore Programs
              </Button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}