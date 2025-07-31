// src/templates/template18.ts

export const template18 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Elegant Minimal Gray CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Lora', serif;
      background-color: #ffffff;
      color: #333;
      padding: 50px;
      line-height: 1.7;
      box-sizing: border-box;
      margin: 0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #ccc;
      padding-bottom: 12px;
      margin-bottom: 36px;
    }
    .header-left {
      flex: 1;
    }
    .header h1 {
      font-size: 36px;
      margin: 0 0 10px 0;
      color: #222;
    }
    .contact-info {
      font-size: 14px;
      color: #555;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .profile-image {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 12px;
      border: 2px solid #ccc;
    }
    .section {
      margin-bottom: 32px;
    }
    .section h2 {
      font-size: 18px;
      color: #444;
      border-bottom: 1px solid #ccc;
      margin-bottom: 14px;
      padding-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .experience-item, .education-item {
      margin-bottom: 18px;
    }
    .experience-item strong, .education-item strong {
      font-size: 16px;
      color: #222;
    }
    .experience-item p, .education-item p {
      font-size: 14px;
      margin: 4px 0;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
    }
    .skill {
      font-size: 14px;
      color: #444;
      padding: 6px 14px;
      margin: 6px 12px 6px 0;
      border-bottom: 2px solid #ccc;
      background-color: #fafafa;
    }
    .language-list p {
      font-size: 14px;
      margin: 6px 0;
    }
  </style>
</head>
<body>

  <div class="header">
    <div class="header-left">
      <h1>{{name}}</h1>
      <div class="contact-info">
        <p>{{phone}}</p>
        <p>{{email}}</p>
        <p>{{linkedin}} | {{github}}</p>
      </div>
    </div>
    <img src="{{profile_image}}" alt="Profile Image" class="profile-image" onerror="this.style.display='none';">
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
    <h2>Professional Experience</h2>
    <div class="experience-item">
      <p><strong>{{experience_title}}</strong></p>
      <p>{{experience_description}}</p>
    </div>
  </div>

  <div class="section">
    <h2>Education</h2>
    <div class="education-item">
      <p><strong>{{education_title}}</strong></p>
      <p>{{education_description}}</p>
    </div>
  </div>

  <div class="section">
    <h2>Languages</h2>
    <div class="language-list">
      <p>{{language}}</p>
    </div>
  </div>

  <div class="section">
    <h2>Hobby / Interests</h2>
    <p>{{hobby}}</p>
  </div>

</body>
</html>
`;
