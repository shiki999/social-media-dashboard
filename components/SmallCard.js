import Image from "next/image";

const SmallCard = ({ cardtitle, platform, cardnumber, cardchange }) => {
  return (
    <div className="grid grid-cols-2 gap-5 p-5 rounded-md bg-light-card-bg dark:bg-dark-card-bg">
      <p className="text-md font-semibold text-light-blue-text dark:text-dark-blue-text">
        {cardtitle}
      </p>
      <div className="justify-self-end">
        <Image src={`/icon-${platform}.svg`} width={20} height={20} />
      </div>

      <p className="text-3xl font-bold text-light-primary-text dark:text-dark-primary-text">
        {cardnumber}
      </p>
      <div className="flex items-center mt-3 space-x-1 justify-self-end">
        <Image
          src={`/${cardchange > 0 ? "icon-up" : "icon-down"}.svg`}
          width={8}
          height={4}
        />
        <p
          className={`text-xs font-semibold ${
            cardchange > 0 ? "text-lime-green" : "text-bright-red"
          }`}
        >
          {Math.abs(cardchange)}%
        </p>
      </div>
    </div>
  );
};

export default SmallCard;
