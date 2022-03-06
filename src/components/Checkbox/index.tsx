// region import
import React, { useState } from 'react'

// hooks
import { useStrictEffect } from 'hooks'

// interfaces
import { CheckboxProps } from 'interfaces'

// styles
import { Input, Label, CheckMark } from './style'
// endregion

function Checkbox(props: CheckboxProps) {
	const [checked, setChecked] = useState(!!props.checked)

	useStrictEffect(() => {
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
