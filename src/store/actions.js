export default {
  commitAddTask({ commit }, task) {
    commit("addTask", task);
  },
  commitDeleteTask({ commit }, task) {
    commit("deleteTask", task);
  },
  commitUpdateTask({ commit }, uptask) {
    commit("updateTask", uptask);
  },
};
