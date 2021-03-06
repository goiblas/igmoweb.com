export default {
	name: 'igmoweb',
	state: {
		frontity: {
			url: 'https://igmoweb.com',
			title: 'A mí me funciona',
			description: 'El blog de Ignacio Cruz',
			feed: 'https://igmoweb.com/api/rss',
		},
	},
	packages: [
		{
			name: 'igmoweb-theme',
			state: {
				theme: {
					topBannerPage: '/hola',
					menu: [
						[ 'Cursos', '/cursos' ],
						[ 'Sobre mí', '/sobre-mi' ],
						[ 'Contacto', '/contacto' ],
					],
					codeMenu: [
						[ 'What is Code', '/category/what-is-code' ],
						[ "Please don't code", '/category/please-dont-code/' ],
					],
					featured: {
						showOnList: true,
						showOnPost: false,
					},
				},
			},
		},
		{
			name: '@frontity/wp-source',
			state: {
				source: {
					api:
						'https://public-api.wordpress.com/wp/v2/sites/igmoweb.com',
				},
			},
		},
		'@frontity/tiny-router',
		'@frontity/html2react',
		{
			name: 'frontity-social-previews',
			state: {
				socialPreviews: {
					siteLogo:
						'https://igmoweb.files.wordpress.com/2020/05/bug.png',
					twitter: {
						creator: 'igmoweb',
					},
				},
			},
		},
	],
};
