import "./main.css";

export function Main() {
  return (
    <main>
      <section id="main-text">
        <h2>
          Para simplificar o acesso e o contato entre bancos e clientes, o SMB
          foi criado. Aqui, é possível registrar bancos e criar contas em uma
          única plataforma.
        </h2>
      </section>
      <section id="main-form">
        <p>Deseja criar conta em um banco?</p>
        <form id="main-form-register">
          <div id="main-form-register-div">
            <h2>Preencha o formulário</h2>
            <div className="main-inputs-form">
              <label htmlFor="name">Nome:</label>
              <input type="text" minLength={4} name="name" id="name" required />
            </div>
            <div className="main-inputs-form">
              <label htmlFor="number">Número:</label>
              <input
                type="text"
                minLength={4}
                name="number"
                id="number"
                required
              />
            </div>
            <div className="main-inputs-form">
              <label htmlFor="agency">Agência:</label>
              <input
                type="text"
                minLength={4}
                name="agency"
                id="agency"
                required
              />
            </div>
            <div className="main-inputs-form">
              <label htmlFor="zipcode">CEP:</label>
              <input
                type="number"
                minLength={8}
                maxLength={8}
                name="zipcode"
                id="zipcode"
                required
              />
            </div>
            <div className="main-inputs-form">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                minLength={5}
                name="password"
                id="password"
                required
              />
            </div>
            <div className="main-inputs-form">
              <label htmlFor="password">Confirmar senha:</label>
              <input
                type="password"
                minLength={5}
                name="password"
                id="password"
                required
              />
            </div>

            <div id="main-button-form">
              <button type="submit">Confimar</button>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
