import React from 'react';

import classes from '../assets/scss/modules/singleColumn.module.scss';

const SingleColumn = ({sectionId, children}) => {
  return (
    <section id={sectionId} className={classes.Section}>
      <div className={`${classes.Container} container`}>
        <div className={`${classes.Row} row`}>
          <div className={`${classes.Col} col`}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleColumn;