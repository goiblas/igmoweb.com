import { css } from 'frontity';

export default css`
	.wp-block-columns {
		display: flex;
		margin-bottom: 28px;
		flex-wrap: wrap;
	}

	@media ( min-width: 782px ) {
		.wp-block-columns {
			flex-wrap: nowrap;
		}
	}

	.wp-block-columns.has-background {
		padding: 20px 20px;
	}

	.wp-block-column {
		flex-grow: 1;
		min-width: 0;
		word-break: break-word;
		overflow-wrap: break-word;
	}

	@media ( max-width: 599px ) {
		.wp-block-column {
			flex-basis: 100% !important;
		}
	}

	@media ( min-width: 600px ) and ( max-width: 781px ) {
		.wp-block-column {
			flex-basis: calc( 50% - 16px ) !important;
			flex-grow: 0;
		}

		.wp-block-column:nth-of-type( 2n ) {
			margin-left: 32px;
		}
	}

	@media ( min-width: 782px ) {
		.wp-block-column {
			flex-basis: 0;
			flex-grow: 1;
		}

		.wp-block-column[style*='flex-basis'] {
			flex-grow: 0;
		}

		.wp-block-column:not( :first-of-type ) {
			margin-left: 32px;
		}
	}

	.wp-block-columns.are-vertically-aligned-top {
		align-items: flex-start;
	}

	.wp-block-columns.are-vertically-aligned-center {
		align-items: center;
	}

	.wp-block-columns.are-vertically-aligned-bottom {
		align-items: flex-end;
	}

	.wp-block-column.is-vertically-aligned-top {
		align-self: flex-start;
	}

	.wp-block-column.is-vertically-aligned-center {
		-ms-grid-row-align: center;
		align-self: center;
	}

	.wp-block-column.is-vertically-aligned-bottom {
		align-self: flex-end;
	}

	.wp-block-column.is-vertically-aligned-bottom,
	.wp-block-column.is-vertically-aligned-center,
	.wp-block-column.is-vertically-aligned-top {
		width: 100%;
	}
`;
