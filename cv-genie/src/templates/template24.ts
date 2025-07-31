// src/templates/template24.ts

export const template24 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Minimal Photo CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Lato', sans-serif;
      background-color: #ffffff;
      color: #222;
      padding: 0;
      margin: 0;
    }
    .header {
      text-align: center;
      padding: 60px 40px 40px 40px;
      border-bottom: 2px solid #e0e0e0;
    }
    .profile-image {
      width: 160px;
      height: 160px;
      object-fit: cover;
      border-radius: 12px;
      border: 4px solid #ddd;
      margin-bottom: 20px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }
    .header h1 {
      font-size: 36px;
      margin: 12px 0 8px 0;
      color: #222;
    }
    .contact-info {
      font-size: 14px;
      color: #555;
      margin-top: 10px;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .main {
      padding: 50px 80px;
    }
    .section {
      margin-bottom: 40px;
    }
    .section h2 {
      font-size: 18px;
      color: #333;
      border-bottom: 1px solid #ddd;
      margin-bottom: 16px;
      padding-bottom: 6px;
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
      color: #333;
      padding: 8px 16px;
      border-radius: 14px;
      margin: 8px 12px 8px 0;
      background-color: #f5f5f5;
      border: 1px solid #ddd;
    }
    .language-list p {
      font-size: 14px;
      margin: 6px 0;
    }
  </style>
</head>
<body>

  <div class="header">
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
