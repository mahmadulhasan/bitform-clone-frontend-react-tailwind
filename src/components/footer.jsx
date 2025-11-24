import React from "react";

const Footer = () => {
  return (
    <footer className="w-full lg:p-20 p-10 bg-primary grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 items-start justify-around">
      <div className="flex flex-col gap-2">
        <img
          src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/686675ba97fa82357a9b5440_Bitform%20Logo.svg"
          alt=""
          className="w-full"
        />
        <span className="text-sm">// Shoot us an email</span>
        <span className="text-sm">hello@bitform.digital</span>
        <span className=""></span>
        <span className="text-sm">Get News Update</span>
        <div className="flex px-3 py-2 bg-primary relative">
          <input type="email" className="outline-0 w-full" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-send-horizontal-icon lucide-send-horizontal"
          >
            <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z" />
            <path d="M6 12h16" />
          </svg>
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
            alt=""
            className="absolute w-10px top-0 left-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
            alt=""
            className="absolute w-10px top-0 right-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
            alt=""
            className="absolute w-10px bottom-0 left-0"
          />
          <img
            src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
            alt=""
            className="absolute w-10px bottom-0 right-0"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 items-center">
        <span className="text-lg bg-primary text-center px-5 py-1 w-fit relative">
            Navigation
            <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
                alt=""
                className="absolute w-10px top-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
                alt=""
                className="absolute w-10px top-0 right-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
                alt=""
                className="absolute w-10px bottom-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
                alt=""
                className="absolute w-10px bottom-0 right-0"
              />
        </span>
        <ul className="flex flex-col gap-2">
            <li>Home</li>
            <li>About</li>
            <li>Feature</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <span className="text-lg bg-primary text-center px-5 py-1 w-fit relative">
            Socials
            <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
                alt=""
                className="absolute w-10px top-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
                alt=""
                className="absolute w-10px top-0 right-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
                alt=""
                className="absolute w-10px bottom-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
                alt=""
                className="absolute w-10px bottom-0 right-0"
              />
        </span>
        <ul className="flex flex-col gap-2">
            <li>Twitter (X)</li>
            <li>LinkedIn</li>
            <li>Telegram</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3 items-center">
        <span className="text-lg bg-primary text-center px-5 py-1 w-fit relative">
            Utilities
            <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ec3f56167133bfaf3_Protected%20Password%20Text%20Input%20Line1.png"
                alt=""
                className="absolute w-10px top-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ed7b848859065342c_Protected%20Password%20Text%20Input%20Line2.png"
                alt=""
                className="absolute w-10px top-0 right-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1ea1797499826e7800_Protected%20Password%20Text%20Input%20Line3.png"
                alt=""
                className="absolute w-10px bottom-0 left-0"
              />
              <img
                src="https://cdn.prod.website-files.com/686615b36b71a296c4649489/68725b1e8df2ae8cbec14459_Protected%20Password%20Text%20Input%20Line4.png"
                alt=""
                className="absolute w-10px bottom-0 right-0"
              />
        </span>
        <ul className="flex flex-col gap-2">
            <li>Protected</li>
            <li>Style Guide</li>
            <li>License</li>
            <li>Pricing</li>
            <li>Changelog</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
