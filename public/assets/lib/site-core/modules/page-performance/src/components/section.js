/**
 * External dependencies
 */
import classnames from 'classnames';

const Section = ( props ) => {
	const {
		title,
		link = null,
		value,
		children,
		extraClass = '',
	} = props;

	if ( ! title ) {
		return null;
	}

	return (
		<div className={ classnames(
			'page-perf__section',
			extraClass
		) }>
			{ /* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */ }
			<div
				className={ classnames(
					'page-perf__section__heading',
					{ 'with-link': link }
				) }
				onClick={ link ? () => window.open( link, '_blank' ) : null } >
				<h3 className="page-perf__section__title">{ title }</h3>
				{ value && <span className="page-perf__section__result">{ value }</span> }
			</div>
			{ children && children }
		</div>
	);
};

export default Section;
