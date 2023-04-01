import React from "react";
import SortButton from "../atoms/SortButton";

const SortControl = ({ setSortGoodBad, setSortByDate }) => {
  return (
    <div>
      <div className="btn-sort-container">
        <SortButton
          id="goodToBad"
          text="Rating"
          onClick={() => setSortGoodBad("goodToBad")}
        />
        <SortButton
          id="badToGood"
          text="Rating"
          onClick={() => setSortGoodBad("badToGood")}
        />
      </div>
      <div className="btn-date-container">
        <SortButton
          id="oldest"
          text="Oldest"
          onClick={() => setSortByDate("oldestToNewest")}
        />
        <SortButton
          id="newest"
          text="Newest"
          onClick={() => setSortByDate("newestToOldest")}
        />
      </div>
    </div>
  );
};

export default SortControl;
