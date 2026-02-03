import {useState} from "react";

function Profil({prenom, age, onVieillir, onRajeunir, onResetAge, suprimerProfil}){
  return (
    <div>
      <h2>{prenom}</h2>
      <p>Âge : {age}</p>
      <button onClick ={onVieillir}>+1</button>
      <button onClick ={onRajeunir}>-1</button>
      <button onClick ={onResetAge}>Reset</button>
      <button onClick ={suprimerProfil}>Suprimer</button>
    </div>
  );
}

export default function App(){
  const [profils, setProfils] = useState(
   [
     {id: 1, prenom: "Nomena", age: 25, initialAge : 25},
     {id: 2, prenom: "Alex", age: 19, initialAge: 19}
   ]
  );

  const vieillir = (id)=>{
     setProfils(
       prevProfils => 
         prevProfils.map(profil =>
            profil.id === id ? {...profil, age: profil.age+1} : profil
        )
     );
  };
  const rajeunir = (id)=> {
     setProfils(
        prevProfils => 
           prevProfils.map(profil =>
              profil.id === id ? {...profil, age: Math.max(0,profil.age-1)} : profil)
     );
  };

  const resetAge = (id) => {
     setProfils(
        prevProfils => 
          prevProfils.map(profil => profil.id === id? {...profil, age: profil.initialAge} : profil)
     )
  };

  const removeProfil = (id) => {
    setProfils(
      prevProfils =>
        prevProfils.filter(profil => profil.id !== id)
    )
  };

  return (

  <div>
  <h1>Liste des profils</h1>
    {profils.map(profil =>
     <Profil
       key = {profil.id}
       prenom = {profil.prenom}
       age = {profil.age}
       onVieillir = {()=>vieillir(profil.id)}
       onRajeunir = {()=>rajeunir(profil.id)}
       onResetAge = {() => resetAge(profil.id)}
       suprimerProfil = {() => removeProfil(profil.id)}
    />)
    }
  </div>
  )
}