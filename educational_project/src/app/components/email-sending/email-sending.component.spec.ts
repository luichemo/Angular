import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSendingComponent } from './email-sending.component';

describe('EmailSendingComponent', () => {
  let component: EmailSendingComponent;
  let fixture: ComponentFixture<EmailSendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailSendingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailSendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
