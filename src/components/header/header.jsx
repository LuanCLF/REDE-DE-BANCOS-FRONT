import bankLogo from "../../assets/bank.svg";
import menuIcon from "../../assets/menu.svg";
import "./header.css";

export function Header() {
  return (
    <header className="Header">
      <div className="logo-title">
        <img
          src={bankLogo}
          className="icons-header"
          alt="icone do da rede de bancos"
        />
        <h1 className="title">Sistema Mundial de Bancos</h1>
      </div>
      <img
        src={menuIcon}
        className="icons-header"
        id="header-menu"
        alt="icone da barra de menu"
      />

      <div id="header-login">
        <div id="header-select">
          <label htmlFor="choice-login">Sou um </label>
          <select id="choice-login" name="choice-login">
            <option value="user">usuário</option>
            <option value="bank">banco</option>
          </select>
        </div>
        <button type="submit">Login</button>
      </div>
    </header>
  );
}
