package com.cognizant.moviecruize.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {
	public static Date convertToDate(String date){
		Date convertedDate = null;
		try{
			convertedDate = new SimpleDateFormat("dd/MM/yyyy").parse(date);
		}catch(Exception e){
			
		}		
		return convertedDate;		
	}

}