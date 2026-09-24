# CV Genie 🧞‍♂️  
**AI-Powered Mobile Resume Builder**

CV Genie is a cross-platform mobile application that allows users to create professional, job-ready resumes quickly and easily. Built with **React Native**, **TypeScript**, and **Expo**, the app provides an intuitive interface, over 50 elegant CV templates, live previews, and PDF export functionality all while supporting offline use.

---

## 🚀 Features

- 🔐 **Secure Login & Guest Mode**  
  Sign in with Firebase Authentication or build resumes as a guest with local storage.

- 🧾 **Smart Resume Builder**  
  Input personal information, education, experience, skills, certifications, and more.

- 🎨 **50+ Customizable Templates**  
  Professionally designed CV templates categorized by industry (Tech, Design, Business, etc.).

- 👀 **Live Resume Preview**  
  See real-time updates of your resume using WebView before downloading.

- 📄 **Export to PDF**  
  Instantly convert your completed resume into a downloadable PDF using HTML-to-PDF rendering.

- 📁 **Multi-Resume Support**  
  Manage and edit multiple CVs for different job roles.

- 📶 **Offline Functionality**  
  Create, preview, and export resumes without internet access using AsyncStorage.

---

## 🧰 Technology Stack

| Layer              | Technology                                  |
|--------------------|----------------------------------------------|
| **Framework**       | React Native (via Expo)                     |
| **Language**        | TypeScript                                  |
| **UI Components**   | Styled Components, React Native             |
| **Authentication**  | Firebase Authentication                     |
| **Local Storage**   | AsyncStorage                                |
| **Preview Engine**  | WebView (live HTML rendering)               |
| **PDF Export**      | HTML-to-PDF template conversion             |
| **Development Tools**| Expo CLI, Visual Studio Code               |

---

## ⚙️ How to Run the App Locally

### 📦 Requirements
- Node.js (v16 or later)
- Expo CLI (use `npx expo`)
- Android/iOS device or emulator
- [Expo Go](https://expo.dev/client) app on your mobile device

### ▶️ Run Instructions

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/cv-genie.git
cd cv-genie

# 2. Install project dependencies
npm install

# 3. Start the development server
npx expo start
```

📱 Scan the QR code from the terminal using the **Expo Go** app to preview the app on your mobile device.

---

## 🏗️ System Design

### 1. System Architecture

CV Genie uses a modular 3-tier architecture:

- **Presentation Layer**  
  Built with React Native and Styled Components. It contains input forms, navigation, and real-time previews using WebView.

- **Business Logic Layer**  
  TypeScript-based logic for user input handling, Firebase Authentication, PDF export logic, and session control.

- **Data Layer**  
  Uses AsyncStorage for offline data management and Firebase Authentication for secure user sessions.

---

### 2. Functional Requirements

✅ User Registration & Login via Firebase  
✅ Guest Mode Access with local storage  
✅ Resume Profile Builder (Personal Info, Education, Experience, Projects, Skills, etc.)  
✅ Resume Template Gallery with 50+ industry-specific designs  
✅ Live CV Preview using WebView  
✅ Export Resume as PDF  
✅ Save/Edit Multiple Resumes  
✅ Offline Resume Creation and Export

---

### 3. Non-Functional Requirements

🌐 **Cross-Platform Support**: One React Native codebase runs on both Android and iOS.  
🔐 **Security**: Firebase Authentication for login and session encryption.  
👨‍💻 **Usability**: User-friendly UI with touch-optimized input forms.  
⚡ **Performance**: Loads in under 3 seconds; PDF generation in ~2 seconds.  
🔧 **Scalability**: Easily extendable to add cloud sync, job tracking, etc.  
🔍 **Maintainability**: Modular, component-based TypeScript architecture.

---

### 4. Use Case Diagram Summary

**Primary Actor:**  
- User (Guest or Logged-in)

**Use Cases Include:**  
- Register/Login  
- Create/Edit Resume  
- Select Template  
- Preview Resume  
- Export as PDF  
- Save Locally  
- Reuse/Edit Resumes

---

## 🔮 Future Enhancements

☁️ Cloud sync and online storage  
🌍 Multi-language interface support  
🧠 AI-based resume improvement suggestions  
📤 Integration with LinkedIn & job platforms  
🛒 In-app marketplace for premium resume templates

---

## 👤 Developer

**Izhar Ahmad**  
Mobile & Web Developer | React Native | Firebase | TypeScript

📧 izharahmadcreative@gmail.com  


