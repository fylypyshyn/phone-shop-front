const slash = '/';
export const ROUTES = {
    PHONES: 'phones',
    PAYMENT: 'payment'
};

export const ROUTES_SLASHED = {
    PHONES: slash + ROUTES.PHONES,
    PHONE_PAYMENT: slash + ROUTES.PAYMENT
};
