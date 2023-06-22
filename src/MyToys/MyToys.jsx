import { useEffect, useState } from "react";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
// import ToyCard from "./ToyCard";

const MyToys = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await fetch(
          "https://b7a11-toy-marketplace-server-side-coderhasib23.vercel.app/category/646c3712b3207d5d2e04d823"
        );
        const jsonData = await response.json();
        const filteredData = jsonData.toys.filter((car) => car.id === 1); // Filter out only the car with ID 1
        setCarData(filteredData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCarData();
  }, []);

  if (carData.length === 0) {
    return <div>Loading...</div>;
  }

  const car = carData[0];

  return (
    <>
      <Header></Header>
      <div className="text-center">
        <h1 className="text-xl font-bold">Car Details</h1>
        <h2 className="text-xl font-bold">{car.name}</h2>
        <img className="m-auto" src={car.image} alt={car.name} />
        <p>Price: {car.price}</p>
        <p>Rating: {car.rating}</p>
        <p>Seller: {car.sellerName}</p>
        <p>Seller Email: {car.sellerEmail}</p>
        <p>Quantity: {car.quantity}</p>
        <p>Description: {car.description}</p>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MyToys;
