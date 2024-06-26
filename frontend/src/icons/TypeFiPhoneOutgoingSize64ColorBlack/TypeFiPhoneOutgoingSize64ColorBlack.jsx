import PropTypes from "prop-types";
import React from "react";

export const TypeFiPhoneOutgoingSize64ColorBlack = ({ color = "black", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="64"
      viewBox="0 0 64 64"
      width="64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M61.3333 18.6667V2.66675H45.3333"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M42.6667 21.3334L61.3334 2.66675"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M58.6668 45.1201V53.1201C58.6698 53.8628 58.5176 54.5979 58.2201 55.2783C57.9226 55.9588 57.4862 56.5697 56.939 57.0717C56.3917 57.5738 55.7456 57.956 55.0421 58.194C54.3386 58.4319 53.5931 58.5203 52.8534 58.4534C44.6476 57.5618 36.7654 54.7578 29.8401 50.2668C23.397 46.1725 17.9343 40.7099 13.8401 34.2668C9.33336 27.31 6.52873 19.3894 5.65342 11.1468C5.58678 10.4093 5.67442 9.66611 5.91075 8.96442C6.14709 8.26272 6.52694 7.61792 7.02613 7.07108C7.52532 6.52423 8.1329 6.08731 8.8102 5.78814C9.48749 5.48898 10.2197 5.33412 10.9601 5.33342H18.9601C20.2542 5.32068 21.5089 5.77896 22.4901 6.62284C23.4714 7.46672 24.1123 8.63861 24.2934 9.92009C24.6311 12.4803 25.2573 14.994 26.1601 17.4134C26.5189 18.3679 26.5965 19.4052 26.3838 20.4024C26.1712 21.3997 25.6771 22.315 24.9601 23.0401L21.5734 26.4268C25.3696 33.1029 30.8973 38.6306 37.5734 42.4268L40.9601 39.0401C41.6851 38.3231 42.6005 37.829 43.5977 37.6163C44.595 37.4037 45.6323 37.4813 46.5868 37.8401C49.0061 38.7429 51.5199 39.3691 54.0801 39.7068C55.3755 39.8895 56.5585 40.542 57.4042 41.5401C58.2499 42.5382 58.6992 43.8123 58.6668 45.1201Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
};

TypeFiPhoneOutgoingSize64ColorBlack.propTypes = {
  color: PropTypes.string,
};
