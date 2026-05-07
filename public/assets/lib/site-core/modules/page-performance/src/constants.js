/* global gdPagePerf */

// GD cORe
export const WP_API_URL = gdPagePerf.wpApiRoute;
export const CACHED_REPORT = gdPagePerf.cache;
export const API_BASE_URL = 'https://gdcore.api.godaddy.com/v1/';
export const ACCOUNT_ID = gdPagePerf.accountId;
export const ADMIN_POST_URL = gdPagePerf.adminPostUrl;
// Lighthouse scoring
export const LIGHTHOUSE_SCORE_GOOD_THRESHOLD = 90;
export const LIGHTHOUSE_SCORE_OKAY_THRESHOLD = 50;

// First Contentful Paint (FCP)
export const FCP_SPEED_GOOD_THRESHOLD = 1.8;
export const FCP_SPEED_OKAY_THRESHOLD = 3;

// Speed Index
export const SI_SPEED_GOOD_THRESHOLD = 3.4;
export const SI_SPEED_OKAY_THRESHOLD = 5.8;
