import React from "react";
import Fade from "react-reveal/Fade";
import PropTypes from "prop-types";

import "./index.scss";

export default function Numbering({ style, className, data, current }) {
  const KeysOfData = Object.keys(data);
  return (
    <Fade>
      <ol className={["stepper", className].join(" ")} style={style}>
        {KeysOfData.map((list, i) => {
          let isActive = list === current ? "active" : "";
          if (+i + 1 === KeysOfData.length) {
            isActive = "";
            return null;
          }

          return (
            <li key={`list-${i}`} className={[isActive].join(" ")}>
              {i + 1}
            </li>
          );
        })}
      </ol>
    </Fade>
  );
}

Numbering.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  current: PropTypes.string,
};
