
export const Utils =  {
      convertTimestampToDateTimeLocal: (timestamp) => {
        if (!timestamp) return '';
        const date = new Date(timestamp);
        const year = date.getFullYear();
        // getMonth() devuelve un valor entre 0 (enero) y 11 (diciembre), por lo que se suma 1.
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        return `${year}-${month}-${day}T${hours}:${minutes}`;
    },

    formatedNumber: (number) => {
          if (!number) return '';
        const numberfloat = parseFloat(number.toString().replace(',', '.'));
        if (isNaN(numberfloat)) return '';
        return numberfloat.toLocaleString('es-ES', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        });
    },
}
