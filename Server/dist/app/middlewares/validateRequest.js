"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validateRequest = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync({ body: req.body });
        return next();
    }
    catch (err) {
        next(err);
    }
};
exports.default = validateRequest;
