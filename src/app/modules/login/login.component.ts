import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
constructor(private formBuilder: FormBuilder){

}

ngOnInit() {
  this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
}

get f() { return this.loginForm.controls; }

onSubmit() {
  console.log(this.f.username.value);
  console.log(this.f.password.value);
}

}



//   // ,
//   //   private authenticationService: AuthenticationServ                              ice,
//   //   private alertService: AlertService
//   constructor( private formBuilder: FormBuilder,
//     private route: ActivatedRoute,
//     private router: Router
// ) {
//     // redirect to home if already logged in
//     // if (this.authenticationService.currentUserValue) {
//     //     this.router.navigate(['/']);
//     // }
// }

// ngOnInit() {
//     this.loginForm = this.formBuilder.group({
//         username: ['', Validators.required],
//         password: ['', Validators.required]
//     });

//     // get return url from route parameters or default to '/'
//     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
// }

// // convenience getter for easy access to form fields

// onSubmit() {
//     this.submitted = true;

//     // stop here if form is invalid
//     if (this.loginForm.invalid) {
//         return;
//     }

//     this.loading = true;
//     // this.authenticationService.login(this.f.username.value, this.f.password.value)
//     //     .pipe(first())
//     //     .subscribe(
//     //         data => {
//     //             this.router.navigate([this.returnUrl]);
//     //         },
//     //         error => {
//     //             this.alertService.error(error);
//     //             this.loading = false;
//     //         });
//   }

