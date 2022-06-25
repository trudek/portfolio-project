import { SPlayersTable } from './PlayersTable.styled';
import * as React from 'react';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';

import { useContext } from 'react';
import { ThemeContext } from './../../../App';
import { Pagination, PaginationItem, styled } from '@mui/material';

const PlayersTable = () => {
  const { theme } = useContext(ThemeContext);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'nationality', headerName: 'Nationality', width: 100 },
    { field: 'rating', headerName: 'Rating', width: 100 },
    { field: 'position', headerName: 'Position', width: 100 },
  ];

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
    {
      id: 979998,
      name: 'Snow9',
      nationality: 'PL',
      rating: 99,
      position: 'CM',
    },
    {
      id: 989998,
      name: 'Snow9',
      nationality: 'PL',
      rating: 99,
      position: 'CM',
    },
    {
      id: 991998,
      name: 'Snow9',
      nationality: 'PL',
      rating: 99,
      position: 'CM',
    },
    {
      id: 992998,
      name: 'Snow9',
      nationality: 'PL',
      rating: 99,
      position: 'CM',
    },
    {
      id: 993998,
      name: 'Snow9',
      nationality: 'PL',
      rating: 99,
      position: 'CM',
    },
    {
      id: 994998,
      name: 'Snow9',
      nationality: 'PL',
      rating: 99,
      position: 'CM',
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
    color: `${theme}` === 'light' ? '#2d2d2d' : '#ffffff',
    '.MuiDataGrid-row:hover': {
      color: '#3b82ec',
    },
    '.MuiDataGrid-columnHeaderTitle': {
      fontWeight: 600,
    },
    // '.MuiDataGrid-columnHeaders': {
    //   background: `${theme}` === 'light' ? '#f7f9fc' : '#202634',
    // },
    '.MuiDataGrid-columnSeparator': {
      display: 'none',
    },

    '.MuiCheckbox-root svg': {
      width: 20,
      height: 20,
    },
  }));

  return (
    <SPlayersTable>
      <StyledDataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        components={{
          Pagination: CustomPagination,
        }}
        // sx={{
        //   border: 0,
        //   '& .MuiDataGrid-cell:hover': {
        //     color: 'primary.main',
        //   },
        // }}
      />
    </SPlayersTable>
  );
};
export default PlayersTable;
