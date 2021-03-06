import React from "react";
import Button from "elements/Button";
import Fade from "react-reveal/Fade";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className="mb-3">Most Picked</h4>
        <div className="container-grid">
          {props.data.map((e, i) => {
            return (
              <div
                className={`item column-4${i === 0 ? " row-2" : " row-1"}`}
                key={`mostpicked-${i}`}
              >
                <Fade bottom delay={500 * i}>
                  <div className="card card-featured">
                    <div className="tag">
                      {e.price}
                      <span className="font-weight-light">per {e.unit}</span>
                    </div>
                    <figure className="img-wrapper">
                      <img
                        src={e.imageUrl}
                        alt={e.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        className="stretched-link d-block text-white"
                        type="link"
                        href={`properties/${e.id}`}
                      >
                        <h5>{e.name}</h5>
                      </Button>
                      <span>
                        {e.city}, {e.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
