import GeraCPF from './modules/GeraCPF';

import './assets/CSS/style.css';

const form = document.querySelector('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const gerador = new GeraCPF();

    const cpfGerado = gerador.CriaCPF();

    const result = document.querySelector('#result');

    result.innerHTML =  cpfGerado;
});

