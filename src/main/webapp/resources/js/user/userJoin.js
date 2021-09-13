var authKey = "";			//사용자가 입력한 인증번호(값이 일치하는지 비교해야함)
var emailCheck = "";		//페이지 제출시 최종확인용 변수(이메일)
var nickNameCheck = ""; 	//페이지 제출시 최종확인용 변수(닉네임)
var passwordCheck = "";		//페이지 제출시 최종확인용 변수(비밀번호)
var phoneNumberCheck = "";	//페이지 제출시 최종확인용 변수(전화번호)
var addressCheck = "";		//페이지 제출시 최종확인용 변수(주소)

$(function() {

	//이메일 중복검사
	$('#emailBtn').click(function (){
		var email = $('#emailId').val();
		$('#emailLabel').css("color", "red");
		
		if(email.trim() == ''){
			//이메일을 입력하지 않은 경우
	        $('#emailLabel').text("* 이메일을 입력하세요.");
	        return;
		} else {
			//이메일 정규식
			var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
			
			if(email.match(regExp) == null){
				//이메일 형식에 맞지 않는 경우
				$('#emailLabel').text("* 이메일 형식에 맞지 않습니다.");
				return;
			}//if
		}//if-else
		
		var sendData = "email="+email;
		$.ajax({
			url:'emailCheck',
			method: 'POST',
			data: sendData,
			success : function(resp){
				if(resp == 'success'){
					//인증 성공
					$('#emailLabel').css("color", "blue");
					$('#emailLabel').text("* 사용 가능한 이메일입니다.");
					emailCheck = email;
				} else{
					$('#emailLabel').text("* 이미 사용중인 이메일입니다.");
				}//if-else
			}
		})//.ajax
	});//end function
	
	//닉네임 중복검사
	$('#nickNameBtn').click(function (){
		var nickName = $('#nickName').val();
		$('#nickNameLabel').css("color", "red");
		
		if(nickName.trim() == ''){
			//닉네임을 입력하지 않은 경우
			$('#nickNameLabel').text("* 닉네임을 입력하세요");
			return;
		} else {
			 if(nickName.length < 1 || nickName.length > 8){
				$('#nickNameLabel').text("* 닉네임은 1~8자 이내로 가능합니다.");
				return;
			 }
		}//if-else
		
		var sendData = "nickName="+nickName;
		$.ajax({
			url: 'nickNameCheck',
			method: 'GET',
			data: sendData,
			success :function(resp){
				
				if(resp == 'success'){
					//인증성공
					$('#nickNameLabel').css("color", "blue");
					$('#nickNameLabel').text("* 사용 가능한 닉네임입니다.");
					nickNameCheck = nickName;
				} else{
					$('#nickNameLabel').text("* 이미 사용중인 닉네임입니다.");
				}//if-else
			}
		})//.ajax
	});//end function
	
	
	//인증번호 발급
	$('#keyBtn').click(function (){
	    var email = $("#emailId").val();
		$('#keyLabel').css("color", "red");
	    
		if(email.trim() == ''){
			//이메일을 입력하지 않은 경우
	        $('#keyLabel').text("* 이메일을 입력하세요");
	        return;
		}//if
	  
	    //서버로 보낼 데이터 준비 : 파라미터로 만들기
	    var sendData = "email="+email;
	    $.ajax({
	        url:'authDo',
	        method : 'POST',
	        data: sendData,
	        success :function(resp){
				$('#keyLabel').text("* 인증번호가 발급되었습니다.");
				authKey = resp;
			}
	    })//.ajax	
	});//end function
	
	//인증번호 체크
	$('#inputKey').on("propertychange change keyup paste input", function (){
		var inputKey = $('#inputKey').val();
		$('#keyLabel').css("color", "red");
		
		if(inputKey.trim() == ''){
			$('#keyLabel').text("* 인증번호를 입력하세요");
			return;
		} else {
			if(inputKey == authKey){
				$('#keyLabel').css("color", "blue");
				$('#keyLabel').text("* 인증번호가 일치합니다.");
				return;
			} else{
				$('#keyLabel').text("* 인증번호가 일치하지 않습니다.");
				return;
			}//if-else
		}//if-else
	});//end function
	
	//비밀번호 체크
	$('#inputPw').on("propertychange change keyup paste input", function (){
		var pwReg = /^[A-Za-z0-9]{6,12}$/;
		var pw = $('#inputPw').val();
		$('#pwLabel').css("color", "red");
		
		if(pw.trim() == ''){
			$('#pwLabel').text("* 비밀번호를 입력하세요");
			return;
		} else {
			if(pw.match(pwReg) == null){
				//비밀번호 형식에 맞지 않는 경우
				$('#pwLabel').text("* 숫자와 문자포함 6~12자리 이내");
				return;
			} else {
				$('#pwLabel').css("color", "blue");
				$('#pwLabel').text("* 사용할 수 있는 비밀번호 입니다");
				passwordCheck = pw;
			}
		}//if-else
	});//end function
	
	//전화번호 유효성 체크
	$('#inputPhone').on("propertychange change keyup paste input", function (){
		var phoneReg = /^\d{3}-\d{3,4}-\d{4}$/;
		var phone = $('#inputPhone').val();
		$('#phoneLabel').css("color", "red");
		
		if(phone.trim() == ''){
			$('#phoneLabel').text("* ex)010-1234-5678");
			return;
		} else {
			if(phone.match(phoneReg) == null){
				//전화번호 형식에 맞지 않는 경우
				$('#phoneLabel').text("* 전화번호 형식이 일치하지 않습니다.");
				return;
			} else {
				$('#phoneLabel').css("color", "blue");
				$('#phoneLabel').text("* 전화번호 형식이 일치합니다.");
				phoneNumberCheck = phone;
			}
		}//if-else
	});//end function
	
	//전체 확인 (submit)버튼시 검사하는 항목들
	//비밀번호, 전화번호, 주소, 성별
	$('#submitBtn').click(function (){
		var joinForm = document.joinForm;
		kakaoMap();
		
		if(checkExistData($('#emailId').val(), "이메일을") == false){
			$('#emailLabel').text("");
			$('#emailId').val('');
			return false;
		} else if(emailCheck != $('#emailId').val()) {
			alert('이메일 중복확인 버튼을 클릭하세요.')
			$('#emailLabel').text("");
			return false;
		}
		
		if(checkExistData($('#inputKey').val(), "인증번호를") == false){
			$('#keyLabel').text("");
			$('#inputKey').val('');
			return false;
		} else if(authKey != $('#inputKey').val()) {
			alert('인증번호가 일치하지 않습니다.')
			$('#keyLabel').text("");
			return false;
		}//if-else
		
		if(checkExistData($('#inputPw').val(), "비밀번호를") == false){
			$('#pwLabel').text("");
			$('#inputPw').val('');
			return false;
		} else if(passwordCheck != $('#inputPw').val()) {
			alert('비밀번호를 다시 설정해주세요.')
			$('#pwLabel').text("");
			$('#inputPw').val('');
			return false;
		}//if-else
		
		if(checkExistData($('#nickName').val(), "닉네임을") == false){
			$('#nickNameLabel').text("");
			$('#nickName').val('');
			return false;
		} else if(nickNameCheck != $('#nickName').val()) {
			alert('닉네임 중복확인 버튼을 클릭하세요.')
			$('#nickNameLabel').text("");
			return false;
		}
		
		if(checkExistData($('#inputPhone').val(), "전화번호를") == false){
			$('#phoneLabel').text("");
			$('#inputPhone').val('');
			return false;
		} else if(phoneNumberCheck != $('#inputPhone').val()) {
			alert('전화번호를 정확히 입력해주세요.');
			$('#phoneLabel').text("* ex)010-1234-5678");
			return false;
		}
		
		if(checkExistData($('#inputAddress').val(), "주소를") == false){
			$('#inputAddress').text("");
			$('#inputAddress').val('');
			return false;
		} else {
			//최종 확인
			$(this).attr("type","submit");
			window.location.href="http://localhost:8090/user/loginPage";
		}//if-else
	});//beforeSubmit
	
});//end function

