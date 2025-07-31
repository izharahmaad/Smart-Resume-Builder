// src/templates/template19.ts

export const template19 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Academic CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Merriweather', serif;
      background-color: #ffffff;
      color: #222;
      margin: 0;
      display: flex;
      height: 100vh;
    }
    .sidebar {
      width: 280px;
      background-color: #f7f9fc;
      border-right: 2px solid #ccc;
      padding: 40px 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .profile-image {
      width: 110px;
      height: 110px;
      object-fit: cover;
      border-radius: 12px;
      margin-bottom: 16px;
      border: 2px solid #888;
    }
    .sidebar h1 {
      font-size: 24px;
      margin: 12px 0 8px 0;
      text-align: center;
      color: #111;
    }
    .contact-info {
      font-size: 14px;
      text-align: center;
      margin-top: 12px;
      color: #444;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .main {
      flex: 1;
      padding: 50px;
      overflow-y: auto;
    }
    .section {
      margin-bottom: 36px;
    }
    .section h2 {
      font-size: 18px;
      color: #0e234b;
      border-bottom: 2px solid #0e234b;
      margin-bottom: 14px;
      padding-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
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
      color: #0e234b;
      padding: 6px 14px;
      margin: 6px 12px 6px 0;
      border-bottom: 2px solid #0e234b;
      background-color: #f0f2f5;
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
