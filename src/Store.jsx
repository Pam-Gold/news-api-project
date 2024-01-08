import { create } from "zustand";

// import axios from "axios";

const store = (set) => ({
  data: [],
  fetchData: async (url) => {
    try {
      const response = await fetch(url);

      const data = await response.json();

      console.log(data)
    
      set({ data:data.results });
    } catch (err) {
      console.log(err);
    }
  },
});

const useStore = create(store);

export default useStore;
