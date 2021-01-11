import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MylocationPage } from './mylocation.page';

describe('MylocationPage', () => {
  let component: MylocationPage;
  let fixture: ComponentFixture<MylocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MylocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MylocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
