import { useState, useEffect } from "react";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const TabsExample = () => {
  const [activeTab, setActiveTab] = useState(null);
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    const fetchTabData = async () => {
      try {
        const response = await fetch(
          "https://b7a11-toy-marketplace-server-side-coderhasib23.vercel.app/category"
        );
        const data = await response.json();
        setTabData(data);
        setActiveTab(data[0]._id); // Set the active tab to the first tab's ID
      } catch (error) {
        console.error("Error fetching tabData:", error);
      }
    };

    fetchTabData();
  }, []);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="flex justify-center hero min-h-screen mt-10 rounded-lg">
      <div className="w-full">
        {/* max-w-lg */}
        <h1 className="mb-5 md:text-3xl font-bold text-center">
          See The Existing and BEST CAR TOY FOR YOUR KID
        </h1>
        <div className="tabs">
          {tabData.map((tab) => (
            <a
              key={tab._id}
              className={`tab tab-bordered text-lg ${
                activeTab === tab._id ? "tab-active" : ""
              }`}
              onClick={() => handleTabClick(tab._id)}
            >
              {tab.title}
            </a>
          ))}
        </div>
        <div className="tab-content">
          {tabData.map((tab) => (
            <div
              key={tab._id}
              className={`tab-pane ${
                activeTab === tab._id ? "active" : "hidden"
              }`}
            >
              <div className="flex card-container gap-4">
                {tab.toys.map((toy) => (
                  <div
                    key={toy._id}
                    className="card bg-gray-200 rounded-xl p-4"
                  >
                    <div className="card-image">
                      <img src={toy.image} alt={toy.name} />
                    </div>
                    <div className="card-body">
                      <h2 className="card-title">{toy.name}</h2>
                      <p className="card-text">{toy.price}</p>

                      <p className="card-text">
                        <Rating
                          placeholderRating={toy.rating}
                          readonly
                          emptySymbol={<FaRegStar></FaRegStar>}
                          placeholderSymbol={
                            <FaStar className="text-yellow-400"></FaStar>
                          }
                          fullSymbol={<FaStar></FaStar>}
                        ></Rating>{" "}
                        {toy.rating}
                      </p>
                      <Link to="/mytoys">
                        <button className="btn btn-primary">
                          View Details
                        </button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsExample;
