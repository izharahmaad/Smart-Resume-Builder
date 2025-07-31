// src/templates/template43.ts

export const template43 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Tech Pro CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #0f111a;
      color: #e0e0e0;
      font-family: 'Roboto', sans-serif;
    }
    .top-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 50px 60px 25px 60px;
      border-bottom: 3px solid #00ff99;
      background: linear-gradient(90deg, #0f111a, #1a1d2b);
    }
    .top-left h1 {
      font-family: 'Fira Code', monospace;
      font-size: 30px;
      margin: 0 0 10px 0;
      color: #00ff99;
      letter-spacing: 1px;
    }
    .contact-info {
      font-size: 13px;
      color: #aaa;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .profile-image {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 12px;
      border: 2px solid #00ff99;
      box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    }
    .main {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 50px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    .section {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .section h2 {
      font-family: 'Fira Code', monospace;
      font-size: 16px;
      color: #00ff99;
      border-bottom: 2px solid #00ff99;
      padding-bottom: 5px;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
    .experience-item, .education-item {
      margin-bottom: 12px;
    }
    .experience-item strong, .education-item strong {
      font-size: 14px;
      color: #e0e0e0;
    }
    .experience-item p, .education-item p {
      font-size: 12.5px;
      margin: 3px 0;
      color: #bbb;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .skill {
      font-family: 'Fira Code', monospace;
      font-size: 12px;
      color: #00ff99;
      padding: 6px 12px;
      border-radius: 14px;
      background-color: #1a1d2b;
      border: 1px solid #00ff99;
      box-shadow: 0 1px 2px rgba(0,0,0,0.3);
    }
    .language-list p {
      font-size: 12.5px;
      margin: 4px 0;
      color: #bbb;
    }
  </style>
</head>
<body>

  <div class="top-header">
    <div class="top-left">
      <h1>{{name}}</h1>
      <div class="contact-info">
        <p>{{phone}}</p>
        <p>{{email}}</p>
        <p>{{linkedin}} | {{github}}</p>
      </div>
    </div>
    <img src="{{profile_image}}" alt="Profile Image" class="profile-image" onerror="this.style.display='none';">
  </div>

  <div class="main">
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
  </div>

</body>
</html>
`;
