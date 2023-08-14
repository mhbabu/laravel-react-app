import React from "react";

export default function Header() {
  return (
    <div>
      <div className='preloader flex-column justify-content-center align-items-center'>
        <img className='animation__shake' src='/assets/dist/img/AdminLTELogo.png' alt='AdminLTELogo' height={60} width={60} />
      </div>
      <nav className='main-header navbar navbar-expand navbar-white navbar-light'>
        <ul className="navbar-nav ml-auto">
          {/* Messages Dropdown Menu */}
          <li className='nav-item dropdown'>
            <a className='nav-link' data-toggle='dropdown' href='#'>
              <i className='far fa-comments' />
              <span className='badge badge-danger navbar-badge'>3</span>
            </a>
            <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
              <a href='#' className='dropdown-item'>
                {/* Message Start */}
                <div className='media'>
                  <img src='/assets/dist/img/user1-128x128.jpg' alt='User Avatar' className='img-size-50 mr-3 img-circle' />
                  <div className='media-body'>
                    <h3 className='dropdown-item-title'>
                      Brad Diesel
                      <span className='float-right text-sm text-danger'>
                        <i className='fas fa-star' />
                      </span>
                    </h3>
                    <p className='text-sm'>Call me whenever you can...</p>
                    <p className='text-sm text-muted'>
                      <i className='far fa-clock mr-1' /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                  {/* Message Start */}
                  <div className='media'>
                    <img src='/assets/dist/img/user8-128x128.jpg' alt='User Avatar' className='img-size-50 img-circle mr-3' />
                    <div className='media-body'>
                      <h3 className='dropdown-item-title'>
                        John Pierce
                        <span className='float-right text-sm text-muted'>
                          <i className='fas fa-star' />
                        </span>
                      </h3>
                      <p className='text-sm'>I got your message bro</p>
                      <p className='text-sm text-muted'>
                        <i className='far fa-clock mr-1' /> 4 Hours Ago
                      </p>
                    </div>
                  </div>
                  {/* Message End */}
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                {/* Message Start */}
                <div className='media'>
                  <img src='/assets/dist/img/user3-128x128.jpg' alt='User Avatar' className='img-size-50 img-circle mr-3' />
                  <div className='media-body'>
                    <h3 className='dropdown-item-title'>
                      Nora Silvester
                      <span className='float-right text-sm text-warning'>
                        <i className='fas fa-star' />
                      </span>
                    </h3>
                    <p className='text-sm'>The subject goes here</p>
                    <p className='text-sm text-muted'>
                      <i className='far fa-clock mr-1' /> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* Message End */}
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item dropdown-footer'>
                See All Messages
              </a>
            </div>
          </li>
          {/* Notifications Dropdown Menu */}
          <li className='nav-item dropdown'>
            <a className='nav-link' data-toggle='dropdown' href='#'>
              <i className='far fa-bell' />
              <span className='badge badge-warning navbar-badge'>15</span>
            </a>
            <div className='dropdown-menu dropdown-menu-lg dropdown-menu-right'>
              <span className='dropdown-item dropdown-header'>
                15 Notifications
              </span>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                <i className='fas fa-envelope mr-2' /> 4 new messages
                <span className='float-right text-muted text-sm'>3 mins</span>
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                <i className='fas fa-users mr-2' /> 8 friend requests
                <span className='float-right text-muted text-sm'>12 hours</span>
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item'>
                <i className='fas fa-file mr-2' /> 3 new reports
                <span className='float-right text-muted text-sm'>2 days</span>
              </a>
              <div className='dropdown-divider' />
              <a href='#' className='dropdown-item dropdown-footer'>
                See All Notifications
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <div className="image">
                <b className="pr-1">Mahadi</b>
                <img width="30" src="/assets/dist/img/profile.png" className="img-circle elevation-2" alt="User Image" />
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-lg-right">
              <a className="dropdown-item"> <i className="fas fa-user-cog mr-2"></i> Profile</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#"> <i className="fas fa-user-lock mr-2"></i> Logout </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
