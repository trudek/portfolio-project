import { SPlayerSearchTable } from './PlayerSearchTable.styled';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useContext } from 'react';
import { ThemeContext } from './../../../App';
import { styled } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { blue } from '@mui/material/colors';

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

const PlayerSearchTable = (data) => {
  const { theme } = useContext(ThemeContext);

  const { t } = useTranslation();

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 70,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'nationality',
      headerName: t('table_nationality'),
      width: 40,
      disableColumnMenu: true,
      sortable: false,
      renderCell: (item) => (
        <img
          className="flag"
          width={30}
          height={18}
          src={item.row.nation_image.replace(
            'https://cdn.futbin.com/content/fifa22',
            'assets'
          )}
          alt=""
        />
      ),
    },
    {
      field: 'full_name',
      headerName: t('table_name'),
      width: 170,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'rating',
      headerName: t('table_rating'),
      width: 85,
      disableColumnMenu: true,
      sortable: false,
    },
    {
      field: 'position',
      headerName: t('table_position'),
      width: 85,
      disableColumnMenu: true,
      sortable: false,
    },
  ];

  const StyledDataGrid = styled(DataGrid)(() => ({
    border: 0,
    '.MuiDataGrid-row:hover': {
      color: '#3b82ec',
    },
    '.MuiDataGrid-columnHeaderTitle': {
      fontWeight: 600,
    },

    '.MuiDataGrid-columnSeparator': {
      display: 'none',
    },

    '.MuiCheckbox-root svg': {
      width: 20,
      height: 20,
    },
    '	.MuiDataGrid-footerContainer': {
      borderTop: 'none',
    },
    '	.MuiDataGrid-cell': {
      // border: 'none',
    },
  }));

  const [selectionModel, setSelectionModel] = React.useState([]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <SPlayerSearchTable>
        <StyledDataGrid
          rows={data.data}
          columns={columns}
          hideFooter={true}
          autoHeight={true}
          // pageSize={data.data.length > 5 ? 5 : data.data.length}
          headerHeight={0}
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
            console.log(selectionModel);
          }}
          selectionModel={selectionModel}
          loading={!data.data.length}
        />
      </SPlayerSearchTable>
    </ThemeProvider>
  );
};
export default PlayerSearchTable;
