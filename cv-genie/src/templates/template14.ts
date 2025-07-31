// src/templates/template14.ts

export const template14 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Student Simple CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Roboto', sans-serif;
      background-color: #ffffff;
      color: #222;
      padding: 40px;
      line-height: 1.6;
      box-sizing: border-box;
      margin: 0;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f9f9f9;
      padding: 24px 28px;
      border-radius: 14px;
      border: 2px solid #4a90e2;
      box-shadow: 0 4px 12px rgba(74, 144, 226, 0.2);
      margin-bottom: 32px;
    }
    .header-left {
      flex: 1;
    }
    .header h1 {
      font-size: 32px;
      margin: 0 0 6px 0;
    }
    .subtitle {
      font-style: italic;
      color: #555;
      margin-bottom: 12px;
    }
    .contact-info p {
      margin: 4px 0;
      font-size: 14px;
    }
    .profile-image {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      object-fit: cover;
      border: 3px solid #4a90e2;
      box-shadow: 0 0 8px rgba(74, 144, 226, 0.4);
    }
    .section {
      margin-bottom: 30px;
    }
    .section h2 {
      font-size: 18px;
      color: #4a90e2;
      border-bottom: 2px solid #4a90e2;
      margin-bottom: 12px;
      padding-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .experience-item, .education-item {
      display: flex;
      justify-content: space-between;
      margin-bottom: 12px;
    }
    .experience-dates, .education-dates {
      font-size: 13px;
      color: #555;
      width: 30%;
    }
    .experience-content, .education-content {
      width: 65%;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
    }
    .skill {
      background-color: #f0f8ff;
      color: #4a90e2;
      padding: 6px 14px;
      border-radius: 20px;
      margin: 6px 8px 6px 0;
      font-size: 14px;
      border: 1px solid #4a90e2;
      box-shadow: 0 0 4px rgba(74, 144, 226, 0.2);
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
      <div class="subtitle">{{summary}}</div>
      <div class="contact-info">
        <p>📍 {{phone}}</p>
        <p>☎️ {{email}}</p>
        <p>🌐 {{linkedin}} | {{github}}</p>
      </div>
    </div>
    <img src="{{profile_image}}" alt="Profile Image" class="profile-image" onerror="this.style.display='none';">
  </div>

  <div class="section">
    <h2>🧑‍💻 Professional Experience</h2>
    <div class="experience-item">
      <div class="experience-dates"></div>
      <div class="experience-content">
        <p><strong>{{experience_title}}</strong></p>
        <p>{{experience_description}}</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>🎓 Education</h2>
    <div class="education-item">
      <div class="education-dates"></div>
      <div class="education-content">
        <p><strong>{{education_title}}</strong></p>
        <p>{{education_description}}</p>
      </div>
    </div>
  </div>

  <div class="section">
    <h2>🌐 Languages</h2>
    <div class="language-list">
      <p>{{language}}</p>
    </div>
  </div>

  <div class="section">
    <h2>🎮 Hobby</h2>
    <p>{{hobby}}</p>
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

</body>
</html>
`;
