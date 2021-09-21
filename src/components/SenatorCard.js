import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import InfoIcon from '@mui/icons-material/Info'

import '../App.css'

const SenatorCard = (props) => {
    // const { firstName, lastName, id } = props

    const handleInfoClick = () => {
        console.log('Clicked')
        props.modalFunction()
    }

    return (
        <Card
            className="card"
            sx={{
                width: 300,
                m: 1.5,
                // '&:hover': {
                //     opacity: [0.9, 0.8, 0.7],
                // },
            }}>
            <CardContent>
                <Typography sx={{ fontSize: 24 }} color="text.primary">
                    {props.senator.first_name} {props.senator.last_name}
                </Typography>
            </CardContent>

            <CardActions>
                <IconButton onClick={handleInfoClick} >
                    <InfoIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default SenatorCard
