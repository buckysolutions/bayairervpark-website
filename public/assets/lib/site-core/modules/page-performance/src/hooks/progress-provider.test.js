import { mount } from 'enzyme';

import ProgressProvider from './progress-provider';
import { CircularProgressbar } from 'react-circular-progressbar';

const setup = () => {
	return mount(
		<ProgressProvider valueStart={ 0 } valueEnd={ 100 }>
			{ ( returnedValue ) => <CircularProgressbar value={ returnedValue } text={ returnedValue } /> }
		</ProgressProvider>
	);
};

describe( 'gd-page-perf, hooks, progress-provider', () => {
	let wrapper;

	beforeEach( () => {
		wrapper = setup();
	} );

	afterEach( () => {
		jest.clearAllMocks();
	} );

	describe( '#render', () => {
		it.skip( 'should be rendered', () => {
			expect( wrapper.find( CircularProgressbar ) ).toHaveLength( 1 );
		} );
	} );
} );
