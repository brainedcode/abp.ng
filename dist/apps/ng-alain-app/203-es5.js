(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[203], {
        /***/ "../../node_modules/@angular/common/locales/sr-Cyrl-BA.js": 
        /*!**********************************************************************************************************!*\
          !*** C:/Users/YinChang/Documents/Works/GitHub/abp.ng/node_modules/@angular/common/locales/sr-Cyrl-BA.js ***!
          \**********************************************************************************************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__; /**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             */
            (function (factory) {
                if (true && typeof module.exports === "object") {
                    var v = factory(null, exports);
                    if (v !== undefined)
                        module.exports = v;
                }
                else if (true) {
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
                        __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
                            (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
                        __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                }
            })(function (require, exports) {
                "use strict";
                Object.defineProperty(exports, "__esModule", { value: true });
                // THIS CODE IS GENERATED - DO NOT MODIFY
                // See angular/tools/gulp-tasks/cldr/extract.js
                var u = undefined;
                function plural(n) {
                    var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(n.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
                    if (v === 0 && i % 10 === 1 && !(i % 100 === 11) || f % 10 === 1 && !(f % 100 === 11))
                        return 1;
                    if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
                        !(i % 100 >= 12 && i % 100 <= 14) ||
                        f % 10 === Math.floor(f % 10) && f % 10 >= 2 && f % 10 <= 4 &&
                            !(f % 100 >= 12 && f % 100 <= 14))
                        return 3;
                    return 5;
                }
                exports.default = [
                    'sr-Cyrl-BA', [['a', 'p'], ['прије подне', 'по подне'], u],
                    [['а', 'p'], ['прије подне', 'по подне'], u],
                    [
                        ['н', 'п', 'у', 'с', 'ч', 'п', 'с'],
                        ['нед.', 'пон.', 'ут.', 'ср.', 'чет.', 'пет.', 'суб.'],
                        [
                            'недјеља', 'понедељак', 'уторак', 'сриједа', 'четвртак',
                            'петак', 'субота'
                        ],
                        ['не', 'по', 'ут', 'ср', 'че', 'пе', 'су']
                    ],
                    u,
                    [
                        ['ј', 'ф', 'м', 'а', 'м', 'ј', 'ј', 'а', 'с', 'о', 'н', 'д'],
                        [
                            'јан.', 'феб.', 'март', 'апр.', 'мај', 'јун', 'јул', 'авг.',
                            'септ.', 'окт.', 'нов.', 'дец.'
                        ],
                        [
                            'јануар', 'фебруар', 'март', 'април', 'мај', 'јун', 'јул',
                            'август', 'септембар', 'октобар', 'новембар', 'децембар'
                        ]
                    ],
                    u,
                    [
                        ['п.н.е.', 'н.е.'], ['п. н. е.', 'н. е.'],
                        ['прије нове ере', 'нове ере']
                    ],
                    1, [6, 0], ['d.M.yy.', 'dd.MM.y.', 'dd. MMMM y.', 'EEEE, dd. MMMM y.'],
                    ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'], ['{1} {0}', u, u, u],
                    [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
                    ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'], 'КМ',
                    'Босанско-херцеговачка конвертибилна марка', {
                        'AUD': [u, '$'],
                        'BAM': ['КМ', 'KM'],
                        'GEL': [u, 'ლ'],
                        'KRW': [u, '₩'],
                        'NZD': [u, '$'],
                        'TWD': ['NT$'],
                        'USD': ['US$', '$'],
                        'VND': [u, '₫']
                    },
                    plural
                ];
            });
            //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ItQ3lybC1CQS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9sb2NhbGVzL3NyLUN5cmwtQkEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7SUFFSCx5Q0FBeUM7SUFDekMsK0NBQStDO0lBRS9DLElBQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQztJQUVwQixTQUFTLE1BQU0sQ0FBQyxDQUFTO1FBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQzdFLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7WUFDbEUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElB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QUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQ25CLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUM7WUFDbkIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztTQUNoQjtRQUNELE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGgsXG4gICAgICBmID0gcGFyc2VJbnQobi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJyksIDEwKSB8fCAwO1xuICBpZiAodiA9PT0gMCAmJiBpICUgMTAgPT09IDEgJiYgIShpICUgMTAwID09PSAxMSkgfHwgZiAlIDEwID09PSAxICYmICEoZiAlIDEwMCA9PT0gMTEpKSByZXR1cm4gMTtcbiAgaWYgKHYgPT09IDAgJiYgaSAlIDEwID09PSBNYXRoLmZsb29yKGkgJSAxMCkgJiYgaSAlIDEwID49IDIgJiYgaSAlIDEwIDw9IDQgJiZcbiAgICAgICAgICAhKGkgJSAxMDAgPj0gMTIgJiYgaSAlIDEwMCA8PSAxNCkgfHxcbiAgICAgIGYgJSAxMCA9PT0gTWF0aC5mbG9vcihmICUgMTApICYmIGYgJSAxMCA+PSAyICYmIGYgJSAxMCA8PSA0ICYmXG4gICAgICAgICAgIShmICUgMTAwID49IDEyICYmIGYgJSAxMDAgPD0gMTQpKVxuICAgIHJldHVybiAzO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnc3ItQ3lybC1CQScsIFtbJ2EnLCAncCddLCBbJ9C/0YDQuNGY0LUg0L/QvtC00L3QtScsICfQv9C+INC/0L7QtNC90LUnXSwgdV0sXG4gIFtbJ9CwJywgJ3AnXSwgWyfQv9GA0LjRmNC1INC/0L7QtNC90LUnLCAn0L/QviDQv9C+0LTQvdC1J10sIHVdLFxuICBbXG4gICAgWyfQvScsICfQvycsICfRgycsICfRgScsICfRhycsICfQvycsICfRgSddLFxuICAgIFsn0L3QtdC0LicsICfQv9C+0L0uJywgJ9GD0YIuJywgJ9GB0YAuJywgJ9GH0LXRgi4nLCAn0L/QtdGCLicsICfRgdGD0LEuJ10sXG4gICAgW1xuICAgICAgJ9C90LXQtNGY0LXRmdCwJywgJ9C/0L7QvdC10LTQtdGZ0LDQuicsICfRg9GC0L7RgNCw0LonLCAn0YHRgNC40ZjQtdC00LAnLCAn0YfQtdGC0LLRgNGC0LDQuicsXG4gICAgICAn0L/QtdGC0LDQuicsICfRgdGD0LHQvtGC0LAnXG4gICAgXSxcbiAgICBbJ9C90LUnLCAn0L/QvicsICfRg9GCJywgJ9GB0YAnLCAn0YfQtScsICfQv9C1JywgJ9GB0YMnXVxuICBdLFxuICB1LFxuICBbXG4gICAgWyfRmCcsICfRhCcsICfQvCcsICfQsCcsICfQvCcsICfRmCcsICfRmCcsICfQsCcsICfRgScsICfQvicsICfQvScsICfQtCddLFxuICAgIFtcbiAgICAgICfRmNCw0L0uJywgJ9GE0LXQsS4nLCAn0LzQsNGA0YInLCAn0LDQv9GALicsICfQvNCw0ZgnLCAn0ZjRg9C9JywgJ9GY0YPQuycsICfQsNCy0LMuJyxcbiAgICAgICfRgdC10L/Rgi4nLCAn0L7QutGCLicsICfQvdC+0LIuJywgJ9C00LXRhi4nXG4gICAgXSxcbiAgICBbXG4gICAgICAn0ZjQsNC90YPQsNGAJywgJ9GE0LXQsdGA0YPQsNGAJywgJ9C80LDRgNGCJywgJ9Cw0L/RgNC40LsnLCAn0LzQsNGYJywgJ9GY0YPQvScsICfRmNGD0LsnLFxuICAgICAgJ9Cw0LLQs9GD0YHRgicsICfRgdC10L/RgtC10LzQsdCw0YAnLCAn0L7QutGC0L7QsdCw0YAnLCAn0L3QvtCy0LXQvNCx0LDRgCcsICfQtNC10YbQtdC80LHQsNGAJ1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsn0L8u0L0u0LUuJywgJ9C9LtC1LiddLCBbJ9C/LiDQvS4g0LUuJywgJ9C9LiDQtS4nXSxcbiAgICBbJ9C/0YDQuNGY0LUg0L3QvtCy0LUg0LXRgNC1JywgJ9C90L7QstC1INC10YDQtSddXG4gIF0sXG4gIDEsIFs2LCAwXSwgWydkLk0ueXkuJywgJ2RkLk1NLnkuJywgJ2RkLiBNTU1NIHkuJywgJ0VFRUUsIGRkLiBNTU1NIHkuJ10sXG4gIFsnSEg6bW0nLCAnSEg6bW06c3MnLCAnSEg6bW06c3MgeicsICdISDptbTpzcyB6enp6J10sIFsnezF9IHswfScsIHUsIHUsIHVdLFxuICBbJywnLCAnLicsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLCAn0JrQnCcsXG4gICfQkdC+0YHQsNC90YHQutC+LdGF0LXRgNGG0LXQs9C+0LLQsNGH0LrQsCDQutC+0L3QstC10YDRgtC40LHQuNC70L3QsCDQvNCw0YDQutCwJywge1xuICAgICdBVUQnOiBbdSwgJyQnXSxcbiAgICAnQkFNJzogWyfQmtCcJywgJ0tNJ10sXG4gICAgJ0dFTCc6IFt1LCAn4YOaJ10sXG4gICAgJ0tSVyc6IFt1LCAn4oKpJ10sXG4gICAgJ05aRCc6IFt1LCAnJCddLFxuICAgICdUV0QnOiBbJ05UJCddLFxuICAgICdVU0QnOiBbJ1VTJCcsICckJ10sXG4gICAgJ1ZORCc6IFt1LCAn4oKrJ11cbiAgfSxcbiAgcGx1cmFsXG5dO1xuIl19
            /***/ 
        })
    }]);
//# sourceMappingURL=203-es2015.js.map
//# sourceMappingURL=203-es5.js.map
//# sourceMappingURL=203-es5.js.map