
import '../App.css';

import { useTodoContext } from "../ListesContexte"
const Mylist = () => {

    const { dleteId, list, modifierId } = useTodoContext();

    return (
        <div className="container-fluid">
            <div className="row">
                {list.map((tabmap) => (
                    <div key={tabmap.id} className="col-md-4 col-sm-6 mb-3 ">
                        <div className="border-bottom   p-3 myCard shadow " >
                            <div className="card-body  d-flex justify-content-between  ">
                                <h5 className="card-title mb-2">{tabmap.text}</h5>
                                <div className="d-flex">
                                    <p className="text-primary" onClick={() => modifierId(tabmap.id)}><i className="bi bi-pencil-fill me-2 "></i></p>
                                    <p className="text-danger" onClick={() => dleteId(tabmap.id)}><i className="bi bi-trash"></i> </p>
                                </div>
                            </div>
                            <p className="card-text">{tabmap.dateTime} </p>
                        </div>

                    </div>

                ))}



            </div>

        </div>
    );

}

export default Mylist;



