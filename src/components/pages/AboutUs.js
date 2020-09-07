import React from "react";
import { useRouteMatch } from "react-router-dom";

function AboutUs() {
  let match = useRouteMatch();
  const pageId = match.url.slice(1);
  return (
    <div id={pageId} className="page">
      About Us
    </div>
  );
}

export default AboutUs;
