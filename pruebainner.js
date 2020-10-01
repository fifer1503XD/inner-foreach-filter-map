const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'MAle'
    },
    {
        name: 'Maria',
        age: 15,
        email: 'maria@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/Maria' },
            { name: 'twitter', url: 'twitter/Maria' }
        ],
        gender: 'Female'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'MaLe'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Antonia',
        age: 35,
        email: 'antonia@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/antonia' },
            { name: 'twitter', url: 'twitter/antonia' }
        ],
        gender: 'FeMale'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'male'
    },
    {
        name: 'Felipe',
        age: 28,
        email: 'felipe@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/felipe' },
            { name: 'twitter', url: 'twiter/felipe' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/Daniela' },
            { name: 'twitter', url: 'twitter/Daniela' }
        ],
        gender: 'female'
    },
]

function generartable(){
const bodytable = document.getElementById('body-table-users')
console.log(bodytable)
users.forEach((u)=>{
    row =`<tr>
          <td>${u.name}</td>
          <td>${u.email}</td>
          <td>${u.age}</td>
          <td>${u.gender}</td>
          <td>${u.social[0].url}</td>
          <td>${u.social[1].url}</td></t>`
    bodytable.innerHTML +=row;
})

}
function generartablewomen(){
    let bodytable = document.getElementById('body-table-users')
    console.log(bodytable)
        let academlousers= users.filter(function(user){
            return user.gender.toLowerCase()=='female'
        })
        let row = academlousers.map(function(u){
            return `<tr>
            <td>${u.name}</td>
            <td>${u.email}</td>
            <td>${u.age}</td>
            <td>${u.gender}</td>
            <td>${u.social[0].url}</td>
            <td>${u.social[1].url}</td></t>`;
        })
        const stringrows= row.join('');
        bodytable.innerHTML +=stringrows
        
}
    
    function generartablemen(){
        let bodytable = document.getElementById('body-table-users')
        console.log(bodytable)
            let academlousers= users.filter(function(user){
                return user.gender.toLowerCase()=='male'
            })
            let row = academlousers.map(function(u){
                return `<tr>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>${u.age}</td>
                <td>${u.gender}</td>
                <td>${u.social[0].url}</td>
                <td>${u.social[1].url}</td></t>`;
            })
            const stringrows= row.join('');
            bodytable.innerHTML +=stringrows
            
    }
        
        function generartablerango(){
            let bodytable = document.getElementById('body-table-users')
        console.log(bodytable)
            let academlousers= users.filter(function(user){
                return user.age>20 && user.age<40;
            })
            let row = academlousers.map(function(u){
                return `<tr>
                <td>${u.name}</td>
                <td>${u.email}</td>
                <td>${u.age}</td>
                <td>${u.gender}</td>
                <td>${u.social[0].url}</td>
                <td>${u.social[1].url}</td></t>`;
            })
            const stringrows= row.join('');
            bodytable.innerHTML +=stringrows
            }
            
            function generartablecorreo(){
                const bodytable = document.getElementById('body-table-users')
                console.log(bodytable)
                let academlousers= users.filter(function(user){
                    return user.email.endsWith('@academlo.com')
                })
                let row = academlousers.map(function(u){
                    return `<tr>
                    <td>${u.name}</td>
                    <td>${u.email}</td>
                    <td>${u.age}</td>
                    <td>${u.gender}</td>
                    <td>${u.social[0].url}</td>
                    <td>${u.social[1].url}</td></t>`;
                })
                const stringrows= row.join('');
                bodytable.innerHTML +=stringrows;
            }
            function borrartabla(){
                const bodytable = document.getElementById('body-table-users')
                for (let i=0; i<users.length; i++){
                   const row ='<tr></tr>'
                    bodytable.innerHTML =row;}
                }
                function borrarcard(){
                    const bodycard = document.getElementById('content-cards')
                    console.log(bodycard)
                    for (let i=0; i<users.length; i++){
                       const row =''
                       bodycard.innerHTML =row;}
                    }    
            
                function generarcard(){
                    let bodycard = document.getElementById('content-cards')
                    console.log(bodycard)
                    let academlousers= users.filter(function(user){
                        return user.gender.toLowerCase()=='female'
                    })
                    let row = academlousers.map(function(u){
                        return `<div class="col mb-4">
                        <div class="card text-white bg-success mb-3" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">USUARIO</h5>
                                <p class="card-text"> Nombre : ${u.name}</p>
                                <p class="card-text">Email: ${u.email}</p>
                                <p class="card-text"> Edad: ${u.age}</p>
                                <p class="card-text"> Genero: ${u.gender}</p>
                                <p class="card-text">Facebook: ${u.social[0].url}</p>
                                <p class="card-text"Twitter :>${u.social[1].url}</p>
                            </div>
                        </div>        
                   </div>`;
                    })
                    let stringrows= row.join('');
                    bodycard.innerHTML +=stringrows
                    let academlousers2= users.filter(function(user){
                        return user.gender.toLowerCase()=='male'
                    })
                    let row2 = academlousers2.map(function(u){
                        return `<div class="col mb-4">
                        <div class="card text-white bg-dark mb-3" style="width: 18rem;">
                            <div class="card-body">
                                <h5 class="card-title">USUARIO </h5>
                                <p class="card-text"> Nombre : ${u.name}</p>
                                <p class="card-text">Email: ${u.email}</p>
                                <p class="card-text"> Edad: ${u.age}</p>
                                <p class="card-text"> Genero: ${u.gender}</p>
                                <p class="card-text">Facebook: ${u.social[0].url}</p>
                                <p class="card-text"Twitter :>${u.social[1].url}</p>
                            </div>
                        </div>        
                   </div>`;
                    })
                    const stringrows2= row2.join('');
                    bodycard.innerHTML +=stringrows2
                    
            }