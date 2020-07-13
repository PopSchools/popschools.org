<nav className={status} role="navigation" aria-label="main navigation">
      <div className="container py-4">
  <div className="navbar-brand md:w-64 h-full">
    <a className="navbar-item" href="https://bulma.io">
    <img src={Logo}   alt=''/>
    </a>

    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item text-purple-400 font-extrabold  px-3 py-2">
        Home
      </a>

      <a className="navbar-item text-gray-900 font-extrabold px-3 py-2">
        About us
      </a>

      <div className="navbar-item has-dropdown is-hoverable">
        <a className="navbar-link">
         Resource
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
           Popschool Club
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          <hr className="navbar-divider"/>
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="">
          <a className="bg-purple-900 px-4 text-gray-100 font-bold md:w-32 py-2 rounded-full shadow-lg">
            <strong>Get started </strong>
          </a>
         
        </div>
      </div>
    </div>
  </div>
  </div>
</nav>