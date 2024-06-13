function FeatureItem({ feature }) {
  return (
    <li>
      <div className="mb-4 inline-block rounded-full bg-primaryTransparent p-5">
        <svg width="32px" height="32px">
          <use href={`/app-icons/icons.svg#${feature.icon}`}></use>
        </svg>
      </div>
      <h3 className="mb-2 text-lg font-semibold lg:text-xl">{feature.title}</h3>
      <p className="text-base leading-7 md:text-lg">{feature.content}</p>
    </li>
  );
}

export default FeatureItem;
