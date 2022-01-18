// region import
import classNames from 'classnames'

// styles
import styles from './index.module.css'
// endregion

function nestStyles() {
	return {
		container: styles.container,
		mainRow: styles.mainRow,
		row: styles.row,
		mainChild: styles.mainChild,
		lateralSideChild: styles.lateralSideChild,
		verticalSideChild: styles.verticalSideChild,
		verticalTopChild: classNames(styles.topChildBorder, styles.verticalSideChild),
		verticalBottomChild: classNames(styles.bottomChildBorder, styles.verticalSideChild),
		horizontalRightChild: classNames(styles.lateralSideChild, styles.rightChildBorder),
		horizontalLeftChild: classNames(styles.lateralSideChild, styles.leftChildBorder),
		verticalChildTopRight: classNames(styles.verticalChildTopRight, styles.verticalChilds),
		verticalChildBottomRight: classNames(styles.verticalChildBottomRight, styles.verticalChilds),
		verticalChilds: classNames(styles.verticalChilds),
		containerLogo: styles.containerLogo,
		containerForm: styles.containerForm,
		colOne: styles.colOne,
		colTwo: classNames(styles.colTwo, styles.containerForm),
		colThree: styles.colThree,
	}
}

export { nestStyles }
