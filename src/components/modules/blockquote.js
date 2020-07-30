import React from 'react'

import classes from '../../assets/scss/modules/blockquote.module.scss'

const blockquote = (props) => {
  return (
    <div>
      <blockquote className={classes.Blockquote}>
        <p>{props.children}</p>
        {props.attribution ? <p className={classes.Caption}>&mdash; {props.attribution}</p> : null}
      </blockquote>
    </div>
  )
}

export default blockquote;