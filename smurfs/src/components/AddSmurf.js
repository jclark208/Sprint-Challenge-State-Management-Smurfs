import React, { useState } from "react"
import { connect } from "react-redux"
import { addSmurf } from "../actions/actions"
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

const Form = (props) => {
    const [newSmurf, setNewSmurf] = useState({
        name: "",
        age: "",
        height: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addSmurf(newSmurf)
    }

    const handleChanges = (e) => {
        let name = e.target.name;
        setNewSmurf({ ...newSmurf, [name]: e.target.value })
    }

    return (
        <div>
            <form>
                <input name="name" type="text" placeholder="name" onChange={handleChanges}></input>
                <input name="age" type="text" placeholder="age" onChange={handleChanges}></input>
                <input name="height" type="text" placeholder="height" onChange={handleChanges}></input>
                <Link exact to='/'>
                <button href='/' type="submit" onClick={handleSubmit}>Submit</button>
                </Link>
            </form>
        </div>
    )
}

export default connect(null, { addSmurf })(Form) 