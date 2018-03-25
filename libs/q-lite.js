class qLite {
	static lastQuery = ''
	static lastSelection = []
	static lastSelectionIndex

	static PATTERNS = {
		ID: /#[a-zA-Z][a-zA-Z0-9\-\_\:\.]+/g,
		CLASS: /\.[a-zA-Z][a-zA-Z0-9\-\_\:\.]+/g,
		ATTR: /\[[a-zA-Z][a-zA-Z0-9\-\_\:\.]+=((\"([^"]*)\"+)|(\'([^']*)\'+))?\]/g,
		COMPLEX: /^(.*\s+.*)+$/g
	}

	static getQueryType = (query) => {
		if(qLite.PATTERNS.ID.test(query)) return 'id'
		if(qLite.PATTERNS.CLASS.test(query)) return 'class'
		if(qLite.PATTERNS.ATTR.test(query)) return 'attribute'
		if(qLite.PATTERNS.COMPLEX.test(query)) return 'complex'
		return 'unknown'
	}

	static find = (root, query, single) => {
		let sameQuery = query == qLite.lastQuery
		qLite.lastQuery = query

		if(sameQuery){

		}

		switch(qLite.getQueryType(query)){
			case 'id': {
				selection = root.getElementById(query.substr(1))
				result = single ? selection : [selection]
			} break
			case 'class': {
				result = single ? root.querySelector(selector) : root.querySelectorAll(selector)
			}
			case 'attr': {
				selection = root.querySelectorAll(selector)
				result = single ? selection[0] : selection
			}
			default: {
				selection = root.querySelectorAll(selector)
				result = single ? selection[0] : selection
			}
		}
	
		return result
	}
}

class qLiteQuery {
	constructor(query) {

	}
}

var findAll = function(root, selector){
	return find(root, selector, false)
}

var select = function(selector, single){
	return find(document, selector, single)
}

var selectAll = function(selector){
	return find(document, selector, false)
}

function hasClass(element, cls) {
	return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}