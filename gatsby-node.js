/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// https://github.com/dayhaysoos/use-shopping-cart/issues/184
require("@stripe/stripe-js")

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({ plugins: [new NodePolyfillPlugin()] })
}
