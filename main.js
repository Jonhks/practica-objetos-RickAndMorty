const rickAndMorty = data.results;

const root = document.getElementById('root');
const alfabetico = document.getElementById('alfabetico')

const printData = rickAndMorty => {
  let cajita = '';
  rickAndMorty.forEach(personaje => {
    const {name, species, gender, created, image} = personaje;
    cajita += `<div class="card column is-3" >
    <div class="card-image">
      <figure class="image is-4by3">
        <img src="${image}" alt="Placeholder image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img src="${image}" alt="Placeholder image">
          </figure>
        </div>
        <div class="media-content">
          <p class="title is-4">${name}</p>
          <p class="subtitle is-6">${species}</p>
        </div>
      </div>
  
      <div class="content">
        ${gender}
        <br>
        <time datetime="2016-1-1">${created}</time>
      </div>
    </div>
  </div>`
})
  root.innerHTML = cajita;
}

const filterData = (arr, type, atr) => {
  const resultado = arr.filter(personaje => personaje[atr] === type);
  type == 'All' ? printData(arr) : printData(resultado);
}

const handlerOnclick = (type) => filterData(rickAndMorty, type, 'gender');

const onclickSpecie = (type) => filterData(rickAndMorty, type, 'species');

printData(rickAndMorty);

['Abi', 'jonh']

// const onclickOrder = (type) => {
//   if(type == 'a-z'){
//     const result = rickAndMorty.sort((a,b) => {
//       if(a.name > b.name){
//         return 1
//       } 
//       if(a.name < b.name){
//         return -1
//       }
//       return 0
//     });
//     printData(result);
//   } else if(type == 'z-a'){
//     const result = rickAndMorty.sort((a,b) => {
//       if(a.name < b.name){
//         return 1
//       } 
//       if(a.name > b.name){
//         return -1
//       }
//       return 0
//     });
//     printData(result);
//   }
// }


const onclickOrder = (type) => {
  if(type == 'a-z'){
    const result = rickAndMorty.sort((a,b) => a.name > b.name ? 1 : -1);
    printData(result);
  } else if(type == 'z-a'){
    const result = rickAndMorty.sort((a,b) => a.name < b.name ? 1 : -1);
    printData(result);
  }
}

const onclickDate = (type) => {
  if(type == 'nuevo'){
    // const result = rickAndMorty.sort((a,b) => new Date(a.created).getTime() > new Date(b.created).getTime() ? 1 : -1)
    const result = rickAndMorty.sort((a,b) => new Date(a.created).getTime() - new Date(b.created).getTime())
    printData(result);
  }
  if(type == 'antiguo'){
    const result = rickAndMorty.sort((a,b) =>  new Date(b.created).getTime() - new Date(a.created).getTime())
    printData(result);
  }
}

