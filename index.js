const visit = require("unist-util-visit")
const pangu = require('pangu')

module.exports = ({ markdownAST }) => {
  visit(markdownAST, "text", node => {
    node.value = pangu.spacing(node.value)
  })

  return markdownAST
}
