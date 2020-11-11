import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyChoseComponent } from './why-chose.component';

describe('WhyChoseComponent', () => {
  let component: WhyChoseComponent;
  let fixture: ComponentFixture<WhyChoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyChoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyChoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
