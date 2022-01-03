import Head from "next/head";
import { AppProvider } from "./context/AppContext";
import Header from "./Header";
import Footer from "./Footer";
import client from "./ApolloClient";
import Router from "next/router";
import NProgress from "nprogress";
import { ApolloProvider } from "@apollo/client";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Layout = (props) => {
  let title;
  let description;

  if (
    props &&
    props.children[1] &&
    props.children[1].props.className === "homepage"
  ) {
    title = "MedQuota Fun, Practical & Best Products!";
    description =
      "From home improvement products to beauty and health gear, clothing and electronics, you can find a wide variety of goodies that will inspire you to live your best life.";
  }

  const titleCategory =
    props.children &&
    props.children._owner &&
    props.children._owner.memoizedProps &&
    props.children._owner.memoizedProps.categoryName;
  if (titleCategory) {
    title = titleCategory;
  }
  const product =
    props.children &&
    props.children._owner &&
    props.children._owner.memoizedProps &&
    props.children._owner.memoizedProps.product;
  const post =
    props.children &&
    props.children._owner &&
    props.children._owner.memoizedProps &&
    props.children._owner.memoizedProps.post;
  if (post) {
    let desc = post && post.content.replace(/<[^>]+>/g, "");
    if (desc.length > 160) desc = desc.substring(0, 160);
    description = desc;
  }
  if (product) {
    //  title = title[0]._owner.memoizedProps.product.name;
    title = product.name;
    let desc = product && product.description.replace(/<[^>]+>/g, "");
    if (desc.length > 160) desc = desc.substring(0, 160);
    description = desc;
  }
  const titlePage =
    props.children &&
    props.children.props &&
    props.children.props.children &&
    props.children.props.children[0] &&
    props.children.props.children[0].props &&
    props.children.props.children[0].props.children;
  if (typeof titlePage === "string") {
    title = titlePage;
  }
  return (
    <AppProvider>
      <ApolloProvider client={client}>
        <div className="pg-container">
          <Head>
            <title>{title}- MedQuota</title>
            <meta name="description" content={description}></meta>
          </Head>
          <Header />
          {props.children}
        </div>
        <Footer />
      </ApolloProvider>
    </AppProvider>
  );
};

export default Layout;