/*function submitBtn(){
	var joinForm = document.joinForm;
	kakaoMap();
	
	if(checkExistData($('#emailId').val(), "이메일을") == false){
		$('#emailLabel').text("");
		$('#emailId').val('');
		return false;
	} else if(emailCheck != $('#emailId').val()) {
		alert('이메일 중복확인 버튼을 클릭하세요.')
		$('#emailLabel').text("");
		return false;
	}
	
	if(checkExistData($('#inputKey').val(), "인증번호를") == false){
		$('#keyLabel').text("");
		$('#inputKey').val('');
		return false;
	} else if(authKey != $('#inputKey').val()) {
		alert('인증번호가 일치하지 않습니다.')
		$('#keyLabel').text("");
		return false;
	}//if-else
	
	if(checkExistData($('#inputPw').val(), "비밀번호를") == false){
		$('#pwLabel').text("");
		$('#inputPw').val('');
		return false;
	} else if(passwordCheck != $('#inputPw').val()) {
		alert('비밀번호를 다시 설정해주세요.')
		$('#pwLabel').text("");
		$('#inputPw').val('');
		return false;
	}//if-else
	
	if(checkExistData($('#nickName').val(), "닉네임을") == false){
		$('#nickNameLabel').text("");
		$('#nickName').val('');
		return false;
	} else if(nickNameCheck != $('#nickName').val()) {
		alert('닉네임 중복확인 버튼을 클릭하세요.')
		$('#nickNameLabel').text("");
		return false;
	}
	
	if(checkExistData($('#inputPhone').val(), "전화번호를") == false){
		$('#phoneLabel').text("");
		$('#inputPhone').val('');
		return false;
	} else if(phoneNumberCheck != $('#inputPhone').val()) {
		alert('전화번호를 정확히 입력해주세요.');
		$('#phoneLabel').text("* ex)010-1234-5678");
		return false;
	}
	
	if(checkExistData($('#inputAddress').val(), "주소를") == false){
		$('#inputAddress').text("");
		$('#inputAddress').val('');
		return false;
	} else {
		//최종 확인
		$(this).attr("type","submit");
		window.location.href="http://localhost:8090/user/loginPage";
	}//if-else
};//beforeSubmit*/

// 공백확인 함수
function checkExistData(value, dataName) {
    if (value == "") {
        alert(dataName + " 입력해주세요!");
        return false;
    }
    return true;
}

//위치 좌표로 변경
function kakaoMap(){
    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch($('#inputAddress').val(), function(result, status) {
       
	    if (status === kakao.maps.services.Status.OK) {
           console.log(result[0].x, result[0].y);    
		   //result[0].x : 경도
		   //result[0].y : 위도
		   var x = result[0].x;
		   var y = result[0].y;
		   console.log(x, y);
					
		   var sendData = "x="+x+'&y='+y;
		   $.ajax({
		        url:'coordinate',
		        type : 'POST',
		        data: sendData,
				success: function(resp){}
	   	   })//.ajax
	    }//if
	});
}

function sample4_execDaumPostcode() {
    new daum.Postcode({
        oncomplete: function(data) {
            // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

            // 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var extraRoadAddr = ''; // 참고 항목 변수

            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                extraRoadAddr += data.bname;
            }
            // 건물명이 있고, 공동주택일 경우 추가한다.
            if(data.buildingName !== '' && data.apartment === 'Y'){
               extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
            if(extraRoadAddr !== ''){
                extraRoadAddr = ' (' + extraRoadAddr + ')';
            }

            // 우편번호와 주소 정보를 해당 필드에 넣는다.
            //document.getElementById('sample4_postcode').value = data.zonecode;
            //document.getElementById("sample4_roadAddress").value = roadAddr;
            document.getElementById("inputAddress").value = data.jibunAddress;
            
			if(data.autoJibunAddress) {
                var expJibunAddr = data.autoJibunAddress;
                document.getElementById("inputAddress").value = expJibunAddr;
            }

            // 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
/*            if(roadAddr !== ''){
                document.getElementById("sample4_extraAddress").value = extraRoadAddr;
            } else {
                document.getElementById("sample4_extraAddress").value = '';
            }*/

/*            var guideTextBox = document.getElementById("guide");
            // 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
            if(data.autoRoadAddress) {
                var expRoadAddr = data.autoRoadAddress + extraRoadAddr;
                guideTextBox.innerHTML = '(예상 도로명 주소 : ' + expRoadAddr + ')';
                guideTextBox.style.display = 'block';

            } else if(data.autoJibunAddress) {
                var expJibunAddr = data.autoJibunAddress;
                guideTextBox.innerHTML = '(예상 지번 주소 : ' + expJibunAddr + ')';
                guideTextBox.style.display = 'block';
            } else {
                guideTextBox.innerHTML = '';
                guideTextBox.style.display = 'none';
            }*/
        }
    }).open();
}
