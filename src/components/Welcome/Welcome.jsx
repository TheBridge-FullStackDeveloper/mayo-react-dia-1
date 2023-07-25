import "./Welcome.css"

const Welcome = (props) => {
  return (
    <div className="welcomeText">Welcome {props.title}, eres un {props.score} !!!</div>
  )
}

export default Welcome