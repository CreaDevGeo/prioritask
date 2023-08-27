import React from "react";

function AboutPage() {
  return (
    <div className="about-me-content-container" style={{ textAlign: "center" }}>
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
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row", // Changed to vertical wrapping
            justifyContent: "center",
            alignContent: "center",
            gap: "4rem",
            margin: "2rem auto",
          }}
        >
          {/* Technologies Used */}
          <div style={{ textAlign: "left", fontFamily: "poppins, sans-serif" }}>
            <h2
              style={{
                fontSize: "2.3rem",
              }}
            >
              Technologies Used 💻
            </h2>
            <ul style={{ fontSize: "1.3rem" }}>
              <li>React</li>
              <li>Node</li>
              <li>Postgres SQL</li>
              <li>Material UI</li>
              <li>Figma</li>
            </ul>
          </div>

          {/* Things I've Learned */}
          <div style={{ textAlign: "left", fontFamily: "poppins, sans-serif" }}>
            <h2
              style={{
                fontSize: "2.3rem",
              }}
            >
              Things I've Learned 🧠
            </h2>
            <ul style={{ fontSize: "1.3rem" }}>
              <li>Developing can be all-consuming</li>
              <li>Your work faster when you take breaks</li>
              <li>Conditional rendering can be engagingly hard</li>
              <li>Practice more algorithms and coding challenges</li>
            </ul>
          </div>

          {/* Things to Implement */}
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
                fontSize: "1.3rem",
                listStylePosition: "initial",
              }}
            >
              <li>Updating task details</li>
              <li>Ability to mark priorities and checklists as complete</li>
              <li>Checklist history feature</li>
              <li>Journal feature</li>
              <li>More Styling</li>
              <li>Refactoring</li>
            </ul>
          </div>

          {/* Thanks */}
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
                fontSize: "1.3rem",
                listStylePosition: "initial",
              }}
            >
              <li>Family and friends</li>
              <li>Instructors and Prime staff</li>
            </ul>
          </div>

          {/* Let's Connect */}
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
                fontSize: "1.3rem",
                listStylePosition: "initial",
              }}
            >
              <li>
                <a
                  href="https://www.linkedin.com/in/georgio-harris-82370a239/"
                  target="_blank"
                >
                  <strong>LinkedIn</strong>
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/georgie" target="_blank">
                  <strong>Behance</strong>
                  (Design Portfolio Site){" "}
                </a>
              </li>
              <li>
                <a href="https://github.com/GeorgieIsYourHomie" target="_blank">
                  <strong>GitHub</strong>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
