import { useState, useReducer } from "react";

export interface FieldDetail {
  name: string;
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
  type: 'addField';
  name: string;
  value: any;
}

function fieldsReducer(state: FieldState, action: FieldsAction):FieldState {
  switch (action.type) {
    case 'addField':
      return {
        ...state,
        [action.name]: {...action.value}
      }
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

