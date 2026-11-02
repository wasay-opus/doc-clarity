import React, { useState } from 'react';

const faqCol1 = [
  {
    id: 1,
    question: 'How do I download the app?',
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    id: 2,
    question: 'Is the app free to use?',
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    id: 3,
    question: 'How secure is my data?',
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  }
];

const faqCol2 = [
  {
    id: 4,
    question: 'Can I use the app on multiple devices?',
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    id: 5,
    question: 'How do I contact customer support?',
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  },
  {
    id: 6,
    question: 'Does the app support multiple languages?',
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since"
  }
];

const FaqAccordion = () => {
  const [activeItems, setActiveItems] = useState([1, 4]); // 1 and 4 active by default like original

  const toggleItem = (id) => {
    if (activeItems.includes(id)) {
      setActiveItems(activeItems.filter((i) => i !== id));
    } else {
      setActiveItems([...activeItems, id]);
    }
  };

  const renderColumn = (items) => (
    <div className="col-12 col-lg-6">
      {items.map((item) => {
        const isOpen = activeItems.includes(item.id);
        return (
          <div key={item.id} className="faq-panel">
            <div
              className="faq-header"
              onClick={() => toggleItem(item.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') toggleItem(item.id);
              }}
            >
              <h4>{item.question}</h4>
              <i
                className={`fa-solid fa-chevron-down faq-icon ${
                  isOpen ? 'open' : ''
                }`}
              ></i>
            </div>
            {isOpen && (
              <div className="faq-body">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );

  return (
    <section className="sectionThree">
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h2>
              Your Questions Answered,<br />
              <strong>Your Experience Made Easier</strong>
            </h2>
            <p className="section-subtitle">
              Find quick answers to common questions about our technology apps, helping you get
              started, troubleshoot issues, and make the most of every feature.
            </p>
          </div>
        </div>

        <div className="row mt-4">
          {renderColumn(faqCol1)}
          {renderColumn(faqCol2)}
        </div>
      </div>
    </section>
  );
};

export default FaqAccordion;

