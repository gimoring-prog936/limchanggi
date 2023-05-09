import React from 'react'
import './userList.css'
import { Link} from 'react-router-dom'
import { userRows } from '../../dummyData'

import { DataGrid } from '@mui/x-data-grid'

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
      field: 'name',
      headerName: 'Name',
      width: 120,
      editable: true,
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 120,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 60,
      editable: true,
    },
    {
        field: 'num',
      headerName: 'CarNum',
      width: 90,
      editable: true,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params)=>{
            return(
              <Link to="/user/:userId" className="link">
                <>
                    <button className="userListEdit">Edit</button>
                </>
                </Link>
            )
        }
    }
  ];
  

export default function UserList(){
    return (
    <div className="userList">
        <DataGrid
        rows={userRows}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={10}
        rowPerPageOptions={[5]}
        checkboxSelection
        />
    </div>
    )
}
