// src/templates/template26.ts

export const template26 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Marketing Guru CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Montserrat', sans-serif;
      background-color: #ffffff;
      color: #222;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: 300px 1fr;
      min-height: 100vh;
    }
    .sidebar {
      background-color: #ff7f50;
      color: #fff;
      padding: 50px 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 6px 0 12px rgba(0,0,0,0.15);
    }
    .profile-image {
      width: 140px;
      height: 140px;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 20px;
      border: 5px solid #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
    }
    .sidebar h1 {
      font-size: 28px;
      margin: 16px 0 12px 0;
      text-align: center;
      color: #fff;
    }
    .contact-info {
      font-size: 14px;
      text-align: center;
      margin-top: 16px;
      color: #f0f0f0;
    }
    .contact-info p {
      margin: 6px 0;
    }
    .main {
      padding: 60px 50px;
      display: flex;
      flex-direction: column;
    }
    .banner {
      background-color: #222;
      color: #ff7f50;
      padding: 20px 30px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 50px;
    }
    .section {
      margin-bottom: 40px;
    }
    .section h2 {
      font-size: 20px;
      color: #ff7f50;
      border-left: 6px solid #ff7f50;
      padding-left: 10px;
      margin-bottom: 16px;
      text-transform: uppercase;
      letter-spacing: 0.7px;
    }
    .experience-item, .education-item {
      margin-bottom: 20px;
    }
    .experience-item strong, .education-item strong {
      font-size: 16px;
      color: #111;
    }
    .experience-item p, .education-item p {
      font-size: 14px;
      margin: 4px 0;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .skill {
      font-size: 14px;
      color: #222;
      padding: 10px 20px;
      border-radius: 30px;
      background-color: #ffede6;
      border: 1px solid #ff7f50;
      box-shadow: 0 2px 6px rgba(255,127,80,0.3);
    }
    .language-list p {
      font-size: 14px;
      margin: 6px 0;
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
