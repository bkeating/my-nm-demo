import React from "react";

const ThankYouNM = () => [
  <div
    key={1}
    style={{ borderLeft: "4px solid #cccccc", paddingLeft: 15, fontSize: 12 }}
  >
    <p>Please complete the following skills assessment:</p>

    <p>
      Develop a SPA application to collect following information:
      <br />
      Client First name, Last name, Gender, City, Street, State and Zip Children
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;i. Child First name, Last name,
      Gender, Date of Birth
    </p>

    <p>
      Application should allow to collect more than one child’s details (First
      name, Last name, Gender, Date of Birth) Build NodeJS REST microservice to
      save Client & Children information in a text file in CSV format SPA
      Application should send request to NodeJS REST microservice to save both
      Client & Children information in a CSV file
    </p>
  </div>,

  <p key={2} style={{ fontSize: 13, marginTop: 20, marginBottom: 35 }}>
    Thank you again for this opportunity.
    <br />
    &nbsp;&nbsp;—Ben Keating \(•◡•)/
  </p>
];

export default ThankYouNM;
