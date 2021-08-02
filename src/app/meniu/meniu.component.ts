import {Component, OnInit} from '@angular/core';
import {meniuLista} from "../MeniuLista";

@Component({
  selector: 'app-meniu',
  templateUrl: './meniu.component.html',
  styleUrls: ['./meniu.component.css']
})

export class MeniuComponent implements OnInit {
  menu: meniuLista[] = [
    {img: "dashboard.png", content: "Dashboard"},
    {img: "userprofile.png", content: "User Profile"},
    {img: 'regulartables.png', content: 'Regular Tables'},
    {img: "typography.png", content: "Typography"},
    {img: "icons.png", content: "Icons"},
    {img: "googlemaps.png", content: "Google Maps"},
    {img: "notifications.png", content: "Notifications"}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
