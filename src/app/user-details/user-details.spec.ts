import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetails } from './user-details';
import { provideRouter } from '@angular/router';

describe('UserDetails', () => {
  let component: UserDetails;
  let fixture: ComponentFixture<UserDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDetails],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UserDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
