import _ from "lodash";
import * as CONFIG from "../config.ts";

export function detectMediaType(type: string): Lib.MediaType {
	switch (type) {
		case "text/html":
			return { fileType: 'HTML', mediaType: 'text/html' };
		case "text/csv":
			return { fileType: 'CSV', mediaType: 'text/csv' };
		case "text/plain":
			return { fileType: 'TXT', mediaType: 'text/plain' };
		case "application/json":
			return { fileType: 'JSON', mediaType: 'application/json' };
		case "application/zip":
			return { fileType: 'ZIP', mediaType: 'application/zip' };
		case "application/vnd.geo+json":
			return { fileType: 'GEOJSON', mediaType: 'application/vnd.geo+json' };
		case "application/vnd.google-earth.kml+xml":
			return { fileType: 'KML', mediaType: 'application/vnd.google-earth.kml+xml' };
		case "application/geopackage+sqlite3":
			return { fileType: 'GPKG', mediaType: 'application/geopackage+sqlite3' };
		case "application/vnd.ms-excel":
			return { fileType: 'XLSX', mediaType: 'application/vnd.ms-excel' };
		case "application/vnd.ogc.wfs_xml":
			return { fileType: 'XML', mediaType: 'application/vnd.ogc.wfs_xml' };
		case "application/vnd.ogc.wms_xml":
			return { fileType: 'XML', mediaType: 'application/vnd.ogc.wms_xml' };
		default: {
			return { fileType: 'UNKNOWN', mediaType: 'unknown' };
		}
	}
}

export function detectPeriodicity(dataset: any): string {
	const value = _.get(dataset, 'metadata.mdMaint.maintFreq.MaintFreqCd.@_value', '000');
	const period = CONFIG.META_LKOD.periodicity[value];

	return `http://publications.europa.eu/resource/authority/frequency/${period}`;
}

export function detectTheme(dataset: any): string[] {
	let values: string[] = [];

	if (typeof dataset.category === 'string') {
		values = [];
	} else {
		values = Array.from(dataset.category ?? []);
	}


	// Fallback theme
	if (values.length <= 0) {
		values = ['_fallback'];
	}

	return values.map((value: string) => {
		return (CONFIG.META_LKOD.themes[value] ?? []).map(theme => {
			return `http://publications.europa.eu/resource/authority/data-theme/${theme.toUpperCase()}`;
		});
	}).flatMap(value => value);
}

export function detectDocumentation(dataset: any): string|undefined {
	return _.get(dataset, 'metadata.dataIdInfo.idCitation.otherCitDet', undefined);
}
