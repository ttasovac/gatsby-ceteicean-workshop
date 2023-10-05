import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { useIntl } from "gatsby-plugin-intl";

// export function Head() {
//   const intl = useIntl();
//   return (
//     <>
//       <title>Hello World</title>
//       <html lang={intl.locale} />
//     </>
//   );
// }

const Index = () => {
  const data = useStaticQuery(graphql`
    query teifiles {
      allCetei {
        nodes {
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `)
  const teifiles = data.allCetei.nodes
  return (
    <Layout location="home">
      <h2>My edition</h2>
      <div>
        <h3>Documents:</h3>
        <ul>{teifiles.map(file => (
          <li><Link to={file.parent.name}>{file.parent.name}</Link></li>
        ))}
        <li><Link to="verovio">Verovio example</Link></li>
        </ul>
      </div>
    </Layout>
  )
}

export default Index
