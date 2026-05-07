/**
 * WordPress dependencies
 */
import { useEffect, useState } from '@wordpress/element';

const ProgressProvider = ( { valueStart, valueEnd, children } ) => {
	const [ value, setValue ] = useState( valueStart );
	useEffect( () => {
		setValue( valueEnd );
	}, [ valueEnd ] );

	return children( value );
};

export default ProgressProvider;
