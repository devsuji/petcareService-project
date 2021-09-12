<%@ page 
    language="java" 
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

    
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>customerProfileManageBody.jsp</title>
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="/resources/css/mypage/customerProfileManage.css" rel="stylesheet" />
        <!-- Google fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap" rel="stylesheet">
    </head>
    <body>
        <div class="d-flex" id="wrapper">
            <!-- Sidebar-->
            <div class="border-end" id="sidebar-wrapper">
                <div class="sidebar-heading border-bottom ">마이페이지</div>
                <div class="list-group list-group-flush">
                    <a class="list-group-item list-group-item-action p-3" href="userInfoManage">회원정보관리</a>
                    <a class="list-group-item list-group-item-action list-group-item-light p-3" href="customerProfileManage">프로필관리</a>
                    <a class="list-group-item list-group-item-action p-3" href="customerHistoryManage">이력/리뷰 관리</a>
                    <a class="list-group-item list-group-item-action p-3" href="customerResvManage">예약관리</a>
                    <a class="list-group-item list-group-item-action p-3" href="#!">회원탈퇴</a>
                </div>
            </div>
            <!-- Page content wrapper-->
            <div id="page-content-wrapper">
                <!-- Page content-->
                <div class="customerProfileModify">
                    <form action="/mypage/customerProfileModify" method="POST" enctype="multipart/form-data">
                      <input type="hidden" name="userNo" value="${userNo}">
                                        
                        <h1 id="head">프로필관리</h1>
                        <div id="proImg">
                            <!-- <img src="C:\Users\HeeChan\Desktop\러블리빌런즈\스토리보드\cat-04.png" id="proPhoto"> -->
                            <img src="/resources/assets/img/mypage/proPhoto_${userNo}.jpg" id="proPhoto" style="width: 300px; height: 300px; object-fit: fill; box-shadow: 0px 5px 10px #F9C7A1; border-radius: 5px;">
                            <label for="proPhotoUpload">사진 변경</label>
                            <input type="file" name="proPhotoFile" id="proPhotoUpload">
                            <!-- <button type="" id="btn_proPhotoModify">변경</button> -->
                        </div>

                        <div id="petInfo">
                            <label>동물 종류 선택</label>
                            <select name="petTypeCode">
                                <option value="1" selected>대형견</option>
                                <option value="2" >중형견</option>
                                <option value="3" >소형견</option>
                                <option value="4" >고양이</option>
                            </select>

								
													
                            <label for="petName">이름</label>
                            <input type="text" name="petName" class="form-control" value="${profile.petName}">
                        

                            <label for="petBirthday">생일</label>
                            <input type="date" name="petBirthday" value="${profile.petBirthday}">

                            <label for="petGender">성별</label>
                            <input type="radio" name="petGender" value="F" checked>암컷
                            <input type="radio" name="petGender" value="M">수컷

                            <label for="neutralization">중성화</label>
                            <input type="radio" name="neutralization" value="Y" checked>유
                            <input type="radio" name="neutralization" value="N">무

                            <label for="medicine">약복용</label>
                            <input type="radio" name="medicine" value="Y" checked>유
                            <input type="radio" name="medicine" value="N">무
                        
                        </div>

                        <div id="specialNoteText">
                            <label for="specialNote">특이사항</label>
                            <textarea name="specialNote" cols="60" rows="10" maxlength="50" placeholder="특이사항을 입력하세요!">${profile.specialNote}</textarea>
                        </div>
                    

                        <div id="btn_cusPro">
                        <button type="submit" class="btn_cusPro" id="btn_save">저장</button>
                        <button type="reset" class="btn_cusPro">다시쓰기</button>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" referrerpolicy="no-referrer"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-migrate/3.3.2/jquery-migrate.min.js" referrerpolicy="no-referrer"></script>
        <script>
        
            
	        $(function(){
	        	
	        	$('select[name=petTypeCode]').val("${profile.petTypeCode}");
	        	
	        	$('input:radio[name="petGender"][value="${profile.petGender}"]').prop('checked', true);
	        	$('input:radio[name="neutralization"][value="${profile.neutralization}"]').prop('checked', true);
	        	$('input:radio[name="medicine"][value="${profile.medicine}"]').prop('checked', true);
	           
	        	
	        	// 프로필 사진 미리보기
	        	$(document).on("change", "input[name=proPhotoFile]", function(e){
	        		   var $file = $(this);
	        		   var $preview = $("#proImg img");
	        		   
	        		   var reader = new FileReader();
	        		   reader.onload = function(e) {
	        		      $preview.attr("src", e.target.result);
	        		   };
	        		   
	        		   $preview[0].onerror = function() {
	        		      $file.val(null);
	        		      $preview.attr("src", "https://lh3.googleusercontent.com/proxy/R-A1fKbE6rbSnQSnECvrSghtWMBJTn6nvyGr1Chn4fqSbL_f2R5rfYhQ3oRSTZIELNtOpowx48OPDuVzhwDjIDyE7W_MYyWknX8");
	        		   };
	        		   
	        		   reader.readAsDataURL($file[0].files[0]);
	        		});
	        	
	        	
	        })	// jq
            

 
        </script>
    </body>
</html>
  