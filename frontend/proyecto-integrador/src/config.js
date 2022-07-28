export const API_URL = "https://backend.sleepaway.com.ar/api"


export const API_PATHS = {
    PRODUCT: '/product',
    PRODUCT_RANDOM: '/product/random',
    CATEGORY: '/category',
    SIGNIN: '/user/signin',
    SIGNUP: '/user/signup',
    USER_ME: '/user/me',
    USER_BOOKING: '/booking/user/',
    BOOKING: '/booking',
    BOOKING_PRODUCT: "/booking/product/",
    LOCATION: '/location',
    PRODUCT_CATEGORY: '/product/category/id/',
    PRODUCT_LOCATION: '/product/location/id/',
    PRODUCT_DATE_LOCATION: '/product/location',
    PRODUCT_CATEGORY_COUNT: '/product/count'
}

export const PRODUCT_JSON = {
    name: "",
    description: "",
    latitude: 0,
    longitude: 0,
    features: [], // {"name":"","react_icon":""}
    category: {
        id: 0,
    },
    images: [],
    location: {
        city: "",
        country: "",
        number: "",
        province: "",
        street: "",
    },
    policy: {
        cancellation_policy: "",
        check_in: "",
        check_out: "",
        child_policy: "",
        extra_bed: false,
        noise_policy: false,
        only_cash: false,
        security_and_health: "",
        smoke_policy: false,
        accepts_all_ages: false,
    },
}