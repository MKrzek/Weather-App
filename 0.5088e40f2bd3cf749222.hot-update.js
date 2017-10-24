webpackHotUpdate(0,{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(28);

var _LocationItem = __webpack_require__(330);

var _LocationItem2 = _interopRequireDefault(_LocationItem);

var _LocationDetails = __webpack_require__(331);

var _LocationDetails2 = _interopRequireDefault(_LocationDetails);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ShowLocations = function (_React$Component) {
    _inherits(ShowLocations, _React$Component);

    function ShowLocations(props) {
        _classCallCheck(this, ShowLocations);

        var _this = _possibleConstructorReturn(this, (ShowLocations.__proto__ || Object.getPrototypeOf(ShowLocations)).call(this, props));

        _this.handleWeatherDisplay = function (location) {
            var API_KEY = '0d97dafb64ebaf36cf169cd4e5f02e5a';
            var myPlacesURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&APPID=' + API_KEY;
            return fetch(myPlacesURL).then(function (r) {
                return r.json();
            }).then(function (data) {
                console.log('new fetch');
                _this.setState({
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    weatherIcon: data.weather[0].icon,
                    descriptionMain: data.weather[0].main,
                    location: location.toUpperCase(),
                    name: data.name
                });
            });
        };

        _this.handleRemoveLocation = function (location) {
            console.log('remove function works');
            var storedLocations = JSON.parse(localStorage.getItem('myLocations'));
            storedLocations = storedLocations.filter(function (item) {
                return item !== location;
            });
            console.log(storedLocations);
            localStorage.setItem('myLocations', JSON.stringify(storedLocations));
            _this.setState({
                locationList: storedLocations
            });
        };

        _this.state = {
            locationList: JSON.parse(localStorage.getItem('myLocations')) || [],
            temperature: null,
            description: null,
            weatherIcon: null,
            descriptionMain: null,
            location: '',
            name: null,
            render: false

        };
        return _this;
    }

    _createClass(ShowLocations, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var myLocations = this.state.locationList;
            var locationList = myLocations.map(function (location, index) {
                return _react2.default.createElement(_LocationItem2.default, { key: index,
                    location: location,
                    handleWeatherDisplay: _this2.handleWeatherDisplay,
                    handleRemoveLocation: _this2.handleRemoveLocation });
            });
            var _state = this.state,
                location = _state.location,
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
                    { className: 'navebar navbar-default', id: 'bs-example-navbar-collapse-1' },
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
                                    { to: '/LocateMe' },
                                    'Locate Me'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'ul',
                    null,
                    locationList
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    location ? _react2.default.createElement(_LocationDetails2.default, this.state) : null
                )
            );
        }
    }]);

    return ShowLocations;
}(_react2.default.Component);

exports.default = ShowLocations;

/***/ })

})