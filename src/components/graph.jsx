import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const RadialGraph = () => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2 - 40;

    const svg = d3.select(svgRef.current)
      .attr('width', width)
      .attr('height', height);

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

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
      ]
    };

    const simulation = d3.forceSimulation(data.nodes)
      .force('link', d3.forceLink(data.links).id(d => d.id))
      .force('charge', d3.forceManyBody().strength(-200))
      .force('center', d3.forceCenter())
      .force('radial', d3.forceRadial(d => d.id === "center" ? 0 : radius));

    const link = g.selectAll('.link')
      .data(data.links)
      .enter().append('line')
      .attr('class', 'link')
      .attr('stroke', '#999')
      .attr('stroke-width', 1);

    const node = g.selectAll('.node')
      .data(data.nodes)
      .enter().append('circle')
      .attr('class', 'node')
      .attr('r', d => d.id === "center" ? 10 : 5)
      .attr('fill', d => d.id === "center" ? "#666" : "#999");

    node.append('title')
      .text(d => d.id);

    simulation.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

      node
        .attr('cx', d => d.x)
        .attr('cy', d => d.y);
    });

    // Drag behavior
    const drag = d3.drag()
      .on('start', (event, d) => {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
      })
      .on('drag', (event, d) => {
        d.fx = event.x;
        d.fy = event.y;
      })
      .on('end', (event, d) => {
        if (!event.active) simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
      });

    node.call(drag);

    // Cleanup function
    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className="h-[400px] w-[400px] relative">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default RadialGraph;