import { mount } from 'enzyme';
import { act } from '@testing-library/react-hooks';

import { GDPagePerf } from './gd-page-perf';

describe( 'gd-page-perf', () => {
	let wrapper;

	beforeEach( () => {
		wrapper = mount( <GDPagePerf /> );
	} );

	afterEach( () => {
		jest.clearAllMocks();
	} );

	describe( '#render', () => {
		it.skip( 'should not be rendered by default', () => {
			expect( wrapper.find( '.page-perf' ) ).toHaveLength( 0 );
		} );

		it.skip( 'should be rendered when event received', () => {
			act( () => {
				window.dispatchEvent( new Event( 'toggleGDPagePerfEvent' ) );
			} );

			expect( wrapper.find( '.page-perf' ) ).toHaveLength( 1 );
		} );
	} );
} );
