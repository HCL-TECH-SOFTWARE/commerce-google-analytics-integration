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
//UI
import { StyledGrid, StyledContainer } from "../../StyledUI";
import GTMDLService from "../../../_foundation/apis/gtm/gtmDataLayer.service";
import GADataService from "../../../_foundation/apis/gtm/gaData.service";

const CategoryPageLayout: React.FC<any> = ({
  cid,
  hero,
  contentSection,
  ...props
}: any) => {
  let { page } = props;
  if (!page) {
    page = {};
  }
  const Hero = () => {
    return (
      <>
        {hero && (
          <StyledGrid container>
            <StyledGrid item xs={12}>
              {hero.map((e: any) => {
                const CurrentComponent = e.CurrentComponent;
                return (
                  <div key={e.key}>
                    <CurrentComponent />
                  </div>
                );
              })}
            </StyledGrid>
          </StyledGrid>
        )}
      </>
    );
  };

  const ContentSection = () => {
    return (
      <>
        {contentSection && (
          <StyledGrid container>
            {contentSection.map((e: any) => {
              const CurrentComponent = e.CurrentComponent;
              return (
                <StyledGrid item key={e.key}>
                  <CurrentComponent />
                </StyledGrid>
              );
            })}
          </StyledGrid>
        )}
      </>
    );
  };
  /**GA360**/
  React.useEffect(() => {
    GADataService.sendContentPageViewEvent();
  }, [cid])
  
  /**GA360**/
  return (
    <StyledContainer id={cid}>
      <Hero />
      <ContentSection />
    </StyledContainer>
  );
};

export default CategoryPageLayout;
