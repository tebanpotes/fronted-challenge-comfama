import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAnimeComponent } from './home-anime.component';

describe('HomeAnimeComponent', () => {
  let component: HomeAnimeComponent;
  let fixture: ComponentFixture<HomeAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
