<%@ page 
	language="java" 
	contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sql" uri="http://java.sun.com/jsp/jstl/sql" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
	

<!DOCTYPE html>

<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!--  bootstrap -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
	<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    
    <!-- jquery -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.2/jquery-migrate.min.js"></script>
    
    <!-- 비밀번호 찾기 팝업창 -->
	<script src="/resources/js/user/findpassword.js"></script>
	
    <!--  bootstrap -->
	<!-- Optional theme -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
	<link rel="stylesheet" href="/resources/css/user/userstyle.css">
	<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    
    <title>Document</title>
</head>
<body>
	 <div class="demo form-bg">
        <div class="container-fluid">
            <div class="row text-center">
                <div class="col-lg-12">
               	 	<img src="/resources/assets/img/common/2.png">
                </div>
            </div>

            <div class="row">
                <div class="col-md-offset-3 col-md-6">
                    <form action="/user/chagePw" method="POST" id="findForm">
                        <h1 class="heading">비밀번호 찾기</h1>
                        <div class="form-group">
                       		<label class="control-label">아이디 (사용중인 이메일)</label>
                       		<label id="emailLabel"class="warning-label"></label>
                       		<button id="emailBtn" type="button" class="check-button">확인하기</button>
                            <input id="emailId" type="email" name="userId" class="form-control" placeholder="example@naver.com"/>

							<label class="control-label">인증번호 입력</label>
							<label id="keyLabel" class="warning-label"></label>
							<button id="keyBtn" type="button" class="check-button">인증하기</button>
                            <input id="inputKey" type="text" class="form-control" placeholder="인증번호를 입력하세요"/>
                            
                            <label class="control-label">변경할 비밀번호</label>
                            <label id="pwLabel" class="warning-label"></label>
                            <input type="password" id="inputPw" name="userPw" class="form-control" />

                           
                            <input type="button" id="submitBtn" class="btn btn-default"  value="변경하기">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>