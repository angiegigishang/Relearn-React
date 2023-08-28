import { useState, useReducer } from "react";

export interface FieldDetail {
  name: any;
  value: string;
  rules: any[];
  isValid: boolean;
  errors: any[]
}

export interface FieldState {
  [key: string]: FieldDetail
}

export interface FormState {
  isValid: boolean;
}

export interface FieldsAction {
  type: 'addField' | 'updateValue';
  name: any;
  value: any;
}

function fieldsReducer(state: FieldState, action: FieldsAction):FieldState {
  switch (action.type) {
    case 'addField':
      return {
        ...state,
        [action.name]: {...action.value}
      }
    case 'updateValue':
      return {
        ...state,
        [action.name]: {...state[action.name], value: action.value}
      }
    default:
      return state;
  }
}

//react hooks
//class - ant design

function useStore() {
  const [ form, setForm ] = useState<FormState>({isValid: true})
  const [ fields, dispatch ] = useReducer(fieldsReducer, {})
  return {
    fields,
    dispatch,
    form
  }
}

export default useStore;

