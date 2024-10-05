// import React from 'react';

// const Home = () => {
//   return (
//     <div className="main-content">
//         <div className="main-content-inner">
//             <div className="sales-report-area mt-5 mb-5">
//                 <div className="row">
//                     <div className="col-md-4">
//                         <div className="single-report mb-xs-30">
//                             <div className="s-report-inner pr--20 pt--30 mb-3">
//                                 <div className="icon"><i className="fa fa-btc"></i></div>
//                                 <div className="s-report-title d-flex justify-content-between">
//                                     <h4 className="header-title mb-0">Bitcoin</h4>
//                                     <p>24 H</p>
//                                 </div>
//                                 <div className="d-flex justify-content-between pb-2">
//                                     <h2>$ 4567809,987</h2>
//                                     <span>- 45.87</span>
//                                 </div>
//                             </div>
//                             <canvas id="coin_sales1" height="100"></canvas>
//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                         <div className="single-report mb-xs-30">
//                             <div className="s-report-inner pr--20 pt--30 mb-3">
//                                 <div className="icon"><i className="fa fa-btc"></i></div>
//                                 <div className="s-report-title d-flex justify-content-between">
//                                     <h4 className="header-title mb-0">Bitcoin Dash</h4>
//                                     <p>24 H</p>
//                                 </div>
//                                 <div className="d-flex justify-content-between pb-2">
//                                     <h2>$ 4567809,987</h2>
//                                     <span>- 45.87</span>
//                                 </div>
//                             </div>
//                             <canvas id="coin_sales2" height="100"></canvas>
//                         </div>
//                     </div>
//                     <div className="col-md-4">
//                         <div className="single-report">
//                             <div className="s-report-inner pr--20 pt--30 mb-3">
//                                 <div className="icon"><i className="fa fa-eur"></i></div>
//                                 <div className="s-report-title d-flex justify-content-between">
//                                     <h4 className="header-title mb-0">Euthorium</h4>
//                                     <p>24 H</p>
//                                 </div>
//                                 <div className="d-flex justify-content-between pb-2">
//                                     <h2>$ 4567809,987</h2>
//                                     <span>- 45.87</span>
//                                 </div>
//                             </div>
//                             <canvas id="coin_sales3" height="100"></canvas>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-xl-9 col-lg-8">
//                     <div className="card">
//                         <div className="card-body">
//                             <div className="d-flex justify-content-between align-items-center">
//                                 <h4 className="header-title mb-0">Overview</h4>
//                                 <select className="custome-select border-0 pr-3">
//                                     <option selected>Last 24 Hours</option>
//                                     <option value="0">01 July 2018</option>
//                                 </select>
//                             </div>
//                             <div id="verview-shart"></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-xl-3 col-lg-4 coin-distribution">
//                     <div className="card h-full">
//                         <div className="card-body">
//                             <h4 className="header-title mb-0">Coin Distribution</h4>
//                             <div id="coin_distribution"></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row mt-5 mb-5">
//                 <div className="col-12">
//                     <div className="card">
//                         <div className="card-body">
//                             <div className="d-sm-flex justify-content-between align-items-center">
//                                 <h4 className="header-title mb-0">Market Value And Trends</h4>
//                                 <select className="custome-select border-0 pr-3">
//                                     <option selected>Last 24 Hours</option>
//                                     <option value="0">01 July 2018</option>
//                                 </select>
//                             </div>
//                             <div className="market-status-table mt-4">
//                                 <div className="table-responsive">
//                                     <table className="dbkit-table">
//                                         <tr className="heading-td">
//                                             <td className="mv-icon">Logo</td>
//                                             <td className="coin-name">Coin Name</td>
//                                             <td className="buy">Buy</td>
//                                             <td className="sell">Sells</td>
//                                             <td className="trends">Trends</td>
//                                             <td className="attachments">Attachments</td>
//                                             <td className="stats-chart">Stats</td>
//                                         </tr>
//                                         <tr>
//                                             <td className="mv-icon"><img src="assets/images/icon/market-value/icon1.png" alt="icon" />
//                                             </td>
//                                             <td className="coin-name">Dashcoin</td>
//                                             <td className="buy">30% <img src="assets/images/icon/market-value/triangle-down.png" alt="icon" /></td>
//                                             <td className="sell">20% <img src="assets/images/icon/market-value/triangle-up.png" alt="icon" /></td>
//                                             <td className="trends"><img src="assets/images/icon/market-value/trends-up-icon.png" alt="icon" /></td>
//                                             <td className="attachments">$ 56746,857</td>
//                                             <td className="stats-chart">
//                                                 <canvas id="mvaluechart"></canvas>
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td className="mv-icon">
//                                                 <div className="mv-icon"><img src="assets/images/icon/market-value/icon2.png" alt="icon" /></div>
//                                             </td>
//                                             <td className="coin-name">LiteCoin</td>
//                                             <td className="buy">30% <img src="assets/images/icon/market-value/triangle-down.png" alt="icon" /></td>
//                                             <td className="sell">20% <img src="assets/images/icon/market-value/triangle-up.png" alt="icon" /></td>
//                                             <td className="trends"><img src="assets/images/icon/market-value/trends-down-icon.png" alt="icon" /></td>
//                                             <td className="attachments">$ 56746,857</td>
//                                             <td className="stats-chart">
//                                                 <canvas id="mvaluechart2"></canvas>
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td className="mv-icon">
//                                                 <div className="mv-icon"><img src="assets/images/icon/market-value/icon3.png" alt="icon" /></div>
//                                             </td>
//                                             <td className="coin-name">Euthorium</td>
//                                             <td className="buy">30% <img src="assets/images/icon/market-value/triangle-down.png" alt="icon" /></td>
//                                             <td className="sell">20% <img src="assets/images/icon/market-value/triangle-up.png" alt="icon" /></td>
//                                             <td className="trends"><img src="assets/images/icon/market-value/trends-up-icon.png" alt="icon" /></td>
//                                             <td className="attachments">$ 56746,857</td>
//                                             <td className="stats-chart">
//                                                 <canvas id="mvaluechart3"></canvas>
//                                             </td>
//                                         </tr>
//                                         <tr>
//                                             <td className="mv-icon">
//                                                 <div className="mv-icon"><img src="assets/images/icon/market-value/icon4.png" alt="icon" /></div>
//                                             </td>
//                                             <td className="coin-name">Bitcoindash</td>
//                                             <td className="buy">30% <img src="assets/images/icon/market-value/triangle-down.png" alt="icon" /></td>
//                                             <td className="sell">20% <img src="assets/images/icon/market-value/triangle-up.png" alt="icon" /></td>
//                                             <td className="trends"><img src="assets/images/icon/market-value/trends-up-icon.png" alt="icon" /></td>
//                                             <td className="attachments">$ 56746,857</td>
//                                             <td className="stats-chart">
//                                                 <canvas id="mvaluechart4"></canvas>
//                                             </td>
//                                         </tr>
//                                     </table>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="col-lg-4">
//                     <div className="card">
//                         <div className="card-body">
//                             <h4 className="header-title">Live Crypto Price</h4>
//                             <div className="cripto-live mt-5">
//                                 <ul>
//                                     <li>
//                                         <div className="icon b">b</div> Bitcoin<span><i className="fa fa-long-arrow-up"></i>$876909.00</span></li>
//                                     <li>
//                                         <div className="icon l">l</div> Litecoin<span><i className="fa fa-long-arrow-up"></i>$29780.00</span></li>
//                                     <li>
//                                         <div className="icon d">d</div> Dashcoin<span><i className="fa fa-long-arrow-up"></i>$13276.00</span></li>
//                                     <li>
//                                         <div className="icon b">b</div> Bitcoindash<span><i className="fa fa-long-arrow-down"></i>$5684.890</span></li>
//                                     <li>
//                                         <div className="icon e">e</div> Euthorium<span><i className="fa fa-long-arrow-down"></i>$3890.98</span></li>
//                                     <li>
//                                         <div className="icon t">b</div> Tcoin<span><i className="fa fa-long-arrow-up"></i>$750.789</span></li>
//                                     <li>
//                                         <div className="icon b">b</div> Bitcoin<span><i className="fa fa-long-arrow-up"></i>$325.037</span></li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-8 mt-sm-30 mt-xs-30">
//                     <div className="card">
//                         <div className="card-body">
//                             <div className="d-sm-flex justify-content-between align-items-center">
//                                 <h4 className="header-title">Trading History</h4>
//                                 <div className="trd-history-tabs">
//                                     <ul className="nav" role="tablist">
//                                         <li>
//                                             <a className="active" data-toggle="tab" href="#buy_order" role="tab">Buy Order</a>
//                                         </li>
//                                         <li>
//                                             <a data-toggle="tab" href="#sell_order" role="tab">Sell Order</a>
//                                         </li>
//                                     </ul>
//                                 </div>
//                                 <select className="custome-select border-0 pr-3">
//                                     <option selected>Last 24 Hours</option>
//                                     <option value="0">01 July 2018</option>
//                                 </select>
//                             </div>
//                             <div className="trad-history mt-4">
//                                 <div className="tab-content" id="myTabContent">
//                                     <div className="tab-pane fade show active" id="buy_order" role="tabpanel">
//                                         <div className="table-responsive">
//                                             <table className="dbkit-table">
//                                                 <tr className="heading-td">
//                                                     <td>Trading ID</td>
//                                                     <td>Time</td>
//                                                     <td>Status</td>
//                                                     <td>Amount</td>
//                                                     <td>Last Trade</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>78211</td>
//                                                     <td>4.00 AM</td>
//                                                     <td>Pending</td>
//                                                     <td>$758.90</td>
//                                                     <td>$05245.090</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>782782</td>
//                                                     <td>4.00 AM</td>
//                                                     <td>Pending</td>
//                                                     <td>$77878.90</td>
//                                                     <td>$7778.090</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>89675978</td>
//                                                     <td>4.00 AM</td>
//                                                     <td>Pending</td>
//                                                     <td>$0768.90</td>
//                                                     <td>$0945.090</td>
//                                                 </tr>
//                                             </table>
//                                         </div>
//                                     </div>
//                                     <div className="tab-pane fade" id="sell_order" role="tabpanel">
//                                         <div className="table-responsive">
//                                             <table className="dbkit-table">
//                                                 <tr className="heading-td">
//                                                     <td>Trading ID</td>
//                                                     <td>Time</td>
//                                                     <td>Status</td>
//                                                     <td>Amount</td>
//                                                     <td>Last Trade</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>8964978</td>
//                                                     <td>4.00 AM</td>
//                                                     <td>Pending</td>
//                                                     <td>$445.90</td>
//                                                     <td>$094545.090</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>89675978</td>
//                                                     <td>4.00 AM</td>
//                                                     <td>Pending</td>
//                                                     <td>$78.90</td>
//                                                     <td>$074852945.090</td>
//                                                 </tr>
//                                                 <tr>
//                                                     <td>78527878</td>
//                                                     <td>4.00 AM</td>
//                                                     <td>Pending</td>
//                                                     <td>$0768.90</td>
//                                                     <td>$65465.090</td>
//                                                 </tr>
//                                             </table>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="row mt-5">
//                 <div className="col-xl-6">
//                     <div className="card">
//                         <div className="card-body">
//                             <h4 className="header-title">Latest News</h4>
//                             <div className="letest-news mt-5">
//                                 <div className="single-post mb-xs-40 mb-sm-40">
//                                     <div className="lts-thumb">
//                                         <img src="assets/images/blog/post-thumb1.jpg" alt="post thumb" />
//                                     </div>
//                                     <div className="lts-content">
//                                         <span>Admin Post</span>
//                                         <h2><a href="blog.html">Sed ut perspiciatis unde omnis iste.</a></h2>
//                                         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some...</p>
//                                     </div>
//                                 </div>
//                                 <div className="single-post">
//                                     <div className="lts-thumb">
//                                         <img src="assets/images/blog/post-thumb2.jpg" alt="post thumb" />
//                                     </div>
//                                     <div className="lts-content">
//                                         <span>Admin Post</span>
//                                         <h2><a href="blog.html">Sed ut perspiciatis unde omnis iste.</a></h2>
//                                         <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some...</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-xl-6 mt-md-30 mt-xs-30 mt-sm-30">
//                     <div className="card">
//                         <div className="card-body">
//                             <h4 className="header-title">Exchange</h4>
//                             <div className="exhcange-rate mt-5">
//                                 <form action="#">
//                                     <div className="input-form">
//                                         <input type="text" value="0.76834" />
//                                         <span>BTC</span>
//                                     </div>
//                                     <div className="exchange-devider">To</div>
//                                     <div className="input-form">
//                                         <input type="text" value="5689.846" />
//                                         <span>USD</span>
//                                     </div>
//                                     <div className="exchange-btn">
//                                         <button type="submit">Exchange Now</button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default Home;


import React from 'react';

function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is a public page accessible to all users.</p>
    </div>
  );
}

export default Home;
