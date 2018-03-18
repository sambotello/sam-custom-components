'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    color: ', ';\n    ', ';\n    font-family: ', ';\n'], ['\n    color: ', ';\n    ', ';\n    font-family: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    border: 1px solid black;\n    border-radius: 2px;\n    background-color: #FFFFFF;\n    padding: 8px;\n    ', ';\n    font-family: ', ';\n    box-sizing: border-box;\n    margin-bottom: 10px;\n    color: ', ';\n    border: 1px solid ', ';\n    background-color: ', ';\n    font-size: ', ';\n    :focus {\n        outline-color: transparent;\n        outline-style: none;\n    }\n'], ['\n    border: 1px solid black;\n    border-radius: 2px;\n    background-color: #FFFFFF;\n    padding: 8px;\n    ', ';\n    font-family: ', ';\n    box-sizing: border-box;\n    margin-bottom: 10px;\n    color: ', ';\n    border: 1px solid ', ';\n    background-color: ', ';\n    font-size: ', ';\n    :focus {\n        outline-color: transparent;\n        outline-style: none;\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LabelStyled = _styledComponents2.default.label(_templateObject, function (props) {
    return props.theme.borderColor;
}, function (props) {
    return props.inline && 'margin-right: 10px';
}, function (props) {
    return props.theme.ff;
});

var InputStyled = _styledComponents2.default.input(_templateObject2, function (props) {
    return props.inline ? '\n            display: inline-block;\n        ' : '\n            display: block;\n            width: 100%\n        ';
}, function (props) {
    return props.theme.ff;
}, function (props) {
    return props.theme.color;
}, function (props) {
    return props.theme.borderColor;
}, function (props) {
    return props.theme.bgColor;
}, function (props) {
    return props.big ? '1.5em' : '1em';
});

InputStyled.defaultProps = {
    theme: {
        borderColor: 'palevioletred',
        bgColor: 'white',
        color: 'palevioletred',
        ff: 'Verdana, Geneva, sans-serif'
    }
};

LabelStyled.defaultProps = {
    theme: {
        borderColor: 'palevioletred',
        bgColor: 'white',
        color: 'palevioletred',
        ff: 'Verdana, Geneva, sans-serif'
    }
};

var theme = {
    borderColor: '#2c3e50',
    bgColor: '#34495e',
    color: '#95a5a6',
    ff: 'Verdana, Geneva, sans-serif'
};

var Input = function Input(props) {
    return _react2.default.createElement(
        'div',
        null,
        props.label && _react2.default.createElement(
            LabelStyled,
            { htmlFor: props.name, inline: props.inline, theme: props.dark && theme },
            props.label
        ),
        _react2.default.createElement(InputStyled, { type: props.type, name: props.name, value: props.value, onChange: props.onChange, inline: props.inline, big: props.big, theme: props.dark && theme })
    );
};

Input.propTypes = {
    label: _propTypes2.default.string,
    type: _propTypes2.default.string,
    name: _propTypes2.default.string,
    value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
    onChange: _propTypes2.default.func,
    inline: _propTypes2.default.bool,
    big: _propTypes2.default.bool,
    dark: _propTypes2.default.bool
};
Input.defaultProps = {
    type: 'text',
    inline: false
};

exports.default = Input;