import {  Carousel  } from './carousel.js';
import {  ChamadaCarousel } from './chamada.js';

const listaProdutos = '[data-lista-produtos]'
const navegacao = '[data-navegacao]'

const anterior = '[data-anterior]'
const proximo = '[data-proximo]'
const listaChamada = '[data-lista-chamada]'

new Carousel(listaProdutos, navegacao);

new ChamadaCarousel(anterior, proximo, listaChamada);