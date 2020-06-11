import React from 'react';

function About() {
    return (
        <div>
  <section id="banner_parallax" className="inner_page_banner slide_banner1">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="full">
            <div className="slide_cont">
              <h2>About us</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end header */}
  {/* section */}
  <section className="layout_padding padding_top_0">
    <div className="container">
      <div className="row margin_bottom_30">
        {/* featured cont */}
        <div className="col-md-8 cont_theme_blog">
          <div className="full">
            <h3>Unique app with different features</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br /><br />Ut enim ad minima veniam quis nostrum exercitationem ullam corporis..!</p>
          </div>
        </div>
        {/* end featured cont */}
        {/* featured image */}
        <div className="col-md-4 wow fadeInRight" data-wow-delay="0.5" data-wow-duration="1s">
          <div className="full">
            <div className="center"><img src="./assets/images/ser1.png" alt="#" /></div>
          </div>
        </div>
        {/* end featured image */}
      </div>
      <div className="row margin_bottom_30">
        {/* featured image */}
        <div className="col-md-4 wow fadeInLeft" data-wow-delay="0.5" data-wow-duration="1s">
          <div className="full">
            <div className="center"><img src="./assets/images/ser2.png" alt="#" /></div>
          </div>
        </div>
        {/* end featured image */}
        {/* featured cont */}
        <div className="col-md-8 cont_theme_blog">
          <div className="full">
            <h3>Why it’s best app for your business</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br /><br />Ut enim ad minima veniam quis nostrum exercitationem ullam corporis..!</p>
          </div>
        </div>
        {/* end featured cont */}
      </div>
      <div className="row margin_bottom_30">
        {/* featured cont */}
        <div className="col-md-8 cont_theme_blog">
          <div className="full">
            <h3>Auricle integrated all populatar tools</h3>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.<br /><br />Ut enim ad minima veniam quis nostrum exercitationem ullam corporis..!</p>
          </div>
        </div>
        {/* end featured cont */}
        {/* featured image */}
        <div className="col-md-4 wow fadeInRight" data-wow-delay="0.5" data-wow-duration="1s">
          <div className="full">
            <div className="center"><img src="./assets/images/ser3.png" alt="#" /></div>
          </div>
        </div>
        {/* end featured image */}
      </div>
    </div>
  </section>
  {/* end section */}
  {/* section */}
  <section className="layout_padding gradiant_bg cross_layout">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="full text_align_center white_fonts">
            <div className="heading_main center_head_border heading_style_1">
              <h2>Easy <span>Steps</span></h2>
            </div>
          </div>
        </div>
      </div>
      <div className="row step_section">
        <div className="offset-xl-1 col-xl-10 col-md-12">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="step_blog arrow_right_step">
                <div className="step_inner">
                  <i className="fa fa-diamond" /><br />
                  <p>Go app store</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="step_blog">
                <div className="step_inner">
                  <i className="fa fa-user" /><br />
                  <p>Create an Account</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="step_blog">
                <div className="step_inner">
                  <i className="fa fa-download" /><br />
                  <p>Download &amp; Install</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
              <div className="step_blog">
                <div className="step_inner">
                  <i className="fa fa-thumbs-up" /><br />
                  <p>Enjoy &amp; Rate us!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end section */}
</div>

    );
}

export default About;