import React from "react";
import Layout from "@theme/Layout";
import { usePluginData } from "@docusaurus/useGlobalData";
import Link from "@docusaurus/Link";

const Leetcode = () => {
  const pluginData = usePluginData("generate-tree");
  const files = pluginData["./src/pages/leetcode"];
  return (
    <Layout title="算法记录">
      <div
        className="container padding-top--md padding-bottom--lg"
        style={{
          display: "flex",
          flexDirection: "column",
          maxHeight: "70vh",
        }}
      >
        <h1>算法记录</h1>
        <main
          style={{
            flex: "1",
            overflow: "scroll",
          }}
        >
          <ol>
            {files.map((dirname) => (
              <li key={dirname}>
                <Link to={`./${dirname}`}>{dirname}</Link>
              </li>
            ))}
          </ol>
        </main>
      </div>
    </Layout>
  );
};

export default Leetcode;
