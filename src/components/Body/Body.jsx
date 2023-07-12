import React from "react";
import "./Body.css";
import images from "../../constants/images";

const Body = () => {
  return (
    <div className="App__bg container">
      <div className="aside">
        <div className="line">
          <div className="line1" />
          <div className="line2" />
        </div>
        <div className="asidenumbers">
          <p className=" p__inter">0.1</p>
          <p className=" p__inter numbers">0.2</p>
          <p className=" p__inter numbers">0.3</p>
        </div>
      </div>
      <div className="right">
        <div className=" p__inter maintext">Nike Air Max Pre-Day</div>
        <div className="p__inter subtext">
          Taking the classic look of heritage Nike Running into a new realm, the
          Nike Air Max Pre-Day brings you a fast-paced look that's ready for
          today's world.A true nod to the past with a design made from at least
          20% recycled material by weight.
        </div>
        <div className="cash">
          <button>
            <p className="p__inter">Add to Bag</p>
          </button>
          <h2 className="p__inter money">₹11,495.00</h2>
        </div>
      </div>
      <div className="imgdiv">
        <img src={images.BodyAirforce} alt="Shoe" className="imgbig" />
      </div>
    </div>
  );
};

export default Body;
