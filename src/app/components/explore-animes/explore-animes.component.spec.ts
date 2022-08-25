import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreAnimesComponent } from './explore-animes.component';

describe('ExploreAnimesComponent', () => {
  let component: ExploreAnimesComponent;
  let fixture: ComponentFixture<ExploreAnimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreAnimesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreAnimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
