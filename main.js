const contenitore = document.getElementById("contenitore");

const members = [
    {
        nome : "Wayne Barnett",
        lavoro : "Founder & CEO",
        foto : "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome : "Angela Caroll",
        lavoro : "Chief Editor",
        foto : "angela-caroll-chief-editor.jpg"
    },
    {
        nome : "Walter Gordon",
        lavoro : "Office Manager",
        foto : "walter-gordon-office-manager.jpg"
    },
    {
        nome : "Angela Lopez",
        lavoro : "Social Media Manager",
        foto : "angela-lopez-social-media-manager.jpg"
    },
    {
        nome : "Scott Estrada",
        lavoro : "Developer",
        foto : "scott-estrada-developer.jpg"
    },
    {
        nome : "Barbara Ramos",
        lavoro : "Graphic Designer",
        foto : "barbara-ramos-graphic-designer.jpg"
    }
    
]
for(let i = 0; i < members.length; i++){
    console.log(members[i]);
    contenitore.innerHTML += `<div class="card m-4" style="width: 18rem;">
    <img src="./img./${members[i].foto}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${members[i].nome}</h5>
      <p class="card-text">${members[i].lavoro}</p>
      
    </div>
  </div>`
}