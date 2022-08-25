import { Component, OnInit } from '@angular/core';
import { DatapiService } from 'src/app/services/datapi.service';
import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-anime',
  templateUrl: './home-anime.component.html',
  styleUrls: ['./home-anime.component.scss']
})
export class HomeAnimeComponent implements OnInit {

  display:boolean = false;

  constructor(  private _route: Router) { 

  
    
   
  }


  searchAnime(letter:string){


    this._route.navigate([`/search`], {
      queryParams: {letter: letter}
    });


    // this.ngxService.start('loader-01');
    // this._s.searchAnime(letter).subscribe(
    //   res =>{
    //     console.log(res);
    //     this.ngxService.stop('loader-01');
    //   },
    //   err =>{
    //     console.log(err);
    //     this.ngxService.stop('loader-01');
    //   }
    // )

  }

 

  ngOnInit(): void {


  }

}
