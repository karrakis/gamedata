// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from "react";
import ReactDOM from "react-dom";

import POEData from "./POE/POEData"

document.addEventListener("DOMContentLoaded", () => {
  const dataNode = document.getElementById('data')
  console.log(dataNode)
  const data = JSON.parse(dataNode.getAttribute('data'))
  console.log(data)

  ReactDOM.render(
    <POEData data={data}/>,
    document.body.appendChild(document.createElement("div"))
  );
});