export const WEBAPI_ROOT = (function() {
    let url = '';
    switch (process.env.NODE_ENV) {
        case "production":
            url = '';
            break;
        case "production_test":
        case "development":
            url = 'http://oneniceapp.com';
            break;
        default:
            break;
    }
    return url;
})();

