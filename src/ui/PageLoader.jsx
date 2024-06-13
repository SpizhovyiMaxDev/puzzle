function PageLoader() {
  return (
    <div
      className="
        fixed
        z-40
        flex
        h-screen
        h-xl
        w-full
        items-center
        justify-center
        bg-slate-200/20
        backdrop-blur-sm
    "
    >
      <div className="loader"></div>
    </div>
  );
}

export default PageLoader;
