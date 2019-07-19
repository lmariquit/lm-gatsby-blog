import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const BlogPage = ({data}) => (
	<Layout>
		<div>
			<h1>Latest Posts</h1>
			{data.allMarkdownRemark.edges.map(post => {
				const { title, author, date, path } = post.node.frontmatter
				return (
					<div key={post.node.id}>
						<h3>{title}</h3>
						<small>Posted by {author} on {date}</small>
						<br />
						<br />
						<Link to={path}>Read More</Link>
						<br />
						<br />
						<hr />
					</div>
				)}
			)}
		</div>
	</Layout>
)

export const pageQuery = graphql`
	query BlogIndexQuery {
		allMarkdownRemark {
		edges {
		  node {
		  	id
		    frontmatter {
		      path
		      title
		      date
		      author
		    }
		  }
		}
		}
	}
`

export default BlogPage
