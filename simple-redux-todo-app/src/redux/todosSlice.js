import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: 1,
        title: "Learn JavaScript",
        completed: false,
      },
      {
        id: 2,
        title: "Learn React",
        completed: true,
      },
    ],
    activeFilter: "all",
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((item) => item.id === id);

      item.completed = !item.completed;
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
    },
    changeActiveFilter: (state, action) => {
      state.activeFilter = action.payload;
    },
    clearCompleted: (state) => {
      state.items = state.items.filter((item) => !item.completed);
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  removeTodo,
  changeActiveFilter,
  clearCompleted,
} = todosSlice.actions;

export default todosSlice.reducer;
