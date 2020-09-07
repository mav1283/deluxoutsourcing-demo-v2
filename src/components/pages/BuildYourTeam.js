import React from "react";
import { useRouteMatch } from "react-router-dom";

function BuildYourTeam() {
  let match = useRouteMatch();
  const pageId = match.url.slice(1);
  return (
    <div id={pageId} className="page">
      Build your team
    </div>
  );
}

export default BuildYourTeam;
