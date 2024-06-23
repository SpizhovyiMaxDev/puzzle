import Button from "../ui/Button";

function Hero() {
  return (
    <section
      className="flex min-h-screen items-center mt-24"
      style={{
        backgroundImage: 'url("/backgrounds/hero.webp")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-lg bg-white p-8 py-14 opacity-80 xs:p-14 lg:max-w-2xl lg:p-24">
        <h1 className="mb-2 text-2xl font-bold lg:text-4xl">
          Explore Our Stunning New Season Arrivals Today
        </h1>
        <p className="mb-4 text-base">
          Discover the latest in electronics, jewelry, and more, blending style
          with unbeatable value.
        </p>

        <Button type="primary" path="/categories/all">
          Discover our collection
        </Button>
      </div>
    </section>
  );
}

export default Hero;
