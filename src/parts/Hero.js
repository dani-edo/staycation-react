import React from "react";
import Button from "elements/Button";

export default function Hero(props) {
  const showMostPicked = () => {
    window.scrollTop({
      top: (props.refMostPicked.current.offsetTop = 30),
      behavior: "smooth",
    });
  };
  const count = [
    {
      key: "travelers",
      label: "travelers",
      img: "images/icons/ic_traveler.svg",
    },
    {
      key: "treasures",
      label: "treasures",
      img: "images/icons/ic_treasure.svg",
    },
    {
      key: "cities",
      label: "cities",
      img: "images/icons/ic_cities.svg",
    },
  ];
  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-4 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: 170 + "%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make memorable.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row" style={{ marginTop: 80 }}>
            {count.map((e, i) => {
              return (
                <div className="col-auto" key={i}>
                  <img
                    width={36}
                    height={36}
                    src={e.img}
                    alt={`${props.data[e.key]} ${e.label}`}
                  />
                  <h6 className="mt-3">
                    {props.data[e.key]}
                    <span className="text-gray-500 font-weight-light ml-1">
                      {e.label}
                    </span>
                  </h6>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src="images/img-hero.png"
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src="images/img-hero-frame.png"
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
