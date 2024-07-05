import {Box, Button, Modal, Typography} from "@mui/material";

export const WarningModals = ({open, handleClose, dataUser, handleAccept}) => {
    const {totalPayment, meterSerial, name} = dataUser
    return (
        <Modal
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& .modal-custom': {
                    width: '50%', // Ajusta este valor según necesites
                    maxWidth: '100%', // Asegura que el modal no exceda el ancho de la pantalla
                    bgcolor: 'background.paper', // Fondo del modal
                    maxHeight: '100vh', // Asegura que el modal no exceda el alto de la pantalla
                    boxShadow: 24, // Sombra del modal
                    p: 4, // Padding del modal
                }
            }}
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box className="modal-custom" sx={{ m: 0, p: 0 }} >
                <Typography id="modal-modal-title" variant="h6" component="h2" className="navbar bg-primary-subtle ">
                    Aplicar Pagamento?
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    Tem certeza que deseja aplicar este pagamento?<br/>
                    Nome: {name}<br/>
                    Número Contador : {meterSerial}<br/>
                    Montante: {totalPayment}<br/>
                </Typography>
                <Button onClick={handleAccept} sx={{m: 2}} variant="contained" color="primary">
                    Accept
                </Button>

                <Button onClick={handleClose} sx={{m: 2}} variant="contained" color="secondary">
                    Close
                </Button>
            </Box>
        </Modal>
    )
}
