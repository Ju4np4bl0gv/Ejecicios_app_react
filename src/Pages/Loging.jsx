import { useContext } from "react";
import { FormulariosHooks } from "../Hooks/FormulariosHooks";
import { CredencialesContext } from "../Context/CredencialesContext";

export const Loging = () => {
  const inictialForm = { email: "", password: "" };
  const { onSaveForm, email, password } = FormulariosHooks(inictialForm);
  const { setlistCredenciales } = useContext(CredencialesContext);

  const onSubmit = (e) => {
    e.preventDefault();
    setlistCredenciales({email, password})

    // const {setlistCredenciales} = useContext(CredencialesContext)
    //console.log(setlistCredenciales)
  };
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={onSaveForm}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={password}
            onChange={onSaveForm}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
