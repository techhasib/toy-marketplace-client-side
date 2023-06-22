import { useEffect, useState } from "react";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";

const ViewDetails = () => {
  const [toydetails, setToydetails] = useState([]);

  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-coderhasib23.vercel.app/category"
    )
      .then((res) => res.json())
      .then((data) => setToydetails(data));
  }, []);
  return (
    <>
      <Header></Header>
      <div>
        <h1>Test {toydetails.length}</h1>
        <h2 className="card-title">{toydetails[0]?.toys[0].name}</h2>

        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img src={toydetails[0]?.picture} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{toydetails[0]?.toy_name}</h2>
            <p className="text-3xl font-extrabold">
              {toydetails[0]?.seller_name}
            </p>
            <p>{toydetails[0]?.detail_description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
        <h1>Form test</h1>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <button>Login</button>
            <input
              className="btn btn-primary btn-block"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ViewDetails;
