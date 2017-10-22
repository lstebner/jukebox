require("./style.css");
require("./style.less");
const Jukebox = require("./jukebox/jukebox.jsx");

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Jukebox/>, document.getElementById("root"));

