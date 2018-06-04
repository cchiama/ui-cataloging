// CATALOGING UI APP METADADA
export const META = {
  MODULE_NAME: 'ui-cataloging'
};

// API
export const RESOURCE_TYPE = 'rest';
export const ENDPOINT = {
  HEADER: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'x-okapi-tenant': 'tnx'
  },
  BASE_URL: 'http://127.0.0.1:8080/cataloging',
  TEMPLATE_URL: 'record-templates',
  TEMPLATE_MANDATORY: 'bibliographic/fields/mandatory',
  LOGICAL_VIEW_URL: 'logical-views',
  CATEGORY_URL: 'marc-categories',
  DEFAULT_LANG: 'eng',
  DEFAULT_PAGINATION: 20
};
export const API_RESULT_JSON_KEY = {
  TEMPLATES: 'recordTemplates',
  LOGICAL_VIEW: 'views',
  CATEGORIES: 'categories'
};

export const INITIAL_RESULT_COUNT = 30;
export const RESULT_COUNT_INCREMENT = 30;
export const RESULT_PER_REQUEST = 20;
export const FILTER_CONFIG = [{}];

// Navigator


// Select Logical View
export const LOGICAL_VIEW_SELECT = {
  ID: 'id_logicalView',
  LABEL: 'Database',
  EMPTY_VALUE: { value: '----------', label: '----------' },
  INITIAL_VALUE: '0'
};

