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

var _reactRouter = __webpack_require__(28);

var _ShowLocations = __webpack_require__(52);

var _ShowLocations2 = _interopRequireDefault(_ShowLocations);

var _LocateMeDetails = __webpack_require__(334);

var _LocateMeDetails2 = _interopRequireDefault(_LocateMeDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocateMe = function (_React$Component) {
    _inherits(LocateMe, _React$Component);

    function LocateMe(props) {
        _classCallCheck(this, LocateMe);

        var _this = _possibleConstructorReturn(this, (LocateMe.__proto__ || Object.getPrototypeOf(LocateMe)).call(this, props));

        _this.handleMyLocationWeather = function () {
            var API_KEY = '0d97dafb64ebaf36cf169cd4e5f02e5a';
            var lat = _this.state.latitude;
            var lon = _this.state.longitude;
            var myLocationURL = 'https://api.openweathermap.org/data/2.5/weather?APPID=' + API_KEY + '&units=metric&lat=' + lat + '&lon=' + lon;
            return fetch(myLocationURL).then(function (r) {
                return r.json();
            }).then(function (data) {
                console.log('my location fetch');
                _this.setState({
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    weatherIcon: data.weather[0].icon,
                    descriptionMain: data.weather[0].main,
                    name: data.name,
                    render: true
                });
            });
        };

        _this.state = {
            latitude: null,
            longitude: null,
            error: null,
            temperature: null,
            description: null,
            weatherIcon: null,
            descriptionMain: null,
            name: null,
            render: false
        };
        return _this;
    }

    _createClass(LocateMe, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.watchId = navigator.geolocation.getCurrentPosition(function (position) {
                _this2.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null
                });
                _this2.handleMyLocationWeather();
            }, function (error) {
                return _this2.setState({ error: error.message });
            }, { enableHighAccuracy: true, timeout: 40000, maximumAge: 1000 });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                name = _state.name,
                descriptionMain = _state.descriptionMain,
                weatherIcon = _state.weatherIcon,
                description = _state.description,
                temperature = _state.temperature;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'nav',
                    { className: 'navbar navbar-default', id: 'bs-example-navbar-collapse-1' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container-fluid' },
                        _react2.default.createElement(
                            'ul',
                            { className: 'nav navbar-nav' },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/' },
                                    'Back to Main Page'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    _reactRouter.Link,
                                    { to: '/ShowLocations' },
                                    'My Locations'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        null,
                        this.state.error ? 'Sorry, no position available' : null
                    ),
                    _react2.default.createElement(
                        'div',
                        null,
                        this.state.render ? _react2.default.createElement(_LocateMeDetails2.default, this.state) : 'Please be patient the details are being loaded...'
                    )
                )
            );
        }
    }]);

    return LocateMe;
}(_react2.default.Component);

exports.default = LocateMe;

/***/ })

})