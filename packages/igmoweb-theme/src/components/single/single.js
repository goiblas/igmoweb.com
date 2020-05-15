import ArticleHeader from './article-header';
import PostContent from './post-content';
import PostMeta from './post-meta';
import PostTags from './post-tags';
import React, { useEffect } from 'react';
import { connect, styled } from 'frontity';

const Single = ( { actions, state } ) => {
	const { router, source } = state;
	const { link } = router;

	useEffect( () => {
		// Prefetch the homepage
		actions.source.fetch( '/' );
	}, [] );

	const data = source.get( link );

	if ( ! data.isReady ) {
		return null;
	}

	const { id, type } = data;

	const post = source[ type ][ id ];

	// Post date
	const { content, type: postType } = post;

	return (
		<Article>
			<ArticleHeader post={ post } />
			{ 'post' === postType && <PostMeta post={ post } /> }
			<PostTags post={ post } />
			<PostContent content={ content.rendered } />
		</Article>
	);
};

export default connect( Single );

const Article = styled.article`
	> * {
		margin-bottom: 1.3rem;
	}
`;