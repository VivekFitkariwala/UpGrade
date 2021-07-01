const env = window['upgrade_env'];
const endpointApi = env && env.endpointApi || 'http://upgrade-production.us-east-1.elasticbeanstalk.com/api';

export const environment = {
  appName: env && env.appName || 'UpGrade',
  envName: env && env.envName || 'PROD',
  endpointApi: env && env.endpointApi || endpointApi,
  production: env && env.production || true,
  test: env && env.test || false,
  i18nPrefix: '',
  appVersion: require('../../../../package.json').version,
  gapiClientId: env && env.gapiClientId || '135765367152-pq4jhd3gra10jda9l6bpnmu9gqt48tup.apps.googleusercontent.com',
  domainName: env && env.domainName || '',
  api: {
    getAllExperiments: `${endpointApi}/experiments/paginated`,
    createNewExperiments: `${endpointApi}/experiments`,
    importExperiment : `${endpointApi}/experiments/import`,
    updateExperiments: `${endpointApi}/experiments`,
    experimentContext: `${endpointApi}/experiments/context`,
    getExperimentById: `${endpointApi}/experiments/single`,
    getAllAuditLogs: `${endpointApi}/audit`,
    getAllErrorLogs: `${endpointApi}/error`,
    experimentsStats: `${endpointApi}/stats/enrollment`,
    experimentDetailStat: `${endpointApi}/stats/enrollment/detail`,
    generateCsv: `${endpointApi}/stats/csv`,
    experimentGraphInfo: `${endpointApi}/stats/enrollment/date`,
    deleteExperiment: `${endpointApi}/experiments`,
    updateExperimentState: `${endpointApi}/experiments/state`,
    users: `${endpointApi}/users`,
    loginUser: `${endpointApi}/login/user`, // Used to create a new user after login if doesn't exist in DB
    getAllUsers: `${endpointApi}/users/paginated`,
    userRole: `${endpointApi}/users/role`,
    excludeUsers: `${endpointApi}/exclude/user`,
    excludeGroups: `${endpointApi}/exclude/group`,
    previewUsers: `${endpointApi}/previewUsers`,
    getAllPreviewUsers: `${endpointApi}/previewUsers/paginated`,
    previewUsersAssignCondition: `${endpointApi}/previewUsers/assign`,
    allPartitions: `${endpointApi}/experiments/partitions`,
    allExperimentNames: `${endpointApi}/experiments/names`,
    featureFlag: `${endpointApi}/flags`,
    updateFlagStatus: `${endpointApi}/flags/status`,
    getPaginatedFlags: `${endpointApi}/flags/paginated`,
    setting: `${endpointApi}/setting`,
    metrics: `${endpointApi}/metric`,
    metricsSave: `${endpointApi}/metric/save`,
    queryResult: `${endpointApi}/query/analyse`,
    getVersion: `${endpointApi}/version`,
    contextMetaData: `${endpointApi}/experiments/contextMetaData`,
  }
};
