import React from "react";
import PageTemplate from "components/common/PageTemplate";
import PostListContainer from "containers/PostListContainer";
import HeaderContainer from "containers/HeaderContainer";
import Chart from "../components/Chart";
const PostListPage = () => {
  return (
    <PageTemplate header={<HeaderContainer />}>
      <PostListContainer />
      <Chart />
    </PageTemplate>
  );
};

export default PostListPage;
