// region import
import React from 'react'

// interfaces
import { InputProps } from 'interfaces'

// styles
import { StyledInput, GroupInputWrap, GroupInputWrapIcon } from './style'
// endregion

function Input(props: InputProps) {
	return (
		<GroupInputWrap>
			{props.Icon && (
				<GroupInputWrapIcon>
					{props.Icon}
				</GroupInputWrapIcon>
			)}
			<StyledInput componentProps={props} ref={props.bind} {...props.attributes} />
		</GroupInputWrap>
	)
}

export default Input
