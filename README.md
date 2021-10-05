 # 프로젝트 개요

 + **프로젝트 명**: 반려인과 반려동물을 위한 돌봄서비스 **쓰담쓰담**
 + **일정**: 21.07 ~ 21.09
 + **팀 멤버**: 
     + 조사랑 : 펫시터검색페이지(서비스페이지) 구현
     + 강준수 : 회원가입, 로그인, 관리자페이지 구현
     + 박수지 : 메인페이지, 예약페이지 구현
     + 조희찬 : 반려인-마이페이지 구현
     + 이민화 : 펫시터-마이페이지 구현
     
 + **목적**: 반려동물가구가 증가하고 있는 상황에서 반려동물 서비스에 대한 관심과 수요도 함께 증가하고 있다. 
             쓰담쓰담의 서비스는 잦은 출장이나 여행 등의 이유로 집에 혼자 남겨진 반려동물들을 위한 펫시팅 서비스를 제공한다.
             반려인들은 날짜와 장소 등을 검색하여 원하는 펫시터와의 예약을 진행 할 수 있다. 
             
             
 + **사용 기술 및 개발환경**
   + OS/DB : Windows10, Oracle Cloud, Oracle SQL
   + Tool : Eclipse, postman, SQL Developer, Visual Studio Code
   + 언어 및 기술 : Java11, JSTL, JSP, HTML5, CSS3, JavaScript(ES5), jQuery, Ajax, Bootstrap4, Kakao Maps API
   + 프레임워크 : Spring, MyBatis
   + 형상관리 : Git, GitHub
 

# 프로젝트 진행과정
+ 일정표

![일정](https://user-images.githubusercontent.com/88583689/135763279-6274b178-fdb8-41c0-b427-d518b460969b.JPG)

+ 요구사항 정의서

![요구사항 정의서](https://user-images.githubusercontent.com/88583689/135763358-83204e4f-287b-4d99-ba43-4915724cea1a.JPG)

+ 요구사항 상세서

![요구사항 상세서](https://user-images.githubusercontent.com/88583689/135763416-6a48472a-5a1b-482b-82d3-5eb0b50e2d28.JPG)

+ 유즈케이스 다이어그램

![유즈케이스](https://user-images.githubusercontent.com/88583689/135763426-205b51c6-1cbd-4f9b-82e5-1d9d48d5d4b6.JPG)

+ 스토리보드

![스토리보드](https://user-images.githubusercontent.com/88583689/135763432-f69690e5-0413-49e8-b05c-909e22b74a4d.JPG)

+ DB설계

![피터첸](https://user-images.githubusercontent.com/88583689/135763493-2e6c7f8a-3488-497f-baac-ba0ebdbf2226.JPG)
![논리적모델링](https://user-images.githubusercontent.com/88583689/135763495-06650953-8b10-4ca6-8e9f-70093601cfc4.JPG)
![물리적모델링](https://user-images.githubusercontent.com/88583689/135763497-6069ae3b-97d1-4c9f-8fb7-2bd6054c6a2a.JPG)


# 프로젝트 구현
+ [PPT](https://www.slideshare.net/ssuser4d888a/ss-250358914)
+ 구현 페이지
  + **메인페이지**
  + 로그인
  + 회원가입
  + 펫시터검색
  + **예약**
  + 마이페이지 (회원정보관리, 프로필관리, 이력/리뷰관리, 예약관리, 회원탈퇴)
  + 관리자페이지
* * *

**패키지구조**

![패키지명](https://user-images.githubusercontent.com/88583689/135986870-c6e6a9c7-cfed-441a-8644-edbdbd01daeb.png)

**junit Test**
~~~java
package com.bitcamp.petcare.home.mapper;

import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.bitcamp.petcare.home.domain.FaqVO;
import com.bitcamp.petcare.home.domain.ReviewVO;

import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.extern.log4j.Log4j2;


@Log4j2
@NoArgsConstructor

@RunWith(SpringJUnit4ClassRunner.class)  

@ContextConfiguration(locations= {
   "file:src/main/webapp/WEB-INF/spring/root-context.xml"
})
public class HomeTests {
	
	@Setter(onMethod_ =@Autowired)
	private HomeMapper mapper;
	
	@Before
	public void setup() {
		log.debug("setup() invoked.");
		
	} //setup
	
	
	@Test
	public void testGetFaq() {
		log.debug("testGetFaq() invoked.");
		
		List<FaqVO> list = this.mapper.getFaq();
		
		assert list != null;
		
		list.forEach(log::info);
		
		list.clear();
		list = null;
	} //testGetFaq
	
	
	@Test
	public void testGetReview() {
		log.debug("testGetReview() invoked.");
		
		List<ReviewVO> list = this.mapper.getReview();
		
		assert list != null;
		
		list.forEach(log::info);
		
		list.clear();
		list = null;
	} //testGetReview
	
	
	@After
	public void tearDown() {
		log.debug("tearDown()invoked");
		
	} //tearDown

} //end class
~~~

테스트를 통해 DB의 데이터 정보를 제대로 받는지 확인 후 다음 단계로 넘어갔습니다.

**메인페이지**

![메인](https://user-images.githubusercontent.com/88583689/135981006-e1949a1f-9547-4eb0-a258-3bf8a927c62e.JPG)

**예약페이지**

![예약](https://user-images.githubusercontent.com/88583689/135996084-c615d24e-3ae0-43e8-9eaa-94dfce2d69d4.JPG)
