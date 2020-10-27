//Global types
export const STATUS = "STATUS";
export const LOADING = "LOADING"

//Registration types
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_LOADING = "REGISTER_LOADING";
export const REGISTER_STATUS = "REGISTER_STATUS";

//Login types
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const LOGIN_LOADING = "LOGIN_LOADING"
export const LOGIN_STATUS = "LOGIN_STATUS"

//Distribution of user credentials types
export const USER_LOADED = "USER_LOADED"
export const USER_FAILED = "USER_FAILED"
export const USER_LOADING = "USER_LOADING"
export const USER_LOGOUT = "USER_LOGOUT"

//Retrieving profile in server
export const PROFILE_DATA = "PROFILE_DATA"
export const PROFILE_FAILED = "PROFILE_FAILED"
export const PROFILE_LOADING = "PROFILE_LOADING"
export const PROFILE_REMOVE = "PROFILE_REMOVE"


//Events
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR"
export const TOGGLE_SIDEBAR_TOP = "TOGGLE_SIDEBAR_TOP"


//@Typeof ActionType
export type IActionType = {
    type:
    //@Typeof REGISTRATION 
    typeof REGISTER_SUCCESS |
    typeof REGISTER_FAILED |
    typeof REGISTER_LOADING |
    typeof REGISTER_STATUS |

    //@Typeof LOGIN 
    typeof LOGIN_SUCCESS |
    typeof LOGIN_FAILED |
    typeof LOGIN_LOADING |
    typeof LOGIN_STATUS |

    //@Typeof AUTHORIZATION 
    typeof USER_LOADED |
    typeof USER_FAILED |
    typeof USER_LOADING |
    typeof USER_LOGOUT |

    //@Typeof PROFILE 
    typeof PROFILE_DATA |
    typeof PROFILE_FAILED |
    typeof PROFILE_LOADING |
    typeof PROFILE_REMOVE |

    //@Events
    typeof TOGGLE_SIDEBAR |
    typeof TOGGLE_SIDEBAR_TOP,


    payload?: any,
    httpStatus?: number
}

