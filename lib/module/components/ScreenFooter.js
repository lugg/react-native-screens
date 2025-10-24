import React from 'react';
import { StyleSheet } from 'react-native';
import ScreenFooterNativeComponent from '../fabric/ScreenFooterNativeComponent';

/**
 * Unstable API
 */
function ScreenFooter(props) {
  return /*#__PURE__*/React.createElement(ScreenFooterNativeComponent, props);
}
export function FooterComponent({
  children
}) {
  return /*#__PURE__*/React.createElement(ScreenFooter, {
    style: styles.container,
    collapsable: false
  }, children);
}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});
export default ScreenFooter;
//# sourceMappingURL=ScreenFooter.js.map