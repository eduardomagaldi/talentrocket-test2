import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	// constructor() { }

	// ngOnInit() {
	// }

	title = 'Tour of Heroes';
	clickMessage = '';
	form = {
		test: undefined
	};

	@ViewChild('myForm') myForm;

	ngOnInit(): void {
		console.log('this.form.test', this.form.test);
	}

	onClickMe() {
		this.clickMessage = 'You are my hero!';
	}

	onSubmit() {
		// console.log('onSubmit', myForm.form.valid);
		this.showForm();
	}

	showForm() {
		console.log(this);
	}

	// constructor(
	// 	private route: ActivatedRoute,
	// 	private heroService: HeroService,
	// 	private location: Location
	// ) {}



	modelChanged(newObj) {
		console.log('newObj', newObj);


		// console.log('newObj', newObj);
		// console.log('this.myForm', this.myForm);
		// if (this && this.form && this.form.test) {
		// 	console.log('this.form.test', this.form.test);
		// }
		// console.log('this', this);
	}
}
