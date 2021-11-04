// region  import
import classNames from 'classnames'

// styles
import styles from './style.css'
// endregion

function nestStyles() {
  return {
    containerHeader: classNames(styles.grid),
    groupNav: styles.groupNav,
    containerPage: classNames(styles.grid),
    groupNavDetails: styles.groupNavDetails,
    groupTitleView: styles.groupTitleView,
    seeing: styles.seeing,
    title: styles.title,
    secondaryContent: styles.secondaryContent,
  }
}

export {
  nestStyles,
}
