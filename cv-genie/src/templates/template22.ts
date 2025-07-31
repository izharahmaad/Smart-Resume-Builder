// src/templates/template22.ts

export const template22 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Modern Executive CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Source Sans Pro', sans-serif;
      background-color: #ffffff;
      color: #222;
      padding: 0;
      margin: 0;
    }
    .header {
      background-color: #f5f7fa;
      color: #111;
      padding: 50px 60px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 3px solid #3366cc;
    }
    .header-left {
      flex: 1;
    }
    .header h1 {
      font-size: 40px;
      margin: 0 0 12px 0;
      color: #111;
    }
    .contact-info {
      font-size: 15px;
      color: #444;
    }
    .contact-info p {
      margin: 5px 0;
    }
    .profile-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid #3366cc;
      box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    }
    .main {
      padding: 60px;
    }
    .section {
      margin-bottom: 40px;
    }
    .section h2 {
      font-size: 20px;
      color: #3366cc;
      border-bottom: 2px solid #3366cc;
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
      color: #111;
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
      color: #3366cc;
      padding: 8px 16px;
      border-radius: 20px;
      margin: 8px 12px 8px 0;
      background-color: #eef3fd;
      border: 1px solid #3366cc;
    }
    .language-list p {
      font-size: 14px;
      margin: 6px 0;
    }
  </style>
</head>
<body>

  <div class="header">
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
