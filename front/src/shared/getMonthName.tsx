export const getMonthName = (monthNumber: string) => {
    const date = new Date();
    date.setMonth(+monthNumber - 1);
    return date.toLocaleString('en-US', { month: 'long' });
   }


