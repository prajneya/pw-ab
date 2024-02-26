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
          <h1 className="big-heading">Introducing Qiso: A Company with Vision, Purpose and Passion</h1>
          <p className="subtitle">Press Release Article</p>
        </header>
        <br/>

        <p>In a move to better align with its vision to support India's growth, HatchnHack, the B2B marketplace for electronic components, has announced a rebranding of itself as 'QISO.' The new brand name reflects the company's commitment to providing cutting-edge technology solutions and its ambition to be a trusted partner in India's journey towards economic and technological advancement.

</p><p>QISO offers an online platform that leverages cutting-edge technology to provide a wide range of electronic components to B2B companies in industries such as EVs, toys, medical equipment, and home and industry automation. The platform offers a vast product listing and facilitates mutual business transactions between buyers and sellers, providing the best deals on industrial supplies procurement. Qiso’s focus on quality ensures that each step of the process is monitored to provide the best quality products to customers.

</p><p>Qiso is a leading provider of technology solutions, which is headquartered in New Delhi, India, has unveiled a vertical marketplace, which offers an end-to-end solution for the electronics manufacturing industry. The platform provides a wide range of electronic components and electronics manufacturing services to B2B companies operating in various sectors such as medical equipment, home and industry automation, EVs, toys, and EMS, among others. With the help of cutting-edge technology, Qiso offers the movement necessary to succeed while paying close attention to each step.

</p><p>It facilitates business transactions between buyers and sellers, providing the best deals on procurement of industrial supplies. The platform's vast product listing offers B2B companies the best deals on procurement of industrial supplies in a wide range of electronic components that are used in various manufacturing industries. 

</p><p>Qiso’s founder Mr. Rahul Sharma shared his entrepreneurial experience while building HNH, now Qiso, and said “HNH started out as a product development and prototyping center catering to small and medium-sized enterprises (SMEs). Over the course of our journey, we repeatedly ran into the same challenges that other manufacturers and design houses were facing. We realized that more than half of our lost productivity was due to problems within the complex and fragmented Indian electronics component supply chain. So in 2020, we started piloting an inventory of about 1,000 SKUs. Our goal is to serve customers who need availability, timely delivery, quality and cost-effectiveness.”

</p><p>Mr. Sharma adds, “We are India's fastest-growing electronics component distribution startup, serving and simplifying the pain we felt for more than 5000 business customers. With a well-researched startup thesis and prominent angel investors, our young team of 75 passionate people serves clients across the country.By digitalizing India’s component supply landscape, our SaaS and Marketplace offerings have the potential to reduce supply chain risks and introduce efficiencies that enable cost-effective manufacturing of electronics products in India. Our focus is on speeding up India’s electronics product manufacturing ecosystem, and we believe there is a huge market opportunity for our products and services.”

</p><p>Qiso is India's fastest-growing B2B marketplace for all kinds of electronic components. It offers buyers and sellers a platform to meet for mutual business transactions, which facilitates a seamless supply chain for the electronics manufacturing industry.

</p><p>The launch is a sign of how the company will revolutionize the manufacturing industry. With the launch of Qiso, the company is aiming to provide an end-to-end solution for the electronics manufacturing industry. Its Business’s commitment to quality and cutting-edge technology ensures that B2B companies get the best deals on procurement of industrial supplies, and Qiso is all set to facilitate a seamless supply chain for the industry.

</p><p>The online marketplace offers tons of electronic products such as Basic Components, Switches & Relays, Power Supply, Audio & Display, Sensors & Modules, Soldering Items & Tools, Consumables, Cables & Connectors, Development Boards, Diodes & Transistors, Robotics & Motors, IoT & Wireless and Integrated Circuits & Base. Consumers can also get their hands on the latest technologically advanced services offered by the company such as, 3D Printing, EMS Request, Custom Battery Pack, Contract Manufacturing, PCB Fabrication & Assembly and Custom Cable Assembly and Connectors. 

</p><p>The company not only offers impeccable products and service but is also known for its amazing working atmosphere. Kunal Chandra on Facebook recommends Qiso and states “The Company gives you a very positive vibe and you feel a sense of freedom here. The HatchnHack Team is always ready to help. I love the fact that there is an Indian company which is offering such great facilities for career growth.”

</p><p>Previously known as HatchnHack, the company has changed its name and completed its rebranding as ‘QISO’ that will be more consistent with the dynamic environment in which the electronic components and manufacturing industry operates. 
</p>
<br/><br/>
<b>About Qiso:</b><br/>
<b>Website:</b> <a href="http://www.hnhcart.com">http://www.hnhcart.com</a><br/>
<b>Phone:</b> 9625453232<br/>
<b>Industry:</b> Semiconductor Manufacturing<br/>
<b>Company size:</b> 11-50 employees<br/>
<b>Headquarters:</b> New Delhi, Delhi<br/>
<b>Founded in</b> 2019<br/>
<b>Specialties:</b> PCB Design, VLSI, Embedded Systems, Professional Training, IoT, Manufacturing, Open Source, Community, Hardware Startup Incubation, DIY, Workshops, 3D Printing, Trainings, Makerspace, Makerspace Research, Hardware Development, and Product Conceptualization. 


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
