import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{
  hasUser: boolean = false;

  constructor(public authservice: AuthService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.hasUser = !!this.authservice.currentUserId;
  }

}
