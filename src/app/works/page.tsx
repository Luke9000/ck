import React from "react";
import { WORKS } from 'public/data/works'


const page = () => {
  console.log(
    "Component rendered. IDs:",
    WORKS.map((g) => g.id)
  );

  return <div>page</div>;
};

export default page;
