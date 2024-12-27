import React from 'react';
import { Link } from 'react-router-dom';
// import '../../../public/assets/js'

const Navigation = () => {
  return (
    <div>
        {/* <!-- sidebar menu area start --> */}
        <div className="sidebar-menu">
            <div className="sidebar-header">
                <div className="logo">
                    <Link to="/"><img src="assets/images/icon/logo.png" alt="logo" /></Link>
                </div>
            </div>
            <div className="main-menu">
                <div className="menu-inner">
                    <nav>
                        <ul className="metismenu" id="menu">
                            <li className="active">
                                <Link to="/dashboard" aria-expanded="true"><i className="ti-dashboard"></i><span>Overview</span></Link>
                                {/* <ul className="collapse">
                                    <li className="active"><Link to="index.html">ICO dashboard</Link></li>
                                    <li><Link to="index2.html">Ecommerce dashboard</Link></li>
                                    <li><Link to="index3.html">SEO dashboard</Link></li>
                                </ul> */}
                            </li>
                            <li>
                                <Link to="/charts" aria-expanded="true"><i className="ti-pie-chart"></i><span>Charts</span></Link>
                                {/* <ul className="collapse">
                                    <li><Link to="barchart.html">bar chart</Link></li>
                                    <li><Link to="linechart.html">line Chart</Link></li>
                                    <li><Link to="piechart.html">pie chart</Link></li>
                                </ul> */}
                            </li>
                            <li><Link to="/state-selection"><i className="ti-map-alt"></i> <span>Choose Area of Interests</span></Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        {/* <!-- sidebar menu area end --> */}
    </div>
  );
}

export default Navigation;
