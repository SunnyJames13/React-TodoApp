import { createStore } from "@reduxjs/toolkit";
import todos from "./slice";

const store = createStore(todos);

export default store;
