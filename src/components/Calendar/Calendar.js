import { useContext, useEffect, useState } from 'react';
import GlobalContext from '../../contexts/globalContext';

import dayjs from 'dayjs';
import styled from 'styled-components';

import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material';

export default function NativePickers() {
  // const date1 = dayjs(new Date()).format('YYYY-MM-DD').toString();

  const { date, setDate } = useContext(GlobalContext);
  const { dateTest, setDateTest } = useContext(GlobalContext);

  const [render, setRender] = useState(false);
  useEffect(() => {}, [render]);

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={darkTheme}>
        <CalendarWrapper>
          <BeginDate>
            <DatePicker
              label="Início"
              value={dateTest.startDate}
              sx={{ '.MuiInputBase-input': { backgroundColor: 'red' } }}
              onChange={(newDate) => {
                setDateTest({ ...dateTest, startDate: newDate });
                setRender(!render);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </BeginDate>

          <FinalDate>
            <DatePicker
              disableFuture
              label="Fim"
              views={['year', 'month', 'day']}
              value={dateTest.endDate}
              onChange={(newDate) => {
                setDateTest({ ...dateTest, endDate: newDate });
                setRender(!render);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </FinalDate>
        </CalendarWrapper>
      </ThemeProvider>
    </LocalizationProvider>
  );
}

const CalendarWrapper = styled.div`
  margin-bottom: 15px;
  display: flex;
`;

const BeginDate = styled.div`
  margin-right: 15px;
`;

const FinalDate = styled.div``;
