export const isHeaderOrNavNeeded = (path) => {
    if (path !== '\/signin' &&
        path !== '\/signup' &&
        path !== '\/home') {
        return true;
    } else {
        return false;
    }
}