import React from 'react'

const SplashFooter = () => (
  <footer className='splash-footer'>
    <ul className='splash-footer__language-bar'>
      <li className='splash-footer__language-item'>English (US)</li>
    </ul>
    <div className='splash-footer__divider'></div>
    <ul className='splash-footer__personal-sites'>
      <li className='splash-footer__site-item'>
        <a href='https://github.com/inhojl' target='_blank'>GitHub</a>
      </li>
      <li className='splash-footer__site-item'>
        <a href='https://www.linkedin.com/in/inhojl' target='_blank'>LinkedIn</a>
      </li>
      <li className='splash-footer__site-item'>
        <a href='#' target='_blank'>AngelList</a>
      </li>
    </ul>
    <p className='splash-footer__copyright'>Fasebook © 2021</p>
  </footer>
)

export default SplashFooter;