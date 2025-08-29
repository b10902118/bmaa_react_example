"use client";
import React, { useState, useEffect } from "react";

const TestimonialCard = ({ name, category, content }) => (
  <div className="elementor-column elementor-col-20 elementor-top-column elementor-element elementor-element-9a4d6c4 swiper-slide ob-is-e3">
    <div className="elementor-widget-wrap elementor-element-populated">
      <div className="elementor-element elementor-element-5ed99d0 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
        <div className="elementor-widget-container">
          <div className="elementor-heading-title elementor-size-default">
            👍 {name}
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-1e42cd8 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
        <div className="elementor-widget-container">
          <div className="elementor-heading-title elementor-size-medium">
            {category}
          </div>
        </div>
      </div>
      <div className="elementor-element elementor-element-3f145ff ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-text-editor ob-harakiri">
        <div className="elementor-widget-container">
          <p>{content}</p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "何昀",
      category: "＃情緒調適 #面對壓力",
      content:
        "情緒與心理狀態上，身心中軸覺察沒有讓我免於低潮，但使我快速覺察自己的狀況不太好，並以「觀」的態度檢視自己的環境、壓力源，以及身心狀態，如此以來，便較不會耽溺於負面情緒中",
    },
    {
      name: "廖家詮",
      category: "＃傾聽內心",
      content:
        "以往我都將我的思考放在「應該」的枷鎖上，忙著去解決問題，卻忽略掉我內心最真摯的需求，我到底喜歡什麼、我到底追求的是什麼，雖然起步得比別人晚，但我想至少我開始去傾聽自己的聲音了",
    },
    {
      name: "林軒伃",
      category: "＃靈活思考",
      content:
        "思考變得有彈性之後，覺得自己的世界變開闊了，而不是只有一條路或一個方法非常狹隘，也反思到以前的我都畫地自限，很多事不一定是做不到，而是沒有努力想更多的解決方法來達成",
    },
    {
      name: "林蔚然",
      category: "＃情緒調適 #面對壓力",
      content:
        "忙碌與壓力的環境還是存在，但是我明顯可以用比較從容的心態因應，自己的專注度也維持的不錯",
    },
    {
      name: "林佳儀",
      category: "＃好眠",
      content:
        "從小時候到現在我睡覺幾乎不曾在半個小時內睡著，我至少要翻兩個小時以上⋯⋯結果剛練的第一個禮拜，簡直不能說太幸福，我終於體會到秒睡的快樂",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      <section className="ob-is-breaking-bad elementor-section elementor-top-section elementor-element elementor-element-fc847f0 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-background-overlay"></div>
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-164a6f9 ob-is-e3">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-eac8cb0 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
                <div className="elementor-widget-container">
                  <div className="elementor-heading-title elementor-size-default">
                    體驗過的學員，他們分享到
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="ob-is-breaking-bad elementor-section elementor-top-section elementor-element elementor-element-7624468 elementor-section-full_width elementor-section-height-default elementor-section-height-default ob-is-glider">
        <div className="elementor-background-overlay"></div>
        <div
          className="elementor-container elementor-column-gap-default"
          style={{ visibility: "visible" }}
        >
          <div className="swiper-wrapper">
            <TestimonialCard {...testimonials[currentSlide]} />
          </div>

          {/* Navigation Buttons */}
          <div className="swiper-button-next" onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMin"
              viewBox="0 0 27 44"
            >
              <path d="M27 22L5 44l-2.1-2.1L22.8 22 2.9 2.1 5 0l22 22z"></path>
            </svg>
          </div>
          <div className="swiper-button-prev" onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMin"
              viewBox="0 0 27 44"
            >
              <path d="M0 22L22 0l2.1 2.1L4.2 22l19.9 19.9L22 44 0 22z"></path>
            </svg>
          </div>
          <div className="swiper-pagination" />
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;
