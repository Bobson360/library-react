import React from 'react'

const ListUsers = (props) => (
    
    
<div className="modal fade" id="listUser" tabIndex="-1" role="dialog" aria-labelledby="authenticatedModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
    <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title" id="listUser">{props.listUsers}</h5>
        </div>
        <div className="modal-body">

            <div className="list-group">
                
                {
                    /*
                        List the users when authenticated
                    
                   (this.state.users !== undefined && this.error == undefined) ? (
                       this.state.users.map((user) => (
                            <a key={user.email}href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                                <div className="d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Name: {user.username}</h5>
                                    <small>01/09/2017</small>
                                </div>
                                <p className="mb-1">E-mail: {user.email}</p>
                                <small>Password (Should never do that)</small>
                            </a>
                       ))
                   ): this.state.error
                */
               }
                    
                    
                       
            </div>
            
        
        <div className="modal-footer">
            <button type="button" className="btn btn-secondary btn-block" data-dismiss="modal">Close</button>

        </div>
    </div>
</div>
</div>
*/}
{/* End Modal List Authenticad List */}
</div>
)
export default ListUsers