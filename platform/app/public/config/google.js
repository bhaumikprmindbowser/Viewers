window.config = {
  routerBasename: '/',
  customizationService: {
    dicomUploadComponent:
      '@ohif/extension-cornerstone.customizationModule.cornerstoneDicomUploadComponent',
  },
  enableGoogleCloudAdapter: false,
  // below flag is for performance reasons, but it might not work for all servers
  showWarningMessageForCrossOrigin: true,
  showCPUFallbackMessage: true,
  showLoadingIndicator: true,
  strictZSpacingForVolumeViewport: true,
  // This is an array, but we'll only use the first entry for now
  oidc: [
    {
      // ~ REQUIRED
      // Authorization Server URL
      authority: 'https://accounts.google.com',
      client_id: '1072827970551-njdpfci82jj5a3cdkqidus7ro22ov6bh.apps.googleusercontent.com',
      redirect_uri: '/callback',
      response_type: 'id_token token',
      scope:
        'email profile openid https://www.googleapis.com/auth/cloudplatformprojects.readonly https://www.googleapis.com/auth/cloud-healthcare', // email profile openid
      // ~ OPTIONAL
      post_logout_redirect_uri: '/logout-redirect.html',
      revoke_uri: 'https://accounts.google.com/o/oauth2/revoke?token=',
      automaticSilentRenew: true,
      revokeAccessTokenOnSignout: true,
    },
  ],
  extensions: [],
  modes: [],
  showStudyList: true,
  // filterQueryParam: false,
  defaultDataSourceName: 'dicomweb',
  dataSources: [
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        friendlyName: 'dcmjs DICOMWeb Server',
        name: 'GCP',
        wadoUriRoot:
          'https://healthcare.googleapis.com/v1/projects/mineral-weaver-422109-d3/locations/us-central1/datasets/test-bhaumik/dicomStores/test-bhaumik',
        qidoRoot:
          'https://healthcare.googleapis.com/v1/projects/mineral-weaver-422109-d3/locations/us-central1/datasets/test-bhaumik/dicomStores/test-bhaumik',
        wadoRoot:
          'https://healthcare.googleapis.com/v1/projects/mineral-weaver-422109-d3/locations/us-central1/datasets/test-bhaumik/dicomStores/test-bhaumik',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        thumbnailRendering: 'wadors',
        enableStudyLazyLoad: true,
        supportsFuzzyMatching: true,
        supportsWildcard: false,
        dicomUploadEnabled: true,
        omitQuotationForMultipartRequest: true,
        configurationAPI: 'ohif.dataSourceConfigurationAPI.google',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomjson',
      sourceName: 'dicomjson',
      configuration: {
        friendlyName: 'dicom json',
        name: 'json',
      },
    },
    {
      namespace: '@ohif/extension-default.dataSourcesModule.dicomlocal',
      sourceName: 'dicomlocal',
      configuration: {
        friendlyName: 'dicom local',
      },
    },
  ],
};
