export default (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
