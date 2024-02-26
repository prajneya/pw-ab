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
          <h1 className="big-heading">Amendments to the Corporate Insolvency Resolution Process</h1>
          <p className="subtitle">Legal Article</p>
        </header>
        <br/>
        <p>On the 18th of September, 2023, the Insolvency and Bankruptcy Board of India (IBBI) issued a notification introducing the IBBI (Insolvency Resolution Process for Corporate Persons) (Second Amendment) Regulations, 2023, also known as the CIRP Amendment Regulations. These regulations came into effect on the same day, marking changes to the insolvency resolution process for corporate entities. The amendment aims to find a middle ground between practical considerations and legal requirements by streamlining the entire process. </p>
<br/>
<b>Brief Overview</b><br/>
<p>The insolvency and Bankruptcy code of India, in the press release dated 19th September 2023, summarized the amendments that have been introduced. Some pivotal highlights of the amendment regulation include enhancing the efficiency and transparency of the corporate insolvency resolution process (CIRP) in multiple ways. Firstly, they outline a detailed procedure for the resolution professional (RP) to take custody and control of assets and records of the corporate debtor (CD), ensuring cooperation from CD personnel.
</p><p>Secondly, to ease the burden on the Adjudicating Authority (AA), the timelines for filing claims are extended, allowing claims up to the date of the resolution plan request or ninety days from the insolvency commencement date. The RP is empowered to provide views on late claims, and the committee of creditors (CoC) can recommend their acceptance for inclusion in the resolution plan. Additionally, the amendments enhance the role of authorized representatives, especially for homebuyers, introducing a procedure for their replacement and increasing their fees.
</p><p>The transparency of the resolution process is improved by enabling committee members to conduct a CD audit, with the audit costs considered part of CIRP expenses. The timelines for various procedural aspects are aligned, and changes to Form G provide more information to prospective resolution applicants. The compliance certificate (Form H) is modified to include minutes of CoC meetings, offering better insight into CoC decisions. Details of debt assignment must be provided to the RP within seven days, and the amendments specify requirements for submitting details and evidence in applications filed under section 7 or 9. 
</p><br/>
<b>Major Insights</b><br/>
<p>The addition of information about debt, default, and limitation in applications filed under section 7 or section 9 serves the purpose of aiding NCLT benches in efficiently deciding whether to admit or reject these applications. Consolidating essential information in one place in a chronological order is designed to simplify the process, making it easier for the benches to quickly refer to the necessary information for the admission of such applications. 
</p><p>The introduction of Regulation 3A in the CIRP Regulations mandates cooperation from the corporate debtor's personnel, including management and promoters. This regulation imposes a responsibility on them to compile a comprehensive list of assets and records when transferring custody and control. The amendment places an increased obligation on the resolution professional (RP), extending beyond the mere acquisition of the corporate debtor's assets. The RP is now required to verify the asset list against the financial records of the corporate debtor. Any disparities discovered during this verification process must be reported when filing an application under section 19(2), particularly if the assets do not align with those disclosed in the corporate debtor's financial statements. 
</p><p>Before the Amendment Regulations, creditors had a 90-day window from the insolvency commencement date to submit their claims. With the amendment, as outlined in Regulation 12(1), creditors now have the flexibility to file claims either within 90 days or up to the date of the issuance of the request for resolution plans, depending on which time frame is later.
</p><p>New regulations, 13(1)(A) to 13(1)(C), have been added to specify the responsibilities of the resolution professional in managing and validating claims, focusing on delayed claims submitted by creditors. The amendment introduces provisions for the appointment of an authorized representative (AR) for a class of financial creditors. The new insertion will allow the creditors to seek for an alternate AR to represent them and to deal with their issues and grievances. The amendment also widens the scope of responsibilities to be undertaken by the AR.
</p><p> Regulation 28 has been amended in the manner where now a timeline of 7 days has been provided to inform details in case of assignment or transfer of debts by the transferor and transferee. Following this amendment, the resolution professional is now required to furnish the information memorandum (IM), evaluation matrix, and request for resolution plan (RFRP) within five days of finalizing the list of potential resolution applicants. As a result, the model timeline specified in Regulation 40A has been revised to state that the issuance of the RFRP, including the Evaluation Matrix and IM, must occur within five days of releasing the final list of prospective applicants. Additionally, resolution plans are to be received no less than 30 days from the date of issuing the RFRP. 
</p><br/>
<b>Conclusion</b><br/>
<p>On June 7, 2023, the IBBI released a discussion paper titled "Measures for Increasing the Possibility of Resolution, Value of Resolution Plan, and Enabling Timely Resolution" ("Discussion Paper"). This paper analyzed various issues impacting the efficiency and effectiveness of the resolution process. In response to the identified challenges, the IBBI has amended the CIRP Regulations as a proactive step to address and resolve these issues.The Amendment marks a positive stride in improving the functionality of the insolvency resolution framework outlined in the Insolvency Code. It aims to address the existing challenges related to delays in the timely completion of processes mandated by the Code. </p>
<br/>
<b>References:</b>
<ul>
    <li>Gazette Notification No. IBBI/2023-24/GN/REG106, Press Release. Insolvency and Bankruptcy Board of India (2023, Sept.18).</li>
    <li>Insolvency and Bankruptcy Board of India (Insolvency Resolution Process for Corporate Persons) Regulations, 2016.</li>
    <li>Discussion Paper: Simplification of Enrolment and Registration Process for Ease of Entry in the Insolvency Profession. Insolvency and Bankruptcy Board of India. (2023, June 7). <a href="https://ibbi.gov.in/en/public-comments/comments-on">https://ibbi.gov.in/en/public-comments/comments-on</a></li>
</ul>	

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
