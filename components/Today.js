import SmallCard from "./SmallCard";
import { data } from "../pages/api/data";

const Today = () => {
  return (
    <div className="wrapper -translate-y-12">
      <p className="font-bold text-2xl text-light-primary-text dark:text-dark-primary-text mb-5">
        Overview - Today
      </p>
      <div className="space-y-6 md:grid md:gap-5 md:space-y-0 md:grid-cols-2 xl:grid-cols-4">
        <SmallCard
          cardtitle={"Page Views"}
          platform={"facebook"}
          cardnumber={data.facebook.pageviews}
          cardchange={data.facebook.pageviews_change}
        />
        <SmallCard
          cardtitle={"Likes"}
          platform={"facebook"}
          cardnumber={data.facebook.likes}
          cardchange={data.facebook.likes_change}
        />
        <SmallCard
          cardtitle={"Likes"}
          platform={"instagram"}
          cardnumber={data.instagram.likes}
          cardchange={data.instagram.likes}
        />
        <SmallCard
          cardtitle={"Profile Views"}
          platform={"instagram"}
          cardnumber={data.instagram.profileviews}
          cardchange={data.instagram.profileviews_change}
        />
        <SmallCard
          cardtitle={"Retweets"}
          platform={"twitter"}
          cardnumber={data.twitter.retweets}
          cardchange={data.twitter.retweets_change}
        />
        <SmallCard
          cardtitle={"Likes"}
          platform={"twitter"}
          cardnumber={data.twitter.likes}
          cardchange={data.twitter.likes_change}
        />
        <SmallCard
          cardtitle={"Likes"}
          platform={"youtube"}
          cardnumber={data.youtube.likes}
          cardchange={data.youtube.likes_change}
        />
        <SmallCard
          cardtitle={"Total Views"}
          platform={"youtube"}
          cardnumber={data.youtube.totalviews}
          cardchange={data.youtube.totalviews_change}
        />
      </div>
    </div>
  );
};

export default Today;
