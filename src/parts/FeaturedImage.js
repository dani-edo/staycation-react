import React from "react";
import Fade from "react-reveal/Fade";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((e, i) => {
          return (
            <div
              key={`FeaturedImage-${i}`}
              className={`item ${i > 0 ? "column-5 row-1" : "column-7 row-2"}`}
            >
              <Fade bottom delay={300 * i}>
                <div className="card h-100">
                  <figure className="img-wrapper">
                    <img src={e.url} alt={e._id} className="img-cover" />
                  </figure>
                </div>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
