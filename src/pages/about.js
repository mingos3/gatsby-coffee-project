import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import BackgroundSection from '../components/Globals/BackgroundSection';
import Info from '../components/Home/Info';
import Footer from '../components/Globals/Footer';
import Values from '../components/Home/Values';

const AboutPage = ({ data }) => (
	<Layout>
		<SEO title="About" />
		<BackgroundSection img={data.img.childImageSharp.fluid} title="about us" styleClass="about-background" />
		<Info />
		<Values />
		<Footer />
	</Layout>
);

export const query = graphql`
	{
		img: file(relativePath: { eq: "about-background.jpeg" }) {
			childImageSharp {
				fluid {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

export default AboutPage;
