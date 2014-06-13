;(function( win, doc ) {

	'use strict';

	var socket = io();
	var USERNAME = 'noname';
	console.log( socket );

	socket.on('login', function ( data ) {
		// connected = true;
		console.log( data.numUsers );
	});
	socket.on('user joined', function ( data ) {
		// connected = true;
		console.log( data.username );
	});

	var app = {
		init: function() {
			socket.emit( 'add user', USERNAME );

		},
		bindEvents: function() {

		},
		getElements: function() {

		}
	}


	window.onload = function() {
		//Start app
		app.init();
	}


}( window, document ));