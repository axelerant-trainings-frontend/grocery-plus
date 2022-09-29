import React from "react";
import Image from "next/image";
import Link from "next/link";
import cardType from "../../@types/card.types";

const Card = (props: cardType) => {
  const { variant, isDiscount, imgSrc, imgAlt, link, cardText } = props;
  let classes;
  switch (variant) {
    case "Card Primary":
      classes = "w-xl h-4xl bg-white rounded-sm p-3.5 font-primary flex justify-center flex-col";
      break;
    case "Card Secondary":
      classes = "w-lg h-3xl bg-flashWhite rounded-sm";
      break;
    case "Card Tertiary":
      classes = "w-2xl h-6xl bg-white rounded-sm";
      break;
    case "Card Quaternary":
      classes = "w-sm h-2xl bg-white rounded-sm";
      break;
  }

  return (
    <Link href={link} passHref>
      <div className={classes}>
        {isDiscount && <div>20% off</div>}
        <Image
          alt={imgAlt}
          src={imgSrc}
          className="h-auto w-fit"
          width={100}
          height={100}
        />
        <h4 className="text-md">{cardText}</h4>
      </div>
    </Link>
  );
};

export default Card;
