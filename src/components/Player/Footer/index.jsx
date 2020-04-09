import React from "react";

import TrackInfo from "./TrackInfo";
import Controls from "./Controls";
import Volume_Repeat from "./Volume_Repeat";

function Footer(props) {
  return (
    <div className="footer-container">
      <TrackInfo />
      <Controls />
      <Volume_Repeat />
    </div>
  );
}
export default Footer;
