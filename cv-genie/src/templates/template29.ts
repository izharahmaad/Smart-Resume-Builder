// src/templates/template29.ts

export const template29 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Elegant Sidebar CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Libre Franklin', sans-serif;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: 200px 1fr;
      min-height: 100vh;
      color: #222;
    }
    .sidebar {
      background-color: #2e2e2e;
      color: #fff;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 6px 0 12px rgba(0,0,0,0.2);
    }
    .profile-image {
      width: 110px;
      height: 110px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 16px;
      border: 4px solid #d4af37;
      box-shadow: 0 4px 12px rgba(0,0,0,0.5);
    }
    .sidebar h1 {
      font-size: 20px;
      margin: 12px 0 10px 0;
      text-align: center;
      color: #fff;
    }
    .contact-info {
      font-size: 12px;
      text-align: center;
      margin-top: 10px;
      color: #ccc;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .main {
      background-color: #ffffff;
      padding: 60px 70px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
    }
    .section {
      margin-bottom: 36px;
    }
    .section h2 {
      font-size: 17px;
      color: #d4af37;
      border-bottom: 1px solid #d4af37;
      margin-bottom: 14px;
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
      font-size: 13px;
      margin: 4px 0;
      color: #555;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    .skill {
      font-size: 13px;
      color: #d4af37;
      padding: 8px 14px;
      border-radius: 16px;
      background-color: #f9f5ec;
      border: 1px solid #d4af37;
      box-shadow: 0 1px 4px rgba(212,175,55,0.3);
    }
    .language-list p {
      font-size: 13px;
      margin: 5px 0;
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
