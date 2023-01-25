import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [
      {
        id: nanoid(),
        title: "Learn JavaScript",
        completed: false,
      },
      {
        id: nanoid(),
        title: "Learn React",
        completed: true,
      },
    ],
    activeFilter: "all",
  },
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare: ({ title }) => {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            title,
          },
        };
      },
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

export const selectTodos = (state) => state.todos.items;
export const selectFiltredTodos = (state) => {
  const activeFilter = state.todos.activeFilter;
  const items = state.todos.items;
  let filtered = items;
  if (activeFilter !== "all") {
    filtered = items.filter((item) => {
      if (activeFilter === "active") {
        return !item.completed;
      } else if (activeFilter === "completed") {
        return item.completed;
      }
    });
  }
  return filtered;
};
export const {
  addTodo,
  toggleTodo,
  removeTodo,
  changeActiveFilter,
  clearCompleted,
} = todosSlice.actions;

export default todosSlice.reducer;
