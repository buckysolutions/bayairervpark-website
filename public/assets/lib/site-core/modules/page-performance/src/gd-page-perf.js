/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { Icon } from '@wordpress/components';
import {
	createPortal,
	useEffect,
	useState,
} from '@wordpress/element';
import { update } from '@wordpress/icons';
import apiFetch from '@wordpress/api-fetch';

/**
 * Internal dependencies
 */
import { SVG_LIGHTHOUSE } from './svgs';
import {
	classnameByScore,
	classnameBySpeed,
	formatFetchTime,
	generateGridUI,
	getReportLink,
} from './utils';
import * as constants from './constants';
import ShadowWrapper from './shadow-wrapper';
import Score from './components/score';
import Section from './components/section';

import styles from './../build/style-main.css';

export const GDPagePerf = () => {
	const [ isOpen, setOpen ] = useState( false );
	const [ isVisible, setVisible ] = useState( false );
	const [ isUserVisible, setUserVisible ] = useState( false );
	const [ isLoading, setLoading ] = useState( false );
	const [ score, setScore ] = useState( null );
	const [ fetchTime, setFetchTime ] = useState( null );
	const [ hoveredScore, setHoveredScore ] = useState( null );
	const [ reportId, setReportId ] = useState( null );
	const [ appState, setAppState ] = useState( 'ok' );

	const [ portalContainer ] = useState( document.createElement( 'div' ) );
	portalContainer.classList.add( 'gd-page-perf-portal' );
	portalContainer.style.position = 'relative';
	portalContainer.style.zIndex = 999999;

	useEffect( () => {
		// Prepares the DOM for the Portal
		document.body.appendChild( portalContainer );

		return () => {
			// Removes the specific mounting point for the Portal from the DOM
			document.body.removeChild( portalContainer );
		};
	}, [] );

	useEffect( () => {
		const eventListener = () => setVisible( ! isVisible );

		// Only fetch LH reports when the component is visible
		if ( isVisible && ! score && appState !== 'error' ) {
			requestLH();
		}

		/* eslint-disable chai-friendly/no-unused-expressions */
		isVisible ? setTimeout( () => setUserVisible( true ), 200 ) : setUserVisible( false );

		window.addEventListener( 'toggleGDPagePerfEvent', eventListener );

		return () => {
			window.removeEventListener( 'toggleGDPagePerfEvent', eventListener );
		};
	}, [ isVisible ] );

	const updateLocalReport = ( data ) => {
		setLoading( false );
		setReportId( data.reportId );
		setScore( {
			performance: data.performance,
			accessibility: data.accessibility,
			bestpractices: data.bestpractices,
			seo: data.seo,
			fcp: data.fcp,
			speed: data.speed,
		} );
		setFetchTime( formatFetchTime( data.fetchTime ) );
	};

	const requestLH = ( refresh = false ) => {
		if ( !! constants.CACHED_REPORT && ! refresh ) {
			updateLocalReport( constants.CACHED_REPORT );
			return;
		}

		setLoading( true );

		apiFetch( {
			path: `${ constants.WP_API_URL }?refresh=true`,
			method: 'GET',
		} )
			.then( updateLocalReport )
			.catch( ( e ) => {
				setLoading( false );
				setAppState('error');
			} );
	};

	const getLighthouseScore = () => {
		return Math.round( (
			score.performance + score.seo + score.accessibility + score.bestpractices
		) / 4 );
	};

	if ( ! isVisible ) {
		return null;
	}

	return (
		<>
			{ createPortal(
				<ShadowWrapper>
					<div className={ classnames(
						'page-perf',
						{ 'page-perf--closed': ! isOpen },
						{ 'page-perf--visible': isUserVisible },
						{ 'page-perf--with-hovered-score': hoveredScore },
						{ [ `hovered-score-${ hoveredScore }` ]: hoveredScore }
					) }>
						<button
							className="page-perf__title"
							onClick={ () => setOpen( ! isOpen ) }>
							<h2>Page Performance</h2>
						</button>
						{ score &&
						<div className={ classnames(
							'page-perf__content',
							{ 'page-perf__content--collapsed': ! isOpen }
						) }>
							<div className="page-perf__more">
								<Section
									title="First Contentful Paint"
									link={ getReportLink( reportId, 'performance' ) }
									value={ `${ score.fcp }s` }
									extraClass={ classnameBySpeed( score.fcp, 'FCP' ) } />
								<Section
									title="Speed Index"
									link={ getReportLink( reportId, 'performance' ) }
									value={ `${ score.speed }s` }
									extraClass={ classnameBySpeed( score.speed, 'SI' ) } />
								<Section
									title="Lighthouse"
									link={ getReportLink( reportId ) }
									extraClass={ classnameByScore( getLighthouseScore() ) }>
									<div className="page-perf__results-labels">
										{ generateGridUI( [
											'Performance',
											'Accessibility',
											'Best Practices',
											'SEO',
										], reportId, setHoveredScore ) }
									</div>
								</Section>
							</div>
							<ul className="page-perf__results">
								<Score
									value={ score.performance }
									link={ getReportLink( reportId, 'performance' ) }
									hoveredScoreCallback={ setHoveredScore }
									hoveredScoreIndex={ 1 } />
								<Score
									value={ score.accessibility }
									link={ getReportLink( reportId, 'accessibility' ) }
									hoveredScoreCallback={ setHoveredScore }
									hoveredScoreIndex={ 2 } />
								<Score
									value={ score.bestpractices }
									link={ getReportLink( reportId, 'best-practices' ) }
									hoveredScoreCallback={ setHoveredScore }
									hoveredScoreIndex={ 3 } />
								<Score
									value={ score.seo }
									link={ getReportLink( reportId, 'seo' ) }
									hoveredScoreCallback={ setHoveredScore }
									hoveredScoreIndex={ 4 } />
								{ /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */ }
								<li
									onClick={ () => window.open( getReportLink( reportId, 'performance' ), '_blank' ) }
									className={ classnames(
										'page-perf__result-label',
										classnameBySpeed( score.fcp, 'FCP' )
									) }>
									FCP { score.fcp }s
								</li>
							</ul>
							<div className="page-perf__time">
								<span>{ fetchTime }</span>
								<button
									className="page-perf__time__button"
									onClick={ () => requestLH( true ) }>
									<Icon
										icon={ update }
										size={ 18 } />
								</button>
							</div>
						</div>
						}
						{ isLoading &&
						<div className="page-perf__loading">
							{ SVG_LIGHTHOUSE }
						</div>
						}
						<style type="text/css">{ styles }</style>
					</div>
				</ShadowWrapper>,
				portalContainer
			) }
		</>
	);
};
