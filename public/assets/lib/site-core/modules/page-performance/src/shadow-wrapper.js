/**
 * External dependencies
 */
import ReactDOM from 'react-dom';

/**
 * WordPress dependencies
 */
import {
	useEffect,
	useRef,
	useState,
} from '@wordpress/element';

const ShadowWrapper = ( props ) => {
	const { children, mode = 'open', ...rest } = props;

	const ref = useRef();
	const [ shadowRoot, setShadowRoot ] = useState( null );

	useEffect( () => {
		setShadowRoot( ref.current.attachShadow( { mode } ) );
	}, [] );

	return (
		<div { ...rest } ref={ ref }>
			{ shadowRoot && ReactDOM.createPortal( children, shadowRoot ) }
		</div>
	);
};

export default ShadowWrapper;
