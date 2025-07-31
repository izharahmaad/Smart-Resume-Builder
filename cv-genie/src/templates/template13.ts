// src/templates/template13.ts

export const template13 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Project Manager CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Merriweather', serif;
      background-color: #fdfdfd;
      color: #222;
      padding: 36px;
      line-height: 1.7;
      box-sizing: border-box;
      margin: 0;
    }
    .header {
      background: linear-gradient(to right, #2c3e50, #bdc3c7);
      color: #ffffff;
      padding: 30px;
      text-align: center;
      border-radius: 16px;
      margin-bottom: 32px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }
    .profile-image {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 14px;
      border: 4px solid #ffffff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
    .header h1 {
      font-size: 34px;
      margin: 10px 0 6px 0;
      letter-spacing: 0.5px;
    }
    .header p {
      margin: 5px 0;
      font-size: 14px;
      color: #f0f0f0;
    }
    .section {
      margin-bottom: 32px;
    }
    .section h2 {
      font-size: 20px;
      color: #2c3e50;
      border-bottom: 2px solid #2c3e50;
      margin-bottom: 14px;
      padding-bottom: 6px;
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
      background-color: #f0f0f0;
      color: #2c3e50;
      padding: 8px 16px;
      border-radius: 8px;
      margin: 6px 10px 6px 0;
      font-size: 14px;
      border: 1px solid #2c3e50;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    }
    .footer {
      text-align: center;
      margin-top: 24px;
      font-size: 12px;
      color: #999;
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
