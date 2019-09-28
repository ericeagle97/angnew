package com.cognizant.moviecruize.dao;

import java.sql.Connection;

public class ConnectionHandler {

	public ConnectionHandler() {
	}
	public static Connection getConnection(){
		Connection conn = null;
		return conn;
	}
}
