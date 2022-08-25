import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreAnimesComponent } from './components/explore-animes/explore-animes.component';
import { HomeAnimeComponent } from './components/home-anime/home-anime.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:'', component: HomeAnimeComponent, children:[
    {path:'home', component: MainContentComponent},
    {path:'search', component: SearchComponent},
    {path:'explore', component: ExploreAnimesComponent},
  ]}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
