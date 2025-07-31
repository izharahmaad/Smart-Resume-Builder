// src/templates/template36.ts

export const template36 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Photographer CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      color: #222;
      font-family: 'Roboto', sans-serif;
    }
    .hero {
      position: relative;
      width: 100%;
      height: 280px;
      background: #000 url('{{profile_image}}') center center / cover no-repeat;
    }
    .hero-overlay {
      position: absolute;
      bottom: 20px;
      left: 40px;
      color: #fff;
      background: rgba(0, 0, 0, 0.6);
      padding: 12px 20px;
      border-radius: 8px;
    }
    .hero-overlay h1 {
      font-family: 'Montserrat', sans-serif;
      font-size: 30px;
      margin: 0 0 6px 0;
    }
    .hero-overlay .contact-info {
      font-size: 13px;
      color: #eee;
    }
    .hero-overlay .contact-info p {
      margin: 3px 0;
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
    }
    .section h2 {
      font-family: 'Montserrat', sans-serif;
      font-size: 17px;
      color: #000;
      border-bottom: 2px solid #000;
      padding-bottom: 5px;
      margin-bottom: 10px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
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
      color: #000;
      padding: 6px 12px;
      border-radius: 14px;
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    .language-list p {
      font-size: 12.5px;
      margin: 4px 0;
      color: #555;
    }
  </style>
</head>
<body>

  <div class="hero">
    <div class="hero-overlay">
      <h1>{{name}}</h1>
      <div class="contact-info">
        <p>{{phone}}</p>
        <p>{{email}}</p>
        <p>{{linkedin}} | {{github}}</p>
      </div>
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
