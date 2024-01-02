import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
    const today = new Date();
    const birthdate= new Date(control.value)
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();
  
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
  
  return age >= 18 ? null : { underage: true };
 
}

//   if (!control.value.startsWith('https') || !control.value.includes('.io')) {
//     return { invalidUrl: true };
//   }
//   return null;