import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginTop: 30 }}>
        {data.features.map((e, i) => {
          return (
            <div
              key={`feature-${i}`}
              className="col-3"
              style={{ marginBottom: 20 }}
            >
              <img
                src={e.imageUrl}
                alt={e.name}
                className="d-block mb-2"
                width={38}
              />
              <span>{e.qty}</span>{" "}
              <span className="text-gray-500 font-weight-light">{e.name}</span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
