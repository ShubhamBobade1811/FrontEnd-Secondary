import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb:FormBuilder){
    
  }

  loginForm:FormGroup;

  ngOnInit(){
    this.loginForm=this.fb.group({
      username:[,Validators.required],
      password:[,Validators.required]
    })
  }
  
  save(){
    console.log(this.loginForm.value);
  }

  autofill(){
    this.loginForm.patchValue({
      username:'Shubham',
      password:'Shu1811Nov'
    })
  }

  resetData(){
    this.loginForm.reset();
  }

  

}
