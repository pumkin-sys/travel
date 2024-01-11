import { Geometry } from "./directions";

export interface PlacesResponse {
	type: string;
	query: string[];
	features: Feature[];
	attribution: string;
}

export interface Feature {
	id: string;
	type: string;
	place_type: string[];
	relevance: number;
	text_es: string;
	place_name_es: string;
	text: string;
	place_name: string;
	bbox?: number[];
	center: number[];
	geometry: Geometry;
	context: Context[];
	matching_text?: string;
	matching_place_name?: string;
}

export interface Context {
	id: string;
	wikidata?: string;
	text_es: string;
	text: string;
	short_code?: string;
}