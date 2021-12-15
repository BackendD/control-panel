import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentoComponent } from './agento.component';

describe('AgentoComponent', () => {
  let component: AgentoComponent;
  let fixture: ComponentFixture<AgentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
