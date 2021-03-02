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
import React, { useEffect } from "react";
import { Suspense, lazy } from "react";
import { paramCase } from "change-case";
//Custom libraries

import { homeConfig } from "./homeConstant";
import { SectionContent } from "../../layouts/sectionContentType";
import { StyledProgressPlaceholder } from "../../StyledUI";


const Home: React.FC = (props: any) => {
  const banner: SectionContent[] = [
    {
      key: `home-${paramCase(homeConfig.banner.heroESpot.eSpotName)}`,
      CurrentComponent: () => {
        const ContentRecommendationLayout = lazy(() =>
          import(
            "../../widgets/content-recommendation/ContentRecommendationLayout"
          )
        );

        return (
          <Suspense
            fallback={
              <StyledProgressPlaceholder className="vertical-padding-20" />
            }>
            <ContentRecommendationLayout
              cid={`home-${paramCase(homeConfig.banner.heroESpot.eSpotName)}`}
              eSpot={homeConfig.banner.heroESpot}
              page={{ pageName: "home" }}
            />
          </Suspense>
        );
      },
    },
  ];
  const sectionOne: SectionContent[] = [
    {
      key: `home-${paramCase(homeConfig.sectionOne.freeDelivery.eSpotName)}`,
      CurrentComponent: () => {
        const ContentRecommendationLayout = lazy(() =>
          import(
            "../../widgets/content-recommendation/ContentRecommendationLayout"
          )
        );

        return (
          <Suspense
            fallback={
              <StyledProgressPlaceholder className="vertical-padding-20" />
            }>
            <ContentRecommendationLayout
              cid={`home-${paramCase(
                homeConfig.sectionOne.freeDelivery.eSpotName
              )}`}
              eSpot={homeConfig.sectionOne.freeDelivery}
              page={{ pageName: "home" }}
			  /**GA360 */
              gaPromoFlag={true}
			  /**GA360 */
            />
          </Suspense>
        );
      },
    },

    {
      key: `home-${paramCase(homeConfig.sectionOne.produtRec)}`,
      CurrentComponent: () => {
        const ProductRecommendationLayout = lazy(() =>
          import(
            "../../widgets/product-recommendation/ProductRecommendationLayout"
          )
        );

        return (
          <Suspense
            fallback={
              <StyledProgressPlaceholder className="vertical-padding-20" />
            }>
            <ProductRecommendationLayout
              cid={`home-${paramCase(homeConfig.sectionOne.produtRec)}`}
              eSpotName={homeConfig.sectionOne.produtRec}
              page={{ pageName: "home" }}
            />
          </Suspense>
        );
      },
    },
    {
      key: `home-${paramCase(
        homeConfig.sectionOne.twentyPercentOff.eSpotName
      )}`,
      CurrentComponent: () => {
        const ContentRecommendationLayout = lazy(() =>
          import(
            "../../widgets/content-recommendation/ContentRecommendationLayout"
          )
        );

        return (
          <Suspense
            fallback={
              <StyledProgressPlaceholder className="vertical-padding-20" />
            }>
            <ContentRecommendationLayout
              cid={`home-${paramCase(
                homeConfig.sectionOne.twentyPercentOff.eSpotName
              )}`}
              eSpot={homeConfig.sectionOne.twentyPercentOff}
              page={{ pageName: "home" }}
			  /**GA360 */
              gaPromoFlag={true}
			  /**GA360 */
            />
          </Suspense>
        );
      },
    },
    {
      key: `home-${paramCase(homeConfig.sectionOne.featureProd)}`,
      CurrentComponent: () => {
        const FeaturedProductRecommendationLayout = lazy(() =>
          import(
            "../../widgets/featured-product-recommendation/FeaturedProductRecommendationLayout"
          )
        );

        return (
          <Suspense
            fallback={
              <StyledProgressPlaceholder className="vertical-padding-20" />
            }>
            <FeaturedProductRecommendationLayout
              cid={`home-${paramCase(homeConfig.sectionOne.featureProd)}`}
              eSpotName={homeConfig.sectionOne.featureProd}
              page={{ pageName: "home" }}
            />
          </Suspense>
        );
      },
    },
    {
      key: `home-${paramCase(homeConfig.sectionOne.categoryRec.eSpotName)}`,
      CurrentComponent: () => {
        const CategoryRecommendationLayout = lazy(() =>
          import(
            "../../widgets/category-recommendation/CategoryRecommendationLayout"
          )
        );

        return (
          <Suspense
            fallback={
              <StyledProgressPlaceholder className="vertical-padding-20" />
            }>
            <CategoryRecommendationLayout
              cid={`home-${paramCase(
                homeConfig.sectionOne.categoryRec.eSpotName
              )}`}
              eSpot={homeConfig.sectionOne.categoryRec}
              page={{ pageName: "home" }}
            />
          </Suspense>
        );
      },
    },
  ];


  const HomePageLayout = lazy(() =>
    import("../../layouts/home-page/HomePageLayout")
  );
  return (
    <>
      <Suspense
        fallback={<StyledProgressPlaceholder className="vertical-padding-20" />}>
        <HomePageLayout cid="home" banner={banner} sectionOne={sectionOne} />
      </Suspense>
    </>
  );
};

export default Home;
