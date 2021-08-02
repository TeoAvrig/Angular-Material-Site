import {Component} from '@angular/core';
import {ListDataType, TableDataType} from "../TableDataType";

const elementData: TableDataType[] = [
  {
    id: 1,
    name: "Dakota Rice",
    salary: 35738,
    country: "Niger",
    city: "Out-Tunrhout"
  },
  {
    id: 2,
    name: "Minverva",
    salary: 38332,
    country: "Curacao",
    city: "Sinaai-Waas"
  },
  {
    id: 3,
    name: "Sage Rodriguez",
    salary: 47355,
    country: "Nertherlands",
    city: "Overland Park"
  },
  {
    id: 4,
    name: "Philip Chanley",
    salary: 12343,
    country: "Korea, South",
    city: "Gloucester"
  },
  {
    id: 5,
    name: "Doris Greene",
    salary: 89453,
    country: "Malawi",
    city: "Feldkirchen"
  }
];

const listData: ListDataType[] = [
  {isCheck: false, text: "Sign contract for What are conference organizers afraid of?"},
  {isCheck: false, text: "Lines From Great Russian Literature? Or E-mails From My Boss?"},
  {isCheck: false, text: "Flooded One year later, assessing what was lost and what was found when"},
  {isCheck: false, text: "Creare 4 Invisible User Experiences you Never Know About"},
]

@Component({
  selector: 'app-card-data',
  templateUrl: './card-data.component.html',
  styleUrls: ['./card-data.component.css']
})

export class CardDataComponent {
  dataSource = elementData;
  dataInfo = listData;

  reverse(click: boolean) {
    click = !click;
  }
}
