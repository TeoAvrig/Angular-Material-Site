import {Component, OnInit} from '@angular/core';
import {CardStatisticList} from '../CardStatisticList'

@Component({
  selector: 'app-card-statistic',
  templateUrl: './card-statistic.component.html',
  styleUrls: ['./card-statistic.component.css']
})

export class CardStatisticComponent implements OnInit {
  cardinfo: CardStatisticList[] = [
    {
      title: "Website Views",
      subtitle: "Last Campaign Performance",
      img: "website.png",
      footerText: "updated 10 minutes ago"
    },
    {
      title: "Daily Sales",
      subtitle: "55% increase in today`s sales",
      img: "dailysales.png",
      footerText: "updated 4 minutes ago"
    },
    {
      title: "Completed Tasks",
      subtitle: "Last Campaign Performance",
      img: "completedtasks.png",
      footerText: "campaign sent 26 minutes ago"
    }
  ];
  cardinfoMini: CardStatisticList[] = [
    {
      title: "Followers",
      subtitle: "+245",
      img: "followers.png",
      footerText: "Just Updated"
    },
    {
      title: "Website Visits",
      subtitle: "75.521",
      img: "websitevisits.png",
      footerText: "Tracked from Google Analytics"
    },
    {
      title: "Revenue",
      subtitle: "$ 34.245",
      img: "revenue.png",
      footerText: "Last 24 Hours"
    },
    {
      title: "Booking",
      subtitle: "185",
      img: "booking.png",
      footerText: "Get More Space..."
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
