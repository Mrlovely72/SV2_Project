import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuTopBar } from './menu-top-bar/menu-top-bar';
import { SlideTop } from "./slide-top/slide-top";
import { CardProduct } from './card-product/card-product';
import { Aboutus } from './aboutus/aboutus';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MenuTopBar,
    SlideTop,
    CardProduct,
    Aboutus
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'SV2_Web_Ecommerce';
  product : any = 
  [
    {
      "id": 1,
      "name": "Smart Watch Pro",
      "description": "Advanced smartwatch with fitness tracking and long battery life.",
      "price": 129.99,
      "Discount": 50,
      "category": "Wearables",
      "image": "product/smart_watch.jpg"
    },
    {
      "id": 2,
      "name": "Wireless Earbuds",
      "description": "High-quality sound and noise cancellation in a compact design.",
      "price": 79.99,
      "Discount": 50,
      "category": "Audio",
      "image": "product/Wireless_Earbuds.jpg"
    },
    {
      "id": 3,
      "name": "4K Action Camera",
      "description": "Waterproof action cam for adventure and vlogging.",
      "price": 149.99,
      "Discount": 50,
      "category": "Cameras",
      "image": "product/4K_Action_Camera.jpg"
    },
    {
      "id": 4,
      "name": "Bluetooth Speaker",
      "description": "Portable speaker with deep bass and stereo sound.",
      "price": 45.00,
      "Discount": 50,
      "category": "Audio",
      "image": "product/Bluetooth_Speaker.jpg"
    },
    {
      "id": 5,
      "name": "Fitness Tracker Band",
      "description": "Track your steps, heart rate, and sleep.",
      "price": 39.99,
      "Discount": 50,
      "category": "Wearables",
      "image": "product/Fitness_Tracker_Band.jpg"
    },
    {
      "id": 6,
      "name": "Gaming Mouse",
      "description": "High precision gaming mouse with customizable buttons.",
      "price": 59.00,
      "Discount": 50,
      "category": "Accessories",
      "image": "product/Gaming_Mouse.jpg"
    },
    {
      "id": 7,
      "name": "Mechanical Keyboard",
      "description": "RGB backlit keyboard with blue switches for fast typing.",
      "price": 89.99,
      "Discount": 50,
      "category": "Accessories",
      "image": "product/Mechanical_Keyboard.jpg"
    },
    {
      "id": 8,
      "name": "Smartphone Gimbal",
      "description": "Stabilize your mobile videos with ease.",
      "price": 119.50,
      "Discount": 50,
      "category": "Cameras",
      "image": "product/Smartphone_Gimbal.jpg"
    },
    {
      "id": 9,
      "name": "LED Desk Lamp",
      "description": "Adjustable brightness and color temperature for workspace.",
      "price": 25.75,
      "Discount": 50,
      "category": "Office",
      "image": "product/LED_Desk_Lamp.jpg"
    },
    {
      "id": 10,
      "name": "USB-C Hub",
      "description": "Multiport adapter for laptops with HDMI, USB, and card reader.",
      "price": 34.90,
      "Discount": 50,
      "category": "Accessories",
      "image": "product/USB_C_Hub.jpg"
    },
    {
      "id": 11,
      "name": "Headphones",
      "description": "Block out the world and enjoy immersive audio.",
      "price": 199.99,
      "Discount": 50,
      "category": "Audio",
      "image": "product/Noise_Cancelling_Headphones.jpg"
    },
    {
      "id": 12,
      "name": "Tablet Stand",
      "description": "Adjustable stand for tablets and phones.",
      "price": 15.00,
      "Discount": 50,
      "category": "Accessories",
      "image": "product/Tablet_Stand.jpg"
    }
  ]


}
