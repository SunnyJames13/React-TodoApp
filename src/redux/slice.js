import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  completed: []
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD": {
      return {
        ...state,
        todo: [...state.todo, { id: action.id, text: action.text }]
      };
    }
    case "DONE": {
      return {
        todo: state.todo.filter((item) => item.id !== action.id),
        completed: [...state.completed].concat(
          state.todo.filter((item) => item.id === action.id)[0].text
        )
      };
    }
    default:
      return state;
  }
};

export default todos;
