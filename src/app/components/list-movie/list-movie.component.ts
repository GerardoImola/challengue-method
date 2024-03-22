import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {MatHeaderRowDef, MatTableDataSource, MatTableModule} from "@angular/material/table";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSort, MatSortModule, Sort} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {Router} from "@angular/router";
import {MatDrawer, MatDrawerContainer} from "@angular/material/sidenav";
import { MatPaginatorModule} from "@angular/material/paginator";
import {MovieService} from "../../services/movie.service";
import {AddMovieFormI, MovieFirebaseResponse} from "../../interfaces/movie/movie.interface";
import {SkeletonLoadingComponent} from "../skeleton-loading/skeleton-loading.component";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-list-movie',
  standalone: true,
  imports: [
    MatTableModule, MatFormField, MatLabel, MatHeaderRowDef, MatFormFieldModule,
    MatInputModule, MatSortModule, MatProgressSpinnerModule,
    MatDrawer, MatDrawerContainer, MatPaginatorModule, SkeletonLoadingComponent,
    DatePipe
  ],
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.scss', ]
})
export class ListMovieComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['Title', 'Year'];
  dataSource: MatTableDataSource<AddMovieFormI> = new MatTableDataSource<AddMovieFormI>();
  isLoadingResults: boolean = true;
  movies: Array<MovieFirebaseResponse> = [];
  moviesFilter: Array<MovieFirebaseResponse> = [];
  loadingMovies: boolean = true;


  private movieService = inject(MovieService);
  private router = inject(Router);

  ngOnInit(): void {
    this.fetchMovies();
  }

  fetchMovies(): void {
    this.movieService.getMoviesByUserId().subscribe(movies => {
      this.dataSource.data = movies;
      this.moviesFilter = this.movies;
      this.isLoadingResults = false;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  handleDetailMovie(id: string) {
    this.router.navigate(['/movie', id])
  }
}
