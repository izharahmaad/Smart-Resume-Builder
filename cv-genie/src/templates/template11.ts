// src/templates/template11.ts

export const template11 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Backend Developer CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Fira Code', monospace;
      background-color: #121212;
      color: #e0e0e0;
      padding: 36px;
      line-height: 1.6;
      box-sizing: border-box;
      margin: 0;
    }
    .header {
      background-color: #1e1e1e;
      color: #00bfff;
      padding: 24px;
      text-align: center;
      border-radius: 14px;
      margin-bottom: 28px;
      border: 2px solid #00bfff;
      box-shadow: 0 0 8px rgba(0, 191, 255, 0.5);
    }
    .profile-image {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 12px;
      border: 2px solid #00bfff;
      box-shadow: 0 0 6px rgba(0, 191, 255, 0.6);
    }
    .header h1 {
      font-size: 30px;
      margin: 8px 0 4px 0;
      letter-spacing: 1px;
    }
    .header p {
      margin: 4px 0;
      font-size: 13px;
    }
    .section {
      margin-bottom: 26px;
    }
    .section h2 {
      font-size: 18px;
      color: #00bfff;
      border-bottom: 2px dashed #00bfff;
      margin-bottom: 10px;
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
      background-color: #1e1e1e;
      color: #00bfff;
      padding: 6px 12px;
      border-radius: 6px;
      margin: 6px 8px 6px 0;
      font-size: 13px;
      border: 1px solid #00bfff;
      box-shadow: 0 0 4px rgba(0, 191, 255, 0.4) inset;
    }
    .footer {
      text-align: center;
      margin-top: 20px;
      font-size: 12px;
      color: #555;
    }
  </style>
</head>
<body>

  <div class="header">
    <!-- Profile image -->
    <img src="{{profile_image}}" alt="Profile Image" class="profile-image" onerror="this.style.display='none';">

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
