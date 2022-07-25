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
          <div className="w-100 flex justify-center py-4 md:py-0 pt-0">
            <Image media={frontmatter.media} />
          </div>
          <div className="md:pl-6 ">
            <div
              className="space-y-2 markdown"
              dangerouslySetInnerHTML={{ __html: markdownRemark.html }}
            />
          </div>
          <div className="flex flex-col md:items-center">
            {frontmatter.resources && frontmatter.resources.length > 0 && (
              <Accordion label="Resources: ">
                <ul className="list-disc pb-4">
                  {frontmatter.resources.map(resource => {
                    return (
                      <li className="ml-4">
                        <a
                          className="pb-2 hover:underline"
                          href={resource.link}
                          target="_blank"
                        >
                          {resource.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Accordion>
            )}
            {frontmatter.whoHasUsedThisTool &&
              frontmatter.whoHasUsedThisTool.length > 0 && (
                <Accordion label="Who Has Used This Tool?: ">
                  <ul className="list-disc pb-4">
                    {frontmatter.whoHasUsedThisTool.map(who => {
                      return (
                        <li className="ml-4">
                          <a
                            className="pb-2 hover:underline"
                            href={who.link}
                            target="_blank"
                          >
                            {who.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </Accordion>
              )}
            {frontmatter.guidelines && frontmatter.guidelines.length > 0 && (
              <Accordion label="Model/Sample Ordinances and Design Guidelines: ">
                <ul className="list-disc pb-4">
                  {frontmatter.guidelines.map(guideline => {
                    return (
                      <li className="ml-4">
                        <a
                          className="pb-2 hover:underline"
                          href={guideline.link}
                          target="_blank"
                        >
                          {guideline.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </Accordion>
            )}
            {frontmatter.trackingProgressLinks &&
              frontmatter.trackingProgressLinks.length > 0 && (
                <Accordion label="Tracking Progress Indicators: ">
                  <ul className="list-disc pb-4">
                    {frontmatter.trackingProgressLinks.map(indicator => {
                      return (
                        <li className="ml-4">
                          <a
                            className="pb-2 hover:underline"
                            href={trackingProgressLinks[indicator]}
                            target="_blank"
                          >
                            {indicator}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </Accordion>
              )}
            {frontmatter.seeOther && frontmatter.seeOther.length > 0 && (
              <Accordion label="See Related Tools:">
                <ul className="list-disc pb-4">
                  {frontmatter.seeOther.map(other => {
                    return (
                      <li className="ml-4">
                        <Link
                          className="pb-2 hover:underline mr-4 internal-link"
                          to={
                            "/" +
                            other.replace(/\s|[()]|\/|\,/g, "").toLowerCase()
                          }
                        >
                          {other}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
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
