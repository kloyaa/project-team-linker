// Check if state is authenticated
type IAuthenticated = {
    isAuthenticated: boolean
}
export function isAuthenticated(authentication: IAuthenticated) {
    if (authentication.isAuthenticated === null && !localStorage.token) {
        return null
    } else if (authentication.isAuthenticated && localStorage.token) {
        return authentication.isAuthenticated;
    }
}    