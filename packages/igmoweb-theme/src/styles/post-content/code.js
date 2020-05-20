import { css } from 'frontity';

export default css`
	code,
	kbd,
	pre,
	samp {
		font-family: 'Roboto Mono', monospace;
		font-size: 0.9rem;
	}

	code,
	kbd,
	samp {
		background: rgba( 0, 0, 0, 0.075 );
		border-radius: 0.2rem;
	}

	pre {
		line-height: 1.5;
		margin: 3rem 0;
		overflow: auto;
		padding: 0;
		text-align: left;
	}

	pre code {
		background: transparent;
		padding: 1rem;
		font-weight: 800;
	}

	code {
		background: #0f0f13;
		padding: 3px;
	}
`;
