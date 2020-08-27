import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from 'src/models/Job';
import { environment } from 'src/environments/environment';

const JOBS_PER_PAGE = 10;

@Injectable()
export class JobsService {
    constructor(private http: HttpClient) { }

    /**
     * Fetch Jobs Paginated
     * @param page to fetch (positive integer, 1-based index)
     * @return Jobs Array
     */
    list(page: number = 1, search: string = ''): Observable<Job[]> {
        const searchParameters = search ? `&title_contains=${encodeURIComponent(search)}` : '';
        return this.http.get<Job[]>(
            `${environment.api_base_url}/jobs?_start=${(page-1) * JOBS_PER_PAGE}&_limit=${JOBS_PER_PAGE}` + searchParameters
        );
    }

    /**
     * Fetch Job by ID
     * @param id to retrieve
     * @return Job or null
     */
    fetch(id: string): Observable<Job> {
        return this.http.get<Job>(`${environment.api_base_url}/jobs/${id}`);
    }
}
