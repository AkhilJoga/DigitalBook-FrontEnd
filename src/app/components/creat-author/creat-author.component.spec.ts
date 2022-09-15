import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatAuthorComponent } from './creat-author.component';

describe('CreatAuthorComponent', () => {
  let component: CreatAuthorComponent;
  let fixture: ComponentFixture<CreatAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
