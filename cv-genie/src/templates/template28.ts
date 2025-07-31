// src/templates/template28.ts

export const template28 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Bold Red CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #fff;
      color: #222;
    }
    .header {
      background-color: #e60023;
      color: #fff;
      padding: 60px 80px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    }
    .profile-image {
      width: 140px;
      height: 140px;
      object-fit: cover;
      border-radius: 16px;
      border: 5px solid #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    }
    .header-text {
      flex: 1;
      padding-left: 40px;
    }
    .header-text h1 {
      font-size: 36px;
      margin: 0 0 10px 0;
      color: #fff;
    }
    .header-text .contact-info {
      font-size: 14px;
      color: #f0f0f0;
      margin-top: 12px;
    }
    .header-text .contact-info p {
      margin: 5px 0;
    }
    .main {
      padding: 60px 80px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    .section {
      margin-bottom: 30px;
    }
    .section h2 {
      font-size: 18px;
      color: #e60023;
      border-bottom: 2px solid #e60023;
      margin-bottom: 16px;
      padding-bottom: 5px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .experience-item, .education-item {
      margin-bottom: 16px;
    }
    .experience-item strong, .education-item strong {
      font-size: 15px;
      color: #222;
    }
    .experience-item p, .education-item p {
      font-size: 14px;
      margin: 4px 0;
      color: #555;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .skill {
      font-size: 14px;
      color: #e60023;
      padding: 10px 18px;
      border-radius: 24px;
      background-color: #ffe6eb;
      border: 1px solid #e60023;
      box-shadow: 0 2px 6px rgba(230,0,35,0.3);
    }
    .language-list p {
      font-size: 14px;
      margin: 6px 0;
      color: #555;
    }
    .full-width {
      grid-column: 1 / -1;
    }
  </style>
</head>
<body>

  <div class="header">
    <img src="{{profile_image}}" alt="Profile Image" class="profile-image" onerror="this.style.display='none';">
    <div class="header-text">
      <h1>{{name}}</h1>
      <div class="contact-info">
        <p>{{phone}}</p>
        <p>{{email}}</p>
        <p>{{linkedin}} | {{github}}</p>
      </div>
    </div>
  </div>

  <div class="main">
    <div class="section full-width">
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
      <h2>Languages</h2>
      <div class="language-list">
        <p>{{language}}</p>
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

    <div class="section full-width">
      <h2>Hobby / Interests</h2>
      <p>{{hobby}}</p>
    </div>
  </div>

</body>
</html>
`;
