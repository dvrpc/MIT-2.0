import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Icon from "../components/Icon";
import ToolKit from "../images/toolkit.png";
import Accordion from "../components/Accordion";
import Image from "../components/Image";
import { focusAreas, principles } from "../utils/icons";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <Layout>
      <div className="w-4/5 flex min-h-[80vh] flex-col">
        <div className="flex mt-10">
          <div className="text-3xl">{frontmatter.title}</div>
          <div className="flex items-center ml-auto">
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
        <div className="grid grid-cols-3 my-8 h-full">
          <div className="w-100 flex justify-center p-12 pt-0">
            {frontmatter.media ? (
              <Image media={frontmatter.media} />
            ) : (
              <img src={ToolKit} alt="toolkit-logo" className="h-[300px]" />
            )}
          </div>
          <div>
            {markdownRemark.html ? (
              <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
            ) : (
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Nulla aliquet enim tortor at auctor urna. Risus at ultrices mi
                tempus imperdiet. Ut eu sem integer vitae justo. Convallis a
                cras semper auctor neque vitae tempus. Nullam vehicula ipsum a
                arcu cursus vitae congue mauris. Interdum posuere lorem ipsum
                dolor sit amet consectetur adipiscing elit. Elementum eu
                facilisis sed odio morbi quis commodo odio. In fermentum posuere
                urna nec tincidunt praesent. Risus sed vulputate odio ut enim
                blandit volutpat maecenas volutpat. Mattis nunc sed blandit
                libero volutpat sed cras ornare arcu. Id semper risus in
                hendrerit gravida. Vulputate dignissim suspendisse in est ante.
              </p>
            )}
          </div>
          <div className="flex flex-col items-center">
            {frontmatter.resources && (
              <Accordion label="Resources: ">
                {frontmatter.resources.map(resource => {
                  return (
                    <a className="pb-2 underline" href={resource.link}>
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
                    <a className="pb-2 underline" href={who.link}>
                      {who.label}
                    </a>
                  );
                })}
              </Accordion>
            )}
            {frontmatter.guidelines && (
              <Accordion label="Model/Sample Ordinances and Design Guidelines: ">
                {frontmatter.whoHasUsedThisTool.map(guideline => {
                  return (
                    <a className="pb-2 underline" href={guideline.link}>
                      {guideline.label}
                    </a>
                  );
                })}
              </Accordion>
            )}
            {frontmatter.trackingProgressLinks && (
              <Accordion label="Tracking Progress Indicators: ">
                {frontmatter.trackingProgressLinks.map(link => {
                  return (
                    <Link
                      className="pb-2 underline"
                      to={
                        "/" +
                        link
                          .toLowerCase()
                          .replace(/\s|[/]/g, "")
                          .replace(/&| and /g, "-and-")
                      }
                    >
                      {link}
                    </Link>
                  );
                })}
              </Accordion>
            )}
            {frontmatter.seeOther && (
              <Accordion label="See Related Tools:">
                {frontmatter.seeOther.map(link => {
                  return (
                    <Link
                      className="underline mr-4"
                      to={
                        "/" +
                        link
                          .toLowerCase()
                          .replace(/\s|[/]/g, "")
                          .replace(/&| and /g, "-and-")
                      }
                    >
                      {link}
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
