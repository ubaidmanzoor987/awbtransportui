import React, { useState } from "react"
import { DataGrid, GridSortModel,GridRowId } from "@material-ui/data-grid"

const IndexPage = () => {
    const [selectionModel, setSelectionModel] = React.useState<GridRowId[]>([]);
    const [buttonactive, setButtonactive] = React.useState(false);

//   function currentlySelected(selections:any) {
//     if (test !== selections) { 
//       setTest(selections)
//     }
//   }

  const rows = [
    { id: 1, name: "Example 1", price: "$10.99" },
    { id: 2, name: "Example 2", price: "$12.50" }
  ]

  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "price", headerName: "Price" }
  ]

  const sortModel = [
    {
      field: "name",
      sort: "asc"
    }
  ] as  GridSortModel;

  return (
    <>
      <div style={{ height: "50vh" }}>
        <DataGrid
          sortingOrder={["desc", "asc"]}
          sortModel={sortModel}
          rows={rows}
          columns={columns}
          pageSize={100}
          rowHeight={38}
          checkboxSelection
          hideFooterPagination 
          onSelectionModelChange={(newSelection) => {
            console.log(newSelection);
            
            setSelectionModel(newSelection.selectionModel);
          }}
          onRowClick = {()=>setButtonactive(true)}
          selectionModel={selectionModel}
        //   {...data}
        />
      </div>
      <div>{selectionModel}</div>

      {selectionModel.map(val =><h1>{val}</h1>)}

    </>
  )
}

export default IndexPage;