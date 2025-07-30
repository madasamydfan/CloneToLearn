import React, { useState } from "react";
import "./FAQList.css"; // Import the CSS

const faqs = [
  {
    question: "What is Netflix?",
    answer: "Netflix is a streaming service that offers a wide variety of TV shows, movies, anime, documentaries, and more.",
  },
  {
    question: "How much does Netflix cost?",
    answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee.",
  },
  {
    question: "Where can I watch?",
    answer: "You can watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web or on devices.",
  },
  {
    question: "How do I cancel?",
    answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online.",
  },
  {
    question: "What can I watch on Netflix?",
    answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more.",
  },
  {
    question: "Is Netflix good for kids?",
    answer: "The Netflix Kids experience is included with your membership to give parents control while kids enjoy family-friendly TV shows and movies.",
  },
];

const FAQList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
       <h2 className="title">Frequently Asked Questions</h2>
     
      {faqs.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div
            className={`faq-question ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <span>{faq.question}</span>
            <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
          </div>
          <div
            className={`faq-answer ${activeIndex === index ? "show" : ""}`}
          >
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQList;
