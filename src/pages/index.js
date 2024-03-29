import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/Globals/BackgroundSection';
import Values from '../components/Home/Values';
import Footer from '../components/Globals/Footer';

const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="Home" />
		<BackgroundSection img={data.img.childImageSharp.fluid} title="regular coffee" />
		<Values />
		<Footer />
	</Layout>
);

export const query = graphql`
	{
		img: file(relativePath: { eq: "default-background.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default IndexPage;
