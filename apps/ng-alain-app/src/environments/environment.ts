export const environment = {
  production: false,
  hmr: false,
  application: {
    name: 'MyProjectName',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44334',
    clientId: 'MyProjectName_App',
    dummyClientSecret: '1q2w3e*',
    scope: 'MyProjectName',
    showDebugInformation: true,
    oidc: false,
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:44334',
    },
  },
  localization: {
    defaultResourceName: 'MyProjectName',
  },
};
