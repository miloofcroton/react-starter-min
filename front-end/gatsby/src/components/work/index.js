import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Profile from './profile';
import Projects from './projects';

const WorkWrapper = styled.section`
  display: grid;
  grid-template-columns: 70% 30%;
  margin-top: 20px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.25);
  max-height: 1000px;

  @media (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Work = ({ pathname }) => {

  return (
    <StaticQuery
      query={graphql`
        query WorkIndexQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "work" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 100)
                id
                fields {
                  slug
                }
                html
                frontmatter {
                  templateKey
                  title
                  description
                  tags
                  date
                  github
                  live
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { edges: posts } = data.allMarkdownRemark;

        const projects = posts.map(post => ({
          title: post.node.frontmatter.title,
          date: post.node.frontmatter.date,
          tags: post.node.frontmatter.tags,
          github: post.node.frontmatter.github,
          live: post.node.frontmatter.live,
          description: post.node.frontmatter.description,
          content: post.node.html,
          link: post.node.fields.slug,
        }));

        return (
          <WorkWrapper>
            <Projects projects={projects} pathname={pathname}/>
            <Profile />
          </WorkWrapper>
        );
      }}
    />
  );
};

export default Work;
