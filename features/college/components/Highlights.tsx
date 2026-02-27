import Container from "@/features/shared/components/Container";
import Card from "@/features/shared/components/Card";
import { highlights } from "../data/highlights";

export default function Highlights() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          College Highlights
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.id}
                className="text-center p-10 border border-gray-200 hover:-translate-y-2 transition duration-300"
              >
                <div className="flex justify-center mb-6">
                  <Icon size={48} className="text-cyan-600" />
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}