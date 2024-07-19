import { Box, TextField } from "@mui/material"
import React from "react"

export default function FormularioQuestionario() {

    return (
        <React.Fragment>

            <Box
                component="form"
                style={{
                    padding: 10,
                    display: 'flex',
                    flexDirection: "column"
                }}
            >

                <TextField
                    id="camaraFrigorifica"
                    size="small"
                    label="Câmara Frigorífica"
                />
                <TextField
                    id="largura"
                    size="small"
                    label="Largura"
                    type="number"
                />
                <TextField
                    id="comprimento"
                    size="small"
                    label="Comprimento"
                    type="number"
                />
                <TextField
                    id="altura"
                    size="small"
                    label="Altura"
                    type="number"
                />
                
                <TextField
                    id="largura"
                    size="small"
                    label="Largura"
                    type="number"
                />

            </Box>

        </React.Fragment>
    )
}