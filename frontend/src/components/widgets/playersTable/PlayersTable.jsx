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
  {
    id: 999997,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 999998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 199998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 299998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 399998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 499998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 599998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 699998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 799998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 899998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 919998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 929998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 939998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 949998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 959998,
    name: 'Snow9',
    nationality: 'PL',
    rating: 99,
    position: 'CM',
  },
  {
    id: 969998,
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
    { field: 'id', headerName: 'ID', width: 120, disableColumnMenu: true },
    {
      field: 'name',
      headerName: t('table_name'),
      width: 200,
      disableColumnMenu: true,
    },
    {
      field: 'nationality',
      headerName: t('table_nationality'),
      width: 130,
      disableColumnMenu: true,
    },
    {
      field: 'rating',
      headerName: t('table_rating'),
      width: 130,
      disableColumnMenu: true,
    },
    {
      field: 'position',
      headerName: t('table_position'),
      width: 130,
      disableColumnMenu: true,
    },
    {
      field: 'delete',
      width: 55,
      sortable: false,
      tooltip: 'delete button',
      disableColumnMenu: true,
      renderHeader: () => {
        return (
          <Tooltip title="Delete" placement="right">
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

  // const StyledGridOverlay = styled('div')(({ theme }) => ({
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   height: '100%',
  //   '& .ant-empty-img-1': {
  //     fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
  //   },
  //   '& .ant-empty-img-2': {
  //     fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
  //   },
  //   '& .ant-empty-img-3': {
  //     fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
  //   },
  //   '& .ant-empty-img-4': {
  //     fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
  //   },
  //   '& .ant-empty-img-5': {
  //     fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
  //     fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
  //   },
  // }));

  // function CustomNoRowsOverlay() {
  //   return (
  //     <StyledGridOverlay>
  //       <svg
  //         width="120"
  //         height="100"
  //         viewBox="0 0 184 152"
  //         aria-hidden
  //         focusable="false"
  //       >
  //         <g fill="none" fillRule="evenodd">
  //           <g transform="translate(24 31.67)">
  //             <ellipse
  //               className="ant-empty-img-5"
  //               cx="67.797"
  //               cy="106.89"
  //               rx="67.797"
  //               ry="12.668"
  //             />
  //             <path
  //               className="ant-empty-img-1"
  //               d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
  //             />
  //             <path
  //               className="ant-empty-img-2"
  //               d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
  //             />
  //             <path
  //               className="ant-empty-img-3"
  //               d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
  //             />
  //           </g>
  //           <path
  //             className="ant-empty-img-3"
  //             d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
  //           />
  //           <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
  //             <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815" />
  //             <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z" />
  //           </g>
  //         </g>
  //       </svg>
  //       <Box sx={{ mt: 1 }}>No Rows</Box>
  //     </StyledGridOverlay>
  //   );
  // }

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
            // LoadingOverlay: LinearProgress,
            Pagination: CustomPagination,
            // NoRowsOverlay: CustomNoRowsOverlay,
          }}
          // loading
          // sx={{
          //   border: 0,
          //   '& .MuiDataGrid-cell:hover': {
          //     color: 'primary.main',
          //   },
          // }}
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
