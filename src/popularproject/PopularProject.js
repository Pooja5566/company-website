import React from "react";
import "./popularproject.css"
const projectList = [
  {
    image: "image/daisy.png",
    title: "Daisy Apartment T1",
    price: "INR 45 LACS",
    size: "810-1170 Sq. Ft.",
  },
  {
    image: "image/magnolia.png",
    title: "Magnolia Apartment",
    price: "2 BHK | ₹50 Lacs ",
    size: "810-1170 Sq. Ft.",
  },
  {
    image: "image/daisy.png",
    title: "Daisy Apartment T2",
    price: " INR 35 Lacs ",
    size: "810-1170 Sq. Ft.",
  },
  {
    image: "image/ghitorni.png",
    title: "Jasmine Apartment",
    price: "3BHK | ₹50 Lacs ",
    size: "810-1170 Sq. Ft.",
  },
  {
    image: "image/iris.jpg",
    title: "Iris Apartment",
    price: "3 BHK | ₹50 Lacs ",
    size: "1210 Sq. Ft.",
  },
  {
    image: "image/lotus.png",
    title: "Lotus Apartment",
    price: "INR 65 Lacs ",
    size: "990 - 1350 Sq. Ft.",
  },
];

export default function PopularProject() {
  return (
    <div>
      <div className="row">
        {projectList.map((item, i) => {
          return (
            <div className="col-sm-6">
              <ListProject item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
const ListProject = ({ item }) => {
  return (
    <div className="parentContent">
      <img src={item.image} />
      <div className="parentContent childContent">
      <div style={{width:"100%"}}>
      <h3>{item.title}</h3>
      <h4>{item.price}</h4>
      <h4>{item.size}</h4>
      </div>
      </div>
    </div>
  );
};
