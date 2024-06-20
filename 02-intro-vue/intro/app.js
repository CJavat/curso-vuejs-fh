const { createApp, ref } = Vue;


const app = createApp({
  
  setup() {
    //* Se usa ref para una variable reactiva.
    const message = ref("I'm Batman");
    const author = ref("Bruce Wayne");

    const changeQuote = () => {
      message.value = "Soy Goku";
      author.value = "Akira Toriyama";
    }

    // setTimeout(() => {
    //* Se utiliza el .value para cambiar el valor
    //   message.value = "Soy Goku";
    //   author.value = "Akira Toriyama";
    // }, 1500);

    //* Se tiene que retornar el valor
    return { message, author, changeQuote };
  }
});

app.mount('#myApp');