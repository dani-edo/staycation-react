import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function Text(props) {
  const {
    name,
    value,
    prepend,
    append,
    type,
    outerClassName,
    inputClassName,
    placeholder,
    errorResponse,
  } = props;

  const [HasError, setHasError] = useState(null);
  let pattern = "";
  if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (type === "tel") pattern = "[0-9]*";

  const onChange = (e) => {
    const target = {
      target: {
        name: name,
        value: e.target.value,
      },
    };

    if (type === "email") {
      if (!pattern.test(e.target.value)) setHasError(errorResponse);
      else setHasError(null);
    }
    if (type === "tel") {
      if (e.target.validity.valid) props.onChange(target);
    } else {
      props.onChange(target);
    }
  };

  return (
    <div className={["input-text mb-3", outerClassName].join(" ")}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepend bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          name={name}
          type={type}
          pattern={pattern}
          className={["form-control", inputClassName].join(" ")}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {append && (
          <div className="input-group-append bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
      {HasError && <span className="error-helper">{HasError}</span>}
    </div>
  );
}

Text.defaultProps = {
  type: "text",
  pattern: "",
  placeholder: "Please type here",
  errorResponse: "Please match the requested format",
};

Text.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  onChange: PropTypes.func.isRequired,
  prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  append: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  type: PropTypes.string,
  outerClassName: PropTypes.string,
  inputClassName: PropTypes.string,
};
