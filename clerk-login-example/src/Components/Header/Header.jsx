import React from 'react';
import {
    UserButton,
  } from "@clerk/clerk-react";

const Header = () => {
  return (
    <div>
           {/* <!-- header area start --> */}
            <div className="header-area">
                <div className="row align-items-center">
                    {/* <!-- nav and search button --> */}
                    <div className="col-md-6 col-sm-8">
                        
                        <div className="search-box pull-left">
                            <form action="#">
                                <input type="text" name="search" placeholder="Search..." required />
                                <i className="ti-search"></i>
                            </form>
                        </div>
                    </div>
                    {/* <!-- profile info & task notification --> */}
                    <div className="col-md-6 col-sm-4 clearfix">
                        <ul className="notification-area pull-right">
                            <li id="full-view"><i className="ti-fullscreen"></i></li>
                            <li id="full-view-exit"><i className="ti-zoom-out"></i></li>
                            <li className="dropdown">
                                <i className="fa fa-envelope-o dropdown-toggle" data-toggle="dropdown"><span>2</span></i>
                                <div className="dropdown-menu notify-box nt-enveloper-box">
                                    <span className="notify-title">You have 2 new notifications <a href="#">view all</a></span>
                                    <div className="nofity-list">
                                        <a href="#" className="notify-item">
                                            <div className="notify-thumb">
                                                <img src="assets/images/author/author-img1.jpg" alt="image" />
                                            </div>
                                            <div className="notify-text">
                                                <p>Aglae Mayer</p>
                                                <span className="msg">Hey have some bad news, my cattle...</span>
                                                <span>3:15 PM</span>
                                            </div>
                                        </a>
                                        <a href="#" className="notify-item">
                                            <div className="notify-thumb">
                                                <img src="assets/images/author/author-img2.jpg" alt="image" />
                                            </div>
                                            <div className="notify-text">
                                                <p>Phoebe Mayer</p>
                                                <span className="msg">Hey! How is the yield looking?</span>
                                                <span>3:16 PM</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                            <li className="settings-btn">
                            <UserButton />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- header area end --> */}
    </div>
  );
}

export default Header;
