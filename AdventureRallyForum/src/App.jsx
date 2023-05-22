import Routing from "./Routing";
import { AuthProvider } from "./Context/AuthContext";
import { FilterContextProvider } from "./Context/FilterContext";
import "../src/assets/Styles/App.css";

function App() {
  return (
    <AuthProvider>
      <FilterContextProvider>
        <Routing />
      </FilterContextProvider>
    </AuthProvider>
  );
}

export default App;
