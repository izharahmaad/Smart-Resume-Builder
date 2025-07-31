// src/templates/template3.ts

export const template3 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Developer CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Fira Code', monospace;
      background-color: #0f111a;
      color: #e0e0e0;
      padding: 32px;
      line-height: 1.6;
      box-sizing: border-box;
      margin: 0;
    }
    .header {
      background-color: #1a1f2b;
      color: #00ff88;
      padding: 24px;
      text-align: center;
      border-radius: 8px;
      margin-bottom: 24px;
      border: 2px solid #00ff88;
      box-shadow: 0 0 8px #00ff88;
    }
    .header h1 {
      font-size: 30px;
      margin: 0;
      letter-spacing: 1px;
    }
    .header p {
      margin: 8px 0;
      font-size: 14px;
    }
    .section {
      margin-bottom: 24px;
    }
    .section h2 {
      font-size: 18px;
      color: #00ff88;
      border-bottom: 2px dashed #00ff88;
      margin-bottom: 8px;
      padding-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .section p {
      margin: 6px 0;
      font-size: 14px;
      word-wrap: break-word;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
    }
    .skill {
      background-color: #1a1f2b;
      color: #00ff88;
      padding: 6px 12px;
      border-radius: 4px;
      margin: 6px 8px 6px 0;
      font-size: 13px;
      border: 1px solid #00ff88;
      box-shadow: 0 0 5px #00ff88 inset;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 12px;
      color: #666;
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
