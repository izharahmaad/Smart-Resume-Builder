// src/templates/template4.ts

export const template4 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Creative Portfolio CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #fffdf9;
      color: #333;
      padding: 32px;
      line-height: 1.6;
      box-sizing: border-box;
      margin: 0;
    }
    .header {
      background-color: #ff6f61;
      color: #fff;
      padding: 24px;
      text-align: center;
      border-radius: 20px;
      margin-bottom: 24px;
      letter-spacing: 0.5px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.2);
    }
    .header h1 {
      font-size: 34px;
      margin: 0;
    }
    .header p {
      margin: 8px 0;
      font-size: 15px;
    }
    .section {
      margin-bottom: 28px;
    }
    .section h2 {
      font-size: 20px;
      color: #ff6f61;
      margin-bottom: 12px;
      position: relative;
      display: inline-block;
    }
    .section h2::after {
      content: "";
      display: block;
      width: 50px;
      height: 3px;
      background-color: #ff6f61;
      margin-top: 4px;
      border-radius: 2px;
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
      background-color: #fff;
      color: #ff6f61;
      padding: 8px 14px;
      border-radius: 20px;
      margin: 6px 8px 6px 0;
      font-size: 13px;
      border: 1px solid #ff6f61;
      box-shadow: 0 0 5px rgba(255, 111, 97, 0.3);
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 12px;
      color: #aaa;
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
