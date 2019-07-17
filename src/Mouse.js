import * as d3 from 'd3';

export default class Mouse {

  static mouseover(nodeIndex, linkData, linkLine, nodeCircle, nodeText) {
    // at first, make all node & line fade
    d3.selectAll(nodeCircle)['_groups'][0].attr("class", "nodeColorFade");
    d3.selectAll(linkLine)['_groups'][0].attr("class", "lineColorFade");
    d3.selectAll(nodeText)['_groups'][0].attr("class", "nodeTextFade");

    for (let i = 0, l = linkData.length; l > i; i++) {
      if (linkData[i].source.index === nodeIndex ||
          linkData[i].target.index === nodeIndex) {

        const lineIndex = i;
        const nodeSource = linkData[lineIndex].source.index;
        const nodeTarget = linkData[lineIndex].target.index;

        // line
        const selectLine = linkLine['_groups'][0][lineIndex];
        selectLine.setAttribute('class', 'lineColor');
        // node
        nodeCircle['_groups'][0][nodeSource].setAttribute("class", "nodeColor");
        nodeCircle['_groups'][0][nodeTarget].setAttribute("class", "nodeColor");
        // text
        nodeText['_groups'][0][nodeSource].setAttribute("class", "linkedNodeText");
        nodeText['_groups'][0][nodeTarget].setAttribute("class", "linkedNodeText");
      }
    }
    // selectNode
    nodeCircle['_groups'][0][nodeIndex].setAttribute("class", "nodeColor");
    // selectNodeText
    nodeText['_groups'][0][nodeIndex].setAttribute("class", "linkedNodeText");
  }


  static mouseout(linkData, linkLine, nodeCircle, nodeText) {
    Mouse.reset(linkData, linkLine, nodeCircle, nodeText)
  }


  static mousedown(nodeIndex, linkData, linkLine, nodeCircle, nodeText) {
    // make node non-drag
    d3.selectAll(nodeCircle)['_groups'][0].attr("class", "nodeColorFadeNonDrag");

    for (let i = 0, l = linkData.length; l > i; i++) {
      if (linkData[i].source.index === nodeIndex ||
          linkData[i].target.index === nodeIndex) {

        const lineIndex = i;
        const nodeSource = linkData[lineIndex].source.index;
        const nodeTarget = linkData[lineIndex].target.index;

        nodeCircle['_groups'][0][nodeSource].setAttribute("class", "nodeColor");
        nodeCircle['_groups'][0][nodeTarget].setAttribute("class", "nodeColor");
      }
    }
    // selectNode
    nodeCircle['_groups'][0][nodeIndex].setAttribute("class", "nodeColor");
  }


  static mouseup(nodeIndex, linkData, linkLine, nodeCircle, nodeText) {
     Mouse.reset(linkData, linkLine, nodeCircle, nodeText);
     Mouse.mouseover(nodeIndex, linkData, linkLine, nodeCircle, nodeText);
  }


  static reset(linkData, linkLine, nodeCircle, nodeText) {
    d3.selectAll(nodeCircle)['_groups'][0].attr("class", "nodeReturnFade");
    d3.selectAll(linkLine)['_groups'][0].attr("class", "lineReturnFade");
    d3.selectAll(nodeText)['_groups'][0].attr("class", "nodeTextReturnFade");
  }


  static cursor(type, body, circle) {
    let grabTypeCircle;
    let grabTypeBody;
    if (type === 'grabbing') {
      grabTypeCircle = "grabbing";
      grabTypeBody = "grabbing";
    } else if (type === 'grab') {
      grabTypeCircle = "grab";
      grabTypeBody = "auto";
    }else if (type === 'pointer') {
      grabTypeCircle = "pointer";
      grabTypeBody = "auto";
    }

    //grabbing
    circle.style("cursor", "-webkit-" + grabTypeCircle);
    circle.style("cursor", "-moz-" + grabTypeCircle);
    circle.style("cursor", grabTypeCircle);

    body.style("cursor", "-webkit-" + grabTypeBody);
    body.style("cursor", "-moz-" + grabTypeBody);
    body.style("cursor", grabTypeBody);
  }

}