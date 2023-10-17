const title = "Bonjour les gens"
const style = {
  color: "red",
  backgroundColor: "blue"
}
const showTitle = false
const todos = [
  `Présenter react`,
  `Présenter le JSX`,
  `Créer un composant`,
]


function App() {

  return <>
    {showTitle ? 
    <h1  id="title" className="title" style={style}>{title}</h1> :
    <p>Demo</p>
  }
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cumque laboriosam, fugiat fugit atque saepe cum explicabo consequatur, ut perferendis dolor modi inventore corrupti eveniet temporibus natus. Nihil, a ad.
     Dicta animi rerum accusamus sunt ad odit alias quae facilis enim. Praesentium cum vel assumenda rem asperiores odit ducimus voluptates voluptatem corporis saepe quibusdam, recusandae earum dolor reiciendis sapiente facere.
    </p>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
    </>
}

export default App
