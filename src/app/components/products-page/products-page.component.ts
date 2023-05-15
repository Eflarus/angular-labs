import { Component } from '@angular/core';
import {Product} from "../../shared/product.interface";

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {
  cardsData: Product[] = [
    {
      id: 1,
      title: 'First Card',
      subtitle: 'Subtitle',
      description: 'Lorem Ipsum dolor sit amet, consectetur elit',
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      imgAlt: 'Alt text',
      avatarUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    },
    {
      id: 2,
      title: 'Second Card',
      subtitle: 'Subtitle',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      imgAlt: 'Alt text',
      avatarUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    },
    {
      id: 3,
      title: 'Third Card',
      subtitle: 'Subtitle',
      description: 'Lorem Ipsum dolor sit amet, consectetur adipiscing elit',
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      imgAlt: 'Alt text',
      avatarUrl: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
    },
  ];
}
