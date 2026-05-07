import { shallow } from 'enzyme';

import Score from './score';

const defaultProps = {
	value: 100,
};

const setup = ( props = {} ) => {
	const setupProps = { ...defaultProps, ...props };

	return shallow( <Score { ...setupProps } /> );
};

describe( 'gd-page-perf, component, score', () => {
	let wrapper;

	beforeEach( () => {
		wrapper = setup();
	} );

	afterEach( () => {
		jest.clearAllMocks();
	} );

	describe( '#render', () => {
		it( 'should be rendered', () => {
			expect( wrapper.find( '.page-perf__result' ) ).toHaveLength( 1 );
		} );

		it( 'should display right class when Good value', () => {
			expect( wrapper.find( '.is-good' ) ).toHaveLength( 1 );
		} );

		it( 'should display right class when Okay value', () => {
			wrapper = setup( { value: 66 } );
			expect( wrapper.find( '.is-okay' ) ).toHaveLength( 1 );
		} );

		it( 'should display right class when Bad value', () => {
			wrapper = setup( { value: 10 } );
			expect( wrapper.find( '.is-bad' ) ).toHaveLength( 1 );
		} );

		it( 'should not display the component if value is not between 0 and 100', () => {
			wrapper = setup( { value: 'foo' } );
			expect( wrapper.find( '.page-perf__result' ) ).toHaveLength( 0 );
		} );
	} );
} );
