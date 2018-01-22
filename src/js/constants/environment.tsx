export const IS_PRODUCTION:boolean = false;
export const IS_MOBILE:boolean = false;
export const IS_WEB = !!(process && process.env && process.env.TYPE_APP && process.env.TYPE_APP === 'web');