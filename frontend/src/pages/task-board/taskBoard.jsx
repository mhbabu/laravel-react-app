import { Link } from 'react-router-dom';

export default function TaskBoard(){
    return(
        <div className="container mt-5">
            <div className="card">
                <div className="card-header">
                    <div className="d-flex flex-row justify-content-between align-items-center">
                        <h5>Task Board</h5>
                        <div className="d-flex">
                        <Link to="/task-categories" className="btn btn-sm btn-primary m-1" title="Task Category"> Task Categories</Link>
                        <a className="btn btn-sm btn-primary m-1" title="New Task"><i className="fa fa-plus-circle" /> Create Task</a>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row mt-4">
                        <div className="col-md-4 mt-3">
                            <div className="card">
                                <div className="card-header">
                                    <div className="dropdown">
                                        <li className="dropdown-toggle text-black" data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration: 'none', cursor: 'pointer', listStyle: 'none'}}>
                                            AFAFAF
                                        </li>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item"> Edit</a></li>
                                            <li><a className="dropdown-item">Delete</a></li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="card-body m-0">
                                    <ul className="list-group">
                                        <li className="list-group-item d-flex justify-content-between align-items-center">
                                        <a className="text-black" style={{textDecoration: 'none', cursor: 'pointer'}}>FAFAF</a>
                                        <div className="dropdown-toggle text-black" data-bs-toggle="dropdown" aria-expanded="false" style={{textDecoration: 'none', cursor: 'pointer'}} />
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item">Edit</a></li>
                                                <li><a className="dropdown-item">Delete</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}