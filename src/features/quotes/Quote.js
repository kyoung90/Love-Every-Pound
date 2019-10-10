import React from 'react'
import {Link} from "react-router-dom"
import {Icon, Button} from "semantic-ui-react"
import WeightForm from '../user/form/WeightForm'

const Quote = () => {
    return (
        <div>
            <h3>"Life is great. You got this!" - Author Unknown</h3>
            <Button circular color="blue" as={Link} to="/" icon="quote right"></Button>
            <Button circular color="blue" as={Link} to="/weights" icon="calendar alternate"></Button>
            <WeightForm />
        </div>
    )
}

export default Quote
