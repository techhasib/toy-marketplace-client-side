import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "./Banner";
import Gallery from "./Gallery";
import Statistics from "./Statistics";
import TabsExample from "./TabsExample";
import Testimonial from "./Testimonial";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Car Market|Home </title>
      </Helmet>
      <Header></Header>
      <Banner></Banner>
      <Gallery></Gallery>
      <TabsExample></TabsExample>
      <Statistics></Statistics>
      <Testimonial></Testimonial>
      <Footer></Footer>
    </div>
  );
};

export default Home;
