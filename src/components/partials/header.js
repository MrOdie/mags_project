import { Link } from "gatsby"
import { header } from '../../assets/js/header'
// import { useSiteMetadata } from "../../hooks/use-site-metadata"
import {useScrollHandler } from '../../hooks/useScrollHandler';
import classes from '../../assets/scss/modules/header.module.scss';
import React from "react"
import { useSiteMetadata } from "../../hooks/use-site-metadata";

const Header = ({page}) => {
  const { title } = useSiteMetadata()
  const scroll = useScrollHandler();
  
  return (
    <header id={`${page}Header`} className={!scroll ? `${classes.mainHeader} ${classes[page]} ${classes.scrolled}` : `${classes.mainHeader} ${classes[page]}`} >

      <div className={classes.logo}>
        <Link to="/"><h2 className="h1">{ title }</h2></Link>
      </div>

      <input type="checkbox" id="menu-btn" className={classes.menuBtn} />
      <label htmlFor="menu-btn" className={classes.menuIcon}>
        <span className={classes.menuIconLine}></span>
      </label>
      <nav className={classes.navLinks}>
        <ul>
          <li className={classes.navLink}>
            <Link activeClassName="active" to="/about">
              About
           </Link>
          </li>
          <li className={classes.navLink}>
            <Link activeClassName="active" to="/blogs">
              Blogs
          </Link>
          </li>
          <li className={classes.navLink}>
            <Link activeClassName="active" to="/contact">
              Contact
          </Link>
          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header
