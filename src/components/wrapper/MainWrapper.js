import React, { useEffect } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const MainWrapper = ({
  children,
  title,
  content,
  authenticated = false,
  headerTop,
}) => {
  const history = useHistory();
  const authenticatedCheck = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) history.replace("/login");
  };

  useEffect(() => {
    if (authenticated) {
      authenticatedCheck();
    }
  }, [authenticated]);
  return (
    <>
      <MetaTags>
        <title>{title}</title>
        <meta name="description" content={content} />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
        headerTop={headerTop}
      >
        <div div style={{ margin: "60px 80px 100px 80px", display: "block" }}>
          {children}
        </div>
      </LayoutOne>
    </>
  );
};

export default MainWrapper;
