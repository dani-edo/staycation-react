import React from "react";
import Fade from "react-reveal/Fade";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row-justify-content-center text-center">
          <div className="col-4">
            <img
              src="images/img-completed.png"
              alt="completed checkout apartemnt"
              className="img-fluid"
            />
            <p className="text-gray-500">
              We will inform you via email later once the transaction has been
              accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
