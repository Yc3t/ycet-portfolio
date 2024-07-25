import React, { useState } from 'react';
import { Graph } from "react-d3-graph";

const RadialGraph = () => {
  const [highlightedLink, setHighlightedLink] = useState(null);

  // Graph configuration
  const myConfig = {
    nodeHighlightBehavior: true,
    linkHighlightBehavior: true,
    directed: false,
    d3: {
      gravity: -300,
      linkLength: 100,
    },
    node: {
      color: "#999",
      size: 300,
      highlightStrokeColor: "blue",
    },
    link: {
      highlightColor: "lightblue",
    },
  };

  // Graph data
  const data = {
    nodes: [
      { id: "center" },
      { id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, 
      { id: "5" }, { id: "6" }, { id: "7" }
    ],
    links: [
      { source: "center", target: "1" },
      { source: "center", target: "2" },
      { source: "center", target: "3" },
      { source: "center", target: "4" },
      { source: "center", target: "5" },
      { source: "center", target: "6" },
      { source: "center", target: "7" },
    ],
  };

  const onMouseOverLink = (source, target) => {
    setHighlightedLink(`${source}-${target}`);
  };

  const onMouseOutLink = () => {
    setHighlightedLink(null);
  };

  return (
    <div className="h-[400px] w-[400px] relative">
      <Graph
        id="radial-graph"
        data={data}
        config={myConfig}
        onMouseOverLink={onMouseOverLink}
        onMouseOutLink={onMouseOutLink}
      />

    </div>
  );
};

export default RadialGraph;