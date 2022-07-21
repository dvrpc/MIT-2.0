import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Icon from "../components/Icon";
import Accordion from "../components/Accordion";
import Image from "../components/Image";
import { focusAreas, principles } from "../utils/icons";
import trackingProgressLinks from "../utils/trackingProgressLinks";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <Layout>
      <div className="md:w-4/5 px-4 md:px-0 flex min-h-[80vh] flex-col">
        <div className="flex flex-col md:flex-row mt-10">
          <div className="text-xl md:text-3xl text-[#4fa3a8] page-title">
            {frontmatter.title}
          </div>
          <div className="flex items-center md:ml-auto mt-2 md:mt-0">
            {frontmatter.focusAreas.map(focus => {
              return (
                <Icon altText={focus} image={focusAreas[focus]} enableToolTip />
              );
            })}
            {frontmatter.principles.map(principle => {
              return (
                <Icon
                  altText={principle}
                  image={principles[principle]}
                  enableToolTip
                />
              );
            })}
          </div>
        </div>
        <div className="md:grid grid-cols-3 my-8 h-full">
          <div className="w-100 flex justify-center md:pr-6 py-4 md:py-0 pt-0">
            <Image media={frontmatter.media} />
          </div>
          <div>
            <div
              className="space-y-2 markdown"
              dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            />
          </div>
          <div className="flex flex-col md:items-center">
            {frontmatter.resources && (
              <Accordion label="Resources: ">
                {frontmatter.resources.map(resource => {
                  return (
                    <a
                      className="pb-2 underline"
                      href={resource.link}
                      target="_blank"
                    >
                      {resource.label}
                    </a>
                  );
                })}
              </Accordion>
            )}
            {frontmatter.whoHasUsedThisTool && (
              <Accordion label="Who Has Used This Tool?: ">
                {frontmatter.whoHasUsedThisTool.map(who => {
                  return (
                    <a
                      className="pb-2 underline"
                      href={who.link}
                      target="_blank"
                    >
                      {who.label}
                    </a>
                  );
                })}
              </Accordion>
            )}
            {frontmatter.guidelines && (
              <Accordion label="Model/Sample Ordinances and Design Guidelines: ">
                {frontmatter.guidelines.map(guideline => {
                  return (
                    <a
                      className="pb-2 underline"
                      href={guideline.link}
                      target="_blank"
                    >
                      {guideline.label}
                    </a>
                  );
                })}
              </Accordion>
            )}
            {frontmatter.trackingProgressLinks && (
              <Accordion label="Tracking Progress Indicators: ">
                {frontmatter.trackingProgressLinks.map(indicator => {
                  return (
                    <a
                      className="pb-2 underline"
                      href={trackingProgressLinks[indicator]}
                      target="_blank"
                    >
                      {indicator}
                    </a>
                  );
                })}
              </Accordion>
            )}
            {frontmatter.seeOther && (
              <Accordion label="See Related Tools:">
                {frontmatter.seeOther.map(other => {
                  return (
                    <Link
                      className="pb-2 underline mr-4 internal-link"
                      to={
                        "/" + other.replace(/\s|[()]|\/|\,/g, "").toLowerCase()
                      }
                    >
                      {other}
                    </Link>
                  );
                })}
              </Accordion>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        principles
        focusAreas
        seeOther
        trackingProgressLinks
        media {
          type
          path
          credit
        }
        resources {
          label
          link
        }
        whoHasUsedThisTool {
          label
          link
        }
        guidelines {
          label
          link
        }
      }
    }
  }
`;
