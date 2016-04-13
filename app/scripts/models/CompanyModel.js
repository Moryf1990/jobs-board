import Backbone from 'backbone';

const CompanyModel = Backbone.Model.extend({
	defaults: {
		location: '',
		jobDescription: '',
		company: ''
	}
});

export default CompanyModel;