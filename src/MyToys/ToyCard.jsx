import { useEffect, useState } from "react";

const ToyCard = () => {
  const [toydetails, setToydetails] = useState([]);
  useEffect(() => {
    fetch(
      "https://b7a11-toy-marketplace-server-side-coderhasib23.vercel.app/category"
    )
      .then((res) => res.json())
      .then((data) => setToydetails(data));
  }, []);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title"> {toydetails[0]?.toys[0].name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
