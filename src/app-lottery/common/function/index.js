export const isMobileDevice = () => {
    return ('ontouchstart' in document.documentElement);
}