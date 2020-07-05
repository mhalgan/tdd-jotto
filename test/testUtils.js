// eslint-disable-next-line no-unused-vars
import { ShallowWrapper } from "enzyme";

import checkPropTypes from "check-prop-types";

/**
 * Return node(s) with the given data-test attibute.
 * @param {ShallowWrapper} wrapper  - Enzyme shallow wrapper.
 * @param {string} val - Value of data-test attribute to search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    // eslint-disable-next-line react/forbid-foreign-prop-types
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
