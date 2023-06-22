import { Link } from "react-router-dom";
import img from "../../../assets/login/login.jpg";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

import { Helmet } from "react-helmet";

let pageTitle = "Car Market";
if (location.pathname === "/login") {
  pageTitle = "Car Market | Login";
}

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Header></Header>

      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200 mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="w-1/2 mr-12 mx-8">
            <img className="rounded-2xl" src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <h1 className="text-3xl text-center font-bold">Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                New to Car Markets{" "}
                <Link className="text-blue-600 font-bold" to="/signup">
                  Sign Up
                </Link>{" "}
              </p>
            </div>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Login;
