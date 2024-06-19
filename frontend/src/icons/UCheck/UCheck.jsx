/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UCheck = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0325 5.40752C13.9628 5.33722 13.8798 5.28143 13.7884 5.24335C13.697 5.20527 13.599 5.18567 13.5 5.18567C13.401 5.18567 13.303 5.20527 13.2116 5.24335C13.1202 5.28143 13.0372 5.33722 12.9675 5.40752L7.37999 11.0025L5.03249 8.64752C4.9601 8.57759 4.87465 8.5226 4.781 8.4857C4.68736 8.4488 4.58737 8.4307 4.48673 8.43244C4.3861 8.43418 4.28679 8.45573 4.19448 8.49585C4.10217 8.53597 4.01867 8.59388 3.94874 8.66627C3.87881 8.73866 3.82383 8.82412 3.78693 8.91776C3.75002 9.0114 3.73192 9.11139 3.73367 9.21203C3.73541 9.31266 3.75695 9.41197 3.79707 9.50428C3.83719 9.59659 3.8951 9.68009 3.96749 9.75002L6.84749 12.63C6.91722 12.7003 7.00017 12.7561 7.09156 12.7942C7.18296 12.8323 7.28098 12.8519 7.37999 12.8519C7.479 12.8519 7.57703 12.8323 7.66843 12.7942C7.75982 12.7561 7.84277 12.7003 7.91249 12.63L14.0325 6.51002C14.1086 6.43979 14.1694 6.35455 14.2109 6.25967C14.2525 6.1648 14.2739 6.06234 14.2739 5.95877C14.2739 5.85519 14.2525 5.75274 14.2109 5.65786C14.1694 5.56299 14.1086 5.47775 14.0325 5.40752Z"
        fill={color}
      />
    </svg>
  );
};

UCheck.propTypes = {
  color: PropTypes.string,
};