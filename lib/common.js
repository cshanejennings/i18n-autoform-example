	SimpleSchema.ClubSchema = new SimpleSchema({
	  name: {
	     type: String,
	     max: 30,
	     optional: false
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