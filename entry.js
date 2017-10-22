require("./style.css");
require("./style.less");
const Jukebox = require("./jukebox/jukebox.jsx");
import jukeboxdata from './jukebox/data.js';

import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<Jukebox jukeboxdata={jukeboxdata}/>, document.getElementById("root"));

