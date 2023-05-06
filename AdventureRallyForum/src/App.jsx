import Routing from "./Routing";
import { AuthProvider } from "./Context/AuthContext";
import "../src/assets/Styles/App.css";

function App() {
  return (
    <AuthProvider>
      <Routing />
    </AuthProvider>
  );
}

export default App;
