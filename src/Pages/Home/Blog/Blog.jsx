import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import { Helmet } from "react-helmet";
let pageTitle = "Car Market";
if (location.pathname === "/blog") {
  pageTitle = "Car Market | Blog";
}
const Blog = () => {
  return (
    <>
      <Header></Header>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      <div>
        <div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Q. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </div>
            <div className="collapse-content">
              <p>
                Ans: An access token is a credential used for authentication and
                authorization. It is issued by an authentication server after
                successful user authentication and contains information about
                the users identity, access scope, and expiration time. The token
                is included in API requests to access protected resources.{" "}
                <br /> <br />
                A refresh token is a long-lived credential that is securely
                stored on the client-side. It is used to obtain a new access
                token when the current one expires. <br /> <br />
                To ensure security, access and refresh tokens should be stored
                securely on the client-side, using encrypted cookies or local
                storage. This prevents unauthorized access and protects against
                token leakage or misuse. The tokens enable secure authentication
                and seamless access to protected resources.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Q. SQL and NoSQL are two distinct types of databases, each with
              its own characteristics and use cases.
            </div>
            <div className="collapse-content">
              <p>
                Ans: SQL databases, also known as relational databases, are
                based on the structured query language (SQL). They use a tabular
                structure with predefined schemas to store and organize data.
                SQL databases have a fixed schema, which enforces data integrity
                and consistency. They are suitable for complex data
                relationships and transactions. SQL databases excel in handling
                structured data and are widely used in applications that require
                ACID (Atomicity, Consistency, Isolation, Durability) compliance,
                such as financial systems and e-commerce platforms.
                <br /> <br />
                NoSQL databases, on the other hand, stand for not only SQL. They
                are designed to handle large volumes of unstructured and
                semi-structured data. NoSQL databases provide flexibility by
                allowing dynamic schemas, which means the structure of the data
                can evolve over time. They are highly scalable and can handle
                high-speed data ingestion and retrieval. NoSQL databases are
                commonly used in modern applications that deal with big data,
                real-time analytics, and scenarios that require horizontal
                scaling. They provide eventual consistency and focus on
                partition tolerance and availability (CAP theorem). <br />{" "}
                <br />
                In summary, SQL databases offer strong consistency, structured
                data modeling, and ACID compliance, while NoSQL databases
                provide scalability, flexibility, and high-speed data processing
                for unstructured and semi-structured data. The choice between
                the two depends on the specific requirements and nature of the
                application or system being developed.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Q. What is express js? What is Nest JS?
            </div>
            <div className="collapse-content">
              <p>
                Ans: Express.js is a popular web application framework for
                Node.js. It provides a simple and minimalist approach to
                building web applications and APIs. Express.js is known for its
                flexibility and ease of use, allowing developers to quickly set
                up routes, handle HTTP requests and responses, and integrate
                middleware for various functionalities such as authentication,
                session management, and error handling. It has a vast ecosystem
                of plugins and middleware, making it highly extensible and
                adaptable to different project requirements. Express.js is
                widely used in the Node.js community and is suitable for
                building both small and large-scale web applications.
                <br /> <br />
                Nest.js, on the other hand, is a progressive and opinionated web
                application framework also built for Node.js. It combines the
                elements of object-oriented programming, functional programming,
                and TypeScript to provide a scalable and modular architecture
                for building server-side applications. Nest.js embraces the
                concept of modules, controllers, and services to organize the
                applications components. It also integrates well with other
                libraries and frameworks, such as Express.js, allowing
                developers to leverage the existing ecosystem and middleware.
                Nest.js emphasizes developer productivity, maintainability, and
                testability, making it suitable for complex enterprise
                applications. <br /> <br />
                In summary, Express.js is a flexible and lightweight web
                application framework for Node.js, while Nest.js is a scalable
                and modular framework that builds on top of Node.js, offering a
                structured and opinionated approach to application development.
                The choice between them depends on the specific needs of the
                project and the development teams preferences.
              </p>
            </div>
          </div>
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Q. What is express js? What is Nest JS?
            </div>
            <div className="collapse-content">
              <p>
                Ans: In MongoDB, the aggregate function is used for advanced
                data aggregation operations. It accepts an array of pipeline
                stages to transform and process data. Each stage performs a
                specific operation like filtering, grouping, sorting, or
                calculating. The stages are executed sequentially, with the
                output of one stage becoming the input of the next. Aggregation
                pipelines enable powerful data transformations and insights from
                large datasets.
                <br /> <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Blog;
