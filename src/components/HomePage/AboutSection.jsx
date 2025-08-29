import React from "react";

const FeatureCard = ({ icon, title, alt }) => (
  <div className="feature-card">
    <div className="feature-icon">
      <img src={icon} alt={alt} width="150" height="150" />
    </div>
    <h3 className="feature-title">{title}</h3>
  </div>
);

const AboutSection = () => {
  const features = [
    {
      icon: "/首頁_files/healthy250.png",
      title: "身體舒暢不痠痛",
      alt: "健康圖示",
    },
    {
      icon: "/首頁_files/sleep250.png",
      title: "好好睡一覺",
      alt: "睡眠圖示",
    },
    {
      icon: "/首頁_files/learning250.png",
      title: "能專心、記憶好",
      alt: "學習圖示",
    },
    {
      icon: "/首頁_files/peace-of-mind250.png",
      title: "情緒穩定不焦躁",
      alt: "平靜圖示",
    },
  ];
  return (
    <section className="ob-is-breaking-bad elementor-section elementor-top-section elementor-element elementor-element-4e2e54e elementor-section-full_width elementor-section-height-default elementor-section-height-default">
      <div className="elementor-background-overlay"></div>
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-36cdb96 ob-is-e3">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-63bbf63 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
              <div className="elementor-widget-container">
                <div className="elementor-heading-title elementor-size-default">
                  結合東方古老智慧與科學實證
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-51de500 ob-has-background-overlay elementor-widget elementor-widget-text-editor">
              <div className="elementor-widget-container">
                <p>
                  <span style={{ "font-weight": 400 }}>
                    身心中軸覺察練習，以東亞禮樂傳統的身心整合觀為基礎，結合心理學與正念相關知識，讓身體中正放鬆、思緒淨空
                  </span>
                </p>
                <p>&nbsp;</p>
                <p>
                  藉由不同的身體動態練習，覺察並鬆動身心糾結，帶領你探索與瞭解身心狀態，傾聽身體與心靈的需求，重新擁抱自己
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8810217 ob-is-e3">
          <div className="elementor-widget-wrap elementor-element-populated">
            <section className="ob-is-breaking-bad ob-bb-inner elementor-section elementor-inner-section elementor-element elementor-element-cac25c2 elementor-section-full_width elementor-section-height-default elementor-section-height-default">
              <div className="elementor-background-video-container">
                <video
                  className="elementor-background-video-hosted"
                  autoPlay
                  muted
                  playsInline
                  loop
                  src="./首頁_files/20230130動態影片示範-1.mp4"
                  style={{ width: "547.556px", height: "308px" }}
                ></video>
              </div>
              <div className="elementor-container elementor-column-gap-default">
                <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-5025ca2 ob-is-e3">
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div className="elementor-element elementor-element-d1c8ec9 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-text-editor ob-harakiri">
                      <div className="elementor-widget-container">
                        <p>ji3</p>
                        <p>ji3</p>
                        <p>ji3</p>
                        <p>ji3</p>
                        <p>ji3</p>
                        <p>ji3</p>
                        <p>jis</p>
                        <p>&nbsp;</p>
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
  );

  return (
    <>
      {/* Menu Anchor */}
      <section className="menu-anchor-section">
        <div className="container">
          <div id="1" className="menu-anchor"></div>
        </div>
      </section>

      {/* About Section with Video */}
      <section className="about-section">
        <div className="container">
          <div className="about-row">
            <div className="about-text-column">
              <h2 className="section-title">結合東方古老智慧與科學實證</h2>
              <div className="about-text">
                <p>
                  身心中軸覺察練習，以東亞禮樂傳統的身心整合觀為基礎，結合心理學與正念相關知識，讓身體中正放鬆、思緒淨空
                </p>
                <p>
                  藉由不同的身體動態練習，覺察並鬆動身心糾結，帶領你探索與瞭解身心狀態，傾聽身體與心靈的需求，重新擁抱自己
                </p>
              </div>
            </div>

            <div className="about-video-column">
              <div className="video-container">
                <video
                  className="practice-video"
                  autoPlay
                  muted
                  playsInline
                  loop
                  src="https://bmaa.tw/wp-content/uploads/2023/01/20230130動態影片示範-1.mp4"
                >
                  您的瀏覽器不支援影片播放。
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title text-center">
            忙碌的生活中，或許你也想要
          </h2>

          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                alt={feature.alt}
              />
            ))}
          </div>

          <div className="features-highlight">
            <div className="highlight-content">
              <p className="highlight-text-large">
                <strong>
                  有時候，不是「你」的問題，而是
                  <span className="text-accent">「你的身體」沒了能動性</span>
                  ，生活也失去彈性，讓你逐漸遠離沈穩平靜的狀態。
                </strong>
              </p>

              <p className="highlight-text-large">
                <strong>
                  經心理學研究證實身心中軸覺察練習能
                  <span className="text-accent">提升睡眠品質</span>， 讓你更
                  <span className="text-accent">專注</span>，
                  <span className="text-accent">提升腦力</span>；
                  增進正念覺察，幫助
                  <span className="text-accent">調節情緒</span>與
                  <span className="text-accent">因應壓力</span>， 減輕憂鬱焦慮。
                </strong>
              </p>
            </div>
          </div>

          <div className="features-cta">
            <a href="/evidence" className="btn btn-secondary">
              <span className="btn-icon">
                <i className="fas fa-angle-right" aria-hidden="true"></i>
              </span>
              <span className="btn-text">了解更多研究結果</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
