import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchgroupComponent } from './switchgroup.component';

describe('SwitchgroupComponent', () => {
  let component: SwitchgroupComponent;
  let fixture: ComponentFixture<SwitchgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
