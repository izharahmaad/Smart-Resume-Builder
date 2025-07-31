// src/templates/template21.ts

export const template21 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Elegant Corporate CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto Slab', serif;
      background-color: #ffffff;
      color: #222;
      padding: 0;
      margin: 0;
    }
    .header {
      background-color: #0e1a40;
      color: #fff;
      padding: 40px 50px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 4px solid #c8aa6e;
    }
    .header-left {
      flex: 1;
    }
    .header h1 {
      font-size: 38px;
      margin: 0 0 10px 0;
      color: #fff;
    }
    .contact-info {
      font-size: 14px;
      color: #ddd;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .profile-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 12px;
      border: 4px solid #c8aa6e;
      box-shadow: 0 4px 8px rgba(0,0,0,0.4);
    }
    .main {
      padding: 50px;
    }
    .section {
      margin-bottom: 36px;
    }
    .section h2 {
      font-size: 20px;
      color: #0e1a40;
      border-bottom: 2px solid #c8aa6e;
      margin-bottom: 14px;
      padding-bottom: 6px;
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
      color: #0e1a40;
      padding: 8px 16px;
      border-radius: 16px;
      margin: 8px 12px 8px 0;
      background-color: #f8f6f1;
      border: 1px solid #c8aa6e;
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
