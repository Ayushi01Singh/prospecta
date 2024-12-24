import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet, CommonModule,RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  login(){
    this.router.navigateByUrl('/');
  }

  register(){
    this.router.navigateByUrl('/information/student');
  }
  details(){
    this.router.navigateByUrl('/information/studentdetails');
  }

}