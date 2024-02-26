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
          <h1 className="big-heading">Choosing the Right Subjects in High School: How it Can Impact Your Future Career</h1>
          <p className="subtitle">Blog</p>
        </header>
        <br/>
        <p>As a high school student, the choices you make regarding the subjects you take can have a significant impact on your future career opportunities. With so many options available, it can be overwhelming to decide which subjects to take. In this blog, we will explore the importance of choosing the right subjects in high school and how it can impact your future career.</p>
<br/>
<b>Interlinking interests and career path</b><br/>
<p>
First and foremost, it's important to understand that the subjects you choose in high school will determine the types of higher education and career options available to you in the future. For example, if you plan to pursue a career in medicine, it is essential to take science subjects such as biology, chemistry, and physics. Similarly, if you plan to pursue a career in engineering, it is essential to take mathematics and physics. Furthermore, the subjects you choose in high school can also determine the level of difficulty you will face in college. For instance, if you take advanced level classes in high school, you will be better prepared to handle the rigors of college-level courses. Additionally, taking advanced classes can help you stand out when applying to colleges and universities, making you a more attractive candidate.</p>
<p>In addition to the core academic subjects, it is also important to consider taking elective classes in areas that interest you. Elective classes can help you explore your passions and interests and give you a taste of what you might want to pursue in college and beyond. Don’t forget to think about the skills you want to develop. Whether it's leadership, critical thinking, or creativity, certain classes can help you develop these skills that will be beneficial for your future career.</p>
<br/>
<b>How to determine which subjects to choose from?</b><br/>
<p>Students who are interested in pursuing a career in science, technology, engineering, or mathematics (STEM) should consider taking advanced science and math classes. For example, students interested in becoming engineers or scientists should take classes in physics, chemistry, and biology. Additionally, computer science classes can provide a solid foundation for students who want to pursue careers in technology or programming. Students who are interested in pursuing a career in business or finance should consider taking classes in economics, accounting, and business management. These classes will provide a good understanding of how businesses operate and how to manage finances. Furthermore, students who want to pursue a career in finance should also consider taking classes in statistics, as they can help to develop a strong understanding of data analysis.
</p><p>Students, who are interested in pursuing a career in the arts, such as music, theatre, or visual arts, should take classes in those subjects. For example, students who are interested in becoming professional musicians should take classes in music theory and performance. Similarly, students who want to pursue a career in theatre should take classes in drama and stage production. Lastly, students who are interested in pursuing a career in education or social work should take classes in psychology, sociology, and history. These classes will give them a good understanding of human behaviour and society, which can be useful in fields such as teaching and counselling. Furthermore, students who want to become teachers should take classes in education, as they will learn about curriculum development, classroom management, and other aspects of teaching.
</p><p>High school is a crucial stage in a student's life, and the choices you make regarding the subjects you take can have a significant impact on your future career opportunities. It's important to choose subjects that align with your career aspirations, and also to consider the level of difficulty you will face in college and the skills you want to develop. By carefully selecting the right subjects in high school, you will be better prepared to take on the challenges of college and your future career. It is an important time for students as they start to think about their future careers. The subjects they choose to study can have a significant impact on the career opportunities available to them.
</p><p>Students have a wide variety of subjects to choose from when it comes to planning for their future careers. By carefully selecting classes in fields that align with their interests and career goals, they can set themselves up for success and open up many opportunities in the future.</p>

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
