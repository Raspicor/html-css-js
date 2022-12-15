const local_id = localStorage.getItem('id');
const local_pw = localStorage.getItem('pw');
const id_form = document.getElementById("id_form");
const pw_form = document.getElementById("pw_form");
const login_btn = document.getElementById("login_btn");
const start_text = document.getElementById("start_text");
const register_btn = document.getElementById("register_btn");
const default_id = ['test_id', 'admin_id', 'test1234'];
const default_pw = ['test_pw', 'admin_pw', 'password1234'];

if (default_id.includes(local_id) && default_pw.includes(local_pw)) {
  console.log(local_id);
  alert(`${local_id}로 자동 로그인됐습니다!`);
  location.href = '../templates/mainpage.html'
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
  start_text.style.display = "none";
});