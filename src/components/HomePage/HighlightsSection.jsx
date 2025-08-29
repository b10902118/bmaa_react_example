import React from "react";

const HighlightsSection = () => {
  const highlights = [
    "⭐️ 小班精緻教學個別化動作調整與諮詢",
    "⭐️ 清楚的動作原則教導，幫助你運用到日常生活中",
    "⭐️ 不定期舉辦免費線上團練",
    "⭐️ 提供分享討論平台，相互深化學習",
  ];

  return (
    <section className="ob-is-breaking-bad elementor-section elementor-top-section elementor-element elementor-element-2e1be2f elementor-section-full_width elementor-section-height-default elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3e57068 ob-is-e3">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-0ea779f ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-heading ob-harakiri">
              <div className="elementor-widget-container">
                <div className="elementor-heading-title elementor-size-default">
                  課程教學亮點
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-ebaa7e3 ob-harakiri-inherit ob-has-background-overlay elementor-widget elementor-widget-text-editor ob-harakiri">
              <div className="elementor-widget-container">
                <p style={{ "font-size": "20px", "letter-spacing": "2px" }}>
                  ⭐️ 小班精緻教學個別化動作調整與諮詢
                </p>
                <p>&nbsp;</p>
                <p></p>
                <p></p>
                <p style={{ "font-size": "20px", "letter-spacing": "2px" }}>
                  ⭐️ 清楚的動作原則教導，幫助你運用到日常生活中
                </p>
                <p>&nbsp;</p>
                <p></p>
                <p></p>
                <p style={{ "font-size": "20px", "letter-spacing": "2px" }}>
                  ⭐️ 不定期舉辦免費線上團練
                </p>
                <p></p>
                <p></p>
                <p>&nbsp;</p>
                <p></p>
                <p></p>
                <p style={{ "font-size": "20px", "letter-spacing": "2px" }}>
                  ⭐️ 提供分享討論平台，相互深化學習
                </p>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-fa447e6 ob-is-e3">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-b8b8e59 ob-has-background-overlay elementor-widget elementor-widget-image">
              <div className="elementor-widget-container">
                <img
                  decoding="async"
                  src="./首頁_files/%E6%88%AA%E5%9C%96-2022-09-06-%E4%B8%8A%E5%8D%8811.19.27.png?fit=500%2C330&amp;ssl=1"
                  title="指導"
                  alt="指導"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <section className="highlights-section">
      <div className="container">
        <div className="highlights-row">
          <div className="highlights-text-column">
            <h2 className="section-title">課程教學亮點</h2>

            <div className="highlights-list">
              {highlights.map((highlight, index) => (
                <p key={index} className="highlight-item">
                  {highlight}
                </p>
              ))}
            </div>
          </div>

          <div className="highlights-image-column">
            <div className="highlights-image">
              <img
                src="https://i0.wp.com/bmaa.tw/wp-content/uploads/2022/08/%E6%88%AA%E5%9C%96-2022-09-06-%E4%B8%8A%E5%8D%8811.19.27.png?fit=500%2C330&ssl=1"
                alt="指導"
                title="指導"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
