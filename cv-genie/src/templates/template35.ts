// src/templates/template35.ts

export const template35 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Modern Gradient CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      color: #222;
      font-family: 'Roboto', sans-serif;
    }
    .header {
      background: linear-gradient(90deg, #6a11cb, #2575fc);
      color: #fff;
      padding: 50px 60px 40px 60px;
      position: relative;
      text-align: left;
    }
    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .header-left h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 34px;
      margin: 0 0 8px 0;
      color: #fff;
    }
    .header-left .contact-info {
      font-size: 13.5px;
      color: #f0f0f0;
    }
    .header-left .contact-info p {
      margin: 3px 0;
    }
    .profile-image {
      width: 110px;
      height: 110px;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      position: relative;
      z-index: 2;
    }
    .main {
      max-width: 900px;
      margin: -40px auto 0 auto;
      background-color: #fff;
      border-radius: 12px;
      padding: 40px 50px;
      box-shadow: 0 6px 16px rgba(0,0,0,0.08);
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
      font-size: 17px;
      color: #6a11cb;
      border-bottom: 2px solid #6a11cb;
      padding-bottom: 5px;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
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
      font-size: 12px;
      color: #6a11cb;
      padding: 6px 12px;
      border-radius: 14px;
      background-color: #f3f0ff;
      border: 1px solid #6a11cb;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
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
    <div class="header-content">
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
