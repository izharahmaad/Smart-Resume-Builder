// src/templates/template49.ts

export const template49 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Senior Developer CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 50px 60px;
      background-color: #f9f9f9;
      color: #222;
      font-family: 'Roboto', sans-serif;
    }
    .header {
      display: grid;
      grid-template-columns: auto 120px;
      align-items: center;
      border-bottom: 3px solid #4caf50;
      padding-bottom: 20px;
      margin-bottom: 40px;
    }
    .header h1 {
      font-family: 'Fira Code', monospace;
      font-size: 28px;
      margin: 0 0 10px 0;
      color: #222;
      letter-spacing: 1px;
    }
    .contact-info {
      font-size: 13px;
      color: #555;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .profile-image {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 8px;
      border: 2px solid #4caf50;
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    }
    .main {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
      max-width: 900px;
      margin: 0 auto;
    }
    .section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: #fff;
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    .section h2 {
      font-family: 'Fira Code', monospace;
      font-size: 16px;
      color: #4caf50;
      border-bottom: 2px solid #4caf50;
      padding-bottom: 6px;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
    .experience-item, .education-item {
      margin-bottom: 12px;
    }
    .experience-item strong, .education-item strong {
      font-size: 14px;
      color: #222;
    }
    .experience-item p, .education-item p {
      font-size: 12.5px;
      margin: 3px 0;
      color: #555;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .skill {
      font-family: 'Fira Code', monospace;
      font-size: 12px;
      color: #222;
      padding: 6px 12px;
      border-radius: 12px;
      background-color: #e8f5e9;
      border: 1px solid #4caf50;
    }
    .language-list p {
      font-size: 12.5px;
      margin: 4px 0;
      color: #555;
    }
  </style>
</head>
<body>

  <div class="header">
    <div>
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
