export enum Sectors {
	RH = 'RH',
	Tech = 'Tech',
	Marketing = 'Marketing',
	Communication = 'Communication'
}

export type Sector = keyof typeof Sectors;
