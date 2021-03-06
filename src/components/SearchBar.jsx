import axios from "axios";
import React, { useEffect, useState } from "react";
import './Suggestiones.css';





export default function SearchBar({onSearch}) {

  const [names, setNames] = useState([])
  const [city, setCity] = useState("");
  const [suggestiones, setSuggestiones] = useState([])

  useEffect(()=>{
    const loadNames = async () => {                                                     //BUSCADOR EN TIEMPO REAL
      const response = await axios.get('https://infinite-shelf-73106.herokuapp.com/') //Ciudades en express, ya que api no otorga json con LISTA de citys..
      //console.log(response.data.map(el=>el.name))
      setNames(response.data)
    }
    loadNames()
  },[])

  const onSuggestHandler = (city)=>{      // onClick = onSuggestHandler donde seteo city y devuelvo array vacio para
    setCity(city)                         // que elimine la lista retornada
    setSuggestiones([])
    onSearch(city)
  }

  const onChangeHandler = (city) =>{
    let matches = []
    if(city.length>0){
      matches = names.filter(user =>{
        const regex = new RegExp(`${city}`,"")
        return user.name.match(regex)
      })
    }
    console.log(matches)
    setSuggestiones(matches.slice(0,15))
    setCity(city)
  }
  

  
  return (
    <div className="form">
    <form  onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input  
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e =>onChangeHandler(e.target.value)}
        //onChange={e => setCity(e.target.value) }
      />
      <input type="submit" value="Agregar" />
      {suggestiones && suggestiones.map((suggestiones)=>
      <div key={suggestiones.id} className = "Suggestiones" onClick={()=>onSuggestHandler(suggestiones.name) }>{suggestiones.name}, {suggestiones.country}</div>
      )}
      
    </form>
    </div>
  );
}
