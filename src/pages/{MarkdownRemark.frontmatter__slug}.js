import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Logo from "../components/Logo";
import ToolKit from "../images/toolkit.png";

export default function Template({ data, location }) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <Layout>
      <div className="w-3/4 mt-6 flex flex-col">
        <div className="flex">
          <div className="text-3xl">{frontmatter.title}</div>
          <div className="flex items-center ml-auto">
            {frontmatter.focusAreas.map(focus => {
              return <Logo focus={focus} />;
            })}
          </div>
        </div>
        <div className="grid grid-cols-2 mt-8">
          <div className="w-100 flex justify-center">
            <img src={ToolKit} alt="toolkit-logo" className="h-[300px] mr-12" />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla
              aliquet enim tortor at auctor urna. Risus at ultrices mi tempus
              imperdiet. Ut eu sem integer vitae justo. Convallis a cras semper
              auctor neque vitae tempus. Nullam vehicula ipsum a arcu cursus
              vitae congue mauris. Interdum posuere lorem ipsum dolor sit amet
              consectetur adipiscing elit. Elementum eu facilisis sed odio morbi
              quis commodo odio. In fermentum posuere urna nec tincidunt
              praesent. Risus sed vulputate odio ut enim blandit volutpat
              maecenas volutpat. Mattis nunc sed blandit libero volutpat sed
              cras ornare arcu. Id semper risus in hendrerit gravida. Vulputate
              dignissim suspendisse in est ante.
            </p>
          </div>
        </div>
        <div className="mt-auto">
          <div>See Also: </div>
          {frontmatter.seeOther.map(link => {
            return (
              <Link
                className="mr-4 underline"
                to={
                  "/" +
                  link
                    .toLowerCase()
                    .replace(/\s/g, "")
                    .replace(/&|and/g, "-and-")
                }
              >
                {link}
              </Link>
            );
          })}
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
      }
    }
  }
`;
