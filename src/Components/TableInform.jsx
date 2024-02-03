import React, { useState } from "react";
import TableInformacion from "../Hooks/TableInformacion";

const TableInform = () => {
  const [BtnTable, setBtnTable] = useState("users");

  const { Data } = TableInformacion(
    `https://jsonplaceholder.typicode.com/${BtnTable}`
  );

  const { dato, isloading } = Data;
  const OnBtnTabke = (btn) => {
    setBtnTable(btn);
  };

  return (
    <>
      <button
        className={BtnTable == "users" ? "btn btn-danger" : "btn btn-light"}
        onClick={() => OnBtnTabke("users")}
      >
        Users
      </button>
      <button
        className={BtnTable == "posts" ? "btn btn-danger" : "btn btn-light"}
        onClick={() => OnBtnTabke("posts")}
      >
        Posts
      </button>

      {isloading ? (
        <h2>Cargando</h2>
      ) : (
        <table className="table table-dark">
          <thead>
            <tr>
              {BtnTable == "users" ? (
                <>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                </>
              ) : (
                <>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {BtnTable == "users"
              ? dato.map((item) => (
                  <>
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                    </tr>
                  </>
                ))
              : dato.map((item) => (
                  <>
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                    </tr>
                  </>
                ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default TableInform;
