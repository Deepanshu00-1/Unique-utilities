const url = 'https://api.api-ninjas.com/v1/facts';
const options = {
	method: 'GET',
	headers: {
		'x-api-key': 'H+WPQvmq3Cfu3Gqj7P6YPg==fWzGWpJDSE77GXCS',
		
	}
};

async function x(){

	const response = await fetch(url, options);
	const result = await response.json();
    console.log(result[0].fact);
    let facts=document.querySelector('P');
    facts.innerHTML=result[0].fact;
	
}

let btn=document.querySelector('button');
btn.addEventListener('click',x);




