import Form from "../ui/Form";

function Cta() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-customLg mx-auto">
        <div className="shadow-customShadow grid grid-cols-1 grid-rows-1 overflow-hidden rounded-2xl bg-primaryTransparent md:grid-cols-[1.5fr_1fr] md:grid-rows-1 lg:grid-cols-[2fr_1fr]">
          <div className="p-6 xs:p-12 lg:p-24">
            <h2 className="mb-4 text-2xl font-semibold text-darkGray md:mb-8 md:text-4xl">
              Get a free coupon on every product
            </h2>

            <p className="mb-8 text-base leading-8 text-darkGray sm:text-lg">
              Get a free coupon with every product purchase! Enjoy discounts and
              special offers on healthy, delicious meals delivered to your door.
              Plus, your first meal is on us! Cancel or pause anytime.
            </p>

            <Form />
          </div>
          <div
            className="hidden md:block"
            style={{
              background: "url('./cta/woody.webp')",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top",
            }}
            aria-label="Woodie"
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
