export const asyncActionType = (namespace, type) => ({
    PENDING: `${namespace}/${type}/pending`,
    SUCCESS: `${namespace}/${type}/success`,
    FAIL: `${namespace}/${type}/fail`,
    NO_DATA: `${namespace}/${type}/noData`,
    CLEAR: `${namespace}/${type}/clear`,
});
