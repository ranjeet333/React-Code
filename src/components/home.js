import React, {Component} from 'react';
import axios from 'axios';
class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
                     name:'',
                     posts:[]
                    }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.showrecord = this.showrecord.bind(this);
    }
    componentDidMount()
     {
   
    }

    dubble=() =>{
        const numbers=[1,2,3,4,5,6,7,8,9,10];
        const dubbles = numbers.map((number,index)=> 
        <li key={index}>{number*2}</li>);
       return <ul>{dubbles}</ul>;
    }
    handleSubmit(e)
    {
         e.preventDefault()
         alert(this.state.name);
    }
    handleChange(e)
    {
        this.setState({name:e.target.value})
    }
    showrecord()
   {
        axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
         this.setState({
             posts:res.data
         })
      });
   }
    render()
    {
    this.dubble()
        const content = this.state.posts.map((post) =>
        <li key={post.id}>{post.title}
        </li>);
        return (
            <div>
                <center>
                    <h2> Home  </h2>
                </center>
                <div className="row">
                    <div className="col-md-2">
                        <h3>Dubbles </h3>
                        {this.dubble()}
                    </div>
                    <div className="col-md-4">
                        <h3> Sign Up </h3>
                            <form onSubmit={this.handleSubmit}>
                                <label>Name :- </label>
                                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/><br/><br/>
                                <input type="submit" value="Submit"/>
                            </form>
                    </div>
                    <div className="col-md-4">
                        <h3> Fetch Record </h3>
                        <button onClick={this.showrecord} className="btn btn-info">Show Record</button>
                        <ul>
                           {
                            content
                           }
                        </ul>
                    </div>
                </div>
            </div>
        );
      }
}
export default Home;