// src/templates/template15.ts

export const template15 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Fresher Simple CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Nunito', sans-serif;
      background-color: #ffffff;
      color: #222;
      padding: 40px;
      line-height: 1.6;
      box-sizing: border-box;
      margin: 0;
    }
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-bottom: 12px;
      border-bottom: 3px solid #7ed6a6;
      margin-bottom: 32px;
    }
    .header-left {
      flex: 1;
    }
    .header h1 {
      font-size: 36px;
      margin: 0 0 8px 0;
      color: #333;
    }
    .contact-info {
      font-size: 14px;
      color: #555;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .profile-image {
      width: 140px;
      height: 140px;
      object-fit: cover;
      border-radius: 8px; /* square with slightly rounded corners */
      border: 4px solid #7ed6a6;
      box-shadow: 0 0 10px rgba(126, 214, 166, 0.6);
    }
    .section {
      margin-bottom: 30px;
    }
    .section h2 {
      font-size: 18px;
      color: #2f886d;
      border-left: 6px solid #7ed6a6;
      padding-left: 10px;
      margin-bottom: 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .experience-item, .education-item {
      margin-bottom: 16px;
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
    }
    .skill {
      font-size: 14px;
      color: #2f886d;
      padding: 8px 16px;
      border-radius: 14px;
      margin: 8px 12px 8px 0;
      border-bottom: 2px solid #7ed6a6;
      background-color: #f7fdfb;
      box-shadow: 0 0 6px rgba(126, 214, 166, 0.2);
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
        <p>📍 {{phone}}</p>
        <p>✉️ {{email}}</p>
        <p>🔗 {{linkedin}} | {{github}}</p>
      </div>
    </div>
    <img src="{{profile_image}}" alt="Profile Image" class="profile-image" onerror="this.style.display='none';">
  </div>

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
    <h2>❤️ Favorite Quote / Hobby</h2>
    <p>{{hobby}}</p>
  </div>

</body>
</html>
`;
