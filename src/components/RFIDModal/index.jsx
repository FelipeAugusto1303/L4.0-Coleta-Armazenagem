import React, {useState} from "react";
import CustomModal from "../CustomModal";
import {TextField, Box, Button, Typography} from "@mui/material";

function RFIDModal({open, close, handleNext, id}){

    const [value, setValue] = useState(null)

    const handleClose = () => {
        setValue(null)
        close(false)
    }
    
    return(
        <CustomModal open={open}>
            <Box component="div" sx={{display:"flex", flexDirection: "column", padding: "12px", gap: "30px"}}>
                <Typography variant="h4">Posto de Coleta {id}</Typography>
                <TextField value={value} onChange={e => setValue(e.target.value)} variant="outlined" autoFocus sx={{width: "100%"}}/>
                <Box component="div" sx={{display: "flex", justifyContent:"space-between"}}>
                    <Button variant="outlined" color="error" onClick={handleClose}>Cancelar</Button>
                    <Button variant="contained" onClick={() => handleNext(value)}>Confirmar Coleta</Button>
                </Box>
            </Box>
        </CustomModal>
    )
}


export default RFIDModal;