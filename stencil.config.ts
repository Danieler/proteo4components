import { Config } from '@stencil/core';
import { angularOutputTarget as angular } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'inputdate',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    angular({
      componentCorePackage: `your-stencil-library-name`,
      directivesProxyFile: `../your-angular-workspace-name/projects/your-angular-library-name/src/lib/stencil-generated/components.ts`
    }),
  ],
};
