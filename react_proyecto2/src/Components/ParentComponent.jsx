
import ChildComponent from "./ChildComponent"

const ParentComponent = (props) => {

    return (
        <div className="parent">
           <h1>Hola {props.nombre}</h1> 
        </div>
    )

}
export default ParentComponent