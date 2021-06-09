import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'

export default function Navbar() {

 

    const data = useStaticQuery(graphql `
    query SiteInfo {
        site {
          siteMetadata {
            description
            title
          }
        }
      }
    `)

    const { title } = data.site.siteMetadata
    const color = "red"
    
    return (
        
       <nav className="navGene">
           <h1>{ title }</h1>
           
           <div className="links" >
               <Link to="/" activeStyle={{ color }}>Home</Link>
               <Link to="/about" activeStyle={{ color }}>About</Link>
               <Link to="/projects" activeStyle={{ color}}>Portfolio Projects</Link>
           </div>
       </nav>
       
    )
}
