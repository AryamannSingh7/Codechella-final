import React from "react";

const OutputDetails = ({ outputDetails }) => {
  return (
    <div className="metrics-container mt-4 flex flex-col space-y-3">
      <p className="text-sm" style={{color: "white"}}>
        Status:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100" style={{color: "black"}}>
          {outputDetails?.status?.description}
        </span>
      </p>
      <p className="text-sm" style={{color: "white"}}>
        Memory:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100" style={{color: "black"}}>
          {outputDetails?.memory}
        </span>
      </p>
      <p className="text-sm" style={{color: "white"}}>
        Time:{" "}
        <span className="font-semibold px-2 py-1 rounded-md bg-gray-100" style={{color: "black"}}>
          {outputDetails?.time}
        </span>
      </p>
    </div>
  );
};

export default OutputDetails;
