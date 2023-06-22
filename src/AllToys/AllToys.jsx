import Swal from "sweetalert2";
import { useContext, useEffect, useState } from "react";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { AuthContext } from "../providers/AuthProviders";
import ToyRow from "./ToyRow";

const AllToys = () => {
  const { user } = useContext(AuthContext);
  const [alltoys, setAlltoys] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const url = `https://b7a11-toy-marketplace-server-side-coderhasib23.vercel.app/addtoy?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAlltoys(data));
  }, [url]);

  // Filter toys based on the search query
  const filteredToys = alltoys.filter((toy) =>
    toy.toyName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    const proceed = confirm;
    if (proceed) {
      fetch(
        `https://b7a11-toy-marketplace-server-side-coderhasib23.vercel.app/addtoy/${id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
              }
            });
            const remaining = alltoys.filter((toy) => toy._id !== id);
            setAlltoys(remaining);
          }
        });
    }
  };

  const handletoyConfirm = (id) => {
    fetch(
      `https://b7a11-toy-marketplace-server-side-coderhasib23.vercel.app/addtoy/${id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status: "confirm" }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // update state
          Swal.fire("Good job!", "You Order is Confirm!", "success");
          const remaining = alltoys.filter((booking) => booking._id !== id);
          const updated = alltoys.find((booking) => booking._id === id);
          updated.status = "confirm";
          const newBookings = [updated, ...remaining];
          setAlltoys(newBookings);
        }
      });
  };

  return (
    <>
      <Header></Header>
      <div>
        <h1 className="text-center my-7 mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Welcome to{" "}
          <span className="text-blue-600 dark:text-blue-500">All Toy</span> Page
        </h1>
        {/* Search input */}
        <div className="form-control my-10">
          <label className="input-group input-group-vertical">
            <span>You Can Search Here:</span>
            <input
              type="text"
              placeholder="Search by toy name"
              className="input input-bordered"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </label>
        </div>
        <div className="overflow-x-auto w-full mb-10">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Available Qty</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredToys.map((toy) => (
                <ToyRow
                  key={toy._id}
                  toy={toy}
                  handleDelete={handleDelete}
                  handletoyConfirm={handletoyConfirm}
                ></ToyRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default AllToys;
