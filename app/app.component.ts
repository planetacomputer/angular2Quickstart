import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  	<header>
		<nav class="navbar navbar-inverse">
			<div class="navbar-header">
				<a href="/" class="navbar-brand">My Angular2 App</a>
			</div>
		</nav>
  	</header>
  	<main>
  		<div class="row">
	  		<div class="col-sm-4">
			    <div *ngIf="users">
					<ul class="list-group users-list">
						<li class="list-group-item"  *ngFor="let user of users">
							{{user.name}} {{user.username}}
						</li>
					</ul>
				</div>
			</div>
			<div class="col-sm-8">
				<div class="jumbotron">
			      <h1>Welcome to Our App2!</h1>
			      <p>{{message}}</p>
	    		</div>
			</div>
		</div>
	</main>
	<footer class="text-center">
		Copyright &copy; 2107
	</footer>    
  `,
  styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
  `]
})
export class AppComponent {
	message = "Hola";
	activeUser:any;
	users = [
		{id: 25, name: 'Chris', username: 'Sevilleja'},
		{id: 26, name: 'David', username: 'Canovas'},
		{id: 25, name: 'Dan', username: 'Vehouven'}
	];

	
}
