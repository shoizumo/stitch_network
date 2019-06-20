import * as d3 from 'd3';
import $ from "jquery";

export default class Network {

  static mouseover(d, links, circle) {
    const nodeIndex = d.index; // to get node index
    for (let i = 0, l = links.length; l > i; i++) {
      if (links[i].source.index === nodeIndex ||
          links[i].target.index === nodeIndex) {

        const lineIndex = i;  // index number
        //console.log(lineIndex)

        const selectLine = d3.selectAll("line")['_groups'][0][lineIndex]; //node which match index number
        $(selectLine).attr("class", "lineColor");  // node color

        //console.log(links[lineIndex].source.index)
        //console.log(links[lineIndex].target.index)

        const nodeSource = links[lineIndex].source.index;
        const nodeTarget = links[lineIndex].target.index;

        const selectNodeSource = d3.selectAll("circle")['_groups'][0][nodeSource]; //node which match source index number
        const selectNodeTarget = d3.selectAll("circle")['_groups'][0][nodeTarget]; //node which match target index number
        $(selectNodeSource).attr("class", "nodeColor");  // node color
        $(selectNodeTarget).attr("class", "nodeColor");  // node color

        const selectNodeSource2 = circle.parent().children('text')[nodeSource];  // text which match source index number
        const selectNodeTarget2 = circle.parent().children('text')[nodeTarget];  // text which match target index number
        $(selectNodeSource2).attr("class", "linkedNodeText");  // node text color
        $(selectNodeTarget2).attr("class", "linkedNodeText");  // node text color
      }
    }
    const selectNode = d3.selectAll("circle")['_groups'][0][nodeIndex];
    $(selectNode).attr("class", "nodeColor");
    const selectNodeText = circle.parent().children('text')[nodeIndex];
    $(selectNodeText).attr("class", "linkedNodeText");
  }


  static mouseout(d, links, circle) {
    const nodeIndex = d.index;
    for (let i = 0, l = links.length; l > i; i++) {
      if (links[i].source.index === nodeIndex ||
          links[i].target.index === nodeIndex) {

        const lineIndex = i;

        const selectLine = d3.selectAll("line")['_groups'][0][lineIndex];
        $(selectLine).attr("class", "lineColorDefault");

        const nodeSource = links[lineIndex].source.index;
        const nodeTarget = links[lineIndex].target.index;

        const selectNodeSource = d3.selectAll("circle")['_groups'][0][nodeSource];
        const selectNodeTarget = d3.selectAll("circle")['_groups'][0][nodeTarget];
        $(selectNodeSource).attr("class", "nodeColorDefault");
        $(selectNodeTarget).attr("class", "nodeColorDefault");

        const selectNodeSource2 = circle.parent().children('text')[nodeSource];
        const selectNodeTarget2 = circle.parent().children('text')[nodeTarget];
        $(selectNodeSource2).attr("class", "textSizeDefault");
        $(selectNodeTarget2).attr("class", "textSizeDefault");
      }
    }
    const selectNode = d3.selectAll("circle")['_groups'][0][nodeIndex];
    $(selectNode).attr("class", "nodeColorDefault");
    const selectNodeText = circle.parent().children('text')[nodeIndex];
    $(selectNodeText).attr("class", "textSizeDefault");
  }


  static mousedown(d, links, circle, labels) {
    //at first, make all node & line fade
    d3.selectAll("circle").attr("class", "nodeColorFade");
    d3.selectAll("line").attr("class", "lineColorFade");
    labels.attr("class", "nodeTextFade");
    // circle.parent().children('text').attr("class", "nodeTextFade");

    const nodeIndex = d.index;
    for (let i = 0, l = links.length; l > i; i++) {
      if (links[i].source.index === nodeIndex ||
          links[i].target.index === nodeIndex) {

        const lineIndex = i;
        const selectLine = d3.selectAll("line")['_groups'][0][lineIndex];
        $(selectLine).attr("class", "lineColor");

        const nodeSource = links[lineIndex].source.index;
        const nodeTarget = links[lineIndex].target.index;

        const selectNodeSource = d3.selectAll("circle")['_groups'][0][nodeSource];
        const selectNodeTarget = d3.selectAll("circle")['_groups'][0][nodeTarget];
        $(selectNodeSource).attr("class", "nodeColor");
        $(selectNodeTarget).attr("class", "nodeColor");

        const selectNodeSource2 = circle.parent().children('text')[nodeSource];
        const selectNodeTarget2 = circle.parent().children('text')[nodeTarget];
        $(selectNodeSource2).attr("class", "linkedNodeText");
        $(selectNodeTarget2).attr("class", "linkedNodeText");

      }
    }
    const selectNode = d3.selectAll("circle")['_groups'][0][nodeIndex];
    $(selectNode).attr("class", "nodeColor");
    const selectNodeText = circle.parent().children('text')[nodeIndex];
    $(selectNodeText).attr("class", "linkedNodeText");
  }


