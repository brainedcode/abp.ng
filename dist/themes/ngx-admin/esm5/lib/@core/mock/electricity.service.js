/**
 * @fileoverview added by tsickle
 * Generated from: lib/\@core/mock/electricity.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { ElectricityData } from '../data/electricity';
var ElectricityService = /** @class */ (function (_super) {
    tslib_1.__extends(ElectricityService, _super);
    function ElectricityService() {
        var _this = _super.call(this) || this;
        _this.listData = [
            {
                title: '2015',
                months: [
                    { month: 'Jan', delta: '0.97', down: true, kWatts: '816', cost: '97' },
                    { month: 'Feb', delta: '1.83', down: true, kWatts: '806', cost: '95' },
                    { month: 'Mar', delta: '0.64', down: true, kWatts: '803', cost: '94' },
                    { month: 'Apr', delta: '2.17', down: false, kWatts: '818', cost: '98' },
                    { month: 'May', delta: '1.32', down: true, kWatts: '809', cost: '96' },
                    { month: 'Jun', delta: '0.05', down: true, kWatts: '808', cost: '96' },
                    { month: 'Jul', delta: '1.39', down: false, kWatts: '815', cost: '97' },
                    { month: 'Aug', delta: '0.73', down: true, kWatts: '807', cost: '95' },
                    { month: 'Sept', delta: '2.61', down: true, kWatts: '792', cost: '92' },
                    { month: 'Oct', delta: '0.16', down: true, kWatts: '791', cost: '92' },
                    { month: 'Nov', delta: '1.71', down: true, kWatts: '786', cost: '89' },
                    { month: 'Dec', delta: '0.37', down: false, kWatts: '789', cost: '91' },
                ],
            },
            {
                title: '2016',
                active: true,
                months: [
                    { month: 'Jan', delta: '1.56', down: true, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.33', down: false, kWatts: '791', cost: '92' },
                    { month: 'Mar', delta: '0.62', down: true, kWatts: '790', cost: '92' },
                    { month: 'Apr', delta: '1.93', down: true, kWatts: '783', cost: '87' },
                    { month: 'May', delta: '2.52', down: true, kWatts: '771', cost: '83' },
                    { month: 'Jun', delta: '0.39', down: false, kWatts: '774', cost: '85' },
                    { month: 'Jul', delta: '1.61', down: true, kWatts: '767', cost: '81' },
                    { month: 'Aug', delta: '1.41', down: true, kWatts: '759', cost: '76' },
                    { month: 'Sept', delta: '1.03', down: true, kWatts: '752', cost: '74' },
                    { month: 'Oct', delta: '2.94', down: false, kWatts: '769', cost: '82' },
                    { month: 'Nov', delta: '0.26', down: true, kWatts: '767', cost: '81' },
                    { month: 'Dec', delta: '1.62', down: true, kWatts: '760', cost: '76' },
                ],
            },
            {
                title: '2017',
                months: [
                    { month: 'Jan', delta: '1.34', down: false, kWatts: '789', cost: '91' },
                    { month: 'Feb', delta: '0.95', down: false, kWatts: '793', cost: '93' },
                    { month: 'Mar', delta: '0.25', down: true, kWatts: '791', cost: '92' },
                    { month: 'Apr', delta: '1.72', down: false, kWatts: '797', cost: '95' },
                    { month: 'May', delta: '2.62', down: true, kWatts: '786', cost: '90' },
                    { month: 'Jun', delta: '0.72', down: false, kWatts: '789', cost: '91' },
                    { month: 'Jul', delta: '0.78', down: true, kWatts: '784', cost: '89' },
                    { month: 'Aug', delta: '0.36', down: true, kWatts: '782', cost: '88' },
                    { month: 'Sept', delta: '0.55', down: false, kWatts: '787', cost: '90' },
                    { month: 'Oct', delta: '1.81', down: true, kWatts: '779', cost: '86' },
                    { month: 'Nov', delta: '1.12', down: true, kWatts: '774', cost: '84' },
                    { month: 'Dec', delta: '0.52', down: false, kWatts: '776', cost: '95' },
                ],
            },
        ];
        _this.chartPoints = [
            490, 490, 495, 500,
            505, 510, 520, 530,
            550, 580, 630, 720,
            800, 840, 860, 870,
            870, 860, 840, 800,
            720, 200, 145, 130,
            130, 145, 200, 570,
            635, 660, 670, 670,
            660, 630, 580, 460,
            380, 350, 340, 340,
            340, 340, 340, 340,
            340, 340, 340,
        ];
        _this.chartData = _this.chartPoints.map((/**
         * @param {?} p
         * @param {?} index
         * @return {?}
         */
        function (p, index) { return ({
            label: (index % 5 === 3) ? "" + Math.round(index / 5) : '',
            value: p,
        }); }));
        return _this;
    }
    /**
     * @return {?}
     */
    ElectricityService.prototype.getListData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.listData);
    };
    /**
     * @return {?}
     */
    ElectricityService.prototype.getChartData = /**
     * @return {?}
     */
    function () {
        return observableOf(this.chartData);
    };
    ElectricityService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ElectricityService.ctorParameters = function () { return []; };
    return ElectricityService;
}(ElectricityData));
export { ElectricityService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ElectricityService.prototype.listData;
    /**
     * @type {?}
     * @private
     */
    ElectricityService.prototype.chartPoints;
    /** @type {?} */
    ElectricityService.prototype.chartData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxlY3RyaWNpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bmcy9uZ3gtYWRtaW4vIiwic291cmNlcyI6WyJsaWIvQGNvcmUvbW9jay9lbGVjdHJpY2l0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxZQUFZLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFpQyxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVyRjtJQUN3Qyw4Q0FBZTtJQTBFckQ7UUFBQSxZQUNFLGlCQUFPLFNBS1I7UUE5RU8sY0FBUSxHQUFrQjtZQUNoQztnQkFDRSxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUU7b0JBQ04sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ3RFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUN0RSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtvQkFDdEUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ3ZFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUN0RSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtvQkFDdEUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ3ZFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUN0RSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtvQkFDdkUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ3RFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUN0RSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtpQkFDeEU7YUFDRjtZQUNEO2dCQUNFLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxJQUFJO2dCQUNaLE1BQU0sRUFBRTtvQkFDTixFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtvQkFDdEUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ3ZFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUN0RSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtvQkFDdEUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ3RFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUN2RSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtvQkFDdEUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ3RFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUN2RSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtvQkFDdkUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ3RFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO2lCQUN2RTthQUNGO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFO29CQUNOLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUN2RSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtvQkFDdkUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ3RFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUN2RSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtvQkFDdEUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ3ZFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUN0RSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtvQkFDdEUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7b0JBQ3hFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO29CQUN0RSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtvQkFDdEUsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7aUJBQ3hFO2FBQ0Y7U0FDRixDQUFDO1FBRU0saUJBQVcsR0FBRztZQUNwQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQ2xCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQ2xCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQ2xCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztZQUNsQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1lBQ2xCLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUc7WUFDbEIsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHO1NBQ2QsQ0FBQztRQU1BLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHOzs7OztRQUFDLFVBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSyxPQUFBLENBQUM7WUFDbkQsS0FBSyxFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMxRCxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUMsRUFIa0QsQ0FHbEQsRUFBQyxDQUFDOztJQUNOLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxPQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELHlDQUFZOzs7SUFBWjtRQUNFLE9BQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDOztnQkF6RkYsVUFBVTs7OztJQTBGWCx5QkFBQztDQUFBLEFBMUZELENBQ3dDLGVBQWUsR0F5RnREO1NBekZZLGtCQUFrQjs7Ozs7O0lBRTdCLHNDQXFERTs7Ozs7SUFFRix5Q0FhRTs7SUFFRix1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IG9mIGFzIG9ic2VydmFibGVPZiwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBFbGVjdHJpY2l0eSwgRWxlY3RyaWNpdHlDaGFydCwgRWxlY3RyaWNpdHlEYXRhIH0gZnJvbSAnLi4vZGF0YS9lbGVjdHJpY2l0eSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFbGVjdHJpY2l0eVNlcnZpY2UgZXh0ZW5kcyBFbGVjdHJpY2l0eURhdGEge1xyXG5cclxuICBwcml2YXRlIGxpc3REYXRhOiBFbGVjdHJpY2l0eVtdID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJzIwMTUnLFxyXG4gICAgICBtb250aHM6IFtcclxuICAgICAgICB7IG1vbnRoOiAnSmFuJywgZGVsdGE6ICcwLjk3JywgZG93bjogdHJ1ZSwga1dhdHRzOiAnODE2JywgY29zdDogJzk3JyB9LFxyXG4gICAgICAgIHsgbW9udGg6ICdGZWInLCBkZWx0YTogJzEuODMnLCBkb3duOiB0cnVlLCBrV2F0dHM6ICc4MDYnLCBjb3N0OiAnOTUnIH0sXHJcbiAgICAgICAgeyBtb250aDogJ01hcicsIGRlbHRhOiAnMC42NCcsIGRvd246IHRydWUsIGtXYXR0czogJzgwMycsIGNvc3Q6ICc5NCcgfSxcclxuICAgICAgICB7IG1vbnRoOiAnQXByJywgZGVsdGE6ICcyLjE3JywgZG93bjogZmFsc2UsIGtXYXR0czogJzgxOCcsIGNvc3Q6ICc5OCcgfSxcclxuICAgICAgICB7IG1vbnRoOiAnTWF5JywgZGVsdGE6ICcxLjMyJywgZG93bjogdHJ1ZSwga1dhdHRzOiAnODA5JywgY29zdDogJzk2JyB9LFxyXG4gICAgICAgIHsgbW9udGg6ICdKdW4nLCBkZWx0YTogJzAuMDUnLCBkb3duOiB0cnVlLCBrV2F0dHM6ICc4MDgnLCBjb3N0OiAnOTYnIH0sXHJcbiAgICAgICAgeyBtb250aDogJ0p1bCcsIGRlbHRhOiAnMS4zOScsIGRvd246IGZhbHNlLCBrV2F0dHM6ICc4MTUnLCBjb3N0OiAnOTcnIH0sXHJcbiAgICAgICAgeyBtb250aDogJ0F1ZycsIGRlbHRhOiAnMC43MycsIGRvd246IHRydWUsIGtXYXR0czogJzgwNycsIGNvc3Q6ICc5NScgfSxcclxuICAgICAgICB7IG1vbnRoOiAnU2VwdCcsIGRlbHRhOiAnMi42MScsIGRvd246IHRydWUsIGtXYXR0czogJzc5MicsIGNvc3Q6ICc5MicgfSxcclxuICAgICAgICB7IG1vbnRoOiAnT2N0JywgZGVsdGE6ICcwLjE2JywgZG93bjogdHJ1ZSwga1dhdHRzOiAnNzkxJywgY29zdDogJzkyJyB9LFxyXG4gICAgICAgIHsgbW9udGg6ICdOb3YnLCBkZWx0YTogJzEuNzEnLCBkb3duOiB0cnVlLCBrV2F0dHM6ICc3ODYnLCBjb3N0OiAnODknIH0sXHJcbiAgICAgICAgeyBtb250aDogJ0RlYycsIGRlbHRhOiAnMC4zNycsIGRvd246IGZhbHNlLCBrV2F0dHM6ICc3ODknLCBjb3N0OiAnOTEnIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJzIwMTYnLFxyXG4gICAgICBhY3RpdmU6IHRydWUsXHJcbiAgICAgIG1vbnRoczogW1xyXG4gICAgICAgIHsgbW9udGg6ICdKYW4nLCBkZWx0YTogJzEuNTYnLCBkb3duOiB0cnVlLCBrV2F0dHM6ICc3ODknLCBjb3N0OiAnOTEnIH0sXHJcbiAgICAgICAgeyBtb250aDogJ0ZlYicsIGRlbHRhOiAnMC4zMycsIGRvd246IGZhbHNlLCBrV2F0dHM6ICc3OTEnLCBjb3N0OiAnOTInIH0sXHJcbiAgICAgICAgeyBtb250aDogJ01hcicsIGRlbHRhOiAnMC42MicsIGRvd246IHRydWUsIGtXYXR0czogJzc5MCcsIGNvc3Q6ICc5MicgfSxcclxuICAgICAgICB7IG1vbnRoOiAnQXByJywgZGVsdGE6ICcxLjkzJywgZG93bjogdHJ1ZSwga1dhdHRzOiAnNzgzJywgY29zdDogJzg3JyB9LFxyXG4gICAgICAgIHsgbW9udGg6ICdNYXknLCBkZWx0YTogJzIuNTInLCBkb3duOiB0cnVlLCBrV2F0dHM6ICc3NzEnLCBjb3N0OiAnODMnIH0sXHJcbiAgICAgICAgeyBtb250aDogJ0p1bicsIGRlbHRhOiAnMC4zOScsIGRvd246IGZhbHNlLCBrV2F0dHM6ICc3NzQnLCBjb3N0OiAnODUnIH0sXHJcbiAgICAgICAgeyBtb250aDogJ0p1bCcsIGRlbHRhOiAnMS42MScsIGRvd246IHRydWUsIGtXYXR0czogJzc2NycsIGNvc3Q6ICc4MScgfSxcclxuICAgICAgICB7IG1vbnRoOiAnQXVnJywgZGVsdGE6ICcxLjQxJywgZG93bjogdHJ1ZSwga1dhdHRzOiAnNzU5JywgY29zdDogJzc2JyB9LFxyXG4gICAgICAgIHsgbW9udGg6ICdTZXB0JywgZGVsdGE6ICcxLjAzJywgZG93bjogdHJ1ZSwga1dhdHRzOiAnNzUyJywgY29zdDogJzc0JyB9LFxyXG4gICAgICAgIHsgbW9udGg6ICdPY3QnLCBkZWx0YTogJzIuOTQnLCBkb3duOiBmYWxzZSwga1dhdHRzOiAnNzY5JywgY29zdDogJzgyJyB9LFxyXG4gICAgICAgIHsgbW9udGg6ICdOb3YnLCBkZWx0YTogJzAuMjYnLCBkb3duOiB0cnVlLCBrV2F0dHM6ICc3NjcnLCBjb3N0OiAnODEnIH0sXHJcbiAgICAgICAgeyBtb250aDogJ0RlYycsIGRlbHRhOiAnMS42MicsIGRvd246IHRydWUsIGtXYXR0czogJzc2MCcsIGNvc3Q6ICc3NicgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnMjAxNycsXHJcbiAgICAgIG1vbnRoczogW1xyXG4gICAgICAgIHsgbW9udGg6ICdKYW4nLCBkZWx0YTogJzEuMzQnLCBkb3duOiBmYWxzZSwga1dhdHRzOiAnNzg5JywgY29zdDogJzkxJyB9LFxyXG4gICAgICAgIHsgbW9udGg6ICdGZWInLCBkZWx0YTogJzAuOTUnLCBkb3duOiBmYWxzZSwga1dhdHRzOiAnNzkzJywgY29zdDogJzkzJyB9LFxyXG4gICAgICAgIHsgbW9udGg6ICdNYXInLCBkZWx0YTogJzAuMjUnLCBkb3duOiB0cnVlLCBrV2F0dHM6ICc3OTEnLCBjb3N0OiAnOTInIH0sXHJcbiAgICAgICAgeyBtb250aDogJ0FwcicsIGRlbHRhOiAnMS43MicsIGRvd246IGZhbHNlLCBrV2F0dHM6ICc3OTcnLCBjb3N0OiAnOTUnIH0sXHJcbiAgICAgICAgeyBtb250aDogJ01heScsIGRlbHRhOiAnMi42MicsIGRvd246IHRydWUsIGtXYXR0czogJzc4NicsIGNvc3Q6ICc5MCcgfSxcclxuICAgICAgICB7IG1vbnRoOiAnSnVuJywgZGVsdGE6ICcwLjcyJywgZG93bjogZmFsc2UsIGtXYXR0czogJzc4OScsIGNvc3Q6ICc5MScgfSxcclxuICAgICAgICB7IG1vbnRoOiAnSnVsJywgZGVsdGE6ICcwLjc4JywgZG93bjogdHJ1ZSwga1dhdHRzOiAnNzg0JywgY29zdDogJzg5JyB9LFxyXG4gICAgICAgIHsgbW9udGg6ICdBdWcnLCBkZWx0YTogJzAuMzYnLCBkb3duOiB0cnVlLCBrV2F0dHM6ICc3ODInLCBjb3N0OiAnODgnIH0sXHJcbiAgICAgICAgeyBtb250aDogJ1NlcHQnLCBkZWx0YTogJzAuNTUnLCBkb3duOiBmYWxzZSwga1dhdHRzOiAnNzg3JywgY29zdDogJzkwJyB9LFxyXG4gICAgICAgIHsgbW9udGg6ICdPY3QnLCBkZWx0YTogJzEuODEnLCBkb3duOiB0cnVlLCBrV2F0dHM6ICc3NzknLCBjb3N0OiAnODYnIH0sXHJcbiAgICAgICAgeyBtb250aDogJ05vdicsIGRlbHRhOiAnMS4xMicsIGRvd246IHRydWUsIGtXYXR0czogJzc3NCcsIGNvc3Q6ICc4NCcgfSxcclxuICAgICAgICB7IG1vbnRoOiAnRGVjJywgZGVsdGE6ICcwLjUyJywgZG93bjogZmFsc2UsIGtXYXR0czogJzc3NicsIGNvc3Q6ICc5NScgfSxcclxuICAgICAgXSxcclxuICAgIH0sXHJcbiAgXTtcclxuXHJcbiAgcHJpdmF0ZSBjaGFydFBvaW50cyA9IFtcclxuICAgIDQ5MCwgNDkwLCA0OTUsIDUwMCxcclxuICAgIDUwNSwgNTEwLCA1MjAsIDUzMCxcclxuICAgIDU1MCwgNTgwLCA2MzAsIDcyMCxcclxuICAgIDgwMCwgODQwLCA4NjAsIDg3MCxcclxuICAgIDg3MCwgODYwLCA4NDAsIDgwMCxcclxuICAgIDcyMCwgMjAwLCAxNDUsIDEzMCxcclxuICAgIDEzMCwgMTQ1LCAyMDAsIDU3MCxcclxuICAgIDYzNSwgNjYwLCA2NzAsIDY3MCxcclxuICAgIDY2MCwgNjMwLCA1ODAsIDQ2MCxcclxuICAgIDM4MCwgMzUwLCAzNDAsIDM0MCxcclxuICAgIDM0MCwgMzQwLCAzNDAsIDM0MCxcclxuICAgIDM0MCwgMzQwLCAzNDAsXHJcbiAgXTtcclxuXHJcbiAgY2hhcnREYXRhOiBFbGVjdHJpY2l0eUNoYXJ0W107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuY2hhcnREYXRhID0gdGhpcy5jaGFydFBvaW50cy5tYXAoKHAsIGluZGV4KSA9PiAoe1xyXG4gICAgICBsYWJlbDogKGluZGV4ICUgNSA9PT0gMykgPyBgJHtNYXRoLnJvdW5kKGluZGV4IC8gNSl9YCA6ICcnLFxyXG4gICAgICB2YWx1ZTogcCxcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGdldExpc3REYXRhKCk6IE9ic2VydmFibGU8RWxlY3RyaWNpdHlbXT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmxpc3REYXRhKTtcclxuICB9XHJcblxyXG4gIGdldENoYXJ0RGF0YSgpOiBPYnNlcnZhYmxlPEVsZWN0cmljaXR5Q2hhcnRbXT4ge1xyXG4gICAgcmV0dXJuIG9ic2VydmFibGVPZih0aGlzLmNoYXJ0RGF0YSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==