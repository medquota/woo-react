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
  console.log(props);
  if (
    props &&
    props.children &&
    props.children.props.className === "homepage"
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
  const product = props.product;
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
    //title = title[0]._owner.memoizedProps.product.name;
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
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="profile" href="https://gmpg.org/xfn/11" />
            <meta
              name="robots"
              content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
            />
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9874298626945706"
              crossorigin="anonymous"
            ></script>
            <meta
              name="google-site-verification"
              content="xdqo1Q7kBhHA5AsL0BsIdF6SYSLAOSuZaF12VtAmkk8"
            />
            <title>{title}- MedQuota</title>
            <meta name="description" content={description}></meta>
            <meta name="og:locale" content="en_US" />
            <meta name="og:site_name" content="MEDQUOTA" />
            <meta name="twitter:card" content="summary" />
            <link
              rel="icon"
              href="https://www.pilore.com/wp-content/uploads/2022/02/fav.png"
              sizes="192x192"
            />
            <link
              rel="apple-touch-icon"
              href="https://www.pilore.com/wp-content/uploads/2022/02/fav.png"
            />
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
