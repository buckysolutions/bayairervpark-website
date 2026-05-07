/**
 * External dependencies
 */
import classnames from 'classnames';
import { CircularProgressbar } from 'react-circular-progressbar';

/**
 * Internal dependencies
 */
import { classnameByScore } from './../utils';
import ProgressProvider from './../hooks/progress-provider';

const Score = ( props ) => {
	const { value, hoveredScoreCallback, hoveredScoreIndex, link } = props;

	if ( ! value || typeof ( value ) !== 'number' || value > 100 || value < 0 ) {
		return null;
	}

	return (
		/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
		<li
			className={ classnames(
				'page-perf__result',
				classnameByScore( value ),
				{ 'with-link': link }
			) }
			onClick={ link ? () => window.open( link, '_blank' ) : null }
			onMouseEnter={ () => hoveredScoreCallback( hoveredScoreIndex ) }
			onMouseLeave={ () => hoveredScoreCallback( null ) } >
			<ProgressProvider valueStart={ 0 } valueEnd={ value }>
				{ ( returnedValue ) => <CircularProgressbar value={ returnedValue } text={ returnedValue } /> }
			</ProgressProvider>
		</li>
	);
};

export default Score;
