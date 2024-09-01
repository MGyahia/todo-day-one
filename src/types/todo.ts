import { Sector } from "./sector";

export interface ITodo {
	readonly id: string,
	title: string,
	type: Sector,
	isDone: boolean,
	createdAt: Date | String
}
