import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalCheckViewPage } from './modal-check-view.page';

describe('ModalCheckViewPage', () => {
  let component: ModalCheckViewPage;
  let fixture: ComponentFixture<ModalCheckViewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCheckViewPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalCheckViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
