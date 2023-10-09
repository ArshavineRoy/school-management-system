import { DataGrid } from "@mui/x-data-grid";

const ListTable = ({ headers, data, title }) => {
  return (
    <div className='w-full flex justify-center items-center my-4'>
      <div className='w-3/4'>
        <h5 className='py-3 text-2xl font-semibold text-light-green'>
          {title}
        </h5>
        <DataGrid
          rows={data}
          columns={headers}
          showColumnVerticalBorder={true}
          showCellVerticalBorder={true}
        />
      </div>
    </div>
  );
};

export default ListTable;