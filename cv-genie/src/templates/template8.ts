// src/templates/template8.ts

export const template8 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Doctor CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Open Sans', sans-serif;
      background-color: #fefefe;
      color: #222;
      padding: 36px;
      line-height: 1.6;
      box-sizing: border-box;
      margin: 0;
    }
    .header {
      background-color: #e6f3ff;
      color: #004d99;
      padding: 24px;
      text-align: center;
      border-radius: 12px;
      margin-bottom: 28px;
      border: 2px solid #b3daff;
    }
    .header h1 {
      font-size: 34px;
      margin: 0;
      letter-spacing: 0.5px;
    }
    .header p {
      margin: 8px 0;
      font-size: 14px;
    }
    .section {
      margin-bottom: 26px;
    }
    .section h2 {
      font-size: 20px;
      color: #004d99;
      border-bottom: 2px solid #b3daff;
      margin-bottom: 10px;
      padding-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .section p {
      margin: 6px 0;
      font-size: 15px;
      word-wrap: break-word;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
    }
    .skill {
      background-color: #e6f3ff;
      color: #004d99;
      padding: 8px 14px;
      border-radius: 16px;
      margin: 6px 8px 6px 0;
      font-size: 13px;
      border: 1px solid #b3daff;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 12px;
      color: #888;
    }
  </style>
</head>
<body>

  <div class="header">
    <h1>{{name}}</h1>
    <p>Email: {{email}} | Phone: {{phone}}</p>
    <p>LinkedIn: {{linkedin}} | GitHub: {{github}}</p>
  </div>

  <div class="section">
    <h2>Professional Summary</h2>
    <p>{{summary}}</p>
  </div>

  <div class="section">
    <h2>Skills</h2>
    <div class="skills">
      <div class="skill">{{skill1}}</div>
      <div class="skill">{{skill2}}</div>
      <div class="skill">{{skill3}}</div>
      <div class="skill">{{skill4}}</div>
    </div>
  </div>

  <div class="section">
    <h2>Experience</h2>
    <p><strong>{{experience_title}}</strong></p>
    <p>{{experience_description}}</p>
  </div>

  <div class="section">
    <h2>Education</h2>
    <p><strong>{{education_title}}</strong></p>
    <p>{{education_description}}</p>
  </div>

  <div class="section">
    <h2>Language</h2>
    <p>{{language}}</p>
  </div>

  <div class="section">
    <h2>Hobby</h2>
    <p>{{hobby}}</p>
  </div>

</body>
</html>
`;
