// region import
import React, { useEffect, useState } from 'react'

// interfaces
import { CheckboxProps } from 'interfaces'

// styles
import { Input, Label, CheckMark } from './style'
// endregion

function Checkbox(props: CheckboxProps) {
	const [checked, setChecked] = useState(!!props.checked)

	useEffect(() => {
		props.checkCallback(checked)
	}, [checked])

	return (
		<Label>
			<Input type="checkbox" onClick={() => setChecked(!checked)} />
			<CheckMark {...props} checked={checked} />
		</Label>
	)
}

export default Checkbox
