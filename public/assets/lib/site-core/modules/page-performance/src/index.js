/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * Internal dependencies
 */
import './style.scss';
import { GDPagePerf } from './gd-page-perf';

// Create root div
const rootDiv = document.createElement( 'div' );
rootDiv.id = 'gd-page-perf-root';
document.body.appendChild( rootDiv );

// Render component in newly created div
ReactDOM.render(
	<GDPagePerf />,
	document.getElementById( 'gd-page-perf-root' )
);
