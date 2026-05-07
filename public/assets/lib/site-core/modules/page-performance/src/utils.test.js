import {
	classnameByScore,
	classnameBySpeed,
	generateGridUI,
	getReportLink,
	strToKebab,
	formatFetchTime,
} from './utils';

describe( 'gd-page-perf, utils', () => {
	describe( '#methods', () => {
		describe( 'classnameByScore', () => {
			it( 'should not return when wrong values', () => {
				const result = classnameByScore( 'abc' );
				expect( result ).toBeNull();
			} );

			it( 'should return right values', () => {
				const result = classnameByScore( 50 );
				expect( result ).toBe( 'is-okay' );
			} );
		} );

		describe( 'classnameBySpeed', () => {
			it( 'should not return when wrong values', () => {
				const result = classnameBySpeed( 'abc' );
				expect( result ).toBeNull();
			} );

			it( 'should return right values', () => {
				const resultSI = classnameBySpeed( 2, 'SI' );
				const resultFCP = classnameBySpeed( 2, 'FCP' );
				const resultFCPBad = classnameBySpeed( 20, 'FCP' );
				expect( resultSI ).toBe( 'is-good' );
				expect( resultFCP ).toBe( 'is-okay' );
				expect( resultFCPBad ).toBe( 'is-bad' );
			} );
		} );

		describe( 'generateGridUI', () => {
			it( 'should return right values', () => {
				// Honestly, this test is not testing anything ...
				const result = generateGridUI( [ 'a', 'b' ] );
				expect( result ).not.toBeUndefined();
			} );
		} );

		describe( 'getReportLink', () => {
			it( 'should return right values', () => {
				// Honestly, this test is not testing anything ...
				const result = getReportLink( 'abc' );
				const resultHash = getReportLink( '1234', 'some-hash' );
				expect( result ).toBe( 'https://gdcore.api.godaddy.com/v1/lighthouse/reports/abc?format=reportHtml' );
				expect( resultHash ).toBe( 'https://gdcore.api.godaddy.com/v1/lighthouse/reports/1234?format=reportHtml#some-hash' );
			} );
		} );

		describe( 'strToKebab', () => {
			it( 'should not return when wrong values', () => {
				const result = strToKebab();
				expect( result ).toBeNull();
			} );

			it( 'should return right values', () => {
				const result = strToKebab( 'Some string' );
				expect( result ).toBe( 'some-string' );
			} );
		} );

		describe( 'formatFetchTime', () => {
			it( 'should return right values', () => {
				let date = new Date();

				let result = formatFetchTime( date );
				expect( result ).toBe( 'now' );

				date.setDate( date.getDate() - 2 );
				result = formatFetchTime( date );
				expect( result ).toBe( '2 days ago' );
			} );
		} );
	} );
} );
