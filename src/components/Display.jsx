import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

const Display = () => {
  const [shortcuts, setShortcuts] = useState();

  useEffect(() => {
    fetchData().then(setShortcuts);
  }, []);

  console.log(shortcuts)

  return <>
    
  </>;
};

export default Display;
