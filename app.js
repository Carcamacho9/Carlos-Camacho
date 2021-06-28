const buscar = document.getElementById("buscar");
const button = document.getElementById("buscar-google");
const button2 = document.getElementById("buscar-suerte");

buscar.addEventListener('change', (event) => {
    event.preventDefault();
    const submit = event.target.value;
    const query = `http://www.google.com/search?hl=es&q=${submit}`;

    button.onclick = function () {
        window.open(query);
    };
    button2.onclick = function () {
        window.open(query);
    };
});

buscar.addEventListener('keyup', (event) => {
    let key = event.keyCode || event.which;
    const submit = event.target.value;
    const query = `http://www.google.com/search?hl=es&q=${submit}`;
  
    if (key === 13) {
      window.open(query);
    }
  });