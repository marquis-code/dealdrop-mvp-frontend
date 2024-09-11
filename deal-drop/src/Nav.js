import React from 'react';
// import 'bootstrap/js/dist/dropdown'
// import 'bootstrap/js/dist/collapse'

function Nav({Toggle}) {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-transparent'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='24px'
        viewBox='0 -960 960 960'
        width='24px'
        fill='white'
        className='navbar-brand fs-4 bi bi-justify-left'
        onClick={Toggle}
      >
        <path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
      </svg>
      {/* <button
        className='navbar-toggler d-lg-none'
        type='button'
        data-bs-toggle='collapse'
        data-b-target='#collapsibleNavId'
        aria-controls='collapsibleNavId'
        aria-expanded='false'
        aria-babel = 'Toggle navigation'
      ><svg
      xmlns='http://www.w3.org/2000/svg'
      height='12px'
      viewBox='0 -960 960 960'
      width='12px'
      fill='white'
      className='bi bi-justify'
    >
      <path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
    </svg></button> */}
      <div className='collapse navbar-collapse' id='collapsibleNavId'>
        <ul className='navbar-nav ms-auto mt-2 mt-lg-0'>
          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle'
              id='dropdownId'
              data-bs-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
              href='#'
            >
              Tobiloba
            </a>
            <div className='dropdown-menu' aria-labelledby='dropdownId'>
              <a className='dropdown-item' href='#'>
                Profile
              </a>
              <a className='dropdown-item' href='#'>
                Setting
              </a>
              <a className='dropdown-item' href='#'>
                Logout
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
