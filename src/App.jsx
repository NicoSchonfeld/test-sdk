import React, { useEffect, useState } from "react";

const App = () => {
  const [farms, setFarms] = useState(avt?.generalData?.getFarms()); // al sacar ? de avt.generalData se rompe la app

  const user = avt.generalData.getUserData();

  useEffect(() => {
    console.log(farms); //guarda un valor undefined

    console.log(
      `El nombre del usuario actual es ${user.datos.nombre} ${user.datos.apellido}`
    ); // Cannot read properties of undefined (reading 'generalData')
  }, []);

  return <h1>Hola mundo!</h1>;
};

export default App;
