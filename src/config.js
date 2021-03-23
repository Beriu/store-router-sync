//export const coreQueryParams = ['customerId', 'domainId', 'interactionId', 'newCustomId'];

export const coreQueryParams = {
    customerId: {
        type: Number,
        defaultValue: () => null,
    },
    domainId: {
        type: Number,
        defaultValue: () => null,
    },
    interactionId: {
        type: Number,
        defaultValue: () => null,
    },
    someList: {
        type: Array
    }
};