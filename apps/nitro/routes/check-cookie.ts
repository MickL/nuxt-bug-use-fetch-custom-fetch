export default defineEventHandler(event => {
    const cookie = getCookie(event, 'my-cookie');

    return {cookieWasSet: !!cookie};
});
