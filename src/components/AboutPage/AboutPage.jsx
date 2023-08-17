import React from "react";

function AboutPage() {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div>
        <h1
          style={{
            fontFamily: "poppins, sans-serif",
            fontSize: "7rem",
            fontWeight: "800",
            margin: "0 auto",
          }}
        >
          ABOUT
        </h1>

        <section
          style={{
            width: "80%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            gap: "4rem",
            margin: "2rem auto"
          }}
        >
          <div style={{ textAlign: "left", fontFamily: "poppins, sans-serif" }}>
            <h2
              style={{
                fontSize: "2.3rem",
              }}
            >
              Technologies Used 💻
            </h2>
            <ul style={{ listStyle: "none", fontSize: "1.3rem" }}>
              <li>React</li>
              <li>Node</li>
              <li>Postgres SQL</li>
              <li>Material UI</li>
              <li>Figma</li>
            </ul>
          </div>

          <div style={{ textAlign: "left", fontFamily: "poppins, sans-serif" }}>
            <h2
              style={{
                fontSize: "2.3rem",
              }}
            >
              Things I've Learned 🧠
            </h2>
            <ul style={{ listStyle: "none", fontSize: "1.3rem" }}>
              <li>Developing is time consuming</li>
              <li>Your work faster when you take breaks</li>
              <li>Conditional rendering can be engagingly hard</li>
              <li>Practice more algorithms and coding challenges</li>
            </ul>
          </div>

          <div style={{ textAlign: "left", fontFamily: "poppins, sans-serif" }}>
            <h2
              style={{
                fontSize: "2.3rem",
              }}
            >
              Things to Implement 🪛
            </h2>
            <ul
              style={{
                listStyle: "none",
                fontSize: "1.3rem",
                listStylePosition: "initial",
              }}
            >
              <li>Updating task title feature in the priority card</li>
              <li>Journal feature</li>
              <li>Checklist History Feature</li>
              <li>More Styling</li>
              <li>Refactoring hella code</li>
            </ul>
          </div>
        <div style={{ textAlign: "left", fontFamily: "poppins, sans-serif" }}>
          <h2
            style={{
              fontSize: "2.3rem",
            }}
          >
            Thanks to...💙
          </h2>
          <ul
            style={{
              listStyle: "none",
              fontSize: "1.3rem",
              listStylePosition: "initial",
            }}
          >
            <li>Family and friends</li>
            <li>Instructors and Prime staff</li>
          </ul>
        </div>

        <div style={{ textAlign: "left", fontFamily: "poppins, sans-serif" }}>
          <h2
            style={{
              fontSize: "2.3rem",
            }}
          >
            Let's Connect! 🌎
          </h2>
          <ul
            style={{
              listStyle: "none",
              fontSize: "1.3rem",
              listStylePosition: "initial",
            }}
          >
            <li>
              <strong>LinkedIn</strong>:{" "}
              <i>https://www.linkedin.com/in/georgio-harris-82370a239/</i>
            </li>
            <li>
              <strong>Behance</strong>(Design Portfolio Site):
              https://www.behance.net/georgie
            </li>
            <li>
              <strong>GitHub</strong>: https://github.com/GeorgieIsYourHomie
            </li>
          </ul>
        </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
