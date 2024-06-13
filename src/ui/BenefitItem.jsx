function BenefitItem({ benefit }) {
  return (
    <li>
      <div className="mb-4">
        <img
          src={benefit.source}
          alt={benefit.content}
          className="h-auto w-full"
        />
      </div>
      <div>
        <p className="mb-2 text-base sm:text-lg">{benefit.content}</p>
        <a
          href={benefit.link}
          onClick={(e) => e.preventDefault()}
          className="text-sm text-primaryDark sm:text-base"
          aria-label={benefit.alt}
        >
          {benefit.linkName} &rarr;
        </a>
      </div>
    </li>
  );
}

export default BenefitItem;