  static touchStart(d, links, circle, labels) {
    //at first, make all node & line fade
    d3.selectAll("circle").attr("class", "nodeColorFadeSp");
    d3.selectAll("line").attr("class", "lineColorFade");
    labels.attr("class", "nodeTextFade");


    const nodeIndex = d.index;
    for (let i = 0, l = links.length; l > i; i++) {
      if (links[i].source.index === nodeIndex ||
          links[i].target.index === nodeIndex) {

        const lineIndex = i;
        const selectLine = d3.selectAll("line")['_groups'][0][lineIndex];
        $(selectLine).attr("class", "lineColor");

        const nodeSource = links[lineIndex].source.index;
        const nodeTarget = links[lineIndex].target.index;

        const selectNodeSource = d3.selectAll("circle")['_groups'][0][nodeSource];
        const selectNodeTarget = d3.selectAll("circle")['_groups'][0][nodeTarget];
        $(selectNodeSource).attr("class", "nodeColor");
        $(selectNodeTarget).attr("class", "nodeColor");

        const selectNodeSource2 = circle.parent().children('text')[nodeSource];
        const selectNodeTarget2 = circle.parent().children('text')[nodeTarget];
        $(selectNodeSource2).attr("class", "linkedNodeText");
        $(selectNodeTarget2).attr("class", "linkedNodeText");

      }
    }
    const selectNode = d3.selectAll("circle")['_groups'][0][nodeIndex];
    $(selectNode).attr("class", "nodeColor");
    const selectNodeText = circle.parent().children('text')[nodeIndex];
    $(selectNodeText).attr("class", "linkedNodeText");
  }


  static mouseup(d, links, circle, labels) {
    d3.selectAll("circle").attr("class", "nodeReturnFade");
    d3.selectAll("line").attr("class", "lineReturnFade");
    labels.attr("class", "nodeTextReturnFade");

    const nodeIndex = d.index;
    for (let i = 0, l = links.length; l > i; i++) {
      if (links[i].source.index === nodeIndex ||
          links[i].target.index === nodeIndex) {

        const lineIndex = i;

        const selectLine = d3.selectAll("line")['_groups'][0][lineIndex];
        $(selectLine).attr("class", "lineColor");

        const nodeSource = links[lineIndex].source.index;
        const nodeTarget = links[lineIndex].target.index;

        const selectNodeSource = d3.selectAll("circle")['_groups'][0][nodeSource];
        const selectNodeTarget = d3.selectAll("circle")['_groups'][0][nodeTarget];
        $(selectNodeSource).attr("class", "nodeColor");
        $(selectNodeTarget).attr("class", "nodeColor");

        const selectNodeSource2 = circle.parent().children('text')[nodeSource];
        const selectNodeTarget2 = circle.parent().children('text')[nodeTarget];
        $(selectNodeSource2).attr("class", "linkedNodeText");
        $(selectNodeTarget2).attr("class", "linkedNodeText");

      }
    }
    const selectNode = d3.selectAll("circle")['_groups'][0][nodeIndex];
    $(selectNode).attr("class", "nodeColor");
    const selectNodeText = circle.parent().children('text')[nodeIndex];
    $(selectNodeText).attr("class", "linkedNodeText");
  }


  static cursor(type, body, circle) {
    let grabTypeC;
    let grabTypeB;
    if (type === 'grabbing') {
      grabTypeC = "grabbing";
      grabTypeB = "grabbing";
    } else {
      grabTypeC = "grab";
      grabTypeB = "auto";
    }

    //grabbing
    circle.css({"cursor": ["-webkit-" + grabTypeC]});
    circle.css({"cursor": ["-moz-" + grabTypeC]});
    circle.css({"cursor": [grabTypeC]});

    body.css({"cursor": ["-webkit-" + grabTypeB]});
    body.css({"cursor": ["-moz-" + grabTypeB]});
    body.css({"cursor": [grabTypeB]});
  }

}