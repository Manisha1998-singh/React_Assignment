// const RestaurantCards = (props) => {
// This is cold js destructuring to the objects.
const RestaurantCards = ({ resName, cuisine }) => {
  return (
    <>
      <div className="d-flex  w-100  justify-content-center">
        <div className="card me-3 mb-3 mr-3" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/99368ab6-feff-4db6-8e6e-d9cea4e78bd4_255753.JPG"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{resName}</h5>
            <h5 className="card-title">food rating</h5>
            <h5 className="card-title">sending time</h5>
            <h5 className="card-title">{cuisine}</h5>
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
