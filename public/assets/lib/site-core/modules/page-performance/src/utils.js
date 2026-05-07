/**
 * Internal dependencies
 */
import * as constants from './constants';

export const classnameByScore = ( score ) => {
	if ( typeof ( score ) !== 'number' || score < 0 || score > 100 ) {
		return null;
	}

	switch ( true ) {
		case ( score >= constants.LIGHTHOUSE_SCORE_GOOD_THRESHOLD ):
			return 'is-good';
		case ( score >= constants.LIGHTHOUSE_SCORE_OKAY_THRESHOLD ):
			return 'is-okay';
		default:
			return 'is-bad';
	}
};

export const classnameBySpeed = ( speed, metric ) => {
	if ( typeof ( speed ) !== 'number' || speed < 0 || ! constants[ `${ metric }_SPEED_GOOD_THRESHOLD` ] ) {
		return null;
	}

	switch ( true ) {
		case ( speed <= constants[ `${ metric }_SPEED_GOOD_THRESHOLD` ] ):
			return 'is-good';
		case ( speed <= constants[ `${ metric }_SPEED_OKAY_THRESHOLD` ] ):
			return 'is-okay';
		default:
			return 'is-bad';
	}
};

export const generateGridUI = ( labels, reportId, hoveredScoreCallback ) => {
	const reportUrl = `${ constants.ADMIN_POST_URL }?action=view_lighthouse_report&report_id=${ reportId }`;
	return <>
		{
			labels.map( ( label, index ) => {
				const row = [];
				// Create right amount of vertical lines based on index and labels length
				for ( let i = 0; i < index; i++ ) {
					row.push( <div className="page-perf__results-labels__cell is-line" key={ `grid-row-line-${ index }-${ i }` } /> );
				}
				// Create corner
				row.push( <div className="page-perf__results-labels__cell is-corner" key={ `grid-row-corner-${ index }` } /> );
				// Create label
				row.push(
					<button
						className={ `page-perf__results-labels__cell is-label is-span-${ labels.length - index }` }
						onMouseEnter={ () => hoveredScoreCallback( index + 1 ) }
						onMouseLeave={ () => hoveredScoreCallback( null ) }
						onClick={ () => window.open( `${ reportUrl }#${ strToKebab( label ) }`, '_blank' ) }
						key={ `grid-row-label-${ index }` }>
						{ label }
					</button>
				);
				return row;
			} )
		}
	</>;
};

export const getReportLink = ( reportId, hash = null ) => {
	const linkHash = hash ? `#${ hash }` : '';
	const link = `${ constants.ADMIN_POST_URL }?action=view_lighthouse_report&report_id=${ reportId }`;

	return `${ link }${ linkHash }`;
};

export const strToKebab = ( str ) => {
	if ( ! str ) {
		return null;
	}

	return str
		.match( /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g )
		.map( ( x ) => x.toLowerCase() )
		.join( '-' );
};

const TIME_FORMATTER = new Intl.RelativeTimeFormat(
	undefined,
	{
		numeric: 'auto',
	}
);

const TIME_DIVISIONS = [
	{ amount: 60, name: 'seconds' },
	{ amount: 60, name: 'minutes' },
	{ amount: 24, name: 'hours' },
	{ amount: 7, name: 'days' },
	{ amount: 4.34524, name: 'weeks' },
	{ amount: 12, name: 'months' },
	{ amount: Number.POSITIVE_INFINITY, name: 'years' },
];

export const formatFetchTime = ( fetchTime ) => {
	let duration = ( new Date( fetchTime ) - new Date() ) / 1000;

	for ( let i = 0; i < TIME_DIVISIONS.length; i++ ) {
		const division = TIME_DIVISIONS[ i ];
		if ( Math.abs( duration ) < division.amount ) {
			return TIME_FORMATTER.format( Math.round( duration ), division.name );
		}
		duration /= division.amount;
	}
};
