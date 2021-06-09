import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

const Projects = ({ data }) => {
    console.log(data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact
  
    return (
      <Layout>
        <div className={styles.portfolio}>
          <h2>Portfolio</h2>
          <h3>Projects & Websites I've Created</h3>
          <div className={styles.projects} >
            {projects.map(project => (
              <Link style={{textDecoration:'none'}} to={"/projects/" + project.frontmatter.slug} 
              key={project.id}>
                <div>
                  <Img  fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                  <h3>{ project.frontmatter.title }</h3>
                  <p style={{textAlign:'center'}}>{ project.frontmatter.stack }</p>
                </div>
              </Link>
            ))}
          </div>
          <p style={{textAlign:'center'}}>Likewhat you see? email me at {contact} for a quote!</p>
        </div>
      </Layout>
    );
  }
   
  export default Projects
  
  // export page query
  export const query = graphql`
    query ProjectsPage {
      projects: allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        nodes {
          frontmatter {
            slug
            stack
            title
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
          id
        }
      }
      contact: site {
        siteMetadata {
          contact
        }
      }
    }
  `
