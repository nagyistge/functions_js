# IronFunctions.AppsApi

All URIs are relative to *https://127.0.0.1:8080/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**appsAppDelete**](AppsApi.md#appsAppDelete) | **DELETE** /apps/{app} | Delete an app.
[**appsAppGet**](AppsApi.md#appsAppGet) | **GET** /apps/{app} | Get information for a app.
[**appsAppPatch**](AppsApi.md#appsAppPatch) | **PATCH** /apps/{app} | Updates an app.
[**appsGet**](AppsApi.md#appsGet) | **GET** /apps | Get all app names.
[**appsPost**](AppsApi.md#appsPost) | **POST** /apps | Post new app


<a name="appsAppDelete"></a>
# **appsAppDelete**
> appsAppDelete(app)

Delete an app.

Delete an app.

### Example
```javascript
var IronFunctions = require('iron_functions');

var apiInstance = new IronFunctions.AppsApi();

var app = "app_example"; // String | Name of the app.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.appsAppDelete(app, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| Name of the app. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppGet"></a>
# **appsAppGet**
> AppWrapper appsAppGet(app)

Get information for a app.

This gives more details about a app, such as statistics.

### Example
```javascript
var IronFunctions = require('iron_functions');

var apiInstance = new IronFunctions.AppsApi();

var app = "app_example"; // String | name of the app.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppGet(app, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| name of the app. | 

### Return type

[**AppWrapper**](AppWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsAppPatch"></a>
# **appsAppPatch**
> AppWrapper appsAppPatch(app, body)

Updates an app.

You can set app level settings here. 

### Example
```javascript
var IronFunctions = require('iron_functions');

var apiInstance = new IronFunctions.AppsApi();

var app = "app_example"; // String | name of the app.

var body = new IronFunctions.AppWrapper(); // AppWrapper | App to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsAppPatch(app, body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app** | **String**| name of the app. | 
 **body** | [**AppWrapper**](AppWrapper.md)| App to post. | 

### Return type

[**AppWrapper**](AppWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsGet"></a>
# **appsGet**
> AppsWrapper appsGet()

Get all app names.

Get a list of all the apps in the system.

### Example
```javascript
var IronFunctions = require('iron_functions');

var apiInstance = new IronFunctions.AppsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AppsWrapper**](AppsWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="appsPost"></a>
# **appsPost**
> AppWrapper appsPost(body)

Post new app

Insert a new app

### Example
```javascript
var IronFunctions = require('iron_functions');

var apiInstance = new IronFunctions.AppsApi();

var body = new IronFunctions.AppWrapper(); // AppWrapper | App to post.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.appsPost(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**AppWrapper**](AppWrapper.md)| App to post. | 

### Return type

[**AppWrapper**](AppWrapper.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

