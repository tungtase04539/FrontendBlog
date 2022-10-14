import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import Layout from "../../components/Layout";
import { useAmp } from "next/amp";
import { useState, useEffect } from "react";
import { singleBlog, listRelated } from "../../actions/blog";
import { API, DOMAIN, APP_NAME, FB_APP_ID } from "../../config";
import renderHTML from "react-render-html";
import moment from "moment";
import SmallCard from "../../components/blog/SmallCard";
import React from "react";
import DisqusThread from "../../components/DisqusThread";
import { AdUnit } from "../../components/AdUnit";
const SingleBlog = ({ blog, query }) => {
  const isAmp = useAmp();
  const [related, setRelated] = useState([]);

  const loadRelated = () => {
    listRelated({ blog }).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setRelated(data);
      }
    });
  };
  const para = blog.body;
  const lines = para.split("</p>");
  useEffect(() => {
    loadRelated();
  }, []);

  const head = () => (
    <Head>
      <title>
        {blog.title} | {APP_NAME}
      </title>
      <meta name="description" content={blog.mdesc} />
      <link rel="canonical" href={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:title" content={`${blog.title}| ${APP_NAME}`} />
      <meta property="og:description" content={blog.mdesc} />
      <meta property="og:type" content="webiste" />
      <meta property="og:url" content={`${DOMAIN}/blogs/${query.slug}`} />
      <meta property="og:site_name" content={`${APP_NAME}`} />

      <meta property="og:image" content={`${API}/blog/photo/${blog.slug}`} />
      <meta
        property="og:image:secure_url"
        ccontent={`${API}/blog/photo/${blog.slug}`}
      />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="fb:app_id" content={`${FB_APP_ID}`} />
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2941853731855587"
        crossorigin="anonymous"
      ></Script>
    </Head>
  );
  const showBlog = (lines) =>
    lines.map((l, i) => (
      <div className="col-md-12 lead">{renderHTML(lines[i])}</div>
    ));
  const showBlogCategories = (blog) =>
    blog.categories.map((c, i) => (
      <Link key={i} href={`/categories/${c.slug}`}>
        <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
      </Link>
    ));

  const showBlogTags = (blog) =>
    blog.tags.map((t, i) => (
      <Link key={i} href={`/tags/${t.slug}`}>
        <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
      </Link>
    ));

  const showRelatedBlog = () => {
    return related.map((blog, i) => (
      <div className="col-md-4" key={i}>
        <article>
          <SmallCard blog={blog} />
        </article>
      </div>
    ));
  };

  const showComments = () => {
    return (
      <div>
        <DisqusThread
          id={blog.id}
          title={blog.title}
          path={`/blog/${blog.slug}`}
        />
      </div>
    );
  };
  console.log(renderHTML(blog.body));
  return (
    <React.Fragment>
      {head()}
      <Layout>
        <main>
          <article>
            <div className="container">
              <section>
                <div className="row" style={{ marginTop: "-30px" }}>
                  <img
                    src={`${API}/blog/photo/${blog.slug}`}
                    alt={blog.title}
                    className="img img-fluid featured-image"
                  />
                </div>
              </section>

              <section>
                <div className="container">
                  <h3 className="display-5 pb-1 pt-1 text-center font-weight-bold">
                    {blog.title}
                  </h3>
                  <style jsx>{`
                    #M838028ScriptRootC1373747 {
                      min-height: 300px;
                    }
                    @media only screen and (max-width: 2000px) and (min-width: 500px) {
                      img {
                         width:500px;
                      }
                  }
                  `}</style>
                  {/* header mgid */}
                  <div id="M838028ScriptRootC1373747"></div>
                  <script
                    src="https://jsc.mgid.com/m/i/missingperson.online.1373747.js"
                    async
                  ></script>

                  <p className="lead mt-3 mark">
                    Written by{" "}
                    <Link href={`/profile/${blog.postedBy.username}`}>
                      <a>{blog.postedBy.username}</a>
                    </Link>{" "}
                    | Published {moment(blog.updatedAt).fromNow()}
                  </p>

                  <div className="pb-3">
                    {showBlogCategories(blog)}
                    {showBlogTags(blog)}
                    <br />
                    <br />
                  </div>
                </div>
              </section>
            </div>
            <div className="container">
              <AdUnit />
              <section>
                {showBlog(lines)}
                {/* middle article mgid */}
                <div id="M838028ScriptRootC1373764"></div>
                <script
                  src="https://jsc.mgid.com/m/i/missingperson.online.1373764.js"
                  async
                ></script>
              </section>
            </div>

            <div className="container">
              {/* under article mgid */}
              <div id="M838028ScriptRootC1373773"></div>
              <script
                src="https://jsc.mgid.com/m/i/missingperson.online.1373773.js"
                async
              ></script>
              <h4 className="text-center pt-5 pb-5 h2">Related blog</h4>
              <div className="row">{showRelatedBlog()}</div>
            </div>
          </article>
          {/* smart mgid */}
          <div id="M838028ScriptRootC1373743"></div>
          <script
            src="https://jsc.mgid.com/m/i/missingperson.online.1373743.js"
            async
          ></script>
        </main>
      </Layout>
    </React.Fragment>
  );
};

SingleBlog.getInitialProps = ({ query }) => {
  return singleBlog(query.slug).then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      // console.log('GET INITIAL PROPS IN SINGLE BLOG', data);
      return { blog: data, query };
    }
  });
};

export default SingleBlog;
