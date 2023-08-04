
import ParentComponent from "./ParentComponent"

const ChildComponent = () => {

    let nombre = "Sol"

    return(
        <div className="child">
            <ParentComponent nombre = {nombre}/>
        </div>
    )

}

export default ChildComponent