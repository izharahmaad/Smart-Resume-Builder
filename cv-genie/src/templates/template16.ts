// src/templates/template16.ts

export const template16 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>UI/UX Designer CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Montserrat', sans-serif;
      background-color: #fafafa;
      color: #222;
      padding: 40px;
      line-height: 1.6;
      box-sizing: border-box;
      margin: 0;
    }
    .header {
      background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
      color: #fff;
      padding: 32px;
      border-radius: 16px;
      margin-bottom: 36px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }
    .header-left {
      flex: 1;
    }
    .header h1 {
      font-size: 38px;
      margin: 0 0 12px 0;
      color: #fff;
    }
    .contact-info {
      font-size: 14px;
      color: #f0f0f0;
    }
    .contact-info p {
      margin: 5px 0;
    }
    .profile-image {
      width: 130px;
      height: 130px;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid #fff;
      box-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
    }
    .section {
      margin-bottom: 32px;
    }
    .section h2 {
      font-size: 20px;
      color: #6a11cb;
      border-bottom: 2px solid #6a11cb;
      margin-bottom: 16px;
      padding-bottom: 6px;
      display: flex;
      align-items: center;
      gap: 8px;
      text-transform: uppercase;
      letter-spacing: 0.6px;
    }
    .experience-item, .education-item {
      margin-bottom: 18px;
    }
    .experience-item strong, .education-item strong {
      font-size: 16px;
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
      color: #6a11cb;
      padding: 8px 16px;
      border-radius: 20px;
      margin: 8px 12px 8px 0;
      background: linear-gradient(90deg, #f3ecff 0%, #e0e7ff 100%);
      box-shadow: 0 2px 6px rgba(106, 17, 203, 0.2);
      border: 1px solid #6a11cb;
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
    <h2>🎨 Hobby / Interests</h2>
    <p>{{hobby}}</p>
  </div>

</body>
</html>
`;
