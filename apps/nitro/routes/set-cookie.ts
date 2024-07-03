export default defineEventHandler(event => {
    setCookie(event, 'my-cookie', 'hello world :)', {
        maxAge: 60 * 60,
    });

    return 'ok';
});
