interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Alex Cuadro', // Site author
	title: 'EDU Alex', // Site title.
	description: 'Blog con recursos educativos acerca de Historia.', // Description to display in the meta tags
	lang: 'es-ES',
	ogLocale: 'es_UY',
	shareMessage: 'Comparte esta publicación', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
