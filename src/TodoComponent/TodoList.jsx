// import React, { useState } from 'react';


// const TodoList = () => {
//     const [inputData, setInputData] = useState('');
//     const [checked, setChecked] = useState([])
//     const [addTask, setAddTask] = useState([]);
//     const [editIndex, setEditIndex] = useState(null)


//     const handleChange = (value) => {
//         setInputData(value)
//     }
//     const handleAddTask = () => {
//         const todotyping = {
//             typedData: inputData
//         }

//         if (editIndex !== null) {
//             const update = [...addTask];
//             update[editIndex] = todotyping;
//             setAddTask(update)
//             setEditIndex(null)
//             setInputData('')
//         }
//         else {
//             setAddTask([...addTask, todotyping])
//             setChecked([...checked, false])
//             setInputData('')
//         }

//     }




//     const handleChangeCheck = (index) => {

//         const checking = [...checked, false];
//         checking[index] = !checking[index]
//         setChecked(checking)
//     };

//     const handleDelete = (index) => {
//         const deleteCopy = [...addTask];
//         deleteCopy.splice(index, 1);
//         setAddTask(deleteCopy);
//     }

//     const handleEdit = (index) => {
//         debugger
//         const editedData = addTask[index];

//         setInputData(editedData.typedData)
//         const updatedData = [...addTask]
//         updatedData.splice(index, 1)
//         setAddTask(updatedData)
//         setEditIndex(index);
//         console.log('editedData', editedData);
//         console.log('updatedData', updatedData)


//     }

//     return (
//         <div data-testid="todo-list" className='container w-75 mt-5' >
//             <div className='card ' >
//                 <h3 className='display-5'>Things TO DO!!</h3>
//                 <div className='form-group input-group w-50 mt-4 mb-4' style={{ marginLeft: '20%' }}>
//                     <input className='form-control' value={inputData || ''} placeholder='Add the todo...' onChange={(e) => handleChange(e.target.value)} />
//                     <button onClick={() => handleAddTask()}>Add Task</button>
//                 </div>

//                 <div >

//                     {addTask.map((val, index) => (
//                         <>
//                             <div className=' md-12'  >
//                                 <div >
//                                     <div className='input-group md-12 '>
//                                         <input
//                                             style={{ width: '30px', height: '30px', marginTop: '30px' }}
//                                             className='ms-5  p-2 '
//                                             type="checkbox"
//                                             label="Checkbox"
//                                             onChange={() => handleChangeCheck(index)}

//                                         />
//                                         <span className={` card w-75 ms-4 mt-4 p-2 ${checked[index] ? 'text-decoration-line-through' : ''} `} >{val.typedData}</span>
//                                         <div className='mt-4 ms-4 ' ><i className="bi bi-trash-fill" style={{ fontSize: '25px', cursor: 'pointer' }} onClick={(index) => handleDelete(index)}></i></div>
//                                         <div className='mt-4 ms-5 ' ><i className="bi bi-pencil-fill" style={{ fontSize: '25px', cursor: 'pointer' }} onClick={(index) => handleEdit(index)}></i></div>

//                                     </div>
//                                 </div>
//                             </div>
//                         </>
//                     ))}

//                 </div >
//             </div>
//         </div>
//     )
// }

// export default TodoList;

import React, { useState } from 'react';

const TodoList = () => {
    const [inputData, setInputData] = useState('');
    const [checked, setChecked] = useState([]);
    const [addTask, setAddTask] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (value) => {
        setInputData(value);
    };

    const handleAddTask = () => {
        debugger
        const todotyping = {
            typedData: inputData,
        };

        if (editIndex !== null) {
            const update = [...addTask];
            update[editIndex] = todotyping;
            setAddTask(update);
            setEditIndex(null);
            setInputData('');
        } else {
            setAddTask([...addTask, todotyping]);
            setChecked([...checked, false]);
            setInputData('');
        }
    };

    const handleChangeCheck = (index) => {
        const checking = [...checked];
        checking[index] = !checking[index];
        setChecked(checking);
    };

    const handleDelete = (index) => {
        const deleteCopy = [...addTask];
        deleteCopy.splice(index, 1);
        setAddTask(deleteCopy);
    };

    const handleEdit = (index) => {
        debugger
        const editedData = addTask[index];

        setInputData(editedData.typedData);
        const updatedData = [...addTask];
        setAddTask(updatedData);
        setEditIndex(index);
        console.log('editedData', editedData);
        console.log('updatedData', updatedData);
    };

    return (
        <div data-testid="todo-list" className='container w-75 mt-5'>
            <div className='card'>
                <h3 className='display-5'>Things TO DO!!</h3>
                <div className='form-group input-group w-50 mt-4 mb-4' style={{ marginLeft: '20%' }}>
                    <input className='form-control' value={inputData || ''} placeholder='Add the todo...' onChange={(e) => handleChange(e.target.value)} />
                    <button  className='btn btn-primary' onClick={() => handleAddTask()}>{editIndex!=null?"Update":"Add Task"}</button>
                </div>

                <div>
                    {addTask.map((val, index) => (
                        <div key={index} className='md-12'>
                            <div>
                                <div className='input-group md-12'>
                                    <input
                                        style={{ width: '30px', height: '30px', marginTop: '30px' }}
                                        className='ms-5 p-2'
                                        type='checkbox'
                                        label='Checkbox'
                                        onChange={() => handleChangeCheck(index)}
                                    />
                                    <span className={`card w-75 ms-4 mt-4 p-2 ${checked[index] ? 'text-decoration-line-through' : ''}`}>{val.typedData}</span>
                                    <div className='mt-4 ms-4'>
                                        <i className='bi bi-trash-fill' style={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => handleDelete(index)}></i>
                                    </div>
                                    <div className='mt-4 ms-5'>
                                        <i className='bi bi-pencil-fill' style={{ fontSize: '25px', cursor: 'pointer' }} onClick={() => handleEdit(index)}></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoList;