import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import { features } from "../../data/features";

import FeatureItem from "../../ui/FeatureItem";
import Loader from "../../ui/Loader";
import Item from "./Item";

function Proud() {
  const fetcher = useFetcher();
  const proudList = fetcher?.data
    ?.filter((el) => el.rating.rate > 4)
    .slice(0, 5);

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === "idle") {
        fetcher.load("/categories/all");
      }
    },
    [fetcher]
  );

  return (
    <section className="px-4 py-16">
      <div className="max-w-customMd mx-auto mb-8 text-center">
        <h2 className="text-2xl font-medium">Proud Collection</h2>
      </div>
      <div className="max-w-customLg mx-auto mb-16">
        {fetcher.state === "loading" ? (
          <Loader />
        ) : (
          <ul className="grid gap-2 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {proudList?.map((product) => (
              <Item key={product.id} product={product} />
            ))}
          </ul>
        )}
      </div>

      <div className="max-w-customLg mx-auto mb-16">
        <aside className="text-center text-base">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </aside>
      </div>

      <div className="max-w-customLg mx-auto">
        <ul className="grid grid-cols-1 gap-16 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {features.map((feature) => (
            <FeatureItem feature={feature} key={feature.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Proud;
