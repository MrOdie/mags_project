import React from 'react';

import classes from '../assets/scss/modules/multColumn.module.scss';

const MultColumn = ({ sectionId, children }) => {
  return (
    <section id={sectionId}>
      <article className={classes.articleLeft}>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.col}>
              {children}
            </div>
          </div>
        </div>
      </article>
      <article className={classes.articleRight}>
      </article>
    </section>
  )
}

export default MultColumn;