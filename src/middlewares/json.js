import Boom from "@hapi/boom";

import _isEmpty from "lodash/isEmpty";

/**
 * Middleware to handle empty JSON body requests and other edge cases if any.
 *
 * @param  {Object}   request
 * @param  {Object}   _
 * @param  {Function} next
 */
export default function json(request, _, next) {
  const { body, method } = request;
  const disallowedHttpHeaders = ["PUT", "POST", "PATCH"];

  if (
    request.is("application/json") &&
    disallowedHttpHeaders.includes(method) &&
    _isEmpty(body)
  ) {
    throw Boom.badRequest("Empty JSON");
  }

  next();
}
