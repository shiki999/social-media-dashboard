import { data } from "../pages/api/data";
import BigCard from "./BigCard";

const Summary = () => {
  return (
    <>
      <div className="-translate-y-24 space-y-10">
        <div className="summary">
          <BigCard
            head_color={"bg-facebook"}
            platform={"facebook"}
            followers={data.facebook.followers}
            followers_change={data.facebook.followers_change}
          />
          <BigCard
            head_color={"bg-twitter"}
            platform={"twitter"}
            followers={data.twitter.followers}
            followers_change={data.twitter.followers_change}
          />
          <BigCard
            head_color={"bg-gradient-to-r from-instagram-color1 to-instagram-color2"}
            platform={"instagram"}
            followers={data.instagram.followers}
            followers_change={data.instagram.followers_change}
          />
          <BigCard
            head_color={"bg-youtube"}
            platform={"youtube"}
            followers={data.youtube.followers}
            followers_change={data.youtube.followers_change}
          />
        </div>
      </div>
    </>
  );
};

export default Summary;
