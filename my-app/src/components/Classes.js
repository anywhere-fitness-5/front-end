import React from 'react';
 import { axiosWithAuth } from '../utils/axiosWithAuth';

 class Classes extends React.Component{

     constructor(){
         super();
         this.state = { classes: [], isLoading: false }
     }

     componentDidMount() {
         this.getClasses();
     }

     getClasses = () => {
         this.setState({...this.state, isLoading: true});
         axiosWithAuth().get("/api/classes")
         .then(res => {
             console.log("Successfully got classes",res);
             this.setState({ classes: res.data});
             this.setState({ ...this.state, isLoading: false });
         })
         .catch(err => {
             console.log(err);
             this.setState({...this.state, isLoading: false});
         })
     }

     render(){
        return(
            <div className="classes">
                <h2>Class List</h2>
                {this.state.isLoading && <p> Loading...  </p>}
                <div className="listOfClasses">
                    {this.state.classes.map(class => 
                        <div key={class.id}>
                            <h4>{`ID: ${class.id}`}</h4>
                            <h4>{`${class.name}, ${class.date}`}</h4>
                        </div>)
                    }
                </div>
            </div>
        )
    }

}


 
export default Classes