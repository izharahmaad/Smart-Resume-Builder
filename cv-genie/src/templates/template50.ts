// src/templates/template50.ts

export const template50 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Creative Director CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 60px 70px;
      background-color: #ffffff;
      color: #222;
      font-family: 'Roboto', sans-serif;
    }
    .header {
      text-align: center;
      margin-bottom: 50px;
    }
    .profile-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 16px;
      border: 3px solid #000;
      box-shadow: 0 2px 10px rgba(0,0,0,0.2);
      margin-bottom: 20px;
    }
    .header h1 {
      font-family: 'Oswald', sans-serif;
      font-size: 36px;
      margin: 0 0 12px 0;
      letter-spacing: 2px;
      color: #000;
    }
    .contact-info {
      font-size: 14px;
      color: #555;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .main {
      max-width: 800px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 35px;
    }
    .section {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .section h2 {
      font-family: 'Oswald', sans-serif;
      font-size: 18px;
      color: #000;
      border-bottom: 3px solid #000;
      padding-bottom: 6px;
      margin-bottom: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .experience-item, .education-item {
      margin-bottom: 14px;
    }
    .experience-item strong, .education-item strong {
      font-size: 14px;
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
      justify-content: center;
    }
    .skill {
      font-size: 13px;
      color: #000;
      padding: 6px 14px;
      border-radius: 20px;
      background-color: #f2f2f2;
      border: 1px solid #000;
    }
    .language-list p {
      font-size: 13px;
      margin: 4px 0;
      color: #555;
    }
  </style>
</head>
<body>

  <div class="header">
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
