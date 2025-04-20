import React from "react";
import { Link } from "react-router-dom";
import INFO from "../../data/user";

export default function Logo({
  width,
  link,
}: {
  width: number;
  link: boolean;
}) {
  if (link === undefined) link = true;

  const ImageElement = (
    <img
      src={INFO.main.logo}
      alt="logo"
      className="logo rounded-full block m-0 p-0"
      width={width}
    />
  );

  return (
    <React.Fragment>
      {link ? <Link to="/">{ImageElement}</Link> : ImageElement}
    </React.Fragment>
  );
}
