// src/templates/template47.ts

export const template47 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Modern Gradient Sidebar CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      color: #222;
      font-family: 'Roboto', sans-serif;
      display: grid;
      grid-template-columns: 280px 1fr;
      min-height: 100vh;
    }
    .sidebar {
      background: linear-gradient(180deg, #6a11cb, #2575fc);
      color: #fff;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .profile-image {
      width: 110px;
      height: 110px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid #fff;
      box-shadow: 0 0 10px rgba(255,255,255,0.4);
      margin-bottom: 20px;
    }
    .sidebar h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 22px;
      text-align: center;
      margin: 0 0 15px 0;
    }
    .contact-info {
      font-size: 13px;
      text-align: center;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .sidebar h2 {
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      text-transform: uppercase;
      border-bottom: 2px solid #fff;
      padding-bottom: 4px;
      margin: 20px 0 10px 0;
      letter-spacing: 0.8px;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }
    .skill {
      font-size: 12px;
      color: #fff;
      padding: 5px 10px;
      border-radius: 12px;
      background-color: rgba(255,255,255,0.2);
      border: 1px solid #fff;
    }
    .main {
      padding: 50px 60px;
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
      font-family: 'Montserrat', sans-serif;
      font-size: 16px;
      color: #2575fc;
      border-bottom: 2px solid #2575fc;
      padding-bottom: 5px;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
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
    .language-list p {
      font-size: 12.5px;
      margin: 4px 0;
      color: #555;
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

    <h2>Skills</h2>
    <div class="skills">
      <div class="skill">{{skill1}}</div>
      <div class="skill">{{skill2}}</div>
      <div class="skill">{{skill3}}</div>
      <div class="skill">{{skill4}}</div>
    </div>
  </div>

  <div class="main">
    <div class="section">
      <h2>Professional Summary</h2>
      <p>{{summary}}</p>
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
