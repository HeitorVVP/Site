var msgCookies = document.getElementById('cookies-msg')

function aceito(){
	localStorage.lgpd = 'sim'

	msgCookies.classList.remove('mostrar')
	
}

function naoAceito(){
	localStorage.lgpd = 'nao'

	msgCookies.classList.remove('mostrar')

	console.warn("Usuário não aceito os cookies")	
}

if(localStorage.lgpd == 'sim' || localStorage.lgpd == 'nao'){
	msgCookies.classList.remove('mostrar')
}

else{
	msgCookies.classList.add('mostrar')
}