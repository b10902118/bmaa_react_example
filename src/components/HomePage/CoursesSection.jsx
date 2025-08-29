import React from "react";

const CourseCard = ({ icon, title, subtitle, features }) => (
  <div className="course-card">
    <div className="course-icon">
      <img src={icon} alt={title} />
    </div>
    <h3 className="course-title">{title}</h3>
    <h4 className="course-subtitle">{subtitle}</h4>
    <ul className="course-features">
      {features.map((feature, index) => (
        <li key={index} className="course-feature">
          <span className="feature-icon">
            <i className="fas fa-chevron-right" aria-hidden="true"></i>
          </span>
          <span className="feature-text">{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const CoursesSection = () => {
  const courses = [
    {
      icon: "https://i0.wp.com/bmaa.tw/wp-content/uploads/2023/02/water.png?fit=140%2C140&ssl=1",
      title: "基礎一",
      subtitle: "鬆動身與心",
      features: [
        "好眠練習",
        "初探靜心覺察技巧",
        "超實用自我按摩方法",
        "手腳靈活輕鬆自在",
      ],
    },
    {
      icon: "https://i0.wp.com/bmaa.tw/wp-content/uploads/2023/04/undulating-arrow-1.png?fit=140%2C140&ssl=1",
      title: "基礎二",
      subtitle: "初探身心中軸狀態",
      features: [
        "全身鬆動，找回身心的舒暢靈活",
        "初探「身體中正、內心平和」狀態",
        "借地之力，輕鬆省力",
      ],
    },
    {
      icon: "https://i0.wp.com/bmaa.tw/wp-content/uploads/2023/04/mountain-road.png?fit=140%2C140&ssl=1",
      title: "基礎三",
      subtitle: "深化與應用",
      features: [
        "獨到的呼吸運化之法",
        "深化內觀、鬆動身心糾結",
        "提升基礎練習效果",
      ],
    },
    {
      icon: "https://i0.wp.com/bmaa.tw/wp-content/uploads/2023/04/plant.png?fit=140%2C140&ssl=1",
      title: "進階班",
      subtitle: "整的練習",
      features: [
        "提升身心全面性的覺察",
        "身心一體與連貫性的練習",
        "共鳴：聲音與鬆動",
      ],
    },
  ];

  return (
    <>
      <section className="ob-is-breaking-bad elementor-section elementor-top-section elementor-element elementor-element-dba31c3 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2c21149 ob-is-e3">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-52e51aa ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
                <div className="elementor-widget-container">
                  <h1 className="elementor-heading-title elementor-size-default">
                    核心課程
                  </h1>
                </div>
              </div>
              <section className="ob-is-breaking-bad ob-bb-inner elementor-section elementor-inner-section elementor-element elementor-element-caa5e3d elementor-section-boxed elementor-section-height-default elementor-section-height-default">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-21707f2 ob-is-e3">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-72352d2 ob-has-background-overlay elementor-widget elementor-widget-image">
                        <div className="elementor-widget-container">
                          <img
                            decoding="async"
                            src="./首頁_files/water.png"
                            title="water"
                            alt="water"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-e775676 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-large">
                            基礎一
                          </h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-a4bbf66 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
                        <div className="elementor-widget-container">
                          <h6 className="elementor-heading-title elementor-size-large">
                            鬆動身與心
                          </h6>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-cbd4151 elementor-list-item-link-inline elementor-align-left e-transform elementor-icon-list--layout-traditional ob-has-background-overlay elementor-widget elementor-widget-icon-list">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                好眠練習
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                初探靜心覺察技巧
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                超實用自我按摩方法
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                手腳靈活輕鬆自在
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-da86d58 ob-is-e3">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-e3682b8 ob-has-background-overlay elementor-widget elementor-widget-image">
                        <div className="elementor-widget-container">
                          <img
                            decoding="async"
                            src="./首頁_files/undulating-arrow-1.png"
                            title="undulating-arrow"
                            alt="undulating-arrow"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-9877274 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-large">
                            基礎二
                          </h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-d690615 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
                        <div className="elementor-widget-container">
                          <h6 className="elementor-heading-title elementor-size-large">
                            <span
                              className="elementor-heading-title elementor-size-large elementor-inline-editing pen"
                              style={{ lineHeight: "1.1em", clear: "both" }}
                            >
                              初探身心中軸狀態
                            </span>
                          </h6>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-ed1a2f4 elementor-list-item-link-inline elementor-align-left elementor-icon-list--layout-traditional ob-has-background-overlay elementor-widget elementor-widget-icon-list">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                全身鬆動，找回身心的舒暢靈活
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                初探「身體中正、內心平和」狀態
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                借地之力，輕鬆省力
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-6273cfe ob-is-e3">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-5682a52 ob-has-background-overlay elementor-widget elementor-widget-image">
                        <div className="elementor-widget-container">
                          <img
                            decoding="async"
                            src="./首頁_files/mountain-road.png"
                            title="mountain-road"
                            alt="mountain-road"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-6cd564b ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-large">
                            基礎三
                          </h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-1595420 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
                        <div className="elementor-widget-container">
                          <h6 className="elementor-heading-title elementor-size-large">
                            深化與應用
                          </h6>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-061a961 elementor-list-item-link-inline elementor-align-left elementor-icon-list--layout-traditional ob-has-background-overlay elementor-widget elementor-widget-icon-list">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                獨到的呼吸運化之法
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                深化內觀、鬆動身心糾結
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                提升基礎練習效果
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-352ae3e ob-is-e3">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-f7b3c4c ob-has-background-overlay elementor-widget elementor-widget-image">
                        <div className="elementor-widget-container">
                          <img
                            decoding="async"
                            src="./首頁_files/plant.png"
                            title="plant"
                            alt="plant"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-43f71b0 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-large">
                            進階班
                          </h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-c1aa4ce ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
                        <div className="elementor-widget-container">
                          <h6 className="elementor-heading-title elementor-size-large">
                            整的練習
                          </h6>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-e8cab6d elementor-list-item-link-inline elementor-align-left elementor-icon-list--layout-traditional ob-has-background-overlay elementor-widget elementor-widget-icon-list">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                提升身心全面性的覺察
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                身心一體與連貫性的練習
                              </span>
                            </li>
                            <li className="elementor-icon-list-item">
                              <span className="elementor-icon-list-icon">
                                <i
                                  aria-hidden="true"
                                  className="fas fa-chevron-right"
                                />
                              </span>
                              <span className="elementor-icon-list-text">
                                共鳴：聲音與鬆動
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="ob-is-breaking-bad elementor-section elementor-top-section elementor-element elementor-element-56e3411 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-408776b ob-is-e3">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-a0aeed6 elementor-align-center ob-has-background-overlay elementor-widget elementor-widget-button">
                <div className="elementor-widget-container">
                  <div className="elementor-button-wrapper">
                    <a
                      className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
                      href="https://bmaa.tw/class-information"
                    >
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          點我看更多
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <section className="courses-section">
      <div className="container">
        <h1 className="section-title text-center">核心課程</h1>

        <div className="courses-grid">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <div className="courses-cta">
          <a href="/class-information" className="btn btn-primary">
            <span className="btn-text">點我看更多</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
