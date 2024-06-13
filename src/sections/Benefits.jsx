import { benefits } from "../data/benefits";
import BenefitItem from "../ui/BenefitItem";

function Benefits() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-customLg mx-auto mb-8 text-center">
        <h2 className="text-2xl font-medium">Our Benefits</h2>
      </div>

      <div className="max-w-customLg mx-auto">
        <ul className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <BenefitItem benefit={benefit} key={benefit.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Benefits;
