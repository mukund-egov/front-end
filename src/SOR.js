import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const SOR = () => {

    const emptyRow = {sno:1, description:'',ugm:'',quantity:0,rate:0};
    const [rows,setRows] = useState([emptyRow]);
    const [filterText, setFiltertext] = useState('');

    const addRow = () =>{
        const newRow = {...emptyRow, sno:rows.length+1};
        setRows([...rows,newRow]);
        console.log(rows.length)
    }

    const handleInputChange =(index, column, value)=>{
        const updatedRow = [...rows];
        updatedRow[index][column]=value;
        setRows(updatedRow);

    }


    const handleDeleteRow = (index) => {
        const copyRows = [...rows];
        copyRows.splice(index, 1);
        copyRows.forEach((row, i) => {
            if (i >= index) {
                row.sno = row.sno - 1;
            }
        });
        setRows(copyRows);
    };

    const filteredRows = rows.filter(row => row.description.toLowerCase().includes(filterText.toLowerCase()));



    return ( 
        <div>
            <div className="sor">SOR Calculator</div>
            <div className="filter">
                Filter:
                <input className="filterInput" type="text" onChange={(e)=> 
                    setFiltertext(e.target.value)
                    }></input>
            </div>
        <table className="amounttable">
        <caption>Table</caption>
        <thead>
          <tr>
            <th>S.No.</th>
            <th className='desc'>Description</th>
            <th>UGM</th>
            <th>Quantity</th>
            <th>Rate 
            {/* <span style='font-family:Arial;'>&#8377;</span> */}
            </th>
            <th>Estimated Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {filteredRows.map((row, index) => (
            <tr key={index}>
                <td>{row.sno}</td>
                <td><input type="text" value={row.description} onChange={(e) => handleInputChange(index, 'description', e.target.value)}/></td>
                <td><input type="text" value={row.ugm} onChange={(e) => handleInputChange(index, 'ugm', e.target.value)}/></td>
                <td><input type="number" value={row.quantity} onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}/></td>
                <td><input type="number" value={row.rate} onChange={(event) => handleInputChange(index, 'rate', event.target.value)}/></td>
                <td>{row.quantity * row.rate}</td>
                <td><button 
                onClick={() => handleDeleteRow(index)}
                ><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
            ))}
        </tbody>
      </table>
      <div className="addrow">
      <button onClick={addRow}>Add Row</button>
    </div>
    </div>
     );
}
 
export default SOR;