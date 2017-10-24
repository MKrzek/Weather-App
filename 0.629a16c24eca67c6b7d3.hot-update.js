webpackHotUpdate(0,{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(28);

var _SearchInput = __webpack_require__(281);

var _SearchInput2 = _interopRequireDefault(_SearchInput);

var _DisplayWeather = __webpack_require__(282);

var _DisplayWeather2 = _interopRequireDefault(_DisplayWeather);

var _DisplayAlert = __webpack_require__(283);

var _DisplayAlert2 = _interopRequireDefault(_DisplayAlert);

var _MyLocations = __webpack_require__(284);

var _MyLocations2 = _interopRequireDefault(_MyLocations);

var _ShowLocations = __webpack_require__(52);

var _ShowLocations2 = _interopRequireDefault(_ShowLocations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var API_KEY = '0d97dafb64ebaf36cf169cd4e5f02e5a';

var FetchData = function (_React$Component) {
    _inherits(FetchData, _React$Component);

    function FetchData(props) {
        _classCallCheck(this, FetchData);

        var _this = _possibleConstructorReturn(this, (FetchData.__proto__ || Object.getPrototypeOf(FetchData)).call(this, props));

        _this.handleNameChange = function (event) {
            _this.setState({
                cityName: event.target.value,
                render: false,
                alertDisplay: false
            });
        };

        _this.handleSubmitButton = function (event) {
            event.preventDefault();
            _this.setState({
                render: false,
                alertDisplay: false
            });
            _this.showWeather();
            var tempLocalStorage = JSON.parse(localStorage.getItem('tempLocalStorage')) || [];
            var locations = JSON.parse(localStorage.getItem('myLocations')) || [];
            if (tempLocalStorage.includes(_this.state.cityName)) {
                var myLocations = [_this.state.cityName].concat(_toConsumableArray(locations));

                localStorage.setItem('myLocations', JSON.stringify(myLocations));
            };
            if (!tempLocalStorage.includes(_this.state.cityName)) {
                var myTempLocations = [_this.state.cityName].concat(_toConsumableArray(tempLocalStorage));

                localStorage.setItem('tempLocalStorage', JSON.stringify(myTempLocations));
            }
        };

        _this.showWeather = function () {
            var apiURL = 'city.list.json';
            console.log(apiURL);
            return fetch(apiURL).then(function (r) {
                return r.json();
            }).then(function (data) {
                console.log('city fetch');
                var cities = data.map(function (a) {
                    return a.name;
                });
                if (!cities.includes(_this.state.cityName)) {
                    console.log('no such place');
                    _this.setState({
                        alertDisplay: true
                    });
                } else {
                    var weatherURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + _this.state.cityName + '&units=metric&APPID=' + API_KEY;
                    return fetch(weatherURL).then(function (r) {
                        return r.json();
                    }).then(function (data) {
                        console.log('fetch');
                        _this.setState({
                            temperature: data.main.temp,
                            description: data.weather[0].description,
                            weatherIcon: data.weather[0].icon,
                            descriptionMain: data.weather[0].main,
                            name: data.name,
                            render: true

                        });
                    });
                }
            });
        };

        _this.state = {
            temperature: null,
            description: null,
            weatherIcon: null,
            descriptionMain: null,
            name: null,
            cityName: '',
            render: false,
            cityList: null,
            alertDisplay: false
        };
        return _this;
    }

    _createClass(FetchData, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                descriptionMain = _state.descriptionMain,
                description = _state.description,
                temperature = _state.temperature,
                weatherIcon = _state.weatherIcon,
                name = _state.name,
                render = _state.render,
                alertDisplay = _state.alertDisplay,
                cityName = _state.cityName;

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_SearchInput2.default, { cityName: this.state.cityName,
                    handleNameChange: this.handleNameChange,
                    handleSubmitButton: this.handleSubmitButton }),
                alertDisplay ? _react2.default.createElement(_DisplayAlert2.default, null) : null,
                render ? _react2.default.createElement(_DisplayWeather2.default, this.state) : null,
                _react2.default.createElement(_MyLocations2.default, { myNewLocation: cityName })
            );
        }
    }]);

    return FetchData;
}(_react2.default.Component);

exports.default = FetchData;

/***/ })

})