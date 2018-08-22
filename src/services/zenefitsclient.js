

import config from './../config.js'

/**
* Fetches company details
* @returns {Object} returns company details
**/
export function fetchCompanyDetails() {
	var url = config.COMPANY_API + "?includes=locations";

	var request = new Request(url, {
		method: 'GET', 
		headers: new Headers({
			'Authorization': `Bearer pOjrfOYNToyQosKqqprj`
		})
	});

	// Now use it!
	return fetch(request)
}

/**
* Fetches employees of the company
* @param {String} companyId [Company ID]
* @returns {Object} returns employees of the company
**/
export function fetchDepartments(companyId) {

	var url = config.DEPARTMENT_API;

	var request = new Request(url, {
		method: 'GET', 
		headers: new Headers({
			'Authorization': `Bearer pOjrfOYNToyQosKqqprj`
		})
	});

	// Now use it!
	return fetch(request)
}


/**
* Fetches employees of the company
* @param {String} companyId [Company ID]
* @returns {Object} returns employees of the company
**/
export function fetchEmployees() {

	var url = config.PEOPLE_API+"?includes=manager+location+employments"

	var request = new Request(url, {
		method: 'GET', 
		headers: new Headers({
			'Authorization': `Bearer pOjrfOYNToyQosKqqprj`
		})
	});

	// Now use it!
	return fetch(request);

}


/**
* Fetches employee details of the company
* @param {String} employeeId [Employee ID]
* @returns {Object} returns Employee details
**/
export function fetchEmployeeDetail(employeeUrl) {

	var request = new Request(employeeUrl, {
		method: 'GET', 
		headers: new Headers({
			'Authorization': `Bearer pOjrfOYNToyQosKqqprj`
		})
	});
	return fetch(request);
}

/**
* Fetches locations of the company
* @param {String} companyId [Company ID]
* @returns {Object} returns locations of the company
**/
export function fetchCompanyLocation(companyId){

	var url = config.LOCATION_API;

	var request = new Request(url, {
		method: 'GET', 
		headers: new Headers({
			'Authorization': `Bearer pOjrfOYNToyQosKqqprj`
		})
	});

	// Now use it!
	return fetch(request)

}

