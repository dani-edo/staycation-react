import React from "react";
import Button from "elements/Button";

export default function Categories({ data }) {
  return data.map((cat, i) => {
    return (
      <section key={`category-${i}`} className="container">
        <h4 className="mb-3 font-weight-medium">{cat.name}</h4>
        <div className="container-grid">
          {cat.length === 0 ? (
            <div className="row">
              <div className="col-auto align-items-center">
                There is no property at this category
              </div>
            </div>
          ) : (
            cat.items.map((item, i2) => {
              return (
                <div
                  className="item row-1 column-3"
                  key={`category-${i}-item-${i2}`}
                >
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular{" "}
                        <span className="font-weight-light">Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        className="stretched-link d-block text-gray-800"
                        href={`/properties/${item._id}`}
                        type="link"
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <div className="text-gray-500">
                        {item.city}, {item.country}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    );
  });
}
