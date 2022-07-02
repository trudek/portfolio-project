import { SPlayerSearch } from './PlayerSearch.styled';

import { useEffect, useState } from 'react';
import PlayerSearchTable from './PlayerSearchTable';

import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, TextField } from '@mui/material';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';
import { blue } from '@mui/material/colors';
import { useTranslation } from 'react-i18next';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: blue,
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

const PlayerSearch = () => {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation();

  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const fetchIcons = async () => {
      await fetch(`https://www.futbin.com/search?year=22&term=${query}`, {
        referrerPolicy: 'strict-origin-when-cross-origin',
        body: null,
        method: 'GET',
        mode: 'cors',
      })
        .then((res) => res.json())
        .then((list) => {
          const icons = list.filter((icon) => icon.version.includes('Icon'));
          setData(icons);
        });
    };
    if (query.length > 2) {
      fetchIcons();
    } else {
      setData([]);
    }
  }, [query]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <SPlayerSearch>
        <TextField
          id="standard-search"
          type="search"
          variant="standard"
          // size="small"
          margin="small"
          // label="Search"
          placeholder={t('search')}
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        {query.length > 2 && <PlayerSearchTable data={data} />}
      </SPlayerSearch>
    </ThemeProvider>
  );
};
export default PlayerSearch;
