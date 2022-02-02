import React , {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isDark, setIsDark]=useState(false)

  function handleModeClick(){
    setIsDark(!isDark)
  }


  const appClass = isDark ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeClick} className={appClass}>{isDark ? "Light Pls" : "Dark Pls"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
