webpackHotUpdate(0,{

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocateMeDetails = function (_React$Component) {
    _inherits(LocateMeDetails, _React$Component);

    function LocateMeDetails() {
        _classCallCheck(this, LocateMeDetails);

        return _possibleConstructorReturn(this, (LocateMeDetails.__proto__ || Object.getPrototypeOf(LocateMeDetails)).apply(this, arguments));
    }

    _createClass(LocateMeDetails, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                descriptionMain = _props.descriptionMain,
                description = _props.description,
                temperature = _props.temperature,
                weatherIcon = _props.weatherIcon,
                name = _props.name;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h3',
                    null,
                    'Weather at your current location in ',
                    name
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'locateMeDetails' },
                    _react2.default.createElement(
                        'span',
                        { className: 'locateMeDetails-item' },
                        temperature,
                        '\xB0C'
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'locateMeDetails-item' },
                        descriptionMain
                    ),
                    weatherIcon ? _react2.default.createElement('img', { className: 'locateMeDetails-item', src: 'https://openweathermap.org/img/w/' + weatherIcon + '.png', alt: description }) : null
                )
            );
        }
    }]);

    return LocateMeDetails;
}(_react2.default.Component);

exports.default = LocateMeDetails;

/***/ })

})