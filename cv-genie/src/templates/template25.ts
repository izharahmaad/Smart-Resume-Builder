// src/templates/template25.ts

export const template25 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Designer Portfolio CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Raleway', sans-serif;
      background-color: #ffffff;
      color: #222;
      margin: 0;
      display: flex;
      height: 100vh;
    }
    .sidebar {
      width: 300px;
      background-color: #111;
      color: #fff;
      padding: 50px 30px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 6px 0 12px rgba(0,0,0,0.2);
    }
    .profile-image {
      width: 150px;
      height: 150px;
      object-fit: cover;
      border-radius: 16px;
      margin-bottom: 20px;
      border: 6px solid #c8aa6e;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5);
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
      color: #ccc;
    }
    .contact-info p {
      margin: 6px 0;
    }
    .main {
      flex: 1;
      padding: 60px 50px;
      overflow-y: auto;
    }
    .section {
      margin-bottom: 50px;
    }
    .section h2 {
      font-size: 22px;
      color: #c8aa6e;
      border-bottom: 2px solid #c8aa6e;
      margin-bottom: 20px;
      padding-bottom: 6px;
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
      justify-content: flex-start;
    }
    .skill {
      font-size: 14px;
      color: #c8aa6e;
      padding: 10px 20px;
      border-radius: 20px;
      margin: 10px 14px 10px 0;
      background-color: #faf8f3;
      border: 1px solid #c8aa6e;
      box-shadow: 0 2px 6px rgba(200,170,110,0.3);
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
