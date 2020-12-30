import React from "react";
import Button from "elements/Button";
import IconText from "parts/IconText";

const contents = [
  {
    title: "For Beginners",
    items: [
      {
        label: "New Account",
        link: "/register",
      },
      {
        label: "Start Booking Room",
        link: "/properties",
      },
      {
        label: "Use Payments",
        link: "/use-payments",
      },
    ],
  },
  {
    title: "Explore Us",
    items: [
      {
        label: "our Careers",
        link: "/careers",
      },
      {
        label: "Privacy",
        link: "/privacy",
      },
      {
        label: "Terms & Conditions",
        link: "/terms",
      },
    ],
  },
  {
    title: "Contact Us",
    items: [
      {
        label: "support@staycation.id",
        link: "mailto:support@staycation.id",
        isExternal: true,
      },
      {
        label: "021 - 2208 - 1996",
        link: "tel:+622122081996",
      },
      {
        label: "Staycation, Kemang, Jogja",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable
            </p>
          </div>
          {contents.map((e, i) => {
            return (
              <div
                className={i === contents.length ? "col-4" : "col-2 mr-5"}
                key={i}
              >
                <h6 className="mt-2">{e.title}</h6>
                <ul className="list-group list-group-flush">
                  {e.items.map((e2, i2) => {
                    if (e2.link)
                      return (
                        <li key={i2} className="list-group-item">
                          <Button
                            type="link"
                            href={e2.link}
                            isExternal={e2.isExternal}
                          >
                            {e2.label}
                          </Button>
                        </li>
                      );
                    else
                      return (
                        <li key={i2} className="list-group-item">
                          <span>{e2.label}</span>
                        </li>
                      );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright 2019 All rights reserved Staycation
          </div>
        </div>
      </div>
    </footer>
  );
}
