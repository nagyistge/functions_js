/**
 * IronFunctions
 * null
 *
 * OpenAPI spec version: 0.0.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/App'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./App'));
  } else {
    // Browser globals (root is window)
    if (!root.IronFunctions) {
      root.IronFunctions = {};
    }
    root.IronFunctions.AppWrapper = factory(root.IronFunctions.ApiClient, root.IronFunctions.App);
  }
}(this, function(ApiClient, App) {
  'use strict';




  /**
   * The AppWrapper model module.
   * @module model/AppWrapper
   * @version 0.0.3
   */

  /**
   * Constructs a new <code>AppWrapper</code>.
   * @alias module:model/AppWrapper
   * @class
   * @param app {module:model/App} 
   */
  var exports = function(app) {
    var _this = this;

    _this['app'] = app;
  };

  /**
   * Constructs a <code>AppWrapper</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppWrapper} obj Optional instance to populate.
   * @return {module:model/AppWrapper} The populated <code>AppWrapper</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('app')) {
        obj['app'] = App.constructFromObject(data['app']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/App} app
   */
  exports.prototype['app'] = undefined;



  return exports;
}));


