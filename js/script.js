window.addEventListener('load', ()=> {
    let red = document.querySelector('#ranger');
    let green = document.querySelector('#rangeg');
    let blue = document.querySelector('#rangeb');

    ranger.addEventListener('change', rangerSelect);
    rangeg.addEventListener('change', rangegSelect);
    rangeb.addEventListener('change', rangebSelect);
});

let rangerSelect = (event) => {
    document.querySelector('#textr').value = event.target.value;
    CSS();
};

let rangegSelect = (event) => {
    document.querySelector('#textg').value = event.target.value;
    CSS();
};

let rangebSelect = (event) => {
    document.querySelector('#textb').value = event.target.value;
    CSS();
};

let CSS = () => {
    let ranger = document.querySelector('#textr').value;
    let rangeg = document.querySelector('#textg').value;
    let rangeb = document.querySelector('#textb').value;

    document.querySelector('#resultado').style.backgroundColor = `rgb(${ranger}, ${rangeg}, ${rangeb})`;

};
