// src/templates/template32.ts

export const template32 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Corporate Manager CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&family=Merriweather:wght@400;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Source Sans Pro', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #fff;
      color: #222;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 40px 80px 20px 80px;
      border-bottom: 2px solid #444;
    }
    .header-left h1 {
      font-family: 'Merriweather', serif;
      font-size: 36px;
      margin: 0 0 10px 0;
      color: #222;
    }
    .header-left .contact-info {
      font-size: 14px;
      color: #555;
    }
    .header-left .contact-info p {
      margin: 5px 0;
    }
    .profile-image {
      width: 120px;
      height: 120px;
      object-fit: cover;
      border-radius: 8px;
      border: 2px solid #444;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    }
    .main {
      padding: 50px 80px;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
    .section h2 {
      font-size: 18px;
      color: #444;
      border-bottom: 1px solid #444;
      margin-bottom: 12px;
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
      gap: 10px;
    }
    .skill {
      font-size: 13px;
      color: #222;
      padding: 8px 14px;
      border-radius: 16px;
      background-color: #f0f0f0;
      border: 1px solid #444;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
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
    <img src="{{profile_image}}" alt="Profile Image" class="profile-image" onerror="this.style.display='none';">
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
