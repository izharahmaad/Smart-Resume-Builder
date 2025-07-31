// src/templates/template17.ts

export const template17 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Creative Studio CV</title>
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
      background-color: #ff5e57;
      color: #fff;
      width: 260px;
      padding: 36px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      box-shadow: 4px 0 12px rgba(0,0,0,0.15);
    }
    .profile-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 16px;
      border: 4px solid #fff;
      box-shadow: 0 0 8px rgba(255,255,255,0.4);
    }
    .sidebar h1 {
      font-size: 26px;
      margin: 12px 0 8px 0;
      text-align: center;
    }
    .contact-info {
      font-size: 13px;
      text-align: center;
      margin-top: 12px;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .main {
      flex: 1;
      padding: 48px;
      overflow-y: auto;
    }
    .section {
      margin-bottom: 32px;
    }
    .section h2 {
      font-size: 18px;
      color: #ff5e57;
      border-bottom: 2px dashed #ff5e57;
      margin-bottom: 14px;
      padding-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .experience-item, .education-item {
      margin-bottom: 18px;
    }
    .experience-item strong, .education-item strong {
      font-size: 15px;
      color: #333;
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
      color: #ff5e57;
      padding: 8px 16px;
      border-radius: 16px;
      margin: 8px 12px 8px 0;
      background-color: #fff0f0;
      border: 1px solid #ff5e57;
      box-shadow: 0 2px 6px rgba(255, 94, 87, 0.2);
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
      <p>📍 {{phone}}</p>
      <p>✉️ {{email}}</p>
      <p>🔗 {{linkedin}} | {{github}}</p>
    </div>
  </div>

  <div class="main">
    <div class="section">
      <h2>📝 Professional Summary</h2>
      <p>{{summary}}</p>
    </div>

    <div class="section">
      <h2>🛠️ Skills</h2>
      <div class="skills">
        <div class="skill">{{skill1}}</div>
        <div class="skill">{{skill2}}</div>
        <div class="skill">{{skill3}}</div>
        <div class="skill">{{skill4}}</div>
      </div>
    </div>

    <div class="section">
      <h2>🧑‍💻 Professional Experience</h2>
      <div class="experience-item">
        <p><strong>{{experience_title}}</strong></p>
        <p>{{experience_description}}</p>
      </div>
    </div>

    <div class="section">
      <h2>🎓 Education</h2>
      <div class="education-item">
        <p><strong>{{education_title}}</strong></p>
        <p>{{education_description}}</p>
      </div>
    </div>

    <div class="section">
      <h2>🌐 Languages</h2>
      <div class="language-list">
        <p>{{language}}</p>
      </div>
    </div>

    <div class="section">
      <h2>🎨 Hobby / Interests</h2>
      <p>{{hobby}}</p>
    </div>
  </div>

</body>
</html>
`;
