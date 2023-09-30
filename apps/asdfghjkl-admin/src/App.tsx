import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DasdaList } from "./dasda/DasdaList";
import { DasdaCreate } from "./dasda/DasdaCreate";
import { DasdaEdit } from "./dasda/DasdaEdit";
import { DasdaShow } from "./dasda/DasdaShow";
import { SdfghjkList } from "./sdfghjk/SdfghjkList";
import { SdfghjkCreate } from "./sdfghjk/SdfghjkCreate";
import { SdfghjkEdit } from "./sdfghjk/SdfghjkEdit";
import { SdfghjkShow } from "./sdfghjk/SdfghjkShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Order Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Dasda"
          list={DasdaList}
          edit={DasdaEdit}
          create={DasdaCreate}
          show={DasdaShow}
        />
        <Resource
          name="Sdfghjk"
          list={SdfghjkList}
          edit={SdfghjkEdit}
          create={SdfghjkCreate}
          show={SdfghjkShow}
        />
      </Admin>
    </div>
  );
};

export default App;
