import React from "react";
import { useRouteMatch } from "react-router-dom";

function Learn() {
  let match = useRouteMatch();
  const pageId = match.url.slice(1);
  return (
    <div id={pageId} className="page">
      Learn
    </div>
  );
}

export default Learn;
