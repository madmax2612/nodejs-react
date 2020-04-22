import React from 'react';
import axios from 'axios';

const ENDPOINTS={
BASE_URL:"http://localhost:5000/users/",
REGISTER:"register",
LOGIN:"login",
EMPLOYEE:"http://localhost:5000/employee",
GETALLRECORDS:"/getAllRecords",
DELETERECORDS:"delete",
UPDATERECORDS:"update",
ADDRECORDS:"/create"
}

export const RegisterApi=function RegisterApi(body){

    return axios.post(ENDPOINTS.BASE_URL+ENDPOINTS.REGISTER,
        body,{
            timeout:3*60*1000
        }
        )

}
export const LoginApi=function LoginApi(body){

    return axios.post(ENDPOINTS.BASE_URL+ENDPOINTS.LOGIN,
        body,{
            timeout:3*60*1000
        }
        )

}

export const GetAllRecords=function GetAllRecords(){

    return axios.get(ENDPOINTS.EMPLOYEE+ENDPOINTS.GETALLRECORDS,
        {
            timeout:3*60*1000
        }
        )

}

export const AddRecords=function AddRecords(body){

    return axios.post(ENDPOINTS.EMPLOYEE+ENDPOINTS.ADDRECORDS,body,
        {
            timeout:3*60*1000
        }
        )

}

export const UpdateRecords=function UpdateRecords(id,body){

    return axios.post(ENDPOINTS.EMPLOYEE+`/${id}/`+ENDPOINTS.UPDATERECORDS,body,
        {
            timeout:3*60*1000
        }
        )

}
export const DeleteRecords=function DeleteRecords(id,body){

    return axios.post(ENDPOINTS.EMPLOYEE+`/${id}/`+ENDPOINTS.DELETERECORDS,body,
        {
           
            timeout:3*60*1000
        }
        )

}
export const Search=function Search(name){

    return axios.get(ENDPOINTS.EMPLOYEE+ENDPOINTS.GETALLRECORDS,
        {params:{
            first_name:name
        },
            timeout:3*60*1000
        }
        )

}
 export default {LoginApi,RegisterApi,GetAllRecords,DeleteRecords,Search};



