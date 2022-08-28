/**
 * @erye/vaf约束的路由
 */

import HomeModule from "./modules/Home";
import MiniProgramModule from "./modules/MiniProgram";
import SiteModule from "./modules/Site";
import EryeVafModule from "./modules/EryeVaf";

export default [
  ...HomeModule,
  ...MiniProgramModule,
  ...SiteModule,
  ...EryeVafModule,
];
