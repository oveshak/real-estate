import React from "react";
import { list } from "../../data/Data";
import { FaGratipay, FaLocationDot } from "react-icons/fa6";
const RecentCard = () => {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((item, index) => (
          <div className="shadow" key={index}>
            <div className="img">
              <img src={item.cover} alt="" />
            </div>
            <div className="text">
              <div className="category flex">
                <span
                  style={{
                    background:
                      item.category === "For Sale" ? "#25b5791a" : "#ff98001a",
                    color: item.category === "For Sale" ? "#25b579" : "#ff9800",
                  }}
                >
                  {item.category}
                </span>
                <FaGratipay />
              </div>
              <h4>{item.name}</h4>
              <p>
                <FaLocationDot /> {item.location}
              </p>
            </div>
            <div className="button flex">
              <div>
                <button className="btn2">{item.price}</button>
                <label>/sqft</label>
              </div>
              <span>{item.type}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RecentCard;
