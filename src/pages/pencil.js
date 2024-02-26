import React, { useRef, useEffect } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { Icon } from '@components/icons';
import { usePrefersReducedMotion } from '@hooks';

const StyledTableContainer = styled.div`
  margin: 100px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.company {
        font-size: var(--fz-lg);
        white-space: nowrap;
      }

      &.tech {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
        }
      }

      &.links {
        min-width: 100px;

        div {
          display: flex;
          align-items: center;

          a {
            ${({ theme }) => theme.mixins.flexCenter};
            flex-shrink: 0;
          }

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

const ArchivePage = ({ location, data }) => {
  const projects = data.allMarkdownRemark.edges;
  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig(200, 0));
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 10)));
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="Archive" />

      <main>
        <header ref={revealTitle}>
          <h1 className="big-heading"> Latest Interior Designs for Home</h1>
          <p className="subtitle">Blog</p>
        </header>
        <br/>
        <p>At Pencilinteriors, we think that home design is about more than just good looks and utility.We want the interiors of your house to reflect who you are. Your house should be a place where you and your family take pride and enjoy spending time together. Our efficient, tailored home interior designs take into account your wants in every corner and cranny of your home, ensuring that your space fits all of your needs. By blending your style with their design experience, our dedicated home interior designers work tirelessly with you to create the perfect interior design plan. They'll also ensure that the plan is implemented using high-quality materials.</p>
<p>What's next on the horizon? What will the home design and décor trends be? Trends come and go quickly. The last two years have shown us that anything may happen in an instant. Consider your own home: it used to be a location where you could spend quality time on the weekends and at night, but it has now evolved into a multi-functional area. Check out some of the latest trendy designs for your home.</p>
<br/><b>Creating a Multi-Functional Space</b><br/>

<p>A room is no longer used exclusively for one purpose. With the latest improvements in architectural advancements, interior designs are likely to include numerous ideas for multi-functional rooms. Rooms with versatile furniture, of course, are both physically and visually lighter. It is believed that by utilising the best and most inventive room-splitting approaches, one may now make the most of every nook. If one looks closely, there are various alternatives in a room. For example, we frequently overlook vertical spaces. However, the chamber can be divided by adding a ladder or a platform.</p>
<br/><b>Creating the Perfect Home Office Space</b><br/>
<p>Many people want to set up an ideal working environment in their homes. The home office is available in a variety of designs and sizes. So, whatever appearance they choose, it must be one that suits them. Aesthetics, utility, and practicality must all be considered while building a home office environment. Here are a few things to consider in order to gain a better understanding:</p>
<ul>
    <li>Select a quiet location in the house.</li>
    <li>To keep calm and concentrated, choose soothing colours.</li>
</ul>
<br/>
<b>With the Floor, it'll be a lot brighter.</b>
<p>Light-colored floors that do their best to bounce light back across the area are ideal for those who want to brighten up their home with natural light. This concept is based on the minimalistic style and works best with a few vivid colours. To add soft textures and a curated art piece to transmit happy vibrations, try adding soft textures and a curated art piece.</p>
<br/><b>Interior Design  That Are Eco-Friendly</b>
<p>Sustainability is fashionable, and it will be one of the most popular home decor and design trends in 2022, but it is a long-term strategy for achieving a greener design. However, there are a few things you can do to make the design style more eco-friendly and sustainable:</p>
<ul>
    <li>Materials can be reused, repurposed, or sourced from a certified sustainable source. Jute, reclaimed metal, bio-glass, and other materials may be used.</li>
    <li>Choose an energy-efficient design that reduces the demand for heating, lighting, and appliances. Finally, non-toxic, low-biocide paints can be used to provide a green finish.</li>
</ul>
<br/><b>The importance of minimalism and contemporary designs has not faded.</b>
<p>By increasing the living area with a few conveniences, one can accomplish minimalist home interior design. Stick to one or two furniture materials and keep the decoration to a minimum to get the effect. Different textures and contrasting surfaces can also be used to enhance the contemporary effect.</p>
 
<br/><b>Contact Us:</b>
<p>Pencilinteriors @8722224325 - Mr. Sunjith</p>

        

      </main>
    </Layout>
  );
};
ArchivePage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default ArchivePage;

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/projects/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            date
            title
            tech
            github
            external
            ios
            android
            company
          }
          html
        }
      }
    }
  }
`;
