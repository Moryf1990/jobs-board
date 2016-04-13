import Backbone from 'backbone';

const JobModel = Backbone.Model.extend({
	defaults: {
		title: '',
		posts: 0,
		description: '',
		datePosted: ''
	}
});

export default JobModel;