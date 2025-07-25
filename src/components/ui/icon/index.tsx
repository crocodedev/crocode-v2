import React, { CSSProperties } from 'react';

import style from './styles.module.scss';
import Express from '@/public/images/technologies/back-end/Express.svg';
import Liquid from '@/public/images/technologies/back-end/Liquid.svg';
import NestJS from '@/public/images/technologies/back-end/NestJS.svg';
import Python from '@/public/images/technologies/back-end/Python.svg';
import Symfony from '@/public/images/technologies/back-end/Symfony.svg';
import cplusplus from '@/public/images/technologies/back-end/c-plus-plus.svg';
import laravel from '@/public/images/technologies/back-end/laravel.svg';
import php from '@/public/images/technologies/back-end/php.svg';
import Commercetools from '@/public/images/technologies/e-commerce/Commercetools.svg';
import Hydrogen from '@/public/images/technologies/e-commerce/Hydrogen.svg';
import MedusaJs from '@/public/images/technologies/e-commerce/Medusa.js.svg';
import ShopifyPlus from '@/public/images/technologies/e-commerce/Shopify-plus.svg';
import Shopify from '@/public/images/technologies/e-commerce/Shopify.svg';
import Bootstrap from '@/public/images/technologies/front-end/Bootstrap.svg';
import MaterialUI from '@/public/images/technologies/front-end/MaterialUI.svg';
import angular from '@/public/images/technologies/front-end/angular.svg';
import chakraUI from '@/public/images/technologies/front-end/chakraUI.svg';
import css from '@/public/images/technologies/front-end/css.svg';
import Gatsby from '@/public/images/technologies/front-end/gatsby.svg';
import html from '@/public/images/technologies/front-end/html.svg';
import js from '@/public/images/technologies/front-end/js.svg';
import next from '@/public/images/technologies/front-end/next.svg';
import nuxt from '@/public/images/technologies/front-end/nuxt.svg';
import svelte from '@/public/images/technologies/front-end/svelte.svg';
import ts from '@/public/images/technologies/front-end/ts.svg';
import vue from '@/public/images/technologies/front-end/vue.svg';
import Contentful from '@/public/images/technologies/headless-cms/Contentful.svg';
import Dato from '@/public/images/technologies/headless-cms/Dato.svg';
import Netlify from '@/public/images/technologies/headless-cms/Netlify.svg';
import Sanity from '@/public/images/technologies/headless-cms/Sanity.svg';
import Strapi from '@/public/images/technologies/headless-cms/Strapi.svg';
import WordPress from '@/public/images/technologies/headless-cms/WordPress.svg';
import AI from '@/public/images/technologies/industries/AI.svg';
import DigitalMarketing from '@/public/images/technologies/industries/Digital-marketing.svg';
import Financial from '@/public/images/technologies/industries/Financial.svg';
import GameDevelopment from '@/public/images/technologies/industries/Game-development.svg';
import Helthcare from '@/public/images/technologies/industries/Helthcare.svg';
import IoT from '@/public/images/technologies/industries/IoT.svg';
import LogisticsAndTransportation from '@/public/images/technologies/industries/LogisticsAndTransportation.svg';
import eCommerce from '@/public/images/technologies/industries/e-Commerce.svg';
import eLearning from '@/public/images/technologies/industries/e-Learning.svg';
import Electronjs from '@/public/images/technologies/mobile/Electron.js.svg';
import Haxe from '@/public/images/technologies/mobile/Haxe.svg';
import pixiJs from '@/public/images/technologies/mobile/pixiJs.svg';
import react from '@/public/images/technologies/mobile/react.svg';
import Apollo from '@/public/images/technologies/other/Apollo.svg';
import Docker from '@/public/images/technologies/other/Docker.svg';
import GROQ from '@/public/images/technologies/other/GROQ.svg';
import GraphQL from '@/public/images/technologies/other/GraphQL.svg';
import Gulp from '@/public/images/technologies/other/Gulp.svg';
import Kubernetes from '@/public/images/technologies/other/Kubernetes.svg';
import RestAPI from '@/public/images/technologies/other/RestAPI.svg';
import Storybook from '@/public/images/technologies/other/Storybook.svg';
import Webpack from '@/public/images/technologies/other/Webpack.svg';
import babel from '@/public/images/technologies/other/babel.svg';
import npm from '@/public/images/technologies/other/npm.svg';
import yarn from '@/public/images/technologies/other/yarn.svg';
import ComputerVisionDevelopment from '@/public/images/technologies/services/Computer-Vision-Development.svg';
import CrossPlatform from '@/public/images/technologies/services/Cross-Platform.svg';
import CustomSoftware from '@/public/images/technologies/services/Custom-Software.svg';
import Jamstack from '@/public/images/technologies/services/Jamstack.svg';
import Mobile from '@/public/images/technologies/services/Mobile.svg';
import PWADevelopmentServices from '@/public/images/technologies/services/PWA-Development-Services.svg';
import ProjectManagement from '@/public/images/technologies/services/Project-management.svg';
import StartupAndMVPServices from '@/public/images/technologies/services/Startup-and-MVP-Services.svg';
import UIUX from '@/public/images/technologies/services/UI-UX.svg';

