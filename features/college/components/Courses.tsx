import Image from "next/image";
import Container from "@/features/shared/components/Container";
import Button from "@/features/shared/components/Button";
import { courses } from "../data/courses";

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-gray-50">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our Courses
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Advance your education with our diverse range of high-quality courses.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 w-full">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {course.title}
                </h3>

                <p className="text-gray-600 mb-6 grow">
                  {course.description}
                </p>

                <Button className="mx-auto bg-blue-600 hover:bg-blue-700 px-6 py-2">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}