import Swal from "sweetalert2";
import { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../../assets/login/login.jpg";
import { AuthContext } from "../../../providers/AuthProviders";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { Helmet } from "react-helmet";

let pageTitle = "Car Market";
if (location.pathname === "/signup") {
  pageTitle = "Car Market | Sign Up";
}

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.insertedId) {
          //jodi data pawa jay tobe
          Swal.fire({
            title: "Success!",
            text: "Sign Up Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
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
              <h1 className="text-3xl text-center font-bold">Sign Up</h1>
              <form onSubmit={handleSignUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Type your name"
                    className="input input-bordered"
                  />
                </div>
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
                    <span className="label-text">Photo url</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    placeholder="Give Your Photo url"
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
                    value="Sign Up"
                  />
                </div>
              </form>
              <p className="my-4 text-center">
                Already Have an Account{" "}
                <Link className="text-blue-600 font-bold" to="/login">
                  Sign In
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Signup;
