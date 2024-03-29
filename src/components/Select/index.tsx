// region import
import React, { useEffect, useRef } from 'react'

// components
import { SVGIconTriangleDown, SVGIconArrowDown } from 'components'

// hooks
import { useStage } from 'hooks'

// utilities
import { SelectProps } from 'interfaces'

// modules
import { initialState, onOpen, nestStyles, onSelect } from './module'
// endregion

function Select(props: SelectProps) {
	const ref = useRef<HTMLDivElement>(null)
	const stage = useStage(initialState)
	const styles = nestStyles(props)

	useEffect(() => {
		const optionSelected = props.options.filter(option => option.main)[0]
		stage.commitState({
			optionSelected,
		})
		if (props.onSelect) {
			props.onSelect({ option: optionSelected, assemble: true })
		}
	}, [])

	useEffect(() => {
		const close = (e: MouseEvent) => {
			if (ref.current && e.target instanceof Node) {
				if (!ref.current.contains(e.target)) {
					stage.commitState({
						status: 'close'
					})
				}
			}
		}
		if (stage.state.status === 'open') {
			window.addEventListener('click', close)
		}
		return () => window.removeEventListener('click', close)
	}, [stage.state.status])

	return (
		<div ref={ref} className={styles.container}>
			{stage.state.optionSelected !== undefined && (
				<div role="button" tabIndex={0} onClick={onOpen(stage)} className={styles.optionSelected}>
					<span className={styles.title}>{props.title}</span>
					<span className={styles.valueSelected}>
						{stage.state.optionSelected.element && (
							<div className={styles.optionElement}>{stage.state.optionSelected.element}</div>
						)}
						{stage.state.optionSelected.value && (
							<div className={styles.optionValue}>{stage.state.optionSelected.value}</div>
						)}
						{stage.state.optionSelected.secondaryValue && (
							<div className={styles.optionSecondaryValue}>
								{stage.state.optionSelected.secondaryValue}
							</div>
						)}
						{props.design !== 'outlined' && (
							<div className={styles.arrowIcon}>
								<SVGIconTriangleDown />
							</div>
						)}
						{props.design === 'outlined' && (
							<div className={styles.arrowIcon}>
								<SVGIconArrowDown />
							</div>
						)}
					</span>
				</div>
			)}
			{stage.state.status === 'open' && (
				<div className={styles.groupOptions}>
					{props.options.map(option => (
						<div
							role="button"
							tabIndex={0}
							onClick={onSelect(stage, option, props)}
							key={option.id}
							className={styles.option}
						>
							{option.value || option.id}
						</div>
					))}
				</div>
			)}
		</div>
	)
}

export default Select
