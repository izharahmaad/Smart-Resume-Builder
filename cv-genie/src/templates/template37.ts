// src/templates/template37.ts

export const template37 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>UI/UX Expert CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #ffffff;
      color: #222;
      font-family: 'Roboto', sans-serif;
      display: grid;
      grid-template-columns: 300px 1fr;
      min-height: 100vh;
    }
    .left-column {
      background-color: #fafafa;
      padding: 40px 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      border-right: 1px solid #ddd;
    }
    .profile-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 16px;
      border: 3px solid #333;
      margin-bottom: 20px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    }
    .left-column h1 {
      font-family: 'Poppins', sans-serif;
      font-size: 26px;
      text-align: center;
      margin: 0 0 10px 0;
      color: #111;
    }
    .contact-info {
      font-size: 13px;
      color: #555;
      text-align: center;
    }
    .contact-info p {
      margin: 4px 0;
    }
    .skills {
      margin-top: 20px;
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      justify-content: center;
    }
    .skill {
      font-size: 12px;
      color: #111;
      padding: 6px 12px;
      border-radius: 12px;
      background-color: #eaeaea;
      border: 1px solid #bbb;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    }
    .right-column {
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
      font-family: 'Poppins', sans-serif;
      font-size: 17px;
      color: #444;
      border-bottom: 2px solid #444;
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
    .language-list p {
      font-size: 12.5px;
      margin: 4px 0;
      color: #555;
    }
  </style>
</head>
<body>

  <div class="left-column">
    <img src="{{profile_image}}" alt="Profile Image" class="profile-image" onerror="this.style.display='none';">
    <h1>{{name}}</h1>
    <div class="contact-info">
      <p>{{phone}}</p>
      <p>{{email}}</p>
      <p>{{linkedin}} | {{github}}</p>
    </div>
    <div class="skills">
      <div class="skill">{{skill1}}</div>
      <div class="skill">{{skill2}}</div>
      <div class="skill">{{skill3}}</div>
      <div class="skill">{{skill4}}</div>
    </div>
  </div>

  <div class="right-column">
    <div class="section">
      <h2>Professional Summary</h2>
      <p>{{summary}}</p>
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
