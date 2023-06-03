import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosPorEditorialComponent } from './libros-por-editorial.component';

describe('LibrosPorEditorialComponent', () => {
  let component: LibrosPorEditorialComponent;
  let fixture: ComponentFixture<LibrosPorEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibrosPorEditorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibrosPorEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
