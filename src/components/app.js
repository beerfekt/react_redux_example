import React from "react";
import Counter from "./building_blocks/counter/container";

import { Provider } from "react-redux";
import store from "../store/create-store";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
