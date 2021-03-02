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
import { Link } from "react-router-dom";
//UI

import {
  StyledMenuItem,
  StyledMenuTypography,
  StyledExpansionPanel,
  StyledExpansionPanelDetails,
  StyledExpansionPanelSummary,
} from "../StyledUI";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import GTMDLService from "../../_foundation/apis/gtm/gtmDataLayer.service";

const MegaMenuLink = (props: any) => {
  const {
    name,
    link,
    page,
    level,
    activeMenuId,
    setActiveMenuId,
    activeParentMenuId,
    setActiveParentMenuId,
    closeMegaMenu,
    parentId,
    parentName
  } = props;


  return (
    <>
      {page.children && page.children.length > 0 ? (
        <MegaMenuColumn
          page={page}
          activeMenuId={activeMenuId}
          setActiveMenuId={setActiveMenuId}
          activeParentMenuId={activeParentMenuId}
          setActiveParentMenuId={setActiveParentMenuId}
          closeMegaMenu={closeMegaMenu}
          level={level + 1}
          parentId={parentId}
        />
      ) : (
          <Link to={link} onClick={() => { /**GA360 */GTMDLService.measureNavigationClick(parentName, name); /**GA360 */closeMegaMenu() }}>
            <StyledMenuItem role="menuitem">
              <StyledMenuTypography variant="body1">
                <span>{name}</span>
              </StyledMenuTypography>
            </StyledMenuItem>
          </Link>
        )}
    </>
  );
};

interface MegaMenuColumnProps {
  page: any;
  activeMenuId: number | undefined;
  setActiveMenuId: any;
  activeParentMenuId: number | undefined;
  setActiveParentMenuId: any;
  closeMegaMenu: any;
  level: number;
  parentId: number | undefined;
}

/**
 * MegaMenu component
 * displays top category links in desktop/mobile view
 * @param props
 */
const MegaMenuColumn: React.FC<MegaMenuColumnProps> = (props: any) => {
  const {
    page,
    activeMenuId,
    setActiveMenuId,
    activeParentMenuId,
    setActiveParentMenuId,
    closeMegaMenu,
    level,
  } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));
  const id = page.id;
  let childrenList: JSX.Element[] = [];

  if (page.children && page.children.length > 0) {
    page.children.map(function (page: any, index: number) {
      const element = (
        <MegaMenuLink
          key={index}
          link={page.seo?.href}
          id={id}
          name={page.name}
          page={page}
          activeMenuId={activeMenuId}
          setActiveMenuId={setActiveMenuId}
          activeParentMenuId={activeParentMenuId}
          setActiveParentMenuId={setActiveParentMenuId}
          closeMegaMenu={closeMegaMenu}
          level={level + 1}
          parentId={id}
          parentName={props.page.name}
        />
      );
      childrenList.push(element);
      return null;
    });
  }

  return (
    <StyledExpansionPanel
      elevation={0}
      square={true}
      expanded={
        isMobile
          ? level === 1 || activeMenuId === id
          : activeParentMenuId === id || activeMenuId === id
      }
      onChange={() => {
        setActiveMenuId(activeMenuId !== id ? id : null);
        setActiveParentMenuId(activeParentMenuId !== id ? id : null);
      }}>
      <StyledExpansionPanelSummary
        className={`level-${level}`}
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${id}bh-content`}
        id={`${id}bh-header`}>
        <Link to={page.seo?.href} onClick={() => { /**GA360 */GTMDLService.measureNavigationClick('Main', page.name);/**GA360 */ closeMegaMenu() }}>
          <StyledMenuItem>
            <StyledMenuTypography
              variant={level === 1 ? "overline" : "body2"}
              className="category-title"
              id={`megamenu_department_${page.id}`}
              title={page.name}>
              {page.name}
            </StyledMenuTypography>
          </StyledMenuItem>
        </Link>
      </StyledExpansionPanelSummary>
      <StyledExpansionPanelDetails>{childrenList}</StyledExpansionPanelDetails>
    </StyledExpansionPanel>
  );
};

export default MegaMenuColumn;
