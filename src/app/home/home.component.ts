import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	form = {
		firstName: undefined,
		lastName: undefined,
		companyName: undefined,
		billingAddress: undefined,
		additionalInformation: undefined,
		zipCode: undefined,
		city: undefined,
		termsOfService: undefined,
		newsletter: undefined
	};

	@ViewChild('myForm') myForm;

	ngOnInit(): void {
	}

	onClickMe() {
		console.log('click me');
	}

	onSubmit() {
		// console.log('onSubmit', myForm.form.valid);
		this.showForm();
		alert('submitted!');
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
	}
}