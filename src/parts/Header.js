import React from "react";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";
import Fade from "react-reveal/Fade";

const contents = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Browse by",
    link: "/browse-by",
  },
  {
    label: "Stories",
    link: "/stories",
  },
  {
    label: "Agents",
    link: "/agents",
  },
];

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Stay<span className="text-gray-900">cation.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />

            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                {contents.map((e, i) => {
                  return (
                    <li
                      className={`nav-item${getNavLinkClass(e.link)}`}
                      key={i}
                    >
                      <Button className="nav-link" type="link" href={e.link}>
                        {e.label}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
