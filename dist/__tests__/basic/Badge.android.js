var _jsxFileName="__tests__/basic/Badge.android.js";require("react-native");
var _react=require("react");var _react2=_interopRequireDefault(_react);
var _reactTestRenderer=require("react-test-renderer");var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);
var _Badge=require("./../../src/basic/Badge");function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}



jest.mock("Platform",function(){
var Platform=require.requireActual("Platform");
Platform.OS="android";
return Platform;
});

it("renders regular badge",function(){
var tree=_reactTestRenderer2.default.create(_react2.default.createElement(_Badge.Badge,{__source:{fileName:_jsxFileName,lineNumber:15}},"2")).toJSON();
expect(tree).toMatchSnapshot();
});
//# sourceMappingURL=Badge.android.js.map