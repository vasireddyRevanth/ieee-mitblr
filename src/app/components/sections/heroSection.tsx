export default function Hero() {
  return (
    <section className="h-screen w-full snap-start snap-always bg-[var(--background-primary)] relative">
      <div className="container">
        {/* Grid overlay */}
        <div
          className="absolute
          inset-0
          grid
          grid-cols-[repeat(auto-fill,minmax(calc(62/1920*100vw),1fr))]
          grid-rows-[repeat(auto-fill,minmax(calc(62/1920*100vw),1fr))]
          opacity-15"
        >
          {Array.from({ length: 500 }).map((_, i) => (
            <div key={i} className="border border-[var(--brand-secondary)]" />
          ))}
        </div>

        {/* Top bar icons */}
        <div className="absolute top-[calc(69/1080*100vh)] left-[calc(69/1920*100vw)] flex gap-[calc(24/1920*100vw)] z-10">
          <svg
            width="calc(48/1920*100vw)"
            height="calc(48/1920*100vw)"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="@/icons/Calendar.svg"
          ></svg>
          <svg
            width="calc(48/1920*100vw)"
            height="calc(48/1920*100vw)"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG path for second icon */}
          </svg>
        </div>
        <h1
          className="absolute
          top-[calc(274/1080*100vh)]
          left-[calc(188/1920*100vw)]
          text-[4rem] md:text-[6rem] lg:text-[8rem]
          font-bold tracking-[-5%]
          leading-[4rem] md:leading-[6rem] lg:leading-[8rem]
          text-[var(--text-primary)]"
        >
          {" "}
          IEEE
          <br />
          STUDENT
          <br />
          CHAPTER
          <br /> MITB
        </h1>
        {/* <Button>Get Started</Button> */}
      </div>
    </section>
  );
}
