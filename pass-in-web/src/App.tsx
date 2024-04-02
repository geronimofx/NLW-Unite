interface IButton {
  texto: string;
}

function MyButton(props: IButton) {
  return <button className="bg-indigo-700 text-white rounded p-1 w-20">{props.texto}</button>
}

export function App() {

  return (
    <div className="flex flex-col gap-2">
      <h1>Hello World</h1>
      <MyButton texto="Clique aqui" />
    </div>
  )

}
