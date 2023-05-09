import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">PHAM GIA HUY </span>
            from <span className="purple">freshman at HS University and graduate at CyberSoft Center</span>
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Footer
            </li>
            <li className="about-activity">
              <ImPointRight /> Enhance Myself
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Striving for Growth!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
