// src/templates/template33.ts

export const template33 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Creative Developer CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      color: #222;
      font-family: 'Roboto', sans-serif;
    }
    .top-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 30px 50px 15px 50px;
      border-bottom: 2px solid #333;
      background-color: #f5f5f5;
    }
    .top-left {
      flex: 1;
    }
    .top-left h1 {
      font-family: 'Fira Code', monospace;
      font-size: 28px;
      margin: 0 0 8px 0;
      color: #000;
    }
    .top-left .contact-info {
      font-size: 13px;
      color: #555;
    }
    .top-left .contact-info p {
      margin: 3px 0;
    }
    .profile-image {
      width: 90px;
      height: 90px;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid #333;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
    .main {
      max-width: 880px;
      margin: 0 auto;
      padding: 30px 40px;
      display: flex;
      flex-direction: column;
      gap: 25px;
    }
    .main h2 {
      font-family: 'Fira Code', monospace;
      font-size: 15px;
      color: #222;
      border-bottom: 1px solid #222;
      margin-bottom: 10px;
      padding-bottom: 4px;
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
      font-family: 'Fira Code', monospace;
      font-size: 12px;
      background-color: #eeeeee;
      color: #222;
      padding: 6px 12px;
      border-radius: 12px;
      border: 1px solid #333;
      box-shadow: 0 1px 2px rgba(0,0,0,0.1);
    }
    .language-list p {
      font-size: 12.5px;
      margin: 4px 0;
      color: #555;
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
    <h2>== Professional Summary ==</h2>
    <p>{{summary}}</p>

    <h2>== Skills ==</h2>
    <div class="skills">
      <div class="skill">{{skill1}}</div>
      <div class="skill">{{skill2}}</div>
      <div class="skill">{{skill3}}</div>
      <div class="skill">{{skill4}}</div>
    </div>

    <h2>== Professional Experience ==</h2>
    <div class="experience-item">
      <p><strong>{{experience_title}}</strong></p>
      <p>{{experience_description}}</p>
    </div>

    <h2>== Education ==</h2>
    <div class="education-item">
      <p><strong>{{education_title}}</strong></p>
      <p>{{education_description}}</p>
    </div>

    <h2>== Languages ==</h2>
    <div class="language-list">
      <p>{{language}}</p>
    </div>

    <h2>== Hobby / Interests ==</h2>
    <p>{{hobby}}</p>
  </div>

</body>
</html>
`;
