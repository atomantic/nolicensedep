const nolicense = require("nolicense");
module.exports = () => {
  console.log("nolicensedep booting");
  return nolicense();
};
