import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Userlist from './Userlist';
import Orderlist from './Orderlist';
import Graphicslist from './Graphicslist';
import Addgraphics from './Addgraphics';
import { Route, Switch, Link } from 'react-router-dom';
import EditGraphics from './EditGraphics';
export default function Adminscreen() {
    const userstate = useSelector((state) => state.loginUserReducer);
    const { currentUser } = userstate;
    const dispatch = useDispatch()

    useEffect(() => {
        if (!currentUser.isAdmin) {
            window.location.href = '/'; 
        }

    }, [])

    return (
        <div>
            <div className="row justify-content-center p-3">
                <div className="col-md-10">

                    <h2 style={{ fontSize: '35px' }}>Admin Panel</h2>

                    <ul className="adminfunction">
                        <li><Link to = {'/admin/userslist'}    style={{color : 'white'}}>User list</Link></li>
                        <li><Link to = {'/admin/graphicslist'} style={{color : 'white'}}>Graphics list</Link></li>
                        <li><Link to = {'/admin/addgraphics'}  style={{color : 'white'}}>add graphics</Link></li>
                        <li><Link to = {'/admin/orderslist'}   style={{color : 'white'}}>order list</Link></li>
                    </ul>
                    <Switch>
                        <Route path="/admin/userslist" component={Userlist} exact />
                        <Route path="/admin/orderslist" component={Orderlist} exact />
                        <Route path="/admin/graphicslist" component={Graphicslist} exact />
                        <Route path="/admin/addgraphics" component={Addgraphics} exact />
                        <Route path="/admin/editgraphics/:graphicid" component={EditGraphics} exact/>
                    </Switch>


                </div>


            </div>
        </div>
    )
}
