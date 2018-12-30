module.exports = async function errors(ctx, next) {
  try {
    await next();
  } catch (e) {
    if (e.message) {
      ctx.body = {
        message: e.message,
        errors: e.errors || []
      };
      ctx.status = e.status || 500;

      if (e.stack) {
        console.error(e.message, e.stack);
      }
    } else {
      throw e;
    }
  }
};
