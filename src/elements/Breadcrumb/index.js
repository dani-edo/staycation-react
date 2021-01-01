import React from "react";

import PropTypes from "prop-types";
import Button from "elements/Button";

import "./index.scss";

export default function Breadcrumb(props) {
  return (
    <nav aria-label="breadcrumb">
      <ol className={["breadcrumb", props.className].join(" ")}>
        {props.data.map((e, i) => {
          return (
            <li
              key={`breadcrumb-${i}`}
              className={`breadcrumb-item${
                i === props.data.length - 1 ? " active" : ""
              }`}
            >
              {i === props.data.length - 1 ? (
                e.pageTitle
              ) : (
                <Button type="link" href={e.pageHref}>
                  {e.pageTitle}
                </Button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

Breadcrumb.protoTypes = {
  data: PropTypes.array,
  className: PropTypes.string,
};
