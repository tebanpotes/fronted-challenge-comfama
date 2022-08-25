import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { DatapiService } from 'src/app/services/datapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  letter:string = '';
  video:any = '';
  showTrailer:boolean = false;

  constructor(private _s: DatapiService, private _ngxService: NgxUiLoaderService, private _ractive: ActivatedRoute, private _sanitizer: DomSanitizer) {
    _ractive.url.subscribe(e=>{
      _ractive.queryParams.subscribe(params =>{

        if(params.letter){
          this.searchAnime(params.letter);
        }
        
      })
    })
   }


  resultSearch:any;
  searchAnime(letter:string){

    this._ngxService.start();
    this._s.searchAnime(letter).subscribe(
      res => {
        console.log(res);
        this.resultSearch = res.data;
        this._ngxService.stop();
      },
      err => {
        console.log(err);
        this._ngxService.stop();
      }
    )
  }

  viewTrailer(trailer:string){

    this.video = this._sanitizer.bypassSecurityTrustResourceUrl(`${trailer}`);
    this.showTrailer = true;

    console.log(this.video);
  }

  ngOnInit(): void {

    this._ractive.queryParams.subscribe(
      params =>{
        this.letter= params.letter;
       
      }
    )

    
  }

}
