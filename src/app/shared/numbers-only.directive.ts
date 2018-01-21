import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators } from '@angular/forms';

export function NumbersOnlyValidator(nameRe: RegExp): ValidatorFn {
	return (control: AbstractControl): {[key: string]: any} => {
		const allowed = nameRe.test(control.value);
		return !allowed ? {'numbersOnly': {value: control.value}} : null;
	};
}

@Directive({
	selector: '[numbersOnly]',
	providers: [{provide: NG_VALIDATORS, useExisting: NumbersOnlyValidatorDirective, multi: true}]
})
export class NumbersOnlyValidatorDirective implements Validator {
	@Input() numbersOnly: string;

	validate(control: AbstractControl): {[key: string]: any} {
		return NumbersOnlyValidator(new RegExp('^[0-9]+$'))(control);
	}
}