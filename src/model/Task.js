/**
 * IronFunctions
 * The open source serverless platform.
 *
 * OpenAPI spec version: 0.1.23
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
    define(['ApiClient', 'model/NewTask'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NewTask'));
  } else {
    // Browser globals (root is window)
    if (!root.IronFunctions) {
      root.IronFunctions = {};
    }
    root.IronFunctions.Task = factory(root.IronFunctions.ApiClient, root.IronFunctions.NewTask);
  }
}(this, function(ApiClient, NewTask) {
  'use strict';




  /**
   * The Task model module.
   * @module model/Task
   * @version 0.1.23
   */

  /**
   * Constructs a new <code>Task</code>.
   * @alias module:model/Task
   * @class
   * @implements module:model/NewTask
   * @param image {String} Name of Docker image to use. This is optional and can be used to override the image defined at the group level.
   */
  var exports = function(image) {
    var _this = this;

    NewTask.call(_this, image);









  };

  /**
   * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Task} obj Optional instance to populate.
   * @return {module:model/Task} The populated <code>Task</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      NewTask.constructFromObject(data, obj);
      if (data.hasOwnProperty('group_name')) {
        obj['group_name'] = ApiClient.convertToType(data['group_name'], 'String');
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'String');
      }
      if (data.hasOwnProperty('reason')) {
        obj['reason'] = ApiClient.convertToType(data['reason'], 'String');
      }
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('started_at')) {
        obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Date');
      }
      if (data.hasOwnProperty('completed_at')) {
        obj['completed_at'] = ApiClient.convertToType(data['completed_at'], 'Date');
      }
      if (data.hasOwnProperty('retry_of')) {
        obj['retry_of'] = ApiClient.convertToType(data['retry_of'], 'String');
      }
      if (data.hasOwnProperty('retry_at')) {
        obj['retry_at'] = ApiClient.convertToType(data['retry_at'], 'String');
      }
      if (data.hasOwnProperty('env_vars')) {
        obj['env_vars'] = ApiClient.convertToType(data['env_vars'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * Group this task belongs to.
   * @member {String} group_name
   */
  exports.prototype['group_name'] = undefined;
  /**
   * The error message, if status is 'error'. This is errors due to things outside the task itself. Errors from user code will be found in the log.
   * @member {String} error
   */
  exports.prototype['error'] = undefined;
  /**
   * Machine usable reason for task being in this state. Valid values for error status are `timeout | killed | bad_exit`. Valid values for cancelled status are `client_request`. For everything else, this is undefined. 
   * @member {module:model/Task.ReasonEnum} reason
   */
  exports.prototype['reason'] = undefined;
  /**
   * Time when task was submitted. Always in UTC.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * Time when task started execution. Always in UTC.
   * @member {Date} started_at
   */
  exports.prototype['started_at'] = undefined;
  /**
   * Time when task completed, whether it was successul or failed. Always in UTC.
   * @member {Date} completed_at
   */
  exports.prototype['completed_at'] = undefined;
  /**
   * If this field is set, then this task is a retry of the ID in this field.
   * @member {String} retry_of
   */
  exports.prototype['retry_of'] = undefined;
  /**
   * If this field is set, then this task was retried by the task referenced in this field.
   * @member {String} retry_at
   */
  exports.prototype['retry_at'] = undefined;
  /**
   * Env vars for the task. Comes from the ones set on the Group.
   * @member {Object.<String, String>} env_vars
   */
  exports.prototype['env_vars'] = undefined;

  // Implement NewTask interface:
  /**
   * Name of Docker image to use. This is optional and can be used to override the image defined at the group level.
   * @member {String} image
   */
exports.prototype['image'] = undefined;

  /**
   * Payload for the task. This is what you pass into each task to make it do something.
   * @member {String} payload
   */
exports.prototype['payload'] = undefined;


  /**
   * Allowed values for the <code>reason</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ReasonEnum = {
    /**
     * value: "timeout"
     * @const
     */
    "timeout": "timeout",
    /**
     * value: "killed"
     * @const
     */
    "killed": "killed",
    /**
     * value: "bad_exit"
     * @const
     */
    "bad_exit": "bad_exit",
    /**
     * value: "client_request"
     * @const
     */
    "client_request": "client_request"  };


  return exports;
}));


