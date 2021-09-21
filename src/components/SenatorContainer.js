// import React, { useState } from 'react'
import * as React from 'react'
import { senators } from '../data/senate'
import SenatorCard from './SenatorCard'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Typography from '@mui/material/Typography'

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    tranfrom: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '5px',
    boxShadow: 24,
    p: 4,
}

const SenatorContainer = () => {
    const [openModal, setOpenModal] = React.useState(false)
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    return (
        <Box sx={{
            display: 'flex',
            flexWrap: 'wrap'
        }}>
            {senators.map((senator) => {
                return (
                    <SenatorCard modalFunction={handleOpenModal} senator={{...senator}} />
                )
            })}
            <Modal open={openModal} onClose={handleCloseModal} >
                <Box sx={modalStyle} >
                    <Typography varient="h6" >
                        Senator Information
                    </Typography>
                </Box>
            </Modal>
        </Box>
    )
}

export default SenatorContainer
