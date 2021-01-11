import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalplacePage } from './modalplace.page';

describe('ModalplacePage', () => {
  let component: ModalplacePage;
  let fixture: ComponentFixture<ModalplacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalplacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalplacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
