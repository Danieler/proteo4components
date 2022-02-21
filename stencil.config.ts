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
      componentCorePackage: `inputdate`,
      directivesProxyFile: `../proteoEventsFront/projects/inputdate/src/lib/stencil-generated/components.ts`
    }),
  ],
};
