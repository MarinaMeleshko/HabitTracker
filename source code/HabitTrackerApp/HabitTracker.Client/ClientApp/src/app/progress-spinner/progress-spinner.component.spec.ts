/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { ProgressSpinnerComponent } from './progress-spinner.component';

let component: ProgressSpinnerComponent;
let fixture: ComponentFixture<ProgressSpinnerComponent>;

describe('progress-spinner component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ProgressSpinnerComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(ProgressSpinnerComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});