loaderUtils = require('loader-utils');
module.exports = function(source) {
  query = loaderUtils.parseQuery(this.query);
  if (query.dependency) {
    this.addDependency(query.dependency);
  }
  console.log("\n<<< loader running >>>\n");
  return source;
}