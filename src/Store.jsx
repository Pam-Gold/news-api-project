import { create } from "zustand";

import axios from "axios";

const store = (set) => ({
  data: [],
  fetchData: (url)=> axios.get(url).then(res=>set(({data: res.data.results}))).catch(err=>console.log(err))
});

const useStore = create(store);

export default useStore;