type SVGComponent = React.FC<
  React.SVGProps<SVGSVGElement> & { viewBox?: string }
>;

export const iconsMap: Record<string, SVGComponent> = {
  ai: AI as SVGComponent,
  angular: angular as SVGComponent,
  apollo: Apollo as SVGComponent,
  babel: babel as SVGComponent,
  bootstrap: Bootstrap as SVGComponent,
  cplusplus: cplusplus as SVGComponent,
  chakraui: chakraUI as SVGComponent,
  commercetools: Commercetools as SVGComponent,
  computervisiondevelopment: ComputerVisionDevelopment as SVGComponent,
  contentful: Contentful as SVGComponent,
  crossplatform: CrossPlatform as SVGComponent,
  css: css as SVGComponent,
  customsoftware: CustomSoftware as SVGComponent,
  dato: Dato as SVGComponent,
  digitalmarketing: DigitalMarketing as SVGComponent,
  docker: Docker as SVGComponent,
  ecommerce: eCommerce as SVGComponent,
  elearning: eLearning as SVGComponent,
  electronjs: Electronjs as SVGComponent,
  express: Express as SVGComponent,
  financial: Financial as SVGComponent,
  gamedevelopment: GameDevelopment as SVGComponent,
  gatsby: Gatsby as SVGComponent,
  graphql: GraphQL as SVGComponent,
  groq: GROQ as SVGComponent,
  gulp: Gulp as SVGComponent,
  haxe: Haxe as SVGComponent,
  helthcare: Helthcare as SVGComponent,
  html: html as SVGComponent,
  hydrogen: Hydrogen as SVGComponent,
  iot: IoT as SVGComponent,
  jamstack: Jamstack as SVGComponent,
  js: js as SVGComponent,
  kubernetes: Kubernetes as SVGComponent,
  laravel: laravel as SVGComponent,
  liquid: Liquid as SVGComponent,
  logisticsandtransportation: LogisticsAndTransportation as SVGComponent,
  materialui: MaterialUI as SVGComponent,
  medusajs: MedusaJs as SVGComponent,
  mobile: Mobile as SVGComponent,
  nestjs: NestJS as SVGComponent,
  netlify: Netlify as SVGComponent,
  next: next as SVGComponent,
  npm: npm as SVGComponent,
  nuxt: nuxt as SVGComponent,
  php: php as SVGComponent,
  pixijs: pixiJs as SVGComponent,
  projectmanagement: ProjectManagement as SVGComponent,
  pwadevelopmentservices: PWADevelopmentServices as SVGComponent,
  python: Python as SVGComponent,
  react: react as SVGComponent,
  restapi: RestAPI as SVGComponent,
  sanity: Sanity as SVGComponent,
  shopifyplus: ShopifyPlus as SVGComponent,
  shopify: Shopify as SVGComponent,
  startupandmvpservices: StartupAndMVPServices as SVGComponent,
  storybook: Storybook as SVGComponent,
  strapi: Strapi as SVGComponent,
  svelte: svelte as SVGComponent,
  symfony: Symfony as SVGComponent,
  ts: ts as SVGComponent,
  uiux: UIUX as SVGComponent,
  vue: vue as SVGComponent,
  webpack: Webpack as SVGComponent,
  wordpress: WordPress as SVGComponent,
  yarn: yarn as SVGComponent,
};

const iconViewBoxValues: Partial<Record<keyof typeof iconsMap, string>> = {
  ai: '0 0 0 0',
};

export type TIconProps = {
  className?: string;
  name: keyof typeof iconsMap;
  size?: number;
  color?: string;
};

export const Icon = (props: TIconProps) => {
  const { name, size, color, className } = props;
  const CurrentIcon = iconsMap[name];
  const viewBox = iconViewBoxValues[name];

  return (
    <div
      style={
        {
          ...(size ? { '--icon-container-width': `${size}` } : {}),
          ...(color ? { '--color-main-text': `${color}` } : {}),
        } as CSSProperties
      }
      className={style.icon + (className ? ` ${className}` : '')}
    >
      <CurrentIcon viewBox={viewBox} />
    </div>
  );
};

export default Icon;
