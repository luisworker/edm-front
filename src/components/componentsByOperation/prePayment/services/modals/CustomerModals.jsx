import {Box, Button, Modal, Typography} from "@mui/material";
import CustomerTable from "../../components/CustomerTable.jsx";


export const CustomerModals = ({ open, handleClose, rows, handleSelect }) => {
    return (
        <Modal

            open={open}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box className="modal-custom">
                <Typography id="modal-title" variant="h6" component="h2" className="navbar bg-primary-subtle">
                    Selecione um cliente
                </Typography>
                <CustomerTable rows={ rows } handleSelect={handleSelect}></CustomerTable>
                <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained" color="primary">
                    Close
                </Button>
            </Box>
        </Modal>
    )
}
