import { css } from 'frontity';

export default css`
	.wp-block-table {
		overflow-x: auto;
	}

	.wp-block-table table {
		width: 100%;
	}

	.wp-block-table .has-fixed-layout {
		table-layout: fixed;
		width: 100%;
	}

	.wp-block-table .has-fixed-layout td,
	.wp-block-table .has-fixed-layout th {
		word-break: break-word;
	}

	.wp-block-table th {
		font-weight: bold;
	}

	.wp-block-table.aligncenter,
	.wp-block-table.alignleft,
	.wp-block-table.alignright {
		display: table;
		width: auto;
	}

	.wp-block-table.aligncenter td,
	.wp-block-table.aligncenter th,
	.wp-block-table.alignleft td,
	.wp-block-table.alignleft th,
	.wp-block-table.alignright td,
	.wp-block-table.alignright th {
		word-break: break-word;
	}

	.wp-block-table .has-subtle-light-gray-background-color {
		background-color: #f3f4f5;
	}

	.wp-block-table .has-subtle-pale-green-background-color {
		background-color: #e9fbe5;
	}

	.wp-block-table .has-subtle-pale-blue-background-color {
		background-color: #e7f5fe;
	}

	.wp-block-table .has-subtle-pale-pink-background-color {
		background-color: #fcf0ef;
	}

	.wp-block-table.is-style-stripes {
		border-spacing: 0;
		border-collapse: inherit;
		background-color: transparent;
		border-bottom: 1px solid #f3f4f5;
	}

	.wp-block-table.is-style-stripes tbody tr:nth-child( odd ) {
		background-color: #f3f4f5;
		color: #333;
	}

	.wp-block-table.is-style-stripes td,
	.wp-block-table.is-style-stripes th {
		border-color: transparent;
	}

	.wp-block-table td,
	.wp-block-table th {
		padding: 5px 10px;
	}
`;
