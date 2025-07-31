// src/templates/template20.ts

export const template20 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Artistic CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #fffef8;
      color: #222;
      padding: 0;
      margin: 0;
    }
    .header {
      background: linear-gradient(90deg, #ff9966 0%, #ff5e62 100%);
      color: #fff;
      padding: 50px 40px 80px 40px;
      position: relative;
      text-align: center;
      border-bottom: 6px dotted #ff5e62;
    }
    .header h1 {
      font-size: 42px;
      margin: 0 0 14px 0;
      letter-spacing: 1px;
    }
    .contact-info {
      font-size: 14px;
      margin-top: 8px;
      color: #f9f9f9;
    }
    .contact-info p {
      margin: 5px 0;
    }
    .profile-image {
      width: 140px;
      height: 140px;
      object-fit: cover;
      border-radius: 20px;
      border: 6px solid #fff;
      position: absolute;
      left: 50%;
      bottom: -70px;
      transform: translateX(-50%);
      box-shadow: 0 8px 16px rgba(0,0,0,0.3);
    }
    .main {
      padding: 100px 50px 50px 50px;
    }
    .section {
      margin-bottom: 36px;
    }
    .section h2 {
      font-size: 20px;
      color: #ff5e62;
      border-bottom: 2px dotted #ff5e62;
      margin-bottom: 14px;
      padding-bottom: 4px;
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
      color: #ff5e62;
      padding: 10px 18px;
      border-radius: 20px;
      margin: 8px 12px 8px 0;
      background-color: #fff0ec;
      box-shadow: 0 4px 8px rgba(255, 94, 98, 0.3);
      border: 1px solid #ff5e62;
    }
    .language-list p {
      font-size: 14px;
      margin: 6px 0;
    }
  </style>
</head>
<body>

  <div class="header">
    <h1>{{name}}</h1>
    <div class="contact-info">
      <p>{{phone}}</p>
      <p>{{email}}</p>
      <p>{{linkedin}} | {{github}}</p>
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
