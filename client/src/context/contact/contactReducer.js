import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../actionTypes";

const contactReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, payload] };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== payload)
      };
    default:
      return state;
  }
};

export default contactReducer;
