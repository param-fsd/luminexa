import Image from "next/image";
import React from "react";

// Reusable FancyText component for uniform styling
const FancyText = ({ text, className }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <span
          key={index}
          className={`${
            index % 3 === 0
              ? "font-bold"
              : index % 3 === 1
              ? "italic font-light"
              : "font-medium"
          } ${className}`}
        >
          {word}{" "}
        </span>
      ))}
    </>
  );
};

const LogoSection = () => {
  return (
    <section className="w-full py-12 border-y bg-black">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-base font-medium text-muted-foreground">
            <FancyText text="Trusted by innovative companies" className="text-base" />
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Image
                key={i}
                src={`/${i}.png`}
                alt={`Company logo ${i}`}
                width={120}
                height={60}
                className="w-auto opacity-70 transition-all hover:opacity-100 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;