	SimpleSchema.LocationsSchema = new SimpleSchema({
	  state: {
	    type: String,
	    max: 12
	  },
	  city: {
	    type: String,
	    optional: true
	  }
	});

	SimpleSchema.LocationsSchema.i18n("schema-locations");

	SimpleSchema.ClubSchema = new SimpleSchema({
	  name: {
	     type: String,
	     max: 30,
	     optional: false
	  },
	  locations: {
	      type: [SimpleSchema.LocationsSchema],
	      minCount: 1
	  }
	});
	
	SimpleSchema.ClubSchema.i18n("schema-clubs");

	Clubs = new Mongo.Collection('clubs');
	Clubs.attachSchema(SimpleSchema.ClubSchema);


	Clubs.allow({
	  insert: function () { return true; },
	  update: function () { return true; },
	  remove: function () { return true; }
	});


	// Meteor.startup(function () {
	// 	SimpleSchema.LocationsSchema.i18n("schema-locations");
	// 	SimpleSchema.ClubSchema.i18n("schema-clubs");
	// });