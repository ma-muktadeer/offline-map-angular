import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlMpComponent } from './gl-mp.component';

describe('GlMpComponent', () => {
  let component: GlMpComponent;
  let fixture: ComponentFixture<GlMpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlMpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlMpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
