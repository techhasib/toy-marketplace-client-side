const ToyRow = ({ toy, handleDelete, handletoyConfirm }) => {
  const {
    _id,
    sellerName,
    toyName,
    subCategory,
    Price,
    availableQuantity,
    status,
  } = toy;

  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{Price}</td>
      <td>{availableQuantity}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button
            onClick={() => handletoyConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Confirm Your Order
          </button>
        )}
      </th>
    </tr>
  );
};

export default ToyRow;
