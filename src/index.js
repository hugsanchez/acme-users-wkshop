const faker = require("faker");

let userArr, genres;
userArr = JSON.parse(window.localStorage.getItem('userArr'));
genres =JSON.parse(window.localStorage.getItem('genres'));
console.log(userArr)
console.log(genres)
if(!userArr || !genres) {
    userArr = new Array(5).fill("").map((_) => faker.name.firstName());
  
    window.localStorage.setItem('userArr',JSON.stringify(userArr));


    const genreGen = () => {
        return  new Array(2).fill('').map ((_) => faker.music.genre());
    }

 genres = [];
userArr.forEach(user => {
    genres.push(genreGen());
});
window.localStorage.setItem('genres',JSON.stringify(genres));

}



const render = () => {

    let curr = window.location.hash.slice(1)*1;

    const html = `
    ${userArr
        .map(
            (user, i) => `
    <li>
        <a href="#${i}">${user}</a>
        ${curr === i ? `<ul class='activated'>
        ${
            genres[i].map(currGenre => `
                <li> ${currGenre}</li>
            `).join('')
        }
        </ul>` : ''}
        
    </li>
    `,
        )
        .join("")}
    `;
    const list = document.querySelector("#user-list");
    list.innerHTML = html;
  
};

render();

window.addEventListener('hashchange', (ev) => {
    
    curr = window.location.hash.slice(1)*1;
    render();
})
window.addEventListener('click', (ev) => {
    if(ev.target.hasChildren)
    //get rid of kids 
    
   console.log(ev.target.children);
        
    
})