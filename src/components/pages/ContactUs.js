import React from "react";
import { useRouteMatch } from "react-router-dom";

function ContactUs() {
  let match = useRouteMatch();
  const pageId = match.url.slice(1);
  return (
    <div id={pageId} className="page">
      Contact Us
    </div>
  );
}

export default ContactUs;
