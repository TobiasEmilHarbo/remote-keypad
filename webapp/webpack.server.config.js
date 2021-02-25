const path = require('path');

exports = {    
  output: {
    path: path.join(__dirname, "dist/webapp"),
    library: "app",
    libraryTarget: "umd",
    filename: "[name].js",
  },
};