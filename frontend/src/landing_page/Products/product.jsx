import Hero from "./Hero";
import Leftimg from "./Leftimg";
import Rightimg from "./Rightimg";
import Universe from "./Universe";

const Product = () => {
  return (
    <div>
      <Hero />
      <Rightimg
        img="assets/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="Try demo "
        link2="Learn more"
        img1="assets/googlePlayBadge.svg"
        img2="assets/appstoreBadge.svg"
      />
      <Leftimg
        img="assets/console.png"
        title="Console"
        description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link="Learn more "
      />
      <Rightimg
        img="assets/coin.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="Coin"
        link2=""
        img1="assets/googlePlayBadge.svg"
        img2="assets/appstoreBadge.svg"
      />
      <Leftimg
        img="assets/kiteconnect.png"
        title="Kite Connect API"
        description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link="Kite Connect "
      />
      <Rightimg
        img="assets/varsity.png"
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        link1=""
        link2=""
        img1="assets/googlePlayBadge.svg"
        img2="assets/appstoreBadge.svg"
      />
      <Universe />
    </div>
  );
};

export default Product;
