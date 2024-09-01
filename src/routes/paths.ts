export const Paths = {
	default: () => '/list',
	list: () => '/list',
	details: (id: string | ':id') => `/list/${id}`
}