import React from "react";
import { useRouteMatch } from "react-router-dom";

function WhyOffShore() {
  let match = useRouteMatch();
  const pageId = match.url.slice(1);
  return (
    <div id={pageId} className="page">
      How it works
    </div>
  );
}

export default WhyOffShore;
