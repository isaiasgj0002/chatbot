import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPrincipalComponent } from './chat-principal.component';

describe('ChatPrincipalComponent', () => {
  let component: ChatPrincipalComponent;
  let fixture: ComponentFixture<ChatPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatPrincipalComponent]
    });
    fixture = TestBed.createComponent(ChatPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
