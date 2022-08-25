import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DatapiService } from 'src/app/services/datapi.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  animes:any;
  responsiveOptions:any;
  video:any = '';
  showTrailer:boolean = false;

  constructor(private _s: DatapiService,private _ngxService: NgxUiLoaderService, private _router: Router, private _sanitizer: DomSanitizer) {
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 5,
          numScroll: 5
      },
      {
          breakpoint: '767px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '560px',
          numVisible: 2,
          numScroll: 2
      }
  ];
   }


   getAnimes(){
    this._ngxService.start();
    this._s.getAnimes().subscribe(
      res =>{
        console.log(res);
        this.animes = res.data;
        this._ngxService.stop();
      },
      err =>{
        console.log(err);
        this._ngxService.stop();
      }
    )
  }


  goExplore(){

    this._router.navigateByUrl('explore');

  }

  viewTrailer(trailer:string){

    this.video = this._sanitizer.bypassSecurityTrustResourceUrl(`${trailer}`);
    this.showTrailer = true;

  }

  ngOnInit(): void {

    this.getAnimes();
  }

}
