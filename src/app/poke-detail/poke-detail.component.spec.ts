import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeDetailComponent } from './poke-detail.component';

describe('PokeDetailComponent', () => {
  let component: PokeDetailComponent;
  let fixture: ComponentFixture<PokeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokeDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
