import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import { FaRobot, FaTimes } from "react-icons/fa";
import { gsap } from "gsap";
import Fuse from "fuse.js";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");
  const chatWindowRef = useRef(null);
  const messagesEndRef = useRef(null);

  const sampleResponses = [
    { question: "skills", answer: "I have expertise in React, Node.js, MongoDB, and Express." },
    { question: "projects", answer: "I have worked on projects like an e-commerce app, a blog site, and a portfolio website." },
    { question: "experience", answer: "I have 2 years of experience in web development and have worked with several tech stacks." },
    { question: "education", answer: "I completed a Web Development course and hold a certification in JavaScript." },
    { question: "contact", answer: "You can reach me via email at myemail@example.com or connect with me on LinkedIn!" },
    { question: "certifications", answer: "I am certified in Full Stack Development from XYZ Academy and have completed courses on JavaScript and Responsive Web Design." },
    { question: "languages", answer: "I am fluent in English and proficient in Urdu. I am also comfortable working with code in JavaScript, Python, and HTML/CSS." },
    { question: "achievements", answer: "I have received the Best Project Award in my Web Development course and was a finalist in a regional hackathon." },
    { question: "interests", answer: "I am passionate about open-source projects, and I love contributing to web development communities." },
    { question: "availability", answer: "I am currently open for freelance projects and part-time roles. Feel free to reach out for collaboration!" },
    { question: "hobbies", answer: "In my free time, I enjoy photography, reading tech blogs, and exploring new programming languages." },
    { question: "goals", answer: "My goal is to become a Senior Full-Stack Developer and contribute to impactful projects that solve real-world problems." },
    { question: "portfolio", answer: "You can check out my work on my portfolio at [your-portfolio-link.com]. It includes my projects, blogs, and more about me." },
    { question: "frameworks", answer: "Apart from React, I also have experience with frameworks like Angular, Express.js, and Bootstrap." },
    { question: "tools", answer: "I am proficient in using Git, Webpack, Postman, and VS Code for development and collaboration." },
    { question: "workStyle", answer: "I prefer a collaborative work environment, enjoy learning new things, and always strive to write clean, efficient code." },
    { question: "services", answer: "I offer services in web development, UI/UX design, and API integration. Feel free to reach out for custom project requests." },
    { question: "testimonials", answer: "Clients have described my work as 'reliable', 'efficient', and 'professional'." },
    { question: "codingPractices", answer: "I follow best practices, focusing on clean code, modularity, and readability. I’m a fan of DRY (Don't Repeat Yourself) principles." },
    { question: "technologies", answer: "I have worked with technologies like Docker, AWS, and Firebase, apart from web development stacks." },
    { question: "volunteerWork", answer: "I volunteer as a coding mentor, helping students understand web development fundamentals." },
    { question: "communityInvolvement", answer: "I actively participate in developer meetups and have contributed to open-source projects on GitHub." },
    { question: "favoriteProjects", answer: "One of my favorite projects was a chatbot that helps students find resources for learning coding. Another one was a blog platform with real-time updates." },
    { question: "workPhilosophy", answer: "I believe in building scalable, user-centric solutions and delivering high-quality work with attention to detail." },
    { question: "learningApproach", answer: "I’m a self-learner and believe in hands-on practice. I regularly update my skills through courses and projects." },
    { question: "futureAspirations", answer: "In the future, I aspire to specialize in AI-driven applications and contribute to innovative projects." },
    { question: "collaborationTools", answer: "I am experienced with tools like Slack, Trello, and Zoom for smooth collaboration in team projects." },
    { question: "strengths", answer: "I am detail-oriented, adaptable, and have strong problem-solving skills." },
    { question: "weaknesses", answer: "I sometimes take on multiple tasks at once, but I am working on better time management." },
    { question: "clientApproach", answer: "I believe in clear communication, understanding client needs thoroughly, and keeping them updated at every step." },
    { question: "inspirations", answer: "I am inspired by tech leaders like Elon Musk and developers in the open-source community who build impactful tools." }
];


  const fuse = new Fuse(sampleResponses, {
    keys: ["question"],
    threshold: 0.4,
  });

  const toggleChatbot = () => {
    if (isOpen) {
      gsap.to(chatWindowRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        onComplete: () => setIsOpen(false),
      });
    } else {
      setIsOpen(true);
      gsap.fromTo(chatWindowRef.current, { scale: 1, opacity: 1 }, { scale: 1, opacity: 1, duration: 0.3 });
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
  
      // Convert user input into words and check each word for matches
      const inputWords = input.toLowerCase().split(" ");
      
      // Find the match based on keywords in the question
      let matchedResponse = null;
      sampleResponses.forEach((response) => {
        inputWords.forEach((word) => {
          if (response.question.toLowerCase().includes(word)) {
            matchedResponse = response.answer;
          }
        });
      });
  
      // If no match, send a default message
      const botResponse = matchedResponse || "I'm here to help! Ask me about my skills, projects, experience, or how to get in touch.";
  
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: botResponse },
      ]);
      setInput("");
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chat-window" ref={chatWindowRef}>
          <div className="chat-header">
            <h4>Chat with Us</h4>
            <FaTimes className="close-icon" onClick={toggleChatbot} />
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      {!isOpen && (
        <button className="chatbot-icon" onClick={toggleChatbot}>
          <FaRobot />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
