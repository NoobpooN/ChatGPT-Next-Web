      .subgraph-lvl-${e} {
        fill: ${n[`surface${e}`]};
        stroke: ${n[`surfacePeer${e}`]};
      }
    `;return t},S={db:i.d,renderer:{getClasses:function(n,t){return a.l.info("Extracting classes"),t.db.getClasses()},draw:E},parser:i.p,styles:n=>`.label {
    font-family: ${n.fontFamily};
    color: ${n.nodeTextColor||n.textColor};
  }
  .cluster-label text {
    fill: ${n.titleColor};
  }
  .cluster-label span {
    color: ${n.titleColor};
  }

  .label text,span {
    fill: ${n.nodeTextColor||n.textColor};
    color: ${n.nodeTextColor||n.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${n.mainBkg};
    stroke: ${n.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${n.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${n.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${n.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${n.edgeLabelBackground};
    rect {
      opacity: 0.85;
      background-color: ${n.edgeLabelBackground};
      fill: ${n.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${n.clusterBkg};
    stroke: ${n.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${n.titleColor};
  }

  .cluster span {
    color: ${n.titleColor};
  }
  /* .cluster div {
    color: ${n.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${n.fontFamily};
    font-size: 12px;
    background: ${n.tertiaryColor};
    border: 1px solid ${n.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${n.textColor};
  }
  .subgraph {
    stroke-width:2;
    rx:3;
  }
  // .subgraph-lvl-1 {
  //   fill:#ccc;
  //   // stroke:black;
  // }

  .flowchart-label text {
    text-anchor: middle;
  }

  ${M(n)}
`}}};