import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsListFavouritesComponent } from './cats-list-favourites.component';

describe('CatsListFavouritesComponent', () => {
  let component: CatsListFavouritesComponent;
  let fixture: ComponentFixture<CatsListFavouritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsListFavouritesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatsListFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
