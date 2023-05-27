import React from "react";
import "./Sales.css";

const projectList = [
  {
    image: "image/Modular.jpg",
    title: "Mr. Junaid",
    description: "Sales Manager",
    button: "Call Now",
    
  },
  {
    image: "image/Modular.jpg",
    title: "Mr. Rizwan",
    description: "Sales Manager",
    button: "Call Now",
    
  },
  

 
  
];

export default function Sales() {
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
    <div className="Salesparent">
      <img src={item.image} />
      <div className=" Sales">
      <div style={{width:"100%"}}>
        <div className=" salesall">
      <h3>{item.title}</h3>
      <h4>{item.description}</h4>
      <div className="Salesbutton">
      <p>{item.button}</p>
      </div>
      </div>
      </div>
      </div>
      </div>
    
  );
};
