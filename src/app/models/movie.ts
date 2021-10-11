import { ResultsOfMovie } from "./resultsOfMovie";

export interface Movie {
    page?: number,
    results?: ResultsOfMovie[],
    total_results?: number,
    total_pages?: number
}
