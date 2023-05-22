import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import CheckIcon from "@mui/icons-material/Check";

interface Props {
    body: string
}

export const CheckComponent: FC<Props> = ({ body }) => {
    return (
        <>
            <Box sx={{mr:3,my:.7}}>
                <Box display='flex'>
                    <CheckIcon sx={{ mx: 1 }} />
                    <Typography variant='body1'>
                        {body}
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
