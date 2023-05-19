import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/data/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private data:DataService) { }
  role = this.data.role;
  ngOnInit(): void {
  }

}
