import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/services/jobs.service';
import { Job } from 'src/models/Job';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'jobs-front';

  page: number;
  searchString: string = '';
  loading: boolean;
  jobs: Job[] = [];

  constructor(private jobsService: JobsService) {}

  ngOnInit() {
    this.page = 1;
    this.fetchJobs();
  }

  /**
   * Navigate to the previous page
   */
  previousPage() {
    this.page--;
    if (this.page < 1) this.page = 1;
    this.fetchJobs();
  }

  /**
   * Navigate to the next page
   */
  nextPage() {
    this.page++;
    this.fetchJobs();
  }

  /**
   * Submit search by title
   */
  submitSearch() {
    this.page = 1;
    this.fetchJobs();
  }

  /**
   * Fetch jobs according to page and searchString
   */
  fetchJobs() {
    this.loading = true;
    this.jobsService.list(this.page, this.searchString).subscribe(
      (jobs) => {
        this.jobs = jobs;
        this.loading = false;
      }
    )
  }
}
