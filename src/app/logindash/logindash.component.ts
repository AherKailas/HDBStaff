import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logindash',
  templateUrl: './logindash.component.html',
  styleUrls: ['./logindash.component.css']
})
export class LogindashComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  goToDash()
  {
    this.router.navigate(['/dashboard'])
  }
}
