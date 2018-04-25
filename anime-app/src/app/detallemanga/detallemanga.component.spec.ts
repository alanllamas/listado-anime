import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallemangaComponent } from './detallemanga.component';

describe('DetallemangaComponent', () => {
  let component: DetallemangaComponent;
  let fixture: ComponentFixture<DetallemangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallemangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallemangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
