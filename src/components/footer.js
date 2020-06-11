import React from 'react';

function Footer() {
    return (

        <footer className="footer_style_2">
            <div className="footer_top">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 margin_bottom_30">
                            <div className="full width_9" style={{ marginBottom: '25px' }}> <a href="index.html"><img className="img-responsive" src="./assets/images/logo.png" alt="#" width={250} /></a> </div>
                            <div className="full width_9">
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            </div>
                            <div className="full width_9">
                                <p>the vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati..</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 margin_bottom_30">
                            <div className="full">
                                <div className="footer_blog_2 width_9">
                                    <h3>Twitter Feed</h3>
                                    <p><i className="fa fa-twitter" /> Creative_Talent - 26 mins
                Te invitamos a seguir la cta. de WEntrepreneur_ ¡Atrévete! #Emprendimiento #PyMES #Economía #Bussines #Negocios https://t.co/Y7tZMmxGHn
              </p>
                                    <p><i className="fa fa-twitter" /> Creative_Talent - 26 mins
                Te invitamos a seguir la cta. de WEntrepreneur_ ¡Atrévete! #Emprendimiento #PyMES #Economía #Bussines #Negocios https://t.co/Y7tZMmxGHn
              </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-2 margin_bottom_30">
                            <div className="full">
                                <div className="footer_blog_2">
                                    <h3>Social</h3>
                                </div>
                            </div>
                            <div className="full">
                                <ul className="footer-links">
                                    <li><a href="#"><i className="fa fa-facebook" /> 256 Likes</a></li>
                                    <li><a href="#"><i className="fa fa-github" /> 57+ Projects</a></li>
                                    <li><a href="#"><i className="fa fa-twitter" /> 1,258 Followers</a></li>
                                    <li><a href="#"><i className="fa fa-pinterest" /> 2538+ Pins</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 margin_bottom_30">
                            <div className="full">
                                <div className="footer_blog_2 width_9">
                                    <h3>Blog</h3>
                                </div>
                                <div className="blog_post_footer">
                                    <div className="blog_post_img"> <img src="./assets/images/scr1.png" alt="#" width={80} height={80} /> </div>
                                    <div className="blog_post_cont">
                                        <p className="date">July 22, 2015</p>
                                        <p className="post_head">Round and round like a carousel</p>
                                    </div>
                                </div>
                                <div className="blog_post_footer">
                                    <div className="blog_post_img"> <img src="./assets/images/scr2.png" alt="#" width={80} height={80} /> </div>
                                    <div className="blog_post_cont">
                                        <p className="date">July 22, 2015</p>
                                        <p className="post_head">Round and round like a carousel</p>
                                    </div>
                                </div>
                                <div className="blog_post_footer">
                                    <div className="blog_post_img"> <img src="./assets/images/scr3.png" alt="#" width={80} height={80} /> </div>
                                    <div className="blog_post_cont">
                                        <p className="date">July 22, 2015</p>
                                        <p className="post_head">Round and round like a carousel</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer bottom */}
            <div className="footer_bottom">
                <p>Dessigned and developed by <strong>html.design</strong></p>
            </div>
        </footer>

    );
}

export default Footer;