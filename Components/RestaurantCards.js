const RestaurantCards = (props) => {
  // destructuring props and using optional chaining are both excellent techniques for avoiding code repetition, improving readability, and handling undefined or null.
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    deliveryTime,
    locality,
    costForTwo,
  } = resData?.info;

  const { sla } = resData?.info;

  return (
    <>
      <div className="card me-3 mb-3 mr-3" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-title">
            {cuisines ? cuisines.join(", ") : "Cuisines not available"}
          </h5>
          <h5 className="card-title">{avgRating} star</h5>
          <h5 className="card-title">{sla?.deliveryTime} mins</h5>
          <h5 className="card-title">{locality}</h5>
          <h5 className="card-title">{costForTwo / 100} for two</h5>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
};
export default RestaurantCards;
