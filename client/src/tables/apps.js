import React, { useState, useEffect } from 'react'
import UserTable from './UserTable'

import Demo from '../header'
import DeleteModal from './deleteModal'
import { Divider, Input, Button } from 'semantic-ui-react'
import AddModal from './addmodal'
import { GetAllRecords, DeleteRecords, UpdateRecords, Search } from '../service/service'
import { MyErrorModal } from '../errormodal'
import { Redirect } from 'react-router'
const App = () => {
  const [data, setData] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);
  const [error, setError] = useState(false);
  const [update, setUpdate] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [searchTxt,setSearchTxt]=useState(null);
  const [deleteUserData, setDeleteUserData] = useState(null);
  const [users, setUsers] = useState(null)
  const [add, setAdd] = useState(false);

  const addUser = (user) => {
    setUpdate(false)
    user.id = users.length + 1

    setUsers([...users, user])

  }
  const addfunction = () => {
    setAdd(true);
  }

  const closeAddFunction = () => {
    setAdd(false);
  }

  const editUser = (id, user) => {
    // console.log(id,user);
    setAdd(true);
    setUpdate(user);


  }
  // console.log(update.id)

  const updateUser = (id, user) => {
    console.log(user, id)

  }


  const deleteUser = (id, data) => {
    setDeleteModal(true);
    console.log(id)
    setDeleteUserData(data)

  }

  const deleteUserDatabyId = () => {

    DeleteRecords(deleteUserData.id, deleteUserData).then((res) => {
      console.log(res.data);
    })
  }
  const closeModal = () => {
    setAdd(false);
  }

  const cancelServerErrorModal = function cancelServerErrorModal() {
    // setError(false);
    setRedirect(true);

  }

  useEffect(() => {

    GetAllRecords().then(res => {
      console.log(res.data)
      if (res.data === "No Data") {
        setData(res.data.result.rows)
      }
      else if (res.data.count > 0) {
        setData(res.data.result.rows)
      } else {
        setError(true);
      }

    }).catch(err => {
      console.log(err.message)

    })


  }, [])

  const SearchButton =function SearchButton(e){
    console.log(searchTxt)
    if(searchTxt.length>3){
    Search(searchTxt).then((res)=>{
      console.log("Hello result here"+res)
      if (res.data === "No Data") {
        setData(res.data.result.rows)
      }
      else if (res.data.count > 0) {
        setData(res.data.result.rows)
      } else {
        setError(true);
      }
    }).catch((err)=>{
      console.log(err.message)
    })
  }
  else{
    // GetAllRecords().then(res => {
    //   console.log(res.data)
    //   if (res.data === "No Data") {
    //     setData(res.data.result.rows)
    //   }
    //   else if (res.data.count > 0) {
    //     setData(res.data.result.rows)
    //   } else {
    //     setError(true);
    //   }

    // }).catch(err => {
    //   console.log(err.message)

    // })
  }

  }

  const SearchText=function SearchText(e){
    if(e.target.value.length>3){
      Search(searchTxt).then((res)=>{
        if (res.data === "No Data") {
          setData(res.data.result.rows)
        }
        else if (res.data.count > 0) {
          setData(res.data.result.rows)
        } else {
          setError(true);
        }
      })
      setSearchTxt(e.target.value)
    console.log(e.target.value)
  }
  else{
    GetAllRecords().then(res => {
      console.log(res.data)
      if (res.data === "No Data") {
        setData(res.data.result.rows)
      }
      else if (res.data.count > 0) {
        setData(res.data.result.rows)
      } else {
        setError(true);
      }

    }).catch(err => {
      console.log(err.message)

    })
  }
}
  // console.log(data)

  if(redirect){
    return(<App/>)
  }

  return (
    <>
      {/* {error &&
                <MyErrorModal title="Data Error" positiveActionText={"close"} content="oops! No data Found " redirect={cancelServerErrorModal} />
            } */}
      {add && <AddModal updateUser={updateUser} update={update}  title="add Employees" redirect={cancelServerErrorModal} positiveActionText={"close"} />
      }
      {deleteModal && <DeleteModal title="Delete User" cencelActionText={"Cancel"} content="are you sure you want to Delete" redirect={deleteUserDatabyId} positiveActionText={"Ok"} />}
      <Demo>
        <div className="ui hidden divider" />
        <div className="ui container">
          <div className="ui ">

            <h4 className="ui horizontal divider header">

              <i className="user plus icon"></i>
        Student Listing
        </h4>
            <Divider hidden />
          </div>
        </div>
        <div className="ui grid">
          <div className="ui  three column row wide">
            <div className="column">
            <div className="ui fluid icon input">
              <input type="text" placeholder="Search..." onChange={SearchText} />

              <i aria-hidden="true" className="search icon"></i>
              <Button onClick={SearchButton}/>
            </div>
            </div>
            <div className="column right aligned ">

              <button className="ui button primary" onClick={addfunction}>
                <i className="icon add circle"></i>
              Add
                  </button>
            </div>
          </div>
          <div className="ui row stackable one column wide">
            <div className="column">
              <UserTable data={data} deleteUser={deleteUser} editUser={editUser} />
            </div>
          </div>
        </div>

      </Demo>
    </>
  )
}

export default App;