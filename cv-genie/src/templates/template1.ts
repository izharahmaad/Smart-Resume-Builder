// src/templates/template1.ts

export const template1 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Modern Blue CV</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #fff;
      color: #222;
      padding: 32px;
      line-height: 1.6;
      box-sizing: border-box;
      margin: 0;
    }
    .header {
      background-color: #0056b3;
      color: #fff;
      padding: 24px;
      text-align: center;
      border-radius: 12px;
      margin-bottom: 24px;
    }
    .header h1 {
      font-size: 32px;
      margin: 0;
    }
    .header p {
      margin: 8px 0;
      font-size: 14px;
    }
    .section {
      margin-bottom: 24px;
    }
    .section h2 {
      font-size: 20px;
      color: #0056b3;
      border-bottom: 2px solid #ccc;
      margin-bottom: 8px;
      padding-bottom: 4px;
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
      background-color: #0056b3;
      color: #fff;
      padding: 8px 14px;
      border-radius: 16px;
      margin: 6px 8px 6px 0;
      font-size: 13px;
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
