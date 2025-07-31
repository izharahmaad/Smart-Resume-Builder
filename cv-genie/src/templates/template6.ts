// src/templates/template6.ts

export const template6 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Lawyer CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Merriweather', serif;
      background-color: #fff;
      color: #111;
      padding: 40px;
      line-height: 1.6;
      box-sizing: border-box;
      margin: 0;
    }
    .header {
      background-color: #fff;
      color: #111;
      padding: 24px;
      text-align: center;
      border-bottom: 3px solid #111;
      margin-bottom: 32px;
    }
    .header h1 {
      font-size: 36px;
      margin: 0;
      font-weight: 700;
      letter-spacing: 1px;
    }
    .header p {
      margin: 8px 0;
      font-size: 14px;
    }
    .section {
      margin-bottom: 28px;
    }
    .section h2 {
      font-size: 22px;
      color: #111;
      margin-bottom: 12px;
      border-bottom: 2px solid #111;
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
      background-color: #fff;
      color: #111;
      padding: 8px 14px;
      border-radius: 0;
      margin: 6px 8px 6px 0;
      font-size: 13px;
      border: 1px solid #111;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 12px;
      color: #777;
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
