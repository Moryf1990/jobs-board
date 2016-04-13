import Backbone from 'backbone';

const UserModel = Backbone.Model.extend({
	defaults: {
		username: '',
		password: '',
		name: '',
		email: ''
	}
});

export default UserModel;