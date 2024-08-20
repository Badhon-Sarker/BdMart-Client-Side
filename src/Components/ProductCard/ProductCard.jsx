const ProductCard = ({ item }) => {
  return (
    <div className="card h-[500px] bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-48 w-10/12 mt-2"
          src={item.product_image}
          alt="image"
        />
      </figure>

      <div className="card-body">
        <div className="flex justify-center">
          <h2 className="text-center card-title">{item.product_name}</h2>
        </div>

        <div className="flex justify-evenly">
          <div>
            <h1>{item.description.slice(" ", 80)}..</h1>
          </div>
        </div>

        <div>
          <div>
            <h1 className="font-semibold">
              Category: <span>{item.category}</span>
            </h1>
          </div>

          <div>
            <h1 className="font-semibold">
              Creation Date: <span>{item.creation_date}</span>
            </h1>
          </div>

          <div>
            <h1 className="font-semibold">
              Price: <span>{item.price}</span>
            </h1>
          </div>

          <div>
            <h1 className="font-semibold">
              Ratings: <span>{item.ratings}</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
