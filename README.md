# Google-Analytics-Integration

## WARRANTY & SUPPORT 
HCL Software provides HCL Commerce open source assets “as-is” without obligation to support them nor warranties or any kind, either express or implied, including the warranty of title, non-infringement or non-interference, and the implied warranties and conditions of merchantability and fitness for a particular purpose. HCL Commerce open source assets are not covered under the HCL Commerce master license nor Support contracts.

If you have questions or encounter problems with an HCL Commerce open source asset, please open an issue in the asset's GitHub repository. For more information about [GitHub issues](https://docs.github.com/en/issues), including creating an issue, please refer to [GitHub Docs](https://docs.github.com/en). The HCL Commerce Innovation Factory Team, who develops HCL Commerce open source assets, monitors GitHub issues and will do their best to address them. 

## HCLC Google-Analytics Intrgation Asset
# NOTE:  This functionality has been included in the product from release 9.1.4.0 and beyond.  This asset applies to 9.1.1.0 - 9.1.3.0 only.

**Adding Google Analytics to React Store, using Google Tag Manager **

We need the below things for implementation of GA360 on React store 

**Google analytics** – Analytics Tool 

**Google tag manager** – Tag Management. 

**react-gtm-module** – Integrate GTM code snippet in React Store. 

 
**Steps to integrate the GA**
1. Account Creation

Firstly, we need to create account on both Google Analytics and google tag manager. 

**Google analytics** - steps mentioned in **docs/Google_Analytics_CreateAccount_Steps.docx** file.

**Google tag manager** - Steps mentioned in **docs/GTMAccountcreationSteps.docs** file


2. Add **react-gtm-module** in React store

Once the account creation is done then install the **react-gtm-module** in the react store using npm. 

`npm install –save react-gtm-module`


3. Follow the steps mentioned below in the docs
 Refer the **docs/GA360_Integration_guide.docx** file for the adding **react-gtm-module** in react store

 Please refer the **docs/Google_Tag_Manger_configuration_sheet.pdf** for the creation on tags, triggers and variables in google tag Manager. 

