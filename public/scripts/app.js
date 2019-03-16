"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactApp = function (_React$Component) {
    _inherits(ReactApp, _React$Component);

    function ReactApp(props) {
        _classCallCheck(this, ReactApp);

        var _this = _possibleConstructorReturn(this, (ReactApp.__proto__ || Object.getPrototypeOf(ReactApp)).call(this, props));

        _this.removeClick = _this.removeClick.bind(_this);
        _this.pickClick = _this.pickClick.bind(_this);
        _this.appendData = _this.appendData.bind(_this);
        _this.removeOne = _this.removeOne.bind(_this);
        _this.state = {
            opts: props.opts
        };
        return _this;
    }

    _createClass(ReactApp, [{
        key: "appendData",
        value: function appendData(newitm) {
            if (!newitm) {
                return "No data entered";
            } else if (this.state.opts.indexOf(newitm) > -1) {
                return "Data already present";
            }
            this.setState(function (prevState) {
                return { opts: prevState.opts.concat([newitm]) };
            });
        }
    }, {
        key: "pickClick",
        value: function pickClick() {
            var idx = Math.floor(Math.random() * this.state.opts.length);
            var itm = this.state.opts[idx];
            alert(itm);
        }
    }, {
        key: "removeClick",
        value: function removeClick() {
            this.setState(function () {
                return { opts: [] };
            });
        }
    }, {
        key: "removeOne",
        value: function removeOne(optiontoremove) {
            console.log('removeOne', optiontoremove);
            this.setState(function (prevState) {
                return { opts: prevState.opts.filter(function (individualoption) {
                        return optiontoremove !== individualoption;
                    }) };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(Header, { header: "App Header", subheader: "a subheader" }),
                React.createElement(Action, { listlength: this.state.opts.length, forRemove: this.removeClick,
                    forPick: this.pickClick
                }),
                React.createElement(ItemList, { list: this.state.opts, forRemoveOne: this.removeOne }),
                React.createElement(AddOptions, { forAdd: this.appendData })
            );
        }
    }]);

    return ReactApp;
}(React.Component);

ReactApp.defaultProps = {
    opts: ['default 1', 'default 2']
};

var Header = function Header(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            props.header
        ),
        props.subheader && React.createElement(
            "p",
            null,
            props.subheader
        )
    );
};

Header.defaultProps = {
    header: 'some default'
};

var AddOptions = function (_React$Component2) {
    _inherits(AddOptions, _React$Component2);

    function AddOptions(props) {
        _classCallCheck(this, AddOptions);

        var _this2 = _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).call(this, props));

        _this2.enterData = _this2.enterData.bind(_this2);
        _this2.state = {
            err: undefined
        };
        return _this2;
    }

    _createClass(AddOptions, [{
        key: "enterData",
        value: function enterData(e) {
            e.preventDefault();
            alert('enter Data');
            var newitm = e.target.elements.inputtxt.value.trim();
            var msg = this.props.forAdd(newitm);
            this.setState(function () {
                return { err: msg };
            });
        }
    }, {
        key: "render",
        value: function render() {
            var submitButtonTitle = "Add Option";
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    this.state.err
                ),
                React.createElement(
                    "form",
                    { onSubmit: this.enterData },
                    React.createElement("input", { type: "text", name: "inputtxt" }),
                    React.createElement(
                        "button",
                        null,
                        submitButtonTitle
                    )
                )
            );
        }
    }]);

    return AddOptions;
}(React.Component);

var Action = function Action(props) {
    var pickbuttontitle = "Pick Any Option";
    var removebuttontitle = "Remove Options";
    return React.createElement(
        "div",
        null,
        React.createElement(
            "button",
            { onClick: props.forPick },
            pickbuttontitle
        ),
        React.createElement(
            "button",
            { disabled: !props.listlength > 0, onClick: props.forRemove },
            removebuttontitle
        )
    );
};

var ItemList = function ItemList(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            "The no.of items are ",
            props.list.length
        ),
        props.list.map(function (item) {
            return React.createElement(Item, { key: item, value: item, removeOneLink: props.forRemoveOne });
        })
    );
};

var Item = function Item(props) {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "p",
            null,
            props.value,
            " \xA0",
            React.createElement(
                "button",
                { onClick: function onClick(e) {
                        props.removeOneLink(props.value);
                    } },
                "Remove"
            )
        )
    );
};

ReactDOM.render(React.createElement(ReactApp, { opts: ['one', 'two', 'three'] }), document.getElementById('root'));
