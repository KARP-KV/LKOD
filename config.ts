import path from "path";

export const ARCGIS_URL = 'https://www.datazapad.cz/data.json';
export const ARCGIS_FILE = path.resolve(__dirname, 'data/arcgis.json');

export const DTO_FILE = path.resolve(__dirname, 'data/dto.json');

export const LKOD_URL = process.env.URL || process.env.VERCEL_URL || 'https://open.datazapad.cz';
export const LKOD_DIR = path.resolve(__dirname, 'public');
export const LKOD_FILE = path.resolve(__dirname, 'public/katalog.jsonld');

export const META_LKOD = {
	name_cz: "Katalog otevřených dat Karlovarského kraje",
	description_cz: "Otevřená data Karlovarského kraje. Datové sady jsou ve strojově čitelných formátech, volně přístupné k libovolným (legálním) účelům využití, bez licenčních omezení.",
	provider: "https://rpp-opendata.egon.gov.cz/odrpp/zdroj/orgán-veřejné-moci/70891168",
	homepage: "https://www.datazapad.cz/",
	contact_type: 'Organizace',
	contact_name: 'Karlovarská agentura rozvoje podnikání, p. o.',
	contact_email: 'info@datazapad.cz',
	ruian: 'https://linked.cuzk.cz/resource/ruian/vusc/51',
	themes: {
		'Kraj a dotace': ['REGI', 'GOVE'],
		'Investice kraje': ['GOVE', 'ECON'],
		'Lidé a sociální služby': ['SOCI'],
		'Zdravotnictví a zdraví': ['HEAL'],
		'IZS a bezpečnost': ['JUST'],
		'Veřejná doprava a silnice': ['TRAN'],
		'Ekonomika a trh práce': ['ECON'],
		'Školství a výzkum': ['EDUC', 'TECH'],
		'Kultura a cestovní ruch': ['EDUC'],
		'Životní prostředí': ['ENVI'],
		'_fallback': ['OP_DATPRO'],
	} as Record<string, string[]>,
	periodicity: {
		'000': 'UNKNOWN',
		'001': 'CONT',
		'002': 'DAILY',
		'003': 'WEEKLY',
		'004': 'BIWEEKLY',
		'005': 'MONTHLY',
		'006': 'QUARTERLY',
		'007': 'BIENNIAL',
		'008': 'ANNUAL',
		'009': 'OTHER',
		'010': 'IRREG',
		'011': 'NEVER',
		'012': 'UNKNOWN',
	} as Record<string, string>,
	excludedDatasets: [
	]
}
