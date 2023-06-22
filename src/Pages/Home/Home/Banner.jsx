import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen mt-10 rounded-lg"
      style={{
        backgroundImage: `url("https://i.ibb.co/sHx4r4h/banner2.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60 rounded-lg"></div>
      <div
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-5 md:text-7xl md:font-bold">
              {" "}
              PICK THE BEST CAR TOY FOR YOUR KID
            </h1>
            <p className="mb-5">
              The best car toy for your kid With its vibrant colors, durable
              build, and easy-to-use controls, it provides hours of endless fun.
              Its sleek design and realistic features, including working
              headlights and sound effects, make it an exciting choice for young
              car enthusiasts.
            </p>
            <Link to="/signup">
              {" "}
              <button className="btn btn-primary">Sign Up Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
