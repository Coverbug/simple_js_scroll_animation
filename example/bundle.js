(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    'use strict';

    require('../ssa/script');

},{"../ssa/script":2}],2:[function(require,module,exports){
    'use strict';

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var Ssa = function () {
        function Ssa() {
            _classCallCheck(this, Ssa);

            this.win = window;
            this.doc = document;

            this.doc.body.setAttribute('data-js', 'on');
        }

        _createClass(Ssa, [{
            key: 'init',
            value: function init() {
                // get all elements for animation from page
                this.elements = this.doc.querySelectorAll('[data-scroll-animate="on"]');
                // get top position of 'this.elements'
                this.elementsWithTopPosition = this.getElementsWithTopPosition(this.elements);

                // run animation when app starting
                this.animation(this.elementsWithTopPosition);
                // run animation when scroll to animated elements
                this.scrollHandler();
            }
        }, {
            key: 'animation',
            value: function animation() {
                var windowTopPosition = this.doc.documentElement.scrollTop;

                this.elementsWithTopPosition.forEach(function (item) {
                    if (windowTopPosition >= item[0]) {
                        setTimeout(function () {
                            return item[1].removeAttribute('data-scroll-animate-style');
                        }, item[2] ? item[2] : 0);
                    }
                });
            }
        }, {
            key: 'getElementsWithTopPosition',
            value: function getElementsWithTopPosition(elemsWithPos) {
                var rect = 0;
                var pos = 0;
                var arr = [];
                var topOffset = this.win.innerHeight - 50;

                elemsWithPos.forEach(function (elem) {
                    rect = elem.getBoundingClientRect();
                    pos = rect.top - topOffset;

                    // get top position
                    arr.push([[pos], elem, elem.getAttribute('data-scroll-animate-delay')]);
                });

                return arr;
            }
        }, {
            key: 'scrollHandler',
            value: function scrollHandler() {
                var _this = this;

                this.win.addEventListener('scroll', function () {
                    return _this.animation();
                });
            }
        }]);

        return Ssa;
    }();

    var instance = new Ssa();
    instance.init();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL2luZGV4LmpzIiwic3NhL3NjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7Ozs7OztJQ0FNLEc7QUFDRixtQkFBYztBQUFBOztBQUNWLGFBQUssR0FBTCxHQUFXLE1BQVg7QUFDQSxhQUFLLEdBQUwsR0FBVyxRQUFYOztBQUVBLGFBQUssR0FBTCxDQUFTLElBQVQsQ0FBYyxZQUFkLENBQTJCLFNBQTNCLEVBQXNDLElBQXRDO0FBQ0g7Ozs7K0JBRU07QUFDSDtBQUNBLGlCQUFLLFFBQUwsR0FBZ0IsS0FBSyxHQUFMLENBQVMsZ0JBQVQsQ0FBMEIsNEJBQTFCLENBQWhCO0FBQ0E7QUFDQSxpQkFBSyx1QkFBTCxHQUErQixLQUFLLDBCQUFMLENBQWdDLEtBQUssUUFBckMsQ0FBL0I7O0FBRUE7QUFDQSxpQkFBSyxTQUFMLENBQWUsS0FBSyx1QkFBcEI7QUFDQTtBQUNBLGlCQUFLLGFBQUw7QUFDSDs7O29DQUVXO0FBQ1IsZ0JBQUksb0JBQW9CLEtBQUssR0FBTCxDQUFTLGVBQVQsQ0FBeUIsU0FBakQ7O0FBRUEsaUJBQUssdUJBQUwsQ0FBNkIsT0FBN0IsQ0FBcUMsVUFBQyxJQUFELEVBQVU7QUFDM0Msb0JBQUcscUJBQXFCLEtBQUssQ0FBTCxDQUF4QixFQUFpQztBQUM3QiwrQkFBVztBQUFBLCtCQUFNLEtBQUssQ0FBTCxFQUFRLGVBQVIsQ0FBd0IsMkJBQXhCLENBQU47QUFBQSxxQkFBWCxFQUF1RSxLQUFLLENBQUwsSUFBVSxLQUFLLENBQUwsQ0FBVixHQUFvQixDQUEzRjtBQUNIO0FBQ0osYUFKRDtBQUtIOzs7bURBRTBCLFksRUFBYztBQUNyQyxnQkFBSSxPQUFPLENBQVg7QUFDQSxnQkFBSSxNQUFNLENBQVY7QUFDQSxnQkFBSSxNQUFNLEVBQVY7QUFDQSxnQkFBSSxZQUFZLEtBQUssR0FBTCxDQUFTLFdBQVQsR0FBdUIsRUFBdkM7O0FBRUEseUJBQWEsT0FBYixDQUFxQixVQUFDLElBQUQsRUFBVTtBQUMzQix1QkFBTyxLQUFLLHFCQUFMLEVBQVA7QUFDQSxzQkFBTSxLQUFLLEdBQUwsR0FBVyxTQUFqQjs7QUFFQTtBQUNBLG9CQUFJLElBQUosQ0FBUyxDQUFDLENBQUMsR0FBRCxDQUFELEVBQVEsSUFBUixFQUFjLEtBQUssWUFBTCxDQUFrQiwyQkFBbEIsQ0FBZCxDQUFUO0FBQ0gsYUFORDs7QUFRQSxtQkFBTyxHQUFQO0FBQ0g7Ozt3Q0FFZTtBQUFBOztBQUNaLGlCQUFLLEdBQUwsQ0FBUyxnQkFBVCxDQUEwQixRQUExQixFQUFvQztBQUFBLHVCQUFNLE1BQUssU0FBTCxFQUFOO0FBQUEsYUFBcEM7QUFDSDs7Ozs7O0FBR0wsSUFBSSxXQUFXLElBQUksR0FBSixFQUFmO0FBQ0EsU0FBUyxJQUFUIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCAnLi4vc3NhL3NjcmlwdCc7IiwiY2xhc3MgU3NhIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy53aW4gPSB3aW5kb3c7XG4gICAgICAgIHRoaXMuZG9jID0gZG9jdW1lbnQ7XG5cbiAgICAgICAgdGhpcy5kb2MuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtanMnLCAnb24nKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICAvLyBnZXQgYWxsIGVsZW1lbnRzIGZvciBhbmltYXRpb24gZnJvbSBwYWdlXG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zY3JvbGwtYW5pbWF0ZT1cIm9uXCJdJyk7XG4gICAgICAgIC8vIGdldCB0b3AgcG9zaXRpb24gb2YgJ3RoaXMuZWxlbWVudHMnXG4gICAgICAgIHRoaXMuZWxlbWVudHNXaXRoVG9wUG9zaXRpb24gPSB0aGlzLmdldEVsZW1lbnRzV2l0aFRvcFBvc2l0aW9uKHRoaXMuZWxlbWVudHMpO1xuXG4gICAgICAgIC8vIHJ1biBhbmltYXRpb24gd2hlbiBhcHAgc3RhcnRpbmdcbiAgICAgICAgdGhpcy5hbmltYXRpb24odGhpcy5lbGVtZW50c1dpdGhUb3BQb3NpdGlvbik7XG4gICAgICAgIC8vIHJ1biBhbmltYXRpb24gd2hlbiBzY3JvbGwgdG8gYW5pbWF0ZWQgZWxlbWVudHNcbiAgICAgICAgdGhpcy5zY3JvbGxIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgYW5pbWF0aW9uKCkge1xuICAgICAgICBsZXQgd2luZG93VG9wUG9zaXRpb24gPSB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuXG4gICAgICAgIHRoaXMuZWxlbWVudHNXaXRoVG9wUG9zaXRpb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgaWYod2luZG93VG9wUG9zaXRpb24gPj0gaXRlbVswXSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gaXRlbVsxXS5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWFuaW1hdGUtc3R5bGUnKSwgaXRlbVsyXSA/IGl0ZW1bMl0gOiAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RWxlbWVudHNXaXRoVG9wUG9zaXRpb24oZWxlbXNXaXRoUG9zKSB7XG4gICAgICAgIGxldCByZWN0ID0gMDtcbiAgICAgICAgbGV0IHBvcyA9IDA7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgbGV0IHRvcE9mZnNldCA9IHRoaXMud2luLmlubmVySGVpZ2h0IC0gNTA7XG5cbiAgICAgICAgZWxlbXNXaXRoUG9zLmZvckVhY2goKGVsZW0pID0+IHtcbiAgICAgICAgICAgIHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgcG9zID0gcmVjdC50b3AgLSB0b3BPZmZzZXQ7XG5cbiAgICAgICAgICAgIC8vIGdldCB0b3AgcG9zaXRpb25cbiAgICAgICAgICAgIGFyci5wdXNoKFtbcG9zXSwgZWxlbSwgZWxlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Nyb2xsLWFuaW1hdGUtZGVsYXknKV0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIHNjcm9sbEhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMud2luLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHRoaXMuYW5pbWF0aW9uKCkpO1xuICAgIH1cbn1cblxubGV0IGluc3RhbmNlID0gbmV3IFNzYSgpO1xuaW5zdGFuY2UuaW5pdCgpOyJdfQ==
