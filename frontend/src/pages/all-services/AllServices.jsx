import "./AllServices.scss";
import { useEffect, useState } from "react";
import axios from "axios";

import img1 from "../../assets/Anesthesiologists.jpg";

const AllServices = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getAllServices = () => {
      axios
        .get("http://localhost:5000/api/p/service")
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAllServices();
  }, []);

  return (
    <div className="all-services">
      <div className="services-items">
        {data?.map((item) => (
          <div className="services-item" key={item._id}>
            <div className="services-item-img">
              <img src={item?.imgUrl ? item.imgUrl : img1} alt="" />
            </div>
            <h3>{item.serviceName}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
