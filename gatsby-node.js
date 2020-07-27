/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const fs = require("fs");

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "devos" } }) {
        edges {
          node {
            name
          }
        }
      }
    }
  `);

  data.allFile.edges.forEach(edge => {
    // Create page for devo
    const fileName = edge.node.name;
    const path = `/resources/devos/${fileName}`;
    actions.createPage({
      path: path,
      component: require.resolve(`./src/pages/resources/devos.js`),
      context: { day: parseInt(fileName.substring(3)) },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  // Fill in file contents
  if (node.internal.mediaType === "text/plain") {
    fs.readFile(node.absolutePath, null, (err, buf) => {
      node.internal.content = buf.toString();
    });
  }
};
