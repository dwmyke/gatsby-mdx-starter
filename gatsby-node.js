/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise((resolve, reject) => {
//     resolve(
//       graphql(
//         `
//           {
//             allMdx {
//               edges {
//                 node {
//                   id
//                   parent {
//                     ... on File {
//                       name
//                       sourceInstanceName
//                     }
//                   }
//                   code {
//                     scope
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }
//         // Create blog posts pages.
//         result.data.allMdx.edges.forEach(({ node }) => {
//           createPage({
//             path: `/${sourceInstanceName}/${node.parent.name}`,
//             component: componentWithMDXScope(
//               path.resolve('./src/components/posts-page-layout.js'),
//               node.code.scope
//             ),
//             context: { id: node.id }
//           })
//         })
//       })
//     )
//   })
// }
