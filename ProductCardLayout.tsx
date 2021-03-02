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
import { StyledProductCard, StyledSwatch } from "../../StyledUI";
import { useSelector } from "react-redux";
import { breadcrumbsSelector } from "../../../redux/selectors/catalog";
import GADataService from "../../../_foundation/apis/gtm/gaData.service";

interface ProductCardProps {
  product: any;
  /**GA360 */
  index?: number;
  /**GA360 */
}

/**
 * Product Card component
 * displays catentry image, name, price, etc
 * @param props
 */
export default function ProductCard(props: ProductCardProps) {
  const product: any = props.product;
  const catentryId: string = product.id;
  const name: string = product.name;
  const thumbnail: string = product.thumbnail;
  const productAttributes: any = product.attributes ? product.attributes : [];
  const seoUrl: string = product.seo ? product.seo.href : "";

  let swatches: any[] = [];

  function getOfferPrice(prices: any[]) {
    let offerPrice: number | null = null;
    prices.forEach((price: any, index: number) => {
      if (price.usage === "Offer") {
        if (price.value !== "") {
          offerPrice = parseFloat(price.value);
        }
      }
    });
    return offerPrice;
  }

  productAttributes.map((attribute: any, index: number) => {
    if (attribute.usage === "Defining") {
      attribute.values.map((attributeValue: any, index2: number) => {
        if (
          attributeValue.image1path !== undefined &&
          Array.isArray(attributeValue.image1path) &&
          attributeValue.image1path.length > 0
        ) {
          attributeValue.image1path.map((imagePath: any, index3: number) => {
            swatches.push(
              <StyledSwatch
                style={{
                  backgroundImage: `url("${imagePath}")`,
                }}
                key={`${attributeValue.id}_${index2}_${index3}`}
                alt={attributeValue.value}
              />
            );
          });
        } else if (
          attributeValue.image1path !== undefined &&
          attributeValue.image1path.length > 0
        ) {
          swatches.push(
            <StyledSwatch
              style={{
                backgroundImage: `url("${attributeValue.image1path}")`,
              }}
              key={attributeValue.id}
              alt={attributeValue.value}
            />
          );
        }
        return null;
      });
    }
    return null;
  });

  /**
  * GA360: Send product Click Event
  **/
  const breadcrumbs = useSelector(breadcrumbsSelector);
  const gaProductClick = (index) => {
    let listerCategoryFlag = (breadcrumbs.length > 0) ? true : false;
    GADataService.sendProductClickEvent(product, index, listerCategoryFlag);
  }
  /**GA360 */

  return (
    <StyledProductCard
      seoUrl={seoUrl}
      catentryId={catentryId}
      swatches={swatches}
      thumbnail={thumbnail}
      name={name}
      price={getOfferPrice(product.price)}
      className="product-grid"
	  /**GA360 */
      onClick={() => gaProductClick(props.index)}
	  /**GA360 */
    />
  );
}
