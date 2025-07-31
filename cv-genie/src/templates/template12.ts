// src/templates/template12.ts

export const template12 = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Marketing Expert CV</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    body {
      font-family: 'Poppins', sans-serif;
      background-color: #ffffff;
      color: #222;
      padding: 36px;
      line-height: 1.6;
      box-sizing: border-box;
      margin: 0;
    }
    .header {
      background-color: #fff5f0;
      color: #e67e22;
      padding: 28px;
      text-align: center;
      border-radius: 16px;
      margin-bottom: 32px;
      border: 2px solid #e67e22;
      box-shadow: 0 4px 12px rgba(230, 126, 34, 0.2);
    }
    .profile-image {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 14px;
      border: 3px solid #e67e22;
      box-shadow: 0 0 8px rgba(230, 126, 34, 0.5);
    }
    .header h1 {
      font-size: 32px;
      margin: 10px 0 6px 0;
      letter-spacing: 1px;
    }
    .header p {
      margin: 5px 0;
      font-size: 14px;
    }
    .section {
      margin-bottom: 30px;
    }
    .section h2 {
      font-size: 20px;
      color: #e67e22;
      border-bottom: 2px dashed #e67e22;
      margin-bottom: 12px;
      padding-bottom: 6px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .section p {
      margin: 6px 0;
      font-size: 15px;
      word-wrap: break-word;
    }
    .skills {
      display: flex;
      flex-wrap: wrap;
    }
    .skill {
      background-color: #fff5f0;
      color: #e67e22;
      padding: 8px 14px;
      border-radius: 18px;
      margin: 6px 8px 6px 0;
      font-size: 14px;
      border: 1px solid #e67e22;
      box-shadow: 0 0 5px rgba(230, 126, 34, 0.2);
    }
    .footer {
      text-align: center;
      margin-top: 24px;
      font-size: 12px;
      color: #888;
    }
  </style>
</head>
<body>

  <div class="header">
    <!-- Profile image -->
    <img src="{{profile_image}}" alt="Profile Image" class="profile-image" onerror="this.style.display='none';">

    <h1>{{name}}</h1>

    <p>Email: {{email}} | Phone: {{phone}}</p>
    <p>LinkedIn: {{linkedin}} | GitHub: {{github}}</p>
  </div>

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
    <h2>Experience</h2>
    <p><strong>{{experience_title}}</strong></p>
    <p>{{experience_description}}</p>
  </div>

  <div class="section">
    <h2>Education</h2>
    <p><strong>{{education_title}}</strong></p>
    <p>{{education_description}}</p>
  </div>

  <div class="section">
    <h2>Language</h2>
    <p>{{language}}</p>
  </div>

  <div class="section">
    <h2>Hobby</h2>
    <p>{{hobby}}</p>
  </div>

</body>
</html>
`;
