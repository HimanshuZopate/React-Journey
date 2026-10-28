import React from 'react'; 
import './App.css';

// 1. Header Component (Displays name and title)
function ProfileHeader() {
  return (
    <header className="profile-header">
      <h1>Himanshu Zopate</h1>
      <p>Frontend React Engineer</p>
    </header>
  );
}

// 2. Main Content Component (Displays bio and skills)
function ProfileBio() {
  return (
    <main className="profile-body">
      <h2>About Me</h2>
      <p>
        I am a passionate web developer who loves building clean, user-friendly 
        interfaces. I specialize in turning complex problems into simple, beautiful designs.
      </p>
      
      <h3>My Tech Stack:</h3>
      <ul className="skills-list">
        <li>HTML5, CSS3 & JavaScript</li>
        <li>React.js & Redux</li>
        <li>Tailwind CSS & Material UI</li>
      </ul>
    </main>
  );
}

// 3. Footer Component (Displays contact and copyright info)
function ProfileFooter() {
  return (
    <footer className="profile-footer">
      <p>Contact: hello@developer.com</p>
      <p>© 2026 React Developer. All rights reserved.</p>
    </footer>
  );
}

// 4. Main App Component (Assembles all child components together)
export default function App() {
  return (
    <div className="portfolio-container">
      <ProfileHeader />
      <ProfileBio />
      <ProfileFooter />
    </div>
  );
}