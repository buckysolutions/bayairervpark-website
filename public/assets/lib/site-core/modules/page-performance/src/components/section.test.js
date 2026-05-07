import { shallow } from 'enzyme';

import Section from './section';

const defaultProps = {
	title: 'Some Title',
	value: 1.5,
};

const setup = ( props = {} ) => {
	const setupProps = { ...defaultProps, ...props };

	return shallow( <Section { ...setupProps } /> );
};

describe( 'gd-page-perf, component, section', () => {
	let wrapper;

	beforeEach( () => {
		wrapper = setup();
	} );

	afterEach( () => {
		jest.clearAllMocks();
	} );

	describe( '#render', () => {
		it( 'should be rendered', () => {
			expect( wrapper.find( '.page-perf__section' ) ).toHaveLength( 1 );
		} );

		it( 'should display content, if any', () => {
			wrapper = setup( { children: <div className="foo"></div> } );
			expect( wrapper.find( '.foo' ) ).toHaveLength( 1 );
		} );

		it( 'should not display the component if title is missing', () => {
			wrapper = setup( { title: null } );
			expect( wrapper.find( '.page-perf__section' ) ).toHaveLength( 0 );
		} );
	} );
} );
