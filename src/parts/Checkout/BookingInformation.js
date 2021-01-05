import React from "react";
import Fade from "react-reveal/Fade";

import { InputText } from "elements/Form";

export default function BookingInformation(props) {
  const { data, ItemDetails, checkout } = props;

  const form = [
    { label: "First Name", name: "firstName", type: "text" },
    { label: "Last Name", name: "lastName", type: "text" },
    { label: "Email Address", name: "email", type: "email" },
    { label: "Phone Number", name: "phone", type: "tel" },
  ];
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <div className="card">
                <figure className="img-wrapper" style={{ height: 270 }}>
                  <img
                    src={ItemDetails.imageUrls[0].url}
                    alt={ItemDetails.name}
                    className="img-cover"
                  />
                </figure>
                <div className="row align-items-center">
                  <div className="col">
                    <div className="meta-wrapper">
                      <h5>{ItemDetails.name}</h5>
                      <span className="text-gray-500">
                        {ItemDetails.city}, {ItemDetails.country}
                      </span>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span>
                      ${+checkout.duration * ItemDetails.price} USD
                      <span className="text-gray-500"> per </span>
                      {checkout.duration} {ItemDetails.unit}
                      {+checkout.duration > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              {form.map((e, i) => {
                return (
                  <>
                    <label htmlFor={e.name}>{e.label}</label>
                    <InputText
                      key={i}
                      id={e.name}
                      name={e.name}
                      type={e.type}
                      value={data[e.name]}
                      onChange={props.onChange}
                    />
                  </>
                );
              })}
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
