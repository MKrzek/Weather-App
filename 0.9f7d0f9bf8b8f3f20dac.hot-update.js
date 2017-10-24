webpackHotUpdate(0,{

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _ShowLocations = __webpack_require__(52);

var _ShowLocations2 = _interopRequireDefault(_ShowLocations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationDetails = function (_React$Component) {
     _inherits(LocationDetails, _React$Component);

     function LocationDetails() {
          _classCallCheck(this, LocationDetails);

          return _possibleConstructorReturn(this, (LocationDetails.__proto__ || Object.getPrototypeOf(LocationDetails)).apply(this, arguments));
     }

     _createClass(LocationDetails, [{
          key: 'render',
          value: function render() {
               var _props = this.props,
                   location = _props.location,
                   name = _props.name,
                   descriptionMain = _props.descriptionMain,
                   weatherIcon = _props.weatherIcon,
                   description = _props.description,
                   temperature = _props.temperature;

               return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                         'h3',
                         { className: 'locationDetails-name' },
                         'Current weather in ',
                         name
                    ),
                    _react2.default.createElement(
                         'div',
                         { className: 'locationDetails' },
                         _react2.default.createElement(
                              'p',
                              { className: 'locationDetails-items' },
                              ' ',
                              temperature,
                              '\xB0C'
                         ),
                         _react2.default.createElement(
                              'p',
                              { className: 'locationDetails-items' },
                              ' ',
                              descriptionMain
                         ),
                         weatherIcon ? _react2.default.createElement('img', { className: 'locationDetails-icon', src: 'https://openweathermap.org/img/w/' + weatherIcon + '.png', alt: description }) : null
                    )
               );
          }
     }]);

     return LocationDetails;
}(_react2.default.Component);

exports.default = LocationDetails;

/***/ })

})