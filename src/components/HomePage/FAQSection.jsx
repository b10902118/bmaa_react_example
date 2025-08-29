"use client";
import React, { useState } from "react";

const AccordionItem = ({ id, title, content, isOpen, onToggle }) => (
  <div className="accordion-item">
    <div
      className={`accordion-title ${isOpen ? "active" : ""}`}
      onClick={onToggle}
      role="button"
      aria-expanded={isOpen}
      tabIndex="0"
    >
      <span className="accordion-icon">
        <span className="accordion-icon-closed">
          <i className="fas fa-plus"></i>
        </span>
        <span className="accordion-icon-opened">
          <i className="fas fa-minus"></i>
        </span>
      </span>
      <span className="accordion-title-text">{title}</span>
    </div>

    <div
      className={`accordion-content ${isOpen ? "open" : ""}`}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  </div>
);

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(3); // Default to 4th item (index 3) being open

  const faqItems = [
    {
      id: 0,
      title: "在身心中軸覺察課程中會學到什麼？為什麼能讓我有所改變？",
      content: `
        <p>
          <span style="font-size: 16px">身心中軸覺察是帶領人找回身心平和安頓的根本方法，而這堂課會帶領你學會這個方法。</span>
          <span style="font-size: 16px">
            <br />近年來心理學研究越來越重視身心之間的相互影響。這套練習同時從身心下手，從放鬆身體、放空腦袋開始，逐漸感受身體的中軸線，體會中正放鬆的狀態，並讓我們處在一種覺察有彈性的狀態。<br />心靈保持覺察，身體能夠隨心調整狀態，這正是人的理想狀態。
          </span>
        </p>
      `,
    },
    {
      id: 1,
      title:
        "為什麼身心中軸覺察強調放鬆與放空，卻可以提升我學業、工作或甚至是其他生活面向的改變?",
      content: `
        <p>
          <span style="font-size: 16px">
            想像一下，若自己的身心很緊繃，隨時處在壓力或各種外界要求之下，久了身心會不會疲乏、失去彈性呢？就好像一條橡皮筋拉久了就會失去彈性，甚至斷掉。<br />
            <span style="font-size: 16px">
              有感於現代人經常處在上述的狀態，能夠適時的放鬆、放手就顯得相當重要。身心中軸覺察練習強調放鬆身體、放空意念，讓你從緊繃中之回到身心平衡、富有彈性的狀態，進而更能發揮潛能，在生活各面向有所提升！
            </span>
          </span>
        </p>
      `,
    },
    {
      id: 2,
      title: "在課程中，是否必須在眾人面前談論自己？",
      content: `
        <p>
          <span style="font-size: 16px">
            在身心中軸課程中，我們學習專注於自我，感受自己，隨心而動，我們不會強制每個人都必須開口分享，聆聽也是一種很棒的選擇。<br />
            當然，我們非常歡迎學員分享練習感受和困難，透過分享能夠整理和思考自己的練習狀況，幫助老師了解你的狀況，協助你的調整。
          </span>
        </p>
      `,
    },
    {
      id: 3,
      title: "參加身心中軸覺察課程有什麼好處？",
      content: `
        <p>
          <span style="font-size: 16px">✓ 提升睡眠品質，解決長期睡眠困擾。<br /></span>
          <span style="font-size: 16px">✓ 思考變得靈活有彈性，跳脫思考框架，變得更有創造力！<br /></span>
          <span style="font-size: 16px">✓ 面對生活的壓力與情緒，更能夠平和以對<br /></span>
          <span style="font-size: 16px">✓ 降低焦慮憂鬱的情緒，讓你變得更平靜。<br /></span>
          <span style="font-size: 16px">✓ 溝通能力、包容力增加提升，更能夠同理周遭人的感受。<br /></span>
          <span style="font-size: 16px">✓ 幸福感提升，更真正的活在當下。<br /></span>
          <span style="font-size: 16px">✓ 更了解自己，也更懂得照顧自己與他人。<br /></span>
        </p>
      `,
    },
  ];

  const handleToggle = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="ob-is-breaking-bad elementor-section elementor-top-section elementor-element elementor-element-eb7d50a elementor-section-full_width elementor-section-height-default elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e1c1522 ob-is-e3">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-ccecbf8 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
              <div className="elementor-widget-container">
                <h1 className="elementor-heading-title elementor-size-default">
                  常見Q&amp;A
                </h1>
              </div>
            </div>
            <div className="elementor-element elementor-element-5dc392e ob-has-background-overlay elementor-widget elementor-widget-accordion">
              <div className="elementor-widget-container">
                <div className="elementor-accordion">
                  <div className="elementor-accordion-item">
                    <div
                      id="elementor-tab-title-9831"
                      className="elementor-tab-title"
                      role="button"
                      aria-controls="elementor-tab-content-9831"
                      aria-expanded="false"
                      tabIndex={-1}
                      aria-selected="false"
                    >
                      <span
                        className="elementor-accordion-icon elementor-accordion-icon-left"
                        aria-hidden="true"
                      >
                        <span className="elementor-accordion-icon-closed">
                          <i className="fas fa-plus" />
                        </span>
                        <span className="elementor-accordion-icon-opened">
                          <i className="fas fa-minus" />
                        </span>
                      </span>
                      <a className="elementor-accordion-title" tabIndex={0}>
                        在身心中軸覺察課程中會學到什麼？為什麼能讓我有所改變？
                      </a>
                    </div>
                    <div
                      id="elementor-tab-content-9831"
                      className="elementor-tab-content elementor-clearfix"
                      role="region"
                      aria-labelledby="elementor-tab-title-9831"
                      style={{ display: "none" }}
                      hidden="hidden"
                    >
                      <p>
                        <span style={{ fontSize: 16 }}>
                          身心中軸覺察是帶領人找回身心平和安頓的根本方法，而這堂課會帶領你學會這個方法。
                        </span>
                        &nbsp;
                        <span style={{ fontSize: 16 }}>
                          <br />
                          近年來心理學研究越來越重視身心之間的相互影響。這套練習同時從身心下手，從放鬆身體、放空腦袋開始，逐漸感受身體的中軸線，體會中正放鬆的狀態，並讓我們處在一種覺察有彈性的狀態。
                          <br />
                          心靈保持覺察，身體能夠隨心調整狀態，這正是人的理想狀態。
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="elementor-accordion-item">
                    <div
                      id="elementor-tab-title-9832"
                      className="elementor-tab-title"
                      role="button"
                      aria-controls="elementor-tab-content-9832"
                      aria-expanded="false"
                      tabIndex={-1}
                      aria-selected="false"
                    >
                      <span
                        className="elementor-accordion-icon elementor-accordion-icon-left"
                        aria-hidden="true"
                      >
                        <span className="elementor-accordion-icon-closed">
                          <i className="fas fa-plus" />
                        </span>
                        <span className="elementor-accordion-icon-opened">
                          <i className="fas fa-minus" />
                        </span>
                      </span>
                      <a className="elementor-accordion-title" tabIndex={0}>
                        為什麼身心中軸覺察強調放鬆與放空，卻可以提升我學業、工作或甚至是其他生活面向的改變?
                      </a>
                    </div>
                    <div
                      id="elementor-tab-content-9832"
                      className="elementor-tab-content elementor-clearfix"
                      role="region"
                      aria-labelledby="elementor-tab-title-9832"
                      style={{ display: "none" }}
                      hidden="hidden"
                    >
                      <p>
                        <span style={{ fontSize: 16 }}>
                          想像一下，若自己的身心很緊繃，隨時處在壓力或各種外界要求之下，久了身心會不會疲乏、失去彈性呢？就好像一條橡皮筋拉久了就會失去彈性，甚至斷掉。
                          <br />
                          <span style={{ fontSize: 16 }}>
                            有感於現代人經常處在上述的狀態，能夠適時的放鬆、放手就顯得相當重要。身心中軸覺察練習強調放鬆身體、放空意念，讓你從緊繃中之回到身心平衡、富有彈性的狀態，進而更能發揮潛能，在生活各面向有所提升！
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="elementor-accordion-item">
                    <div
                      id="elementor-tab-title-9833"
                      className="elementor-tab-title"
                      role="button"
                      aria-controls="elementor-tab-content-9833"
                      aria-expanded="false"
                      tabIndex={-1}
                      aria-selected="false"
                    >
                      <span
                        className="elementor-accordion-icon elementor-accordion-icon-left"
                        aria-hidden="true"
                      >
                        <span className="elementor-accordion-icon-closed">
                          <i className="fas fa-plus" />
                        </span>
                        <span className="elementor-accordion-icon-opened">
                          <i className="fas fa-minus" />
                        </span>
                      </span>
                      <a className="elementor-accordion-title" tabIndex={0}>
                        在課程中，是否必須在眾人面前談論自己？
                      </a>
                    </div>
                    <div
                      id="elementor-tab-content-9833"
                      className="elementor-tab-content elementor-clearfix"
                      role="region"
                      aria-labelledby="elementor-tab-title-9833"
                      style={{ display: "none" }}
                      hidden="hidden"
                    >
                      <p>
                        <span style={{ fontSize: 16 }}>
                          在身心中軸課程中，我們學習專注於自我，感受自己，隨心而動，我們不會強制每個人都必須開口分享，聆聽也是一種很棒的選擇。
                          <br />
                          當然，我們非常歡迎學員分享練習感受和困難，透過分享能夠整理和思考自己的練習狀況，幫助老師了解你的狀況，協助你的調整。
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="elementor-accordion-item">
                    <div
                      id="elementor-tab-title-9834"
                      className="elementor-tab-title elementor-active"
                      role="button"
                      aria-controls="elementor-tab-content-9834"
                      aria-expanded="true"
                      tabIndex={0}
                      aria-selected="true"
                    >
                      <span
                        className="elementor-accordion-icon elementor-accordion-icon-left"
                        aria-hidden="true"
                      >
                        <span className="elementor-accordion-icon-closed">
                          <i className="fas fa-plus" />
                        </span>
                        <span className="elementor-accordion-icon-opened">
                          <i className="fas fa-minus" />
                        </span>
                      </span>
                      <a className="elementor-accordion-title" tabIndex={0}>
                        參加身心中軸覺察課程有什麼好處？
                      </a>
                    </div>
                    <div
                      id="elementor-tab-content-9834"
                      className="elementor-tab-content elementor-clearfix elementor-active"
                      role="region"
                      aria-labelledby="elementor-tab-title-9834"
                      style={{ display: "block" }}
                    >
                      <p>
                        <span style={{ fontSize: 16 }}>
                          ✓ 提升睡眠品質，解決長期睡眠困擾。
                          <br />
                        </span>
                        <span style={{ fontSize: 16 }}>
                          ✓ 思考變得靈活有彈性，跳脫思考框架，變得更有創造力！
                          <br />
                          <span style={{ fontSize: 16 }}>
                            ✓ 面對生活的壓力與情緒，更能夠平和以對
                            <br />
                          </span>
                          <span style={{ fontSize: 16 }}>
                            ✓ 降低焦慮憂鬱的情緒，讓你變得更平靜。
                            <br />
                          </span>
                          <span style={{ fontSize: 16 }}>
                            ✓ 溝通能力、包容力增加提升，更能夠同理周遭人的感受。
                            <br />
                          </span>
                          <span style={{ fontSize: 16 }}>
                            ✓ 幸福感提升，更真正的活在當下。
                            <br />
                          </span>
                          <span style={{ fontSize: 16 }}>
                            ✓ 更了解自己，也更懂得照顧自己與他人。
                            <br />
                          </span>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <section className="faq-section">
      <div className="container">
        <h1 className="section-title">常見Q&A</h1>

        <div className="accordion">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              isOpen={openItem === item.id}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
