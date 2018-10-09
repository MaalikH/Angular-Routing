import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  onLoadServers(id: number) {
  	//navigates on click programatically 
  	//this.router.navigate(['/servers']);
     //Setting parameters for path (/servers/5/edit) & attaching parameters to path /servers/5/edit?allowEdit=1 & adding fragment for servers/5/edit?allowEdit=1#loading
     this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment:'loading'});
  }

}
