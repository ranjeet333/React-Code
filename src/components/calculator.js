import React, {Component} from 'react';
class Calculator extends Component{ 
    state ={
        value:null,
        displayValue:'0',
        waitingoperator:false,
        operator:null   
    } 

    clearclick()
    {
        this.setState({
            displayValue:'0'
        })
    }
    buttonclick(digit)
    {
        const {displayValue,waitingoperator} = this.state
        if (waitingoperator) {
            this.setState({displayValue:String(digit),
            waitingoperator:false
            });
        }
        else
        {
            this.setState({
                displayValue : displayValue==='0' ? String(digit):displayValue + digit
            });
         }
    }
    dotclick()
    {
        const {displayValue,waitingoperator} = this.state
        if (waitingoperator) {
            this.setState({
                displayValue:displayValue+'.',
                waitingoperator:false   
            })
        }
       else if (displayValue.indexOf('.') ===-1)
         {
            this.setState({
                displayValue:displayValue+'.',
                waitingoperator:false
        });
        }
        
    }
    delclick()
    {
         const {displayValue} = this.state
        this.setState({
            displayValue:'0'
        })
    }
    perclick()
    {
         const {displayValue} = this.state
         const value = parseFloat(displayValue)
        this.setState({
            displayValue:String(value/100)
        })
    }
    operation(nextOperator)
    {
        const {displayValue,operator ,value} = this.state
        const nextvalue = parseFloat(displayValue)
        const operations = {
            '/':(prevalue,nextvalue)=>prevalue/nextvalue,
            '*':(prevalue,nextvalue)=>prevalue*nextvalue,
            '-' :(prevalue, nextvalue) => prevalue - nextvalue,
            '+' :(prevalue, nextvalue) => prevalue + nextvalue,
             '=' :(prevalue, nextvalue) => nextvalue

        }
        if (value==null) {
            this.setState({
                value:nextvalue
            })
        }else if(operator){
        const currentvalue = value || 0
        const newvalue = operations[operator](currentvalue,nextvalue)
        this.setState({
            value:newvalue,
            displayValue:String(newvalue)
        })
    }
    this.setState({
        waitingoperator:true,
        operator:nextOperator
    })
    }
    render()
    {
        const {displayValue} = this.state
     return (
            <div className="container" style={{marginLeft:40+'%'}}>
                    <h2> React Calculator </h2>
                    <div className = "row" >
                        <div className="col-md-4 ">
                            <div style={{backgroundColor:'black',padding:20,color:"white" , textAlign:"right",fontSize:50}}>
                                {displayValue}
                            </div>
                        </div>
                    </div><br/>
                    <div className="row">
                            <div className="col-md-1">
                                <button className='btn btn-default' onClick={()=>this.clearclick()} style={{fontSize:30,width:100+'%'}}>AC</button>
                            </div>
                            <div className="col-md-1">                                
                                <button className='btn btn-default' onClick={()=>this.delclick(8)} style={{fontSize:30,width:100+'%'}}>Del</button>
                            </div>
                            <div className="col-md-1"> 
                               <button className='btn btn-default' onClick={()=>this.perclick(7)} style={{fontSize:30,width:100+'%'}}>%</button>
                            </div>
                            <div className="col-md-1"> 
                               <button className='btn btn-danger' onClick={()=>this.operation('/')} style={{fontSize:30,width:100+'%'}}>/</button>
                            </div>
                        </div><br/>
                        <div className="row">
                            <div className="col-md-1">
                                <button className='btn btn-primary' onClick={()=>this.buttonclick(9)} style={{fontSize:30,width:100+'%'}}>9</button>
                            </div>
                            <div className="col-md-1">                                
                                <button className='btn btn-primary' onClick={()=>this.buttonclick(8)} style={{fontSize:30,width:100+'%'}}>8</button>
                            </div>
                            <div className="col-md-1"> 
                               <button className='btn btn-primary' onClick={()=>this.buttonclick(7)} style={{fontSize:30,width:100+'%'}}>7</button>
                            </div>
                            <div className="col-md-1"> 
                               <button className='btn btn-danger' onClick={()=>this.operation('*')} style={{fontSize:30,width:100+'%'}}>*</button>
                            </div>
                        </div><br/>
                        <div className="row">
                            <div className="col-md-1">
                                <button className='btn btn-primary' onClick={()=>this.buttonclick(6)} style={{fontSize:30,width:100+'%'}}>6</button>
                            </div>
                            <div className="col-md-1">                                
                                <button className='btn btn-primary' onClick={()=>this.buttonclick(5)} style={{fontSize:30,width:100+'%'}}>5</button>
                            </div>
                            <div className="col-md-1"> 
                               <button className='btn btn-primary' onClick={()=>this.buttonclick(4)} style={{fontSize:30,width:100+'%'}}>4</button>
                            </div>
                            <div className="col-md-1"> 
                               <button className='btn btn-danger' onClick={()=>this.operation('-')} style={{fontSize:30,width:100+'%'}}>-</button>
                            </div>
                        </div><br/>
                        <div className="row">
                            <div className="col-md-1">
                                <button className='btn btn-primary' onClick={()=>this.buttonclick(3)} style={{fontSize:30,width:100+'%'}}>3</button>
                            </div>
                            <div className="col-md-1">                                
                                <button className='btn btn-primary' onClick={()=>this.buttonclick(2)} style={{fontSize:30,width:100+'%'}}>2</button>
                            </div>
                            <div className="col-md-1"> 
                               <button className='btn btn-primary' onClick={()=>this.buttonclick(1)} style={{fontSize:30,width:100+'%'}}>1</button>
                            </div>
                            <div className="col-md-1"> 
                               <button className='btn btn-danger' onClick={()=>this.operation('+')} style={{fontSize:30,width:100+'%'}}>+</button>
                            </div>
                        </div><br/>
                         <div className="row">
                            <div className="col-md-2">
                                <button className='btn btn-primary' onClick={()=>this.buttonclick(0)} style={{fontSize:30,width:100+'%'}}>0</button>
                            </div>
                            <div className="col-md-1">                                
                                <button className='btn btn-primary' onClick={()=>this.dotclick()} style={{fontSize:30,width:100+'%'}}>.</button>
                            </div>
                             <div className="col-md-1">                                
                                <button className='btn btn-danger' onClick={()=>this.operation('=')} style={{fontSize:30,width:100+'%'}}>=</button>
                            </div>
                        </div>
            </div>
            );
    }
}
 export default Calculator;