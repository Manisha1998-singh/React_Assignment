const RestaurantCards = (props) => {
  const { resData } = props;
  return (
    <>
      <div className="d-flex  w-100  justify-content-center">
        <div className="card me-3 mb-3 mr-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              resData?.info?.cloudinaryImageId
            }
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{resData?.info?.name}</h5>
            <h5 className="card-title">
              {resData?.info?.cuisines
                ? resData.info.cuisines.join(", ")
                : "Cuisines not available"}
            </h5>
            <h5 className="card-title">{resData?.info?.avgRating} star</h5>
            <h5 className="card-title">
              {resData?.info?.sla?.deliveryTime} mins
            </h5>
            <h5 className="card-title">{resData?.info?.locality}</h5>
            <h5 className="card-title">
              {resData?.info?.costForTwo / 100} for two
            </h5>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card me-3 mb-3 mr-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/99368ab6-feff-4db6-8e6e-d9cea4e78bd4_255753.JPG"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">food rating</h5>
            <h5 className="card-title">food rating</h5>
            <h5 className="card-title">sending time</h5>
            <h5 className="card-title">food type</h5>
            <h5 className="card-title">location</h5>

            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card me-3 mb-3 mr-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/99368ab6-feff-4db6-8e6e-d9cea4e78bd4_255753.JPG"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">food title</h5>
            <h5 className="card-title">food rating</h5>
            <h5 className="card-title">sending time</h5>
            <h5 className="card-title">food type</h5>
            <h5 className="card-title">location</h5>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card me-3 mb-3 mr-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/99368ab6-feff-4db6-8e6e-d9cea4e78bd4_255753.JPG"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">food title</h5>
            <h5 className="card-title">food rating</h5>
            <h5 className="card-title">sending time</h5>
            <h5 className="card-title">food type</h5>
            <h5 className="card-title">location</h5>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default RestaurantCards;
