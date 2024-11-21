import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../../../components/card/card.component';

@Component({
  selector: 'app-cards-page',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './cards-page.component.html',
  styleUrl: './cards-page.component.css'
})
export class CardsPageComponent {
  cards = [
    {
      image: 'https://i.imgur.com/5G0SJtn.jpeg',
      title: 'París',
      text: 'La ciudad del amor, famosa por la Torre Eiffel, su gastronomía y su arte.',
      buttonText: 'Más información',
      link:'https://es.wikipedia.org/wiki/Par%C3%ADs'
    },
    {
      image: 'https://imgs.search.brave.com/tWFuLpPsFyTESxBk4MvoB1-humO4NoDdcsJhYwJy8Vw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWFq/ZXMubmF0aW9uYWxn/ZW9ncmFwaGljLmNv/bS5lcy9tZWRpby8y/MDI0LzEwLzAyL3Jh/c2NhY2llbG9zLWRl/LW51ZXZhLXlvcmtf/MzllYmY1NGZfNDcz/ODA0MjU0XzI0MTAw/MjE3NDU1NF8xMjAw/eDgwMC5qcGc',
      title: 'Nueva York',
      text: 'La Gran Manzana, hogar de Times Square, Central Park y la Estatua de la Libertad.',
      buttonText: 'Más información',
      link:'https://es.wikipedia.org/wiki/Nueva_York'
    },
    {
      image: 'https://viajes.nationalgeographic.com.es/medio/2024/09/03/tokio_133ce43a_1284581217_240903122054_1280x854.jpg',
      title: 'Tokio',
      text: 'La capital de Japón, conocida por su tecnología avanzada y cultura tradicional.',
      buttonText: 'Más información',
      link:'https://es.wikipedia.org/wiki/Tokio'
    },
    {
      image: 'https://imgs.search.brave.com/SaBuA7GcagjTRkvSfvybXjb9F20iSHBgRgGq4FOtQPE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI2/OTMwNTEwOC9lcy9m/b3RvL3Zpc3RhLWEl/QzMlQTlyZWEtZGVs/LXB1ZXJ0by1kZS1z/JUMzJUFEZG5leS1l/bi1zJUMzJUFEZG5l/eS1hdXN0cmFsaWEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUUwZUxjMF9Qb2VF/cW8tLUtGNVA4UzM5/SXNZMjlIdkFBUnQ1/ZFl5VFdzNTg9',
      title: 'Sídney',
      text: 'Famosa por su emblemática Ópera y sus playas como Bondi Beach.',
      buttonText: 'Más información',
      link:'https://es.wikipedia.org/wiki/Sídney'
    },
    {
      image: 'https://imgs.search.brave.com/c9QTg-DrklQYAAPBalNk0jaPAIhR9HN4rWkWI2Ht0wk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNDk1/NTk1NjM5L3Bob3Rv/L2NvcmNvdmFkby1y/aW8tZGUtamFuZWly/by1icmF6aWwuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWFF/eHdGa1dlSEFJZFdh/VnMyakxYRmhDbWE0/U0FpZDB1S2dGaEdf/aVBFTkE9',
      title: 'Río de Janeiro',
      text: 'Conocida por su carnaval, la playa de Copacabana y el Cristo Redentor.',
      buttonText: 'Más información',
      link:'https://es.wikipedia.org/wiki/Río_de_Janeiro'
    },
    {
      image: 'https://imgs.search.brave.com/T8RpawIQ_MPPARPiJq39nd3kObS-7BTeHMcXZHZKtXE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjIw/NzM3ODU4L2VzL2Zv/dG8vY2l1ZGFkLWRl/bC1jYWJvLXktbG9z/LTEyLWFwb3N0ZWxz/LWRlc2RlLWFycmli/YS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9VkpsOUVNVm9G/Z3VoeXYxMzdtbWts/aWZKN2NGQm04Tkw3/Zm9mZlE1MTBhWT0',
      title: 'Ciudad del Cabo',
      text: 'Una ciudad sudafricana con paisajes increíbles como la Montaña de la Mesa.',
      buttonText: 'Más información',
      link:'https://es.wikipedia.org/wiki/Ciudad_del_Cabo'
    },
    {
      image: 'https://imgs.search.brave.com/UKUY79wmGf8a7o5FrTKP-vSv2mgVKN5egFMwN1907e0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y2FwaWxjbGluaWMu/ZXMvYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxNi8xMS9t/ZXpxdWl0YS1henVs/LmpwZw',
      title: 'Estambul',
      text: 'Una ciudad transcontinental llena de historia, como la Mezquita Azul y Santa Sofía.',
      buttonText: 'Más información',
      link:'https://es.wikipedia.org/wiki/Estambul'
    },
    {
      image: 'https://imgs.search.brave.com/KVKQQwxCEapBxfBn6khr27Rsrcs1OYgKKHvgrwYpND0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92aWFq/ZXMubmF0aW9uYWxn/ZW9ncmFwaGljLmNv/bS5lcy9tZWRpby8y/MDI0LzA5LzEzL3Jv/bWFfYTI4ZTcwMDFf/MTEzMTUzNDc2OF8y/NDA5MTMxNDMyMjBf/MTI4MHg4NTMuanBn',
      title: 'Roma',
      text: 'La ciudad eterna, hogar del Coliseo, la Fontana di Trevi y el Vaticano.',
      buttonText: 'Más información',      
      link:'https://es.wikipedia.org/wiki/Roma'
    }
  ];
}
