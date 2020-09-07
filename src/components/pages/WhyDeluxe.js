import React from "react";
// import Template1 from '../layout/page_templates/Template1';
import { useRouteMatch } from "react-router-dom";

function WhyDeluxe() {
  let match = useRouteMatch();
  const pageId = match.url.slice(1);
  return (
    <div id={pageId} className="page">
      Why Deluxe
    </div>
  );
}

export default WhyDeluxe;
