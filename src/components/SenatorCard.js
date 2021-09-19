import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'

import '../App.css'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
        •
    </Box>
)

const SenatorCard = (senator) => {
    // const { firstName, lastName, id } = props

    return (
        <Card
            key={senator.id}
            className="card"
            sx={{
                width: 300,
                bgcolor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
            }}>
            <CardContent>
                <Typography sx={{ fontSize: 24 }} color="text.primary">
                    {senator.first_name} {senator.last_name}
                </Typography>

                <Typography variant="h6" component="div">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )
}

export default SenatorCard
