import Image from "next/image";

const BigCard = ({ platform, followers, head_color, followers_change }) => {
  return (
    <div className="flex flex-col relative items-center py-6 rounded-md bg-light-card-bg dark:bg-dark-card-bg">
      <div className={`absolute top-0 left-0 w-full h-1 ${head_color}`}></div>
      <div className="flex space-x-2">
        <Image src={`/icon-${platform}.svg`} width={20} height={20} />
        <p className="text-sm font-semibold text-light-blue-text dark:text-dark-blue-text">
          @nathanf
        </p>
      </div>
      <p className="text-5xl font-bold mt-6 text-light-primary-text dark:text-dark-primary-text">
        {followers}
      </p>
      <p className="text-xs my-2 tracking-[.3em] text-light-blue-text dark:text-dark-blue-text">
        FOLLOWERS
      </p>
      <div className="flex items-center mt-3 space-x-1">
        <Image
          src={`/${followers_change > 0 ? "icon-up" : "icon-down"}.svg`}
          width={8}
          height={4}
        />
        <p
          className={`text-xs font-semibold ${
            followers_change > 0 ? "text-lime-green" : "text-bright-red"
          }`}
        >
          {Math.abs(followers_change)} Today
        </p>
      </div>
    </div>
  );
};

export default BigCard;
