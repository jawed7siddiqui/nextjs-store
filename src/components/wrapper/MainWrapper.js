import React from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";

const MainWrapper = ({ children, title, content }) => {
  return (
    <>
      <MetaTags>
        <title>{title}</title>
        <meta name="description" content={content} />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        <div div style={{ margin: "60px 80px 100px 80px", display: "block" }}>
          {children}
        </div>
      </LayoutOne>
    </>
  );
};

export default MainWrapper;
