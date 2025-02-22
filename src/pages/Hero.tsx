import linkedIn from "/linkedIn.webp";

export const Hero = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen bg-brand-gradient-1">
      <div className="text-[10rem]">CF</div>
      <h1 className="text-[2rem]">Chris Flinchbaugh</h1>

      <div className="flex flex-col text-center gap-2 md:flex-row">
        <div>Software Engineer</div>
        <span className="hidden md:inline">|</span>
        <div>Front-End Specialized</div>
        <span className="hidden md:inline">|</span>
        <div>UI/UX</div>
      </div>

      <div className="p-6">
        <a
          href="https://www.linkedin.com/in/christopher-flinchbaugh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="bg-brand-primary-400 rounded-lg p-1 hover:bg-brand-primary-600"
            height={32}
            width={32}
            src={`${linkedIn}`}
            alt="LinkedIn Logo"
          ></img>
        </a>
      </div>
    </div>
  );
};
