const userValue = document.getElementById("userName");
const submit = document.getElementById("submit");
const userImg = document.querySelector(".user-img");
const userUrlData = document.querySelector(".user-url");

async function getUserData() {
	let value = userValue.value;
	let userUrl = `https://api.github.com/users/${value}`; 

	let getUserData = await fetch(userUrl);
	let githubUser = await getUserData.json();

	userImg.innerHTML = "";

	let img = document.createElement('img');
	img.src = githubUser.avatar_url;

	userImg.append(img);

	userUrlData.innerHTML = userUrl;
}

submit.onclick = getUserData;