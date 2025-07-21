import React, { CSSProperties } from 'react';

import style from './styles.module.scss';
import AI from '@/public/images/technologies/AI.svg';
import Apollo from '@/public/images/technologies/Apollo.svg';
import Bootstrap from '@/public/images/technologies/Bootstrap.svg';
import Commercetools from '@/public/images/technologies/Commercetools.svg';
import ComputerVisionDevelopment from '@/public/images/technologies/Computer-Vision-Development.svg';
import Contentful from '@/public/images/technologies/Contentful.svg';
import CrossPlatform from '@/public/images/technologies/Cross-Platform.svg';
import CustomSoftware from '@/public/images/technologies/Custom-Software.svg';
import Dato from '@/public/images/technologies/Dato.svg';
import DigitalMarketing from '@/public/images/technologies/Digital-marketing.svg';
import Docker from '@/public/images/technologies/Docker.svg';
import Electronjs from '@/public/images/technologies/Electron.js.svg';
import Express from '@/public/images/technologies/Express.svg';
import Financial from '@/public/images/technologies/Financial.svg';
import GROQ from '@/public/images/technologies/GROQ.svg';
import GameDevelopment from '@/public/images/technologies/Game-development.svg';
import GraphQL from '@/public/images/technologies/GraphQL.svg';
import Gulp from '@/public/images/technologies/Gulp.svg';
import Haxe from '@/public/images/technologies/Haxe.svg';
import Helthcare from '@/public/images/technologies/Helthcare.svg';
import Hydrogen from '@/public/images/technologies/Hydrogen.svg';
import IoT from '@/public/images/technologies/IoT.svg';
import Jamstack from '@/public/images/technologies/Jamstack.svg';
import Kubernetes from '@/public/images/technologies/Kubernetes.svg';
import Liquid from '@/public/images/technologies/Liquid.svg';
import LogisticsAndTransportation from '@/public/images/technologies/LogisticsAndTransportation.svg';
import MaterialUI from '@/public/images/technologies/MaterialUI.svg';
import MedusaJs from '@/public/images/technologies/Medusa.js.svg';
import Mobile from '@/public/images/technologies/Mobile.svg';
import NestJS from '@/public/images/technologies/NestJS.svg';
import Netlify from '@/public/images/technologies/Netlify.svg';
import PWADevelopmentServices from '@/public/images/technologies/PWA-Development-Services.svg';
import ProjectManagement from '@/public/images/technologies/Project-management.svg';
import Python from '@/public/images/technologies/Python.svg';
import RestAPI from '@/public/images/technologies/RestAPI.svg';
import Sanity from '@/public/images/technologies/Sanity.svg';
import ShopifyPlus from '@/public/images/technologies/Shopify-plus.svg';
import Shopify from '@/public/images/technologies/Shopify.svg';
import StartupAndMVPServices from '@/public/images/technologies/Startup-and-MVP-Services.svg';
import Storybook from '@/public/images/technologies/Storybook.svg';
import Strapi from '@/public/images/technologies/Strapi.svg';
import Symfony from '@/public/images/technologies/Symfony.svg';
import UIUX from '@/public/images/technologies/UI-UX.svg';
import Webpack from '@/public/images/technologies/Webpack.svg';
import WordPress from '@/public/images/technologies/WordPress.svg';
import angular from '@/public/images/technologies/angular.svg';
import babel from '@/public/images/technologies/babel.svg';
import cplusplus from '@/public/images/technologies/c-plus-plus.svg';
import chakraUI from '@/public/images/technologies/chakraUI.svg';
import css from '@/public/images/technologies/css.svg';
import eCommerce from '@/public/images/technologies/e-Commerce.svg';
import eLearning from '@/public/images/technologies/e-Learning.svg';
import Gatsby from '@/public/images/technologies/gatsby.svg';
import html from '@/public/images/technologies/html.svg';
import js from '@/public/images/technologies/js.svg';
import laravel from '@/public/images/technologies/laravel.svg';
import next from '@/public/images/technologies/next.svg';
import npm from '@/public/images/technologies/npm.svg';
import nuxt from '@/public/images/technologies/nuxt.svg';
import php from '@/public/images/technologies/php.svg';
import pixiJs from '@/public/images/technologies/pixiJs.svg';
import react from '@/public/images/technologies/react.svg';
import svelte from '@/public/images/technologies/svelte.svg';
import ts from '@/public/images/technologies/ts.svg';
import vue from '@/public/images/technologies/vue.svg';
import yarn from '@/public/images/technologies/yarn.svg';

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
