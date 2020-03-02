import React from "react";
import "./styles.css";

export default function Project() {
  return (
    <div className="edu" id="project">
      <h2 className="cheader">Personal Projects</h2>
      <hr />
      <div className="project">
        <div className="pright">
          <div className="cblock">
            <b>Mini Twit Application</b>
            <ol>
              {" "}
              • Developed RESTful web Services (Microservice architecture) using
              Python Flask and used Test Driven approach.{" "}
            </ol>
            <ol>
              {" "}
              • Increased scalability by implementing load balancer using Nginx
              to distribute client request among multiple servers.
            </ol>
            <ol>
              {" "}
              • Optimized the database schema by adapting to NoSQL Cassandra
              from Postgres.{" "}
            </ol>
          </div>
          <div className="cblock">
            <b>Inventory System</b>
            <ol>
              {" "}
              • Developed Full Stack system using NodeJS, Angular and
              MongoDB(MEAN stack).{" "}
            </ol>
            <ol> • Implemented user authorization using JWT. </ol>
            <ol>
              {" "}
              • Deployed system on Kubernetes for scalability and Rolling
              updates.{" "}
            </ol>
          </div>
          <div className="cblock">
            <b>Distributed Social Network Application</b>
            <ol>
              {" "}
              • Handled the XML-RPC data payload from distributed clients by
              implementing the adapter patter.{" "}
            </ol>
            <ol>
              {" "}
              • Improved scalability by developing distributed architecture with
              availability and replication.{" "}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
