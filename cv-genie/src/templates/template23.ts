// src/templates/template23.ts

export const template23 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Creative Agency CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #ffffff;
      color: #222;
      margin: 0;
      display: flex;
      height: 100vh;
    }
    .sidebar {
      width: 280px;
      background-color: #ff4757;
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
      border-radius: 20px;
      margin-bottom: 20px;
      border: 6px solid #fff;
      box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    }
    .sidebar h1 {
      font-size: 28px;
      margin: 16px 0 10px 0;
      text-align: center;
    }
    .contact-info {
      font-size: 14px;
      text-align: center;
      margin-top: 14px;
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
      margin-bottom: 40px;
    }
    .section h2 {
      font-size: 20px;
      color: #ff4757;
      border-bottom: 2px dashed #ff4757;
      margin-bottom: 16px;
      padding-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.6px;
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
      justify-content: flex-start;
    }
    .skill {
      font-size: 14px;
      color: #ff4757;
      padding: 10px 18px;
      border-radius: 20px;
      margin: 8px 12px 8px 0;
      background-color: #ffeaea;
      border: 1px solid #ff4757;
      box-shadow: 0 2px 6px rgba(255,71,87,0.3);
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
