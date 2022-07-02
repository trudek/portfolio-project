import { SPlayersTable } from './PlayersTable.styled';
import * as React from 'react';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import { useContext } from 'react';
import { ThemeContext } from './../../../App';
import {
  Box,
  Button,
  IconButton,
  LinearProgress,
  Pagination,
  PaginationItem,
  styled,
  Tooltip,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import DeleteIcon from '@mui/icons-material/Delete';
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

const rows = [
  {
    id: 111111,
    name: 'Zinedine Zidane',
    nationality: 'FR',
    rating: 91,
    position: 'CM',
  },
  {
    id: 222222,
    name: 'Snow2',
    nationality: 'PL',
    rating: 92,
    position: 'CM',
  },
  {
    id: 333333,
    name: 'Snow3',
    nationality: 'PL',
    rating: 93,
    position: 'CM',
  },
  {
    id: 444444,
    name: 'Snow4',
    nationality: 'PL',
    rating: 94,
    position: 'CM',
  },
  {
    id: 555555,
    name: 'Snow5',
    nationality: 'PL',
    rating: 95,
    position: 'CM',
  },
  {
    id: 666666,
    name: 'Snow6',
    nationality: 'PL',
    rating: 96,
    position: 'CM',
  },
  {
    id: 777777,
    name: 'Snow7',
    nationality: 'PL',
    rating: 97,
    position: 'CM',
  },
  {
    id: 888888,
    name: 'Snow8',
    nationality: 'PL',
    rating: 98,
    position: 'CM',
  },
  {
    id: 999991,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 999992,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 999993,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 999994,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 999995,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 999996,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
];

const PlayersTable = () => {
  const [tableData, setTableData] = React.useState(rows);
  const [selectionModel, setSelectionModel] = React.useState([]);

  const { theme } = useContext(ThemeContext);

  const { t } = useTranslation();

  const columns = [
    { field: 'id', headerName: 'ID', width: 70, disableColumnMenu: true },
    {
      field: 'nationality',
      headerName: t('table_nationality'),
      width: 100,
      disableColumnMenu: true,
    },
    {
      field: 'name',
      headerName: t('table_name'),
      width: 170,
      disableColumnMenu: true,
    },

    {
      field: 'rating',
      headerName: t('table_rating'),
      width: 85,
      disableColumnMenu: true,
    },
    {
      field: 'position',
      headerName: t('table_position'),
      width: 85,
      disableColumnMenu: true,
    },
    {
      field: 'delete',
      width: 55,
      sortable: false,
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <Tooltip title={t('table_delete')} placement="right">
            <IconButton
              size="small"
              onClick={() => {
                console.log(selectionModel);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        );
      },
    },
  ];

  function CustomPagination() {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
      <Pagination
        color="primary"
        variant="outlined"
        siblingCount={0}
        boundaryCount={1}
        shape="rounded"
        page={page + 1}
        count={pageCount}
        renderItem={(props2) => <PaginationItem {...props2} disableRipple />}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
      />
    );
  }

  const StyledDataGrid = styled(DataGrid)(() => ({
    border: 0,
    '.MuiDataGrid-row:hover': {
      color: '#3b82ec',
    },
    '.MuiDataGrid-columnHeaderTitle': {
      fontWeight: 600,
    },

    '.MuiDataGrid-columnSeparator': {
      // display: 'none',
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

  return (
    <SPlayersTable>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <StyledDataGrid
          rows={tableData}
          // rows={[]}
          columns={columns}
          pageSize={5}
          checkboxSelection
          components={{
            Pagination: CustomPagination,
          }}
          // loading
          onSelectionModelChange={(newSelectionModel) => {
            setSelectionModel(newSelectionModel);
          }}
          selectionModel={selectionModel}
        />
      </ThemeProvider>
    </SPlayersTable>
  );
};
export default PlayersTable;
