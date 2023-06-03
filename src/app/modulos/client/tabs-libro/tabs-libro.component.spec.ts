import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsLibroComponent } from './tabs-libro.component';

describe('TabsLibroComponent', () => {
  let component: TabsLibroComponent;
  let fixture: ComponentFixture<TabsLibroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsLibroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsLibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
