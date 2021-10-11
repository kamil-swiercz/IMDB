import { ResultsOfTvShow } from "./resultsOfTvShow";

export interface TvShow {
    page?: number,
    results?: ResultsOfTvShow[],
    total_results?: number,
    total_pages?: number
}