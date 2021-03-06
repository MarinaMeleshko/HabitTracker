import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { HabitProgressComponent } from './habit-progress.component';

let component: HabitProgressComponent;
let fixture: ComponentFixture<HabitProgressComponent>;

describe('habit-progress component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ HabitProgressComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(HabitProgressComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
