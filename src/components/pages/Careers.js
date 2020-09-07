import React from "react";
import { useRouteMatch } from "react-router-dom";

function Careers() {
  let match = useRouteMatch();
  const pageId = match.url.slice(1);
  return (
    <div id={pageId} className="page">
      Careers
    </div>
  );
}

export default Careers;
