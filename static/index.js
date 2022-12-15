//테스트용 ID, PW
const default_id = ['test_id', 'admin_id', 'test1234'];
const default_pw = ['test_pw', 'admin_pw', 'password1234'];

//로그인 폼
const local_id = localStorage.getItem('id');
const local_pw = localStorage.getItem('pw');
const id_form = document.getElementById("id_form");
const pw_form = document.getElementById("pw_form");
const login_btn = document.getElementById("login_btn");
const start_text = document.getElementById("start_text");
const register_btn = document.getElementById("register_btn");
const login_form = document.getElementById("login_form");
const register_form = document.getElementById("register_form");

//회원가입 폼
const check_id_form = document.getElementById("check_id_form");
const check_pw_form = document.getElementById("re_pw_form");
const check_re_form = document.getElementById("check_pw_form");
const register_check_btn = document.getElementById("check_btn");

if (default_id.includes(local_id) && default_pw.includes(local_pw)) {
  console.log(local_id);
  alert(`${local_id}로 자동 로그인됐습니다!`);
  location.href = '../templates/mainpage.html'
} else {
localStorage.removeItem("id");
localStorage.removeItem("pw");
}
login_btn.addEventListener("click", e => { 
  e.preventDefault();
  const user_id = id_form.value;
  const user_pw = pw_form.value;
  console.log(local_id);
  if (localStorage.getItem('id') === null) {
    if (user_id !== '' && user_pw !== '') {
      if (default_id.includes(user_id) && default_pw.includes(user_pw)){
        const id_arr = [];
        const pw_arr = [];
        id_arr.push(user_id);
        pw_arr.push(user_pw);
        localStorage["id"] = id_arr;
        localStorage["pw"] = pw_arr;
        console.log(localStorage);
        alert(`${user_id}로 로그인됐습니다!`);
        location.href = '../templates/mainpage.html'
      } else {
        alert('아이디와 비밀번호를 정확히 입력해주세요!');
      }
    } else {
      alert('아이디와 비밀번호를 입력해주세요!');
    } 
  }
});

register_btn.addEventListener("click", e => {
  e.preventDefault();
  login_form.style.display = "none";
  register_form.style.display = "";
  
});

register_check_btn.addEventListener("click", e => {
  e.preventDefault();
  if(check_id_form.value === '' || check_pw_form.value === '' || check_re_form.value === '') {
    alert("빈 칸을 모두 작성해주세요!");
  } else {
    if(check_pw_form.value !== check_re_form.value){
      alert("비밀번호가 일치하지 않습니다!");
    } else {
      if(default_id.includes(check_id_form.value)){
        alert("이미 존재하는 아이디입니다!");
      } else {
        login_form.style.display = "";
        register_form.style.display = "none";
        alert("회원가입이 완료되었습니다!");
        default_id.push(check_id_form.value);
        default_pw.push(check_pw_form.value);
        localStorage.removeItem("id");
        localStorage.removeItem("pw");
      }
    }
  }
});