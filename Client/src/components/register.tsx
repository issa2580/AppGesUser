import React from 'react'
import * as yup from 'yup'

const defaultValue = {
    name: '',
    email: '',
    password: ''
}

const showErrors = (field:string, valuelen:number, min:number) => {
    if(valuelen === 0){
        return `${field} is required`
    }
    if(valuelen > 0 && valuelen < min){
        return `${field} must be at least ${min} characters long`
    }
    return ''
} 

const schema = yup
.object()
.shape({
    name: yup
        .string()
        .typeError('name is required')
        .min(3, (obj) => showErrors('name', obj.value.length, obj.min))
        .required(),
    email: yup
        .string()
        .typeError('email is required')
        .min(5, (obj) =>showErrors('email', obj.value.length, obj.min))
        .required(),
    password: yup
        .string()
        .typeError('password is required')
        .min(6, (obj) => showErrors('password', obj.value.length, obj.min))  
        .required()
    })

function register() {
  return (
    <div>
      
    </div>
  )
}

export default register
