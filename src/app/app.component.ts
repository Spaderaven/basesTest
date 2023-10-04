import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases';

  games = [
    {
      title: 'Counter-Strike: Global Offensive',
      description: 'Competitive first-person shooter.',
      imageUrl: 'assets\Tekken.jpg',
    },
    {
      title: 'League of Legends',
      description: 'Multiplayer online battle arena game.',
      imageUrl: 'assets/lol.jpg',
    },
    {
      title: 'Dota 2',
      description: 'Strategy-based multiplayer game.',
      imageUrl: 'assets/dota2.jpg',
    },
    // Add more games as needed
  ];

  tournaments = [
    {
      title: 'Summer Championship',
      game: 'Counter-Strike: Global Offensive',
      date: '2023-08-15',
      imageUrl: 'assets/tournament1.jpg',
    },
    {
      title: 'League of Legends World Finals',
      game: 'League of Legends',
      date: '2023-11-05',
      imageUrl: 'assets/tournament2.jpg',
    },
    {
      title: 'Dota 2 International',
      game: 'Dota 2',
      date: '2023-09-30',
      imageUrl: 'assets/tournament3.jpg',
    },
    // Add more tournaments as needed
  ];



}
