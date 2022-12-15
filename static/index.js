const login_btn = document.getElementById("login_btn");
const register_btn = document.getElementById("register_btn");
const id_form = document.getElementById("id_form");
const pw_form = document.getElementById("pw_form");
const start_text = document.getElementById("start_text");
const default_id = ['test_id', 'admin_id', 'test1234'];
const default_pw = ['test_pw', 'admin_pw', 'password1234'];

login_btn.addEventListener("click", e => {
  e.preventDefault();
  const user_id = id_form.value;
  const user_pw = pw_form.value;
  const local_id = localStorage.getItem('id');
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
      }
    } else {
      alert('아이디와 비밀번호를 입력해주세요!');
    } 
  } else {
    alert(`${local_id}로 자동 로그인됐습니다!`);
    location.href = '../templates/mainpage.html'
  }
});

register_btn.addEventListener("click", e => {
  e.preventDefault();
  start_text.style.display = "none";
});