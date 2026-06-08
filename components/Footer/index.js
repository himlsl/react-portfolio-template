import React, { useState } from "react";
import Socials from "../Socials";
import data from "../../data/portfolio.json";

const Footer = ({}) => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText(data.email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl font-bold">Contact</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1>
            <div className="mt-5">
              <button
                onClick={handleEmailClick}
                className="text-lg underline underline-offset-2 opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              >
                {data.email}
              </button>
              {copied && (
                <p className="mt-2 text-sm opacity-60">
                  Email copied — use your preferred email service
                </p>
              )}
            </div>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
