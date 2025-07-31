// src/templates/template44.ts

export const template44 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Futuristic CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      background: linear-gradient(135deg, #0f0f0f, #1a1a2e);
      color: #e0e0e0;
      font-family: 'Roboto', sans-serif;
    }
    .top-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 50px 60px 25px 60px;
      background: linear-gradient(90deg, #1a1a2e, #16213e);
      border-bottom: 3px solid #00f7ff;
    }
    .top-left h1 {
      font-family: 'Orbitron', sans-serif;
      font-size: 30px;
      margin: 0 0 10px 0;
      color: #00f7ff;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .contact-info {
      font-size: 13px;
      color: #aaa;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .profile-image {
      width: 110px;
      height: 110px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid #00f7ff;
      box-shadow: 0 0 12px #00f7ff, 0 2px 8px rgba(0,0,0,0.5);
    }
    .main {
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 50px;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    .section {
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: rgba(255, 255, 255, 0.03);
      border: 1px solid #00f7ff33;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }
    .section h2 {
      font-family: 'Orbitron', sans-serif;
      font-size: 16px;
      color: #00f7ff;
      border-bottom: 2px solid #00f7ff;
      padding-bottom: 5px;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .experience-item, .education-item {
      margin-bottom: 12px;
    }
    .experience-item strong, .education-item strong {
      font-size: 14px;
      color: #e0e0e0;
    }
    .experience-item p, .education-item p {
      font-size: 12.5px;
      margin: 3px 0;
      color: #bbb;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .skill {
      font-family: 'Orbitron', sans-serif;
      font-size: 12px;
      color: #00f7ff;
      padding: 6px 12px;
      border-radius: 14px;
      background-color: rgba(0, 247, 255, 0.1);
      border: 1px solid #00f7ff;
      box-shadow: 0 0 6px rgba(0,247,255,0.5);
    }
    .language-list p {
      font-size: 12.5px;
      margin: 4px 0;
      color: #bbb;
    }
  </style>
</head>
<body>

  <div class="top-header">
    <div class="top-left">
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
