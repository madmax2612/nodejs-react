import React,{useState} from 'react';
import { Modal, Divider } from 'semantic-ui-react'
import {Redirect} from 'react-router-dom';

import { Controller, useForm } from 'react-hook-form/dist/react-hook-form.ie11'
import { AddRecords, UpdateRecords } from '../service/service';
import App from './apps';

 const AddModal= (props) => {

const { register, handleSubmit, errors } = useForm({defaultValues: props.update})
const initialFormState = { id: null, name: '', username: '' }
const [user, setUser] = useState(initialFormState)  
const [redirect,setRedirect] =useState(false);



  const [open,setOpen]=React.useState(true);
  
  const closeModal = function closeModal(){
    console.log("close modal");
    props.redirect && props.redirect();
    
    setOpen(false);
  }

  const cancelModal = function cancelModal(){
   props.redirect && props.redirect();
    // setRedirect(true);
     
  }

  const onSubmit = function onSubmit(data,e) {
       
    console.log(data)

    if(props.update){
        UpdateRecords(props.update.id,data).then((res)=>{
            console.log(props.update.id,data);
            closeModal();
          }).catch(err=>{
            console.log(err.message)
          })   
        
    }

else{
    AddRecords(data).then(res=>{
        console.log(res.data)
        closeModal();
        
    }).catch(err=>{
        console.log(err.message)
        setOpen(false);
    })
}

//     if(props.update){
//         e.preventDefault()
//         props.updateUser(data);
        
//     }
//     else{
//     e.preventDefault()
//     console.log(props.addUser)
//     props.addUser(user)
//     setUser(initialFormState)
//     props.closeAddFunction();
// }
  }
  

  if(redirect){
    return(<App/>)
}
  
  return(<Modal size="tiny"  dimmer="blurring" open={open} >
   <div className="ui header container centered">
       <i className="icon user plus mini"></i>
       {props.title}
       </div>
    <Modal.Content>
       
    <div className="ui sub header container centered"> 
    
        <div className="ui center aligned container">
    
    
        
            <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid">
            <div className="ui two column row wide ">
            <div className="column">        
                                          
                <div className="field">
                    <label>First Name</label>
                  {
                  props.update ?  
                     
                    <input type="text" name="first_name" placeholder="Name" ref={register({ required: true })} />
                     :
                    <input type="text" name="first_name" placeholder="Name" ref={register({ required: true })} />
                     
                     }
                </div>
                {
                   errors &&  errors.first_name ? <div className="ui one  grid column row errorDiv">
                        <div className="errorTxt column">
                            <i className="red exclamation triangle icon"></i> Name is required!!
                        </div>
                    </div>
                        : null}
                </div>
                
            <div className="column">        
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="last_name" placeholder="UserName" ref={register({ required: true })} />
                </div>
               
                {
                    errors && errors.last_name ? <div>  <div className="ui one  grid column row errorDiv">
                        <div className="errorTxt column">
                            <i className="red exclamation triangle icon"></i> User Name is required!!
                         </div>
                    </div>
                        <div className="ui hidden divider"></div>
                    </div>
                        : null}
                        </div>
                    </div>
                
                    
        <div className="ui two column row wide">
            <div className="column">               
                <div className="field">
                    <label>Email</label>
                  {
                  props.update ?  
                     
                    <input type="text" name="email" placeholder="Name" ref={register({ required: true })} />
                     :
                    <input type="text" name="email" placeholder="Name" ref={register({ required: true })} />
                     
                     }
                </div>
                {
                   errors &&  errors.email ? <div className="ui one  grid column row errorDiv">
                        <div className="errorTxt column">
                            <i className="red exclamation triangle icon"></i> Name is required!!
                        </div>
                    </div>
                        : null}
                </div>
            <div className="column">        
                <div className="field">
                    <label>Password</label>
                    <input type="password" name="password" placeholder="Password" ref={register({ required: true })} />
                </div>
               
                {
                    errors && errors.password ? <div>  <div className="ui one  grid column row errorDiv">
                        <div className="errorTxt column">
                            <i className="red exclamation triangle icon"></i> User Name is required!!
                         </div>
                    </div>
                        <div className="ui hidden divider"></div>
                    </div>
                        : null}
                        </div>
                    </div>
                    <div className="ui two column row wide">
            <div className="column">               
                <div className="field">
                    <label>Phone Number</label>
                  {
                  props.update ?  
                     
                    <input type="text" name="phoneNumber" placeholder="Name" ref={register({ maxLength:10,required: true })} maxLength="10" required/>
                     :
                    <input type="text" name="phoneNumber" placeholder="Name" ref={register({maxLength:10, required: true })} maxLength="10" required/>
                     
                     }
                </div>
                {
                   errors &&  errors.phonenumber ? <div className="ui one  grid column row errorDiv">
                        <div className="errorTxt column">
                            <i className="red exclamation triangle icon"></i> Phone Number is required!!
                        </div>
                    </div>
                        : null}
                </div>
                <div className="column">        
                <div className="field">
                    <label>Salary</label>
                    <input type="number" name="salary" placeholder="Salary" ref={register({ maxLength:10,required: true })} />
                </div>
               
                {
                    errors && errors.salary ? <div>  <div className="ui one  grid column row errorDiv">
                        <div className="errorTxt column">
                            <i className="red exclamation triangle icon"></i> Salary is required!!
                         </div>
                    </div>
                        <div className="ui hidden divider"></div>
                    </div>
                        : null}
                        </div>
                </div>
                    <div className="ui hidden divider"></div>      
            <div className="ui container two column row wide">
                <div className="column">    
                    <button className="ui big primary button" >
                    {props.update?'Update':'add'}
                    </button>
                    <button className="ui big primary button" onClick={cancelModal}>
                    Cancel
                    </button>
                </div>
            </div>
             </div>  
            </form>
        

    </div>


</div>

    

    </Modal.Content>
  {/* <Modal.Actions>
  {props.cancelActionText && <Button onClick={cancelModal}
              negative
              icon='remove'
              labelPosition='right'
              content={props.cancelActionText}
            />}
           {props.positiveActionText && <Button onClick={closeModal}
              positive
              icon='checkmark'
              labelPosition='right'
              content={props.positiveActionText}
            />}
          </Modal.Actions> */}
  </Modal>);
}
export default AddModal;