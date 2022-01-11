// region  import
import classNames from 'classnames'

// styles
import styles from './index.module.css'
// endregion

function nestStyles() {
  return {
    groupNav: styles.groupNav,
    groupNavDetails: styles.groupNavDetails,
    groupTitleView: styles.groupTitleView,
    seeing: styles.seeing,
    title: styles.title,
    grid: styles.grid,
  }
}

export {
  nestStyles,
}
