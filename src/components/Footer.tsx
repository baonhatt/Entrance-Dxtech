import { useState } from "react";
import logoFooter from "../assets/logo-footer.png"
import linkInIcon from "../assets/icons/LinkedWhiteIcon.svg"
import twitterIcon from "../assets/icons/TwitterWhiteIcon.svg"
import fbIcon from "../assets/icons/FaceWhiteIcon.svg"
export const Footer: React.FC = () => {
  return (
    <footer className="box-border inline-flex flex-col gap-2.5 items-start px-24 pt-15 py-0 w-full max-md:px-12 max-md:py-0 max-sm:px-5 max-sm:py-0">
      <div className="box-border flex flex-col gap-12 items-start px-16 pt-14 pb-12 w-full bg-zinc-900 rounded-[45px_45px_0_0] max-sm:px-5 max-sm:py-8">
        <div className="flex flex-col gap-16 items-start w-full">
          <div className="flex gap-40 justify-between items-center w-full max-md:flex-col max-md:gap-10 max-md:items-start">
            <div>
              <img src={logoFooter} alt="" srcSet="Logo Footer " />
            </div>
            <nav className="flex gap-10 items-start max-sm:flex-col max-sm:gap-5">
              <a href="/about" className="text-lg text-[var(--mywhite)] underline cursor-pointer">
                About us
              </a>
              <a
                href="/services"
                className="text-lg text-[var(--mywhite)] underline cursor-pointer"
              >
                Services
              </a>
              <a
                href="/use-cases"
                className="text-lg text-[var(--mywhite)] underline cursor-pointer"
              >
                Use Cases
              </a>
              <a
                href="/pricing"
                className="text-lg text-[var(--mywhite)] underline cursor-pointer"
              >
                Pricing
              </a>
              <a href="/blog" className="text-lg text-[var(--mywhite)] underline cursor-pointer">
                Blog
              </a>
            </nav>
            <div className="flex gap-5">
              <a href="https://linkedin.com" aria-label="LinkedIn">
                <div className="w-[30px] h-[30px] bg-[var(--mywhite)] rounded-full flex items-center justify-center">
                  <img src={linkInIcon} alt="" srcSet={linkInIcon} />
                  </div>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <div className="w-[30px] h-[30px]  rounded-full flex items-center justify-center">
                <img src={fbIcon} alt="" srcSet={fbIcon} />
                  
                </div>
              </a>
              <a href="https://twitter.com" aria-label="Twitter">
                <div className="w-[30px] h-[30px] bg-[var(--mywhite)] rounded-full flex items-center justify-center">
                <img src={twitterIcon} alt="" srcSet={twitterIcon} />
                </div>
              </a>
            </div>
          </div>
          <div className="flex gap-40 items-start w-full max-md:flex-col max-md:gap-10">
            {/* <FooterContactInfo /> */}
            <section className="flex flex-col gap-7 items-start">
              <div className="flex flex-col items-start">
                <h2 className="px-2 py-0 text-xl font-medium text-black bg-[var(--mylime)] rounded-lg">
                  Contact us:
                </h2>
              </div>
              <div className="flex flex-col gap-5 items-start">
                <p className="text-lg text-white">Email: info@positivus.com</p>
                <p className="text-lg text-white">Phone: 555-567-8901</p>
                <address className="text-lg text-white not-italic">
                  Address: 1234 Main St
                  <br />
                  Moonstone City, Stardust State 12345
                </address>
              </div>
            </section>
            <NewsletterSubscription />
          </div>
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};

export const NewsletterSubscription: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribe with email:", email);
  };

  return (
    <form
      onSubmit={handleSubscribe}
      className="flex gap-5 items-center px-10 py-14 rounded-2xl bg-zinc-800 max-md:box-border max-md:flex-col max-md:w-full"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="px-9 py-6 text-lg text-white rounded-2xl border border-white border-solid w-[285px] max-md:box-border max-md:w-full bg-transparent"
        required
      />
      <button
        type="submit"
        className="px-9 py-5 text-xl text-black bg-[var(--mylime)] rounded-2xl cursor-pointer max-md:w-full hover:bg-lime-400 transition-colors"
      >
        Subscribe to news
      </button>
    </form>
  );
};
export const FooterBottom: React.FC = () => {
  return (
    <div className="flex flex-col gap-12 items-start w-full">
      <hr className="w-full h-px bg-white border-0" />
      <div className="flex gap-10 items-start bottom-[text] max-sm:flex-col max-sm:gap-5 max-sm:items-center max-sm:text-center">
        <p className="text-lg leading-7 text-white">
          © 2023 Positivus. All Rights Reserved.
        </p>
        <a
          href="/privacy-policy"
          className="text-lg leading-7 text-white underline cursor-pointer"
        >
          Privacy Policy
        </a>
      </div>
    </div>
  );
};
