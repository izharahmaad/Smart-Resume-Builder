// src/templates/template48.ts

export const template48 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Elegant Simple CV</title>
  <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;700&family=Open+Sans:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 50px 60px;
      background-color: #ffffff;
      color: #222;
      font-family: 'Open Sans', sans-serif;
    }
    .header {
      text-align: center;
      margin-bottom: 40px;
    }
    .profile-image {
      width: 90px;
      height: 90px;
      object-fit: cover;
      border-radius: 12px;
      border: 2px solid #444;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
      margin-bottom: 15px;
    }
    .header h1 {
      font-family: 'EB Garamond', serif;
      font-size: 30px;
      margin: 0 0 12px 0;
      letter-spacing: 1px;
      color: #000;
    }
    .contact-info {
      font-size: 13px;
      color: #555;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .main {
      max-width: 750px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 30px;
    }
    .section {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .section h2 {
      font-family: 'EB Garamond', serif;
      font-size: 17px;
      color: #444;
      border-bottom: 1px solid #ccc;
      padding-bottom: 6px;
      margin-bottom: 12px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
    .experience-item, .education-item {
      margin-bottom: 12px;
    }
    .experience-item strong, .education-item strong {
      font-size: 14px;
      color: #222;
    }
    .experience-item p, .education-item p {
      font-size: 12.5px;
      margin: 3px 0;
      color: #555;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .skill {
      font-size: 12px;
      color: #222;
      padding: 6px 12px;
      border-radius: 12px;
      background-color: #f5f5f5;
      border: 1px solid #ccc;
    }
    .language-list p {
      font-size: 12.5px;
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
