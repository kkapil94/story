import React from "react";
import {createRoot} from "react-dom/client"

const cont = React.createElement("div",{},"hello world")

const root = createRoot(document.getElementById('root'));
root.render(cont);
