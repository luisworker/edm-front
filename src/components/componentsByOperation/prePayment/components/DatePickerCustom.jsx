//
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { PickersDay } from '@mui/x-date-pickers/PickersDay';
// import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
// import { styled } from '@mui/material/styles';
// import IconButton from '@mui/material/IconButton';
// import {TextField} from "@mui/material";
//
// const StyledButton = styled(IconButton)(({ theme }) => ({
//     borderRadius: theme.shape.borderRadius,
// }));
// const StyledDay = styled(PickersDay)(({ theme }) => ({
//     borderRadius: theme.shape.borderRadius,
//     color:
//         theme.palette.mode === 'light'
//             ? theme.palette.secondary.dark
//             : theme.palette.secondary.light,
// }));
//
// export const DatePickerCustom = ({ selectedDate, setSelectedDate }) => {
//     return (
//         <LocalizationProvider dateAdapter={AdapterDayjs}>
//             <DatePicker
//                 label="Fecha"
//                 value={selectedDate}
//                 onChange={(newValue) => {
//                     setSelectedDate(newValue);
//                 }}
//                 renderInput={(params) => (
//                     <TextField
//                         {...params}
//                         variant="standard" // Usa la variante standard para mostrar solo el borde inferior
//                         InputLabelProps={{
//                             shrink: true,
//                             style: { fontSize: 'small' }, // Ajusta el tamaño del texto del label
//                         }}
//                         // Personaliza el estilo del TextField para ajustar el borde inferior y otros estilos necesarios
//                         sx={{
//                             '& .MuiInput-underline:before': {
//                                 borderBottom: '1px solid rgba(0, 0, 0, 0.42)', // Color del borde inferior antes de la interacción
//                             },
//                             '& .MuiInput-underline:after': {
//                                 borderBottom: '2px solid black', // Color del borde inferior al enfocar
//                             },
//                             '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
//                                 borderBottom: '2px solid rgba(0, 0, 0, 0.87)', // Color del borde inferior al pasar el mouse
//                             },
//                             minWidth: 120,
//                             width: '165px',
//                             m: 1,
//                         }}
//                     />
//                 )}
//             />
//         </LocalizationProvider>
//     );
// }
