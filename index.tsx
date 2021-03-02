/**
*==================================================
Copyright [2021] [HCL Technologies]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*==================================================
**/
//Standard libraries
import React, { Suspense } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
//Custom libraries
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./i18n";
//Redux
import store from "./redux/store/index";
//UI
import { StyledCircularProgress } from "./components/StyledUI";
import "./index.scss";
/**GA360 */
import GTMDLService from "./_foundation/apis/gtm/gtmDataLayer.service";


const rootElement = document.getElementById("root");
/**GA360 */
GTMDLService.initailizeGTM();
/**GA360 */
render(
  <Provider store={store}>
    <Suspense
      fallback={<StyledCircularProgress className="horizontal-padding-5" />}>
      <App />
    </Suspense>
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
