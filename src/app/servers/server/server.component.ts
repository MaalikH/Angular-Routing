import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, private route : ActivatedRoute, private router: Router ) { }


  ngOnInit() {
  	//setting const Id to ID variable in path. '+' used to convert string to number
  	const id = +this.route.snapshot.params['id'];
  	//set local server to server returned in getServer method
  	this.server = this.serversService.getServer(id);
  	//subscribe to id param in route so server is updated when path is updated
  	this.route.params.subscribe(
  			(params: Params) => {
  				this.server = this.serversService.getServer(+params['id'])
  			}
  	);
  }

  onEdit() {
    //this.router.navigate(['/servers', this.server.id, 'edit'], {relativeTo: this.route});

    //queryParamsHandling passing parameters to next path. 'Merge' would've merged params if other params existed in next path
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});

  }


}
