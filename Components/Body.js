import RestaurantCards from "./RestaurantCards";
import RestaurantList from "./RestaurantList";
const Body = () => {
  return (
    <>
      <div>
        {/* Here mention like resName and cuisine  are the props. */}
        <RestaurantCards resName=" WOW Momos" cuisine=" momos" />
        <RestaurantCards resName=" Biryani hub" cuisine=" Biryani" />
        <RestaurantList />
      </div>
    </>
  );
};
export default Body;
