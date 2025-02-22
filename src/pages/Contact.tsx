import linkedIn from "/linkedIn.webp";
import gitHub from "/gitHub.webp";
import email from "/email.webp";
import { ImageLink } from "../components/ImageLink";

export const Contact = () => {
  return (
    <div className="flex flex-col m-auto min-h-screen p-4 bg-brand-gradient-2">
      <div className="container-card">
        <h2 className="hidden">Contact</h2>

        <div className="flex flex-col m-auto frosted-glass">
          <div className="flex flex-col m-auto text-center">
            You've heard a bit about me, <br />
            I'd love to hear from you.
          </div>

          <div className="flex gap-6 justify-center container-card">
            <ImageLink
              alt="LinkedIn Logo"
              href="https://www.linkedin.com/in/christopher-flinchbaugh/"
              src={linkedIn}
            />
            <ImageLink
              alt="Email Logo"
              href="mailto:christopher.e.flinchbaugh@gmail.com"
              src={email}
            />
            <ImageLink
              alt="GitHub Logo"
              href="https://github.com/cflinchbaugh"
              src={gitHub}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
