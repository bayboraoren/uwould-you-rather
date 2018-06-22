import React, {Component} from 'react';
import '../App.css';
import {handleInitialData} from "../app/AppAction";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {toMap} from "../utils/helpers";
import {Button, Card, CardTitle, Carousel, Col} from 'react-materialize'
import {setLoggedUser} from "./loginAction";


class LoginPage extends Component {

    componentDidMount() {
        this.props.handleInitialData()
    }

    loggedUser = (user) => {
        this.props.setLoggedUser(user)
        this.props.history.push("/");
    }

    render() {

        const {userList} = this.props


        return (
            <div>

                {userList.length > 0 ?
                    <Carousel>

                        {userList.map((user) => (
                            <div key={user.id} className="carousel-item">
                                <Card header={<CardTitle image={"assets/" + user.avatarURL}
                                                         waves='light'/>}
                                      title={user.name}
                                      reveal={<p>Here is some more information about this product that is only revealed
                                          once clicked on.</p>}>
                                    <p>
                                        <Button waves='light' onClick={() => this.loggedUser(user)}>Login</Button>
                                    </p>
                                </Card>
                            </div>
                        ))}

                    </Carousel> : <div/>
                }

            </div>
        )
    }
}


function mapStateToProps({userList, userLogged}) {
    return {
        userList: toMap(userList),
        userLogged: userLogged
    }
}

export default withRouter(connect(mapStateToProps,{setLoggedUser,handleInitialData})(LoginPage))
