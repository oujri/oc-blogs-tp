import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
	created_at = new Date();

	@Input() title: string;
	@Input() content: string;
	@Input() count: number;

	constructor() { }

	ngOnInit() { }

	getColor() {
	  return this.count > 0 ? 'green' : this.count === 0 ? 'black' : 'red';
	}

	increment() {
		this.count++;
	}

	decrement() {
		this.count--;
	}
}
