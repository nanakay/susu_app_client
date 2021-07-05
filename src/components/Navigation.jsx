import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../../src/assets/css/themestyle.css";
import "../../src/assets/css/all.min.css";
import logo from "../../src/assets/img/AdminLTELogo.png";
import user_profile_picture from "../../src/assets/img/user2-160x160.jpg";
// import "../../src/assets/img/";

function Navigation(props) {
  return (
    <div className="navigation">
	  {/* Navbar */}
	  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
	    {/* Left navbar links */}
	    <ul className="navbar-nav">
	      <li className="nav-item">
	        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
	      </li>
	      <li className="nav-item d-none d-sm-inline-block">
	        <a href="index3.html" className="nav-link">Home</a>
	      </li>
	      <li className="nav-item d-none d-sm-inline-block">
	        <a href="#" className="nav-link">Contact</a>
	      </li>
	    </ul>

	    {/* Right navbar links */}
	    <ul className="navbar-nav ml-auto">
	      {/* Navbar Search */}
	      <li className="nav-item">
	        <a className="nav-link" data-widget="navbar-search" href="#" role="button">
	          <i className="fas fa-search"></i>
	        </a>
	        <div className="navbar-search-block">
	          <form className="form-inline">
	            <div className="input-group input-group-sm">
	              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
	              <div className="input-group-append">
	                <button className="btn btn-navbar" type="submit">
	                  <i className="fas fa-search"></i>
	                </button>
	                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
	                  <i className="fas fa-times"></i>
	                </button>
	              </div>
	            </div>
	          </form>
	        </div>
	      </li>

	      {/* Messages Dropdown Menu */}
	      <li className="nav-item dropdown">
	        <a className="nav-link" data-toggle="dropdown" href="#">
	          <i className="far fa-comments"></i>
	          <span className="badge badge-danger navbar-badge">3</span>
	        </a>
	        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
	          <a href="#" className="dropdown-item">
	            {/* Message Start */}
	            <div className="media">
	              <img src="assets/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle"/>
	              <div className="media-body">
	                <h3 className="dropdown-item-title">
	                  Brad Diesel
	                  <span className="float-right text-sm text-danger"><i className="fas fa-star"></i></span>
	                </h3>
	                <p className="text-sm">Call me whenever you can...</p>
	                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
	              </div>
	            </div>
	            {/* Message End */}
	          </a>
	          <div className="dropdown-divider"></div>
	          <a href="#" className="dropdown-item">
	            {/* Message Start */}
	            <div className="media">
	              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
	              <div className="media-body">
	                <h3 className="dropdown-item-title">
	                  John Pierce
	                  <span className="float-right text-sm text-muted"><i className="fas fa-star"></i></span>
	                </h3>
	                <p className="text-sm">I got your message bro</p>
	                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
	              </div>
	            </div>
	            {/* Message End */}
	          </a>
	          <div className="dropdown-divider"></div>
	          <a href="#" className="dropdown-item">
	            {/* Message Start */}
	            <div className="media">
	              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
	              <div className="media-body">
	                <h3 className="dropdown-item-title">
	                  Nora Silvester
	                  <span className="float-right text-sm text-warning"><i className="fas fa-star"></i></span>
	                </h3>
	                <p className="text-sm">The subject goes here</p>
	                <p className="text-sm text-muted"><i className="far fa-clock mr-1"></i> 4 Hours Ago</p>
	              </div>
	            </div>
	            {/* Message End */}
	          </a>
	          <div className="dropdown-divider"></div>
	          <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
	        </div>
	      </li>
	      {/* Notifications Dropdown Menu */}
	      <li className="nav-item dropdown">
	        <a className="nav-link" data-toggle="dropdown" href="#">
	          <i className="far fa-bell"></i>
	          <span className="badge badge-warning navbar-badge">15</span>
	        </a>
	        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
	          <span className="dropdown-item dropdown-header">15 Notifications</span>
	          <div className="dropdown-divider"></div>
	          <a href="#" className="dropdown-item">
	            <i className="fas fa-envelope mr-2"></i> 4 new messages
	            <span className="float-right text-muted text-sm">3 mins</span>
	          </a>
	          <div className="dropdown-divider"></div>
	          <a href="#" className="dropdown-item">
	            <i className="fas fa-users mr-2"></i> 8 friend requests
	            <span className="float-right text-muted text-sm">12 hours</span>
	          </a>
	          <div className="dropdown-divider"></div>
	          <a href="#" className="dropdown-item">
	            <i className="fas fa-file mr-2"></i> 3 new reports
	            <span className="float-right text-muted text-sm">2 days</span>
	          </a>
	          <div className="dropdown-divider"></div>
	          <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
	        </div>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link" data-widget="fullscreen" href="#" role="button">
	          <i className="fas fa-expand-arrows-alt"></i>
	        </a>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
	          <i className="fas fa-th-large"></i>
	        </a>
	      </li>
	    </ul>
	  </nav>
	  {/* /.navbar */}

	  {/* Main Sidebar Container */}
	  <aside className="main-sidebar sidebar-dark-primary elevation-4">
	    {/* Brand Logo */}
	    <a href="index3.html" className="brand-link">
	      <img src={logo} alt="Susu App Logo" className="brand-image img-circle elevation-3" style={{opacity: ".8em"}} />
	      <span className="brand-text font-weight-light">Susu App</span>
	    </a>

	    {/* Sidebar */}
	    <div className="sidebar">
	      {/* Sidebar user panel (optional) */}
	      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
	        <div className="image">
	          <img src={user_profile_picture} className="img-circle elevation-2" alt="User Image" />
	        </div>
	        <div className="info">
	          <a href="#" className="d-block">Alexander Pierce</a>
	        </div>
	      </div>

	      {/* Sidebar Menu */}
	      <nav className="mt-2">
	        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
	          {/* Add icons to the links using the .nav-icon className
	               with font-awesome or any other icon font library */}
	          <li className={`nav-item menu-open`}
	              >
	            <Link className={`nav-link ${
	                  props.location.pathname === "/" ? "active" : ""
	                }`} to="/">
	            	<i className="nav-icon fas fa-tachometer-alt"></i>
	                <p>
		               Dashboard
		            </p>
	              <span className="sr-only">(current)</span>
	            </Link>
	          </li>
	          <li className={`nav-item menu-open`}
	              >
	            <Link className={`nav-link ${
	                  props.location.pathname === "/accounts" ? "active" : ""
	                }`} to="/accounts">
	            	<i className="nav-icon fas fa-tachometer-alt"></i>
	                <p>
		               Accounts
		            </p>
	              <span className="sr-only">(current)</span>
	            </Link>
	          </li>
	          <li className="nav-item">
	            <a href="pages/widgets.html" className="nav-link">
	              <i className="nav-icon fas fa-th"></i>
	              <p>
	                Widgets
	                <span className="right badge badge-danger">New</span>
	              </p>
	            </a>
	          </li>
	          <li className="nav-item">
	            <a href="#" className="nav-link">
	              <i className="nav-icon fas fa-copy"></i>
	              <p>
	                Layout Options
	                <i className="fas fa-angle-left right"></i>
	                <span className="badge badge-info right">6</span>
	              </p>
	            </a>
	            <ul className="nav nav-treeview">
	              <li className="nav-item">
	                <a href="pages/layout/top-nav.html" className="nav-link">
	                  <i className="far fa-circle nav-icon"></i>
	                  <p>Top Navigation</p>
	                </a>
	              </li>
	              <li className="nav-item">
	                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
	                  <i className="far fa-circle nav-icon"></i>
	                  <p>Top Navigation + Sidebar</p>
	                </a>
	              </li>
	            </ul>
	          </li>
	          <li className="nav-header">EXAMPLES</li>
	          <li className="nav-item">
	            <a href="pages/calendar.html" className="nav-link">
	              <i className="nav-icon far fa-calendar-alt"></i>
	              <p>
	                Calendar
	                <span className="badge badge-info right">2</span>
	              </p>
	            </a>
	          </li>
	          <li className="nav-item">
	            <a href="pages/gallery.html" className="nav-link">
	              <i className="nav-icon far fa-image"></i>
	              <p>
	                Gallery
	              </p>
	            </a>
	          </li>
	          <li className="nav-item">
	            <a href="#" className="nav-link">
	              <i className="nav-icon fas fa-book"></i>
	              <p>
	                Pages
	                <i className="fas fa-angle-left right"></i>
	              </p>
	            </a>
	            <ul className="nav nav-treeview">
	              <li className="nav-item">
	                <a href="pages/examples/invoice.html" className="nav-link">
	                  <i className="far fa-circle nav-icon"></i>
	                  <p>Invoice</p>
	                </a>
	              </li>
	              <li className="nav-item">
	                <a href="pages/examples/profile.html" className="nav-link">
	                  <i className="far fa-circle nav-icon"></i>
	                  <p>Profile</p>
	                </a>
	              </li>
	            </ul>
	          </li>
	          <li className="nav-item">
	            <a href="#" className="nav-link">
	              <i className="nav-icon fas fa-search"></i>
	              <p>
	                Search
	                <i className="fas fa-angle-left right"></i>
	              </p>
	            </a>
	            <ul className="nav nav-treeview">
	              <li className="nav-item">
	                <a href="pages/search/simple.html" className="nav-link">
	                  <i className="far fa-circle nav-icon"></i>
	                  <p>Simple Search</p>
	                </a>
	              </li>
	              <li className="nav-item">
	                <a href="pages/search/enhanced.html" className="nav-link">
	                  <i className="far fa-circle nav-icon"></i>
	                  <p>Enhanced</p>
	                </a>
	              </li>
	            </ul>
	          </li>
	        </ul>
	      </nav>
	      {/* /.sidebar-menu */}
	    </div>
	    {/* /.sidebar */}
	  </aside>

  </div>
  );
}

export default withRouter(Navigation);