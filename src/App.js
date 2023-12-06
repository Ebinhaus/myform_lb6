import logo from "./logo.svg";
import "./App.css";
 
function App() {
 return (
  <div className="App">

<h2>React - приложение отправки данных </h2>
<h2>клиента на сервер от Макса</h2>
    <form action="http://127.0.0.1:5000/find" method="POST" className="form">
    <fieldset>
     <p className="item">
     <label> Ваше имя </label>
     <input type="text" name="username" id="username" />
     </p>
     <p className="item">
      <label> Пароль </label>
      <input type="password" name="password" id="password" />
     </p>
     <button type="submit">Послать на сервер</button>
    </fieldset>
    </form>
    <img src={logo} className="App-logo" alt="logo" width="250" height="240" />

  </div>
 );
}

export default App;
// npm install @babel/plugin-proposal-private-property-in-object