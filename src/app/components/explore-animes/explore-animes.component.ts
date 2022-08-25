import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DatapiService } from 'src/app/services/datapi.service';

@Component({
  selector: 'app-explore-animes',
  templateUrl: './explore-animes.component.html',
  styleUrls: ['./explore-animes.component.scss']
})
export class ExploreAnimesComponent implements OnInit {

  page:number = 0;
  animes:any;
  registers:number = 0;
  video:any = '';
  showTrailer:boolean = false;

  constructor(private _s: DatapiService, private _ngxService: NgxUiLoaderService, private _ractive: ActivatedRoute,  private _sanitizer: DomSanitizer) { }


  exploreAnimes(page:number){

    this._ngxService.start();
    this._s.exploreAnimes(this.page).subscribe(
      res =>{
        console.log(res);
        this.animes = res.data;
        this.registers = res.pagination.items.total;
        this._ngxService.stop();
      },
      err =>{ 
        console.log(err);
        this._ngxService.stop();
      }
    )
  }

  exploreAnimesPaginate(e:any){

    console.log(e.page)

      this.page = e.page;
    
    this._ngxService.start('loader-01');
    this._s.exploreAnimes(e.page).subscribe(
      res =>{
        console.log(res);
        this.animes = res.data;
        this._ngxService.stop('loader-01');
      },
      err =>{ 
        console.log(err);
        this._ngxService.stop('loader-01');
      }
    )
  }

  viewTrailer(trailer:string){

    this.video = this._sanitizer.bypassSecurityTrustResourceUrl(`${trailer}`);
    this.showTrailer = true;

    console.log(this.video);
  }


  ngOnInit(): void {
    this.exploreAnimes(this.page);
  }

}
