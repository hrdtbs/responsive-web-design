// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)

const debug = process.env.NODE_ENV !== "production";

console.log(process.env.BACKEND_URL);

module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" }
    };
  },
  assetPrefix: !debug ? "/responsive-web-design/" : ""
};
