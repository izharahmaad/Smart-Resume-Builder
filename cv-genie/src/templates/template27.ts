// src/templates/template27.ts

export const template27 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Tech Startup CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Work Sans', sans-serif;
      background-color: #0f1116;
      color: #eaeaea;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: 280px 1fr;
      min-height: 100vh;
    }
    .sidebar {
      background-color: #1a1c23;
      color: #fff;
      padding: 50px 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 6px 0 12px rgba(0,0,0,0.2);
    }
    .profile-image {
      width: 140px;
      height: 140px;
      object-fit: cover;
      border-radius: 16px;
      margin-bottom: 20px;
      border: 4px solid #00ffcc;
      box-shadow: 0 4px 12px rgba(0,255,204,0.5);
    }
    .sidebar h1 {
      font-size: 26px;
      margin: 16px 0 12px 0;
      text-align: center;
      color: #fff;
    }
    .contact-info {
      font-size: 14px;
      text-align: center;
      margin-top: 16px;
      color: #ccc;
    }
    .contact-info p {
      margin: 6px 0;
    }
    .main {
      padding: 60px 50px;
      display: flex;
      flex-direction: column;
      background-color: #121417;
    }
    .section {
      margin-bottom: 36px;
    }
    .section h2 {
      font-size: 18px;
      color: #00ffcc;
      border-bottom: 2px solid #00ffcc;
      margin-bottom: 16px;
      padding-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 0.6px;
    }
    .experience-item, .education-item {
      margin-bottom: 18px;
    }
    .experience-item strong, .education-item strong {
      font-size: 16px;
      color: #eaeaea;
    }
    .experience-item p, .education-item p {
      font-size: 14px;
      margin: 4px 0;
      color: #bbb;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .skill {
      font-size: 13px;
      color: #00ffcc;
      padding: 8px 16px;
      border-radius: 20px;
      background-color: rgba(0,255,204,0.1);
      border: 1px solid #00ffcc;
      box-shadow: 0 2px 6px rgba(0,255,204,0.3);
    }
    .language-list p {
      font-size: 14px;
      margin: 6px 0;
      color: #bbb;
    }
  </style>
</head>
<body>

  <div class="sidebar">
    <img src="{{profile_image}}" alt="Profile Image" class="profile-image" onerror="this.style.display='none';">
    <h1>{{name}}</h1>
    <div class="contact-info">
      <p>{{phone}}</p>
      <p>{{email}}</p>
      <p>{{linkedin}} | {{github}}</p>
    </div>
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
