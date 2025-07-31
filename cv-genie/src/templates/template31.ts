// src/templates/template31.ts

export const template31 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Gradient Professional CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Nunito', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #fff;
      color: #222;
    }
    .header {
      background: linear-gradient(90deg, #4e54c8, #8f94fb);
      color: #fff;
      padding: 60px 80px;
      display: grid;
      grid-template-columns: 2fr 2fr 1fr;
      align-items: center;
    }
    .header-left h1 {
      font-size: 34px;
      margin: 0 0 10px 0;
      color: #fff;
    }
    .contact-info {
      font-size: 14px;
      color: #f0f0f0;
    }
    .contact-info p {
      margin: 6px 0;
    }
    .profile-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 50%;
      border: 4px solid #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.4);
      justify-self: end;
    }
    .main {
      padding: 50px 80px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    .section {
      margin-bottom: 30px;
      grid-column: span 2;
    }
    .section h2 {
      font-size: 18px;
      color: #4e54c8;
      border-bottom: 2px solid #4e54c8;
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
      font-size: 13px;
      margin: 4px 0;
      color: #555;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
    }
    .skill {
      font-size: 13px;
      color: #4e54c8;
      padding: 8px 16px;
      border-radius: 18px;
      background-color: #f0f3ff;
      border: 1px solid #4e54c8;
      box-shadow: 0 2px 4px rgba(78,84,200,0.3);
    }
    .language-list p {
      font-size: 13px;
      margin: 5px 0;
      color: #555;
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
    <div></div>
    <img src="{{profile_image}}" alt="Profile Image" class="profile-image" onerror="this.style.display='none';">
  </div>

  <div class="main">
    <div class="section">
      <h2>Professional Summary</h2>
      <p>{{summary}}</p>
    </div>

    <div>
      <h2>Skills</h2>
      <div class="skills">
        <div class="skill">{{skill1}}</div>
        <div class="skill">{{skill2}}</div>
        <div class="skill">{{skill3}}</div>
        <div class="skill">{{skill4}}</div>
      </div>
    </div>

    <div>
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

    <div class="section">
      <h2>Hobby / Interests</h2>
      <p>{{hobby}}</p>
    </div>
  </div>

</body>
</html>
`;
