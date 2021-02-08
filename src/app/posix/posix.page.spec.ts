import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PosixPage } from './posix.page';

describe('PosixPage', () => {
  let component: PosixPage;
  let fixture: ComponentFixture<PosixPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosixPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PosixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
