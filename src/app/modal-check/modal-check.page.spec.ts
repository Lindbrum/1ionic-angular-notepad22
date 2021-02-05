import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCheckPage } from './modal-check.page';

describe('ModalCheckPage', () => {
  let component: ModalCheckPage;
  let fixture: ComponentFixture<ModalCheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
