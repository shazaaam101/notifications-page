import "./styles/app.css";
import NotificationBar from "./components/NotificationBar";
import NotificationList from "./components/NotificationList";
import { useState } from "react";
import { ReadContext } from "./readContext";
function App() {
  const [totalUnread, setTotalUnread] = useState(7);
  return (
    <div className="app">
      <div className="container">
        <ReadContext.Provider value={{ totalUnread, setTotalUnread }}>
          <NotificationBar />
          <NotificationList />
        </ReadContext.Provider>
      </div>
    </div>
  );
}

export default App;
