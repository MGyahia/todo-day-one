export enum Sectors {
	RH = 'RH',
	Tech = 'Tech',
	Marketing = 'Marketing',
	Communication = 'Communication',
	Business = 'Business'
}

export type Sector = keyof typeof Sectors;
