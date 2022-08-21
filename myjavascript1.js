/**
 * 
 */

let book = {
	title: "Reincarnated as a Slime",
	author: "Rimuru Senpai",
	published: 2021,
	otherInfo: {
		main_character: "Rimuru Tempest",
		character_type: "Demon Slime"
	}
};


function displayBook(){
	
	let {
		title,
		author,
		published,
		otherInfo: {
			main_character,
			character_type
		}} = book;
	document.writeln(`title: ${title}`);
	document.writeln(`author: ${author}`);
	document.writeln(`published: ${published}`);
	document.writeln(`main: ${main_character}`);
	document.writeln(`type: ${character_type}`);
}
