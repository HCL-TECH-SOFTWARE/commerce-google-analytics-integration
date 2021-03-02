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
import React from "react";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
//Foundation libraries
import { useSite } from "../../_foundation/hooks/useSite";
//Redux
import { GET_SEO_CONFIG_ACTION } from "../../redux/actions/seo";
import { seoSelector } from "../../redux/selectors/seo";
//UI
import { StyledProgressPlaceholder } from "../../components/StyledUI";
import GTMDLService from "../apis/gtm/gtmDataLayer.service";
import GADataService from "../apis/gtm/gaData.service";

function SEO(props: any): JSX.Element {
  const site = useSite();
  const dispatch = useDispatch();
  const seoConfig = useSelector(seoSelector);
  const url = props.match.url;

  React.useEffect(() => {
    if (site !== null && url) {
      dispatch(GET_SEO_CONFIG_ACTION({ identifier: url.substr(1) }));
    }
  }, [site, url, dispatch]);

  const ActiveComponent = () => {
    if (seoConfig && seoConfig[url.substr(1)]) {
      const c = seoConfig[url.substr(1)];
      const ActiveC = c.component;
      /**GA360 */
      GADataService.setPageTitle(seoConfig[url.substr(1)].page.title);
      /**GA360 */
      return c.redirect && c.redirect.trim() !== "" ? (
        <Redirect to={c.redirect} />
      ) : (
          <>
            <div className="page">
              <Helmet>
                <meta charSet="utf-8" />
                <meta name="description" content={c.page.metaDescription}></meta>
                <meta name="keywords" content={c.page.metaKeyword}></meta>
                <title>{c.page.title}</title>
              </Helmet>
              <ActiveC page={c.page} {...props} />
            </div>
          </>
        );
    } else {
      return <StyledProgressPlaceholder className="vertical-padding-20" />;
    }
  };
  return <ActiveComponent />;
}

SEO.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default SEO;
