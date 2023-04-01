import React from "react";
import Text from "../atoms/Text";

const MovieOverview = ({ overview }) => {
  return (
    <>
      {overview ? <h3>Synopsis</h3> : ""}
      <Text>{overview}</Text>
    </>
  );
};

export default MovieOverview;
