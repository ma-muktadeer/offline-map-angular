import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PltMpComponent } from './plt-mp.component';

describe('PltMpComponent', () => {
  let component: PltMpComponent;
  let fixture: ComponentFixture<PltMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PltMpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PltMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
