function emoticonComentario() {

if(!document.getElementById) {return;} // no soportado
bodyText = document.getElementById('comments');
cualTexto = bodyText.innerHTML;

//	:)	:-)	:]	:-]
cualTexto = cualTexto.replace(/:\)/g,'<img src="https://lh5.googleusercontent.com/-20cNHpka-fA/TikBlTXm_KI/AAAAAAAABkE/1orU58ycSu8/fb_sonrisa.gif" />');
cualTexto = cualTexto.replace(/:-\)/g,'<img src="https://lh5.googleusercontent.com/-20cNHpka-fA/TikBlTXm_KI/AAAAAAAABkE/1orU58ycSu8/fb_sonrisa.gif" />');
cualTexto = cualTexto.replace(/:\]/g,'<img src="https://lh5.googleusercontent.com/-20cNHpka-fA/TikBlTXm_KI/AAAAAAAABkE/1orU58ycSu8/fb_sonrisa.gif" />');
cualTexto = cualTexto.replace(/:-\]/g,'<img src="https://lh5.googleusercontent.com/-20cNHpka-fA/TikBlTXm_KI/AAAAAAAABkE/1orU58ycSu8/fb_sonrisa.gif" />');

//	:'-(	:((	:'(
cualTexto = cualTexto.replace(/:'-\(/g,'<img src="https://lh5.googleusercontent.com/-XN7rGa_1A2k/TikBlPKbVoI/AAAAAAAABj8/Xf3enr9F1Go/fb_llorando.gif" />');
cualTexto = cualTexto.replace(/:\(\(/g,'<img src="https://lh5.googleusercontent.com/-XN7rGa_1A2k/TikBlPKbVoI/AAAAAAAABj8/Xf3enr9F1Go/fb_llorando.gif" />');
cualTexto = cualTexto.replace(/:'\(/g,'<img src="https://lh5.googleusercontent.com/-XN7rGa_1A2k/TikBlPKbVoI/AAAAAAAABj8/Xf3enr9F1Go/fb_llorando.gif" />');

//	:(	:-(	:[	:-[
cualTexto = cualTexto.replace(/:\(/g,'<img src="https://lh6.googleusercontent.com/-Ngrhi8wn99E/TikBlrW-FvI/AAAAAAAABkI/P8RTNKLS51Y/fb_triste.gif" />');
cualTexto = cualTexto.replace(/:-\(/g,'<img src="https://lh6.googleusercontent.com/-Ngrhi8wn99E/TikBlrW-FvI/AAAAAAAABkI/P8RTNKLS51Y/fb_triste.gif" />');
cualTexto = cualTexto.replace(/:\[/g,'<img src="https://lh6.googleusercontent.com/-Ngrhi8wn99E/TikBlrW-FvI/AAAAAAAABkI/P8RTNKLS51Y/fb_triste.gif" />');
cualTexto = cualTexto.replace(/:-\[/g,'<img src="https://lh6.googleusercontent.com/-Ngrhi8wn99E/TikBlrW-FvI/AAAAAAAABkI/P8RTNKLS51Y/fb_triste.gif" />');

//	:P	:-P
cualTexto = cualTexto.replace(/:\P/g,'<img src="https://lh4.googleusercontent.com/-P9hko0sZZVY/TikBk4BH0xI/AAAAAAAABj4/o5aVYyp1wgU/fb_lengua.gif" />');
cualTexto = cualTexto.replace(/:-\P/g,'<img src="https://lh4.googleusercontent.com/-P9hko0sZZVY/TikBk4BH0xI/AAAAAAAABj4/o5aVYyp1wgU/fb_lengua.gif" />');

//	:D	:-D	xD XD 
cualTexto = cualTexto.replace(/:D/g,'<img src="https://lh5.googleusercontent.com/-r4q9ruMcMzM/TikBkhvFEgI/AAAAAAAABjw/r3VC-agWwu8/fb_feliz.png" />');
cualTexto = cualTexto.replace(/:-D/g,'<img src="https://lh5.googleusercontent.com/-r4q9ruMcMzM/TikBkhvFEgI/AAAAAAAABjw/r3VC-agWwu8/fb_feliz.png" />');
cualTexto = cualTexto.replace(/xD/g,'<img src="https://lh5.googleusercontent.com/-c_OC_4PKFA8/TikBl3rowvI/AAAAAAAABkM/gJQ-HpMUnQk/fb_XD.gif" />');
cualTexto = cualTexto.replace(/XD/g,'<img src="https://lh5.googleusercontent.com/-c_OC_4PKFA8/TikBl3rowvI/AAAAAAAABkM/gJQ-HpMUnQk/fb_XD.gif" />');

// ;-D
cualTexto = cualTexto.replace(/;-D/g,'<img src="http://sites.google.com/site/dimensioncifi/portal/imagenes/com-blink-lol.gif" />');

//	:$	:-$
cualTexto = cualTexto.replace(/:\$/g,'<img src="http://2.bp.blogspot.com/-63g0qdPymRk/TVb-q3MN7JI/AAAAAAAARkg/evaLzYGKunk/s00/com-oops.gif" />');
cualTexto = cualTexto.replace(/:-\$/g,'<img src="http://2.bp.blogspot.com/-63g0qdPymRk/TVb-q3MN7JI/AAAAAAAARkg/evaLzYGKunk/s00/com-oops.gif" />');

//	;)	;-)	;]	;-]
cualTexto = cualTexto.replace(/;\)/g,'<img src="https://lh6.googleusercontent.com/-kkd84kPmUTw/TikBkw_9z2I/AAAAAAAABj0/WV9RQds939U/fb_guino.gif" />');
cualTexto = cualTexto.replace(/;-\)/g,'<img src="https://lh6.googleusercontent.com/-kkd84kPmUTw/TikBkw_9z2I/AAAAAAAABj0/WV9RQds939U/fb_guino.gif" />');
cualTexto = cualTexto.replace(/;\]/g,'<img src="https://lh6.googleusercontent.com/-kkd84kPmUTw/TikBkw_9z2I/AAAAAAAABj0/WV9RQds939U/fb_guino.gif" />');
cualTexto = cualTexto.replace(/;-\]/g,'<img src="https://lh6.googleusercontent.com/-kkd84kPmUTw/TikBkw_9z2I/AAAAAAAABj0/WV9RQds939U/fb_guino.gif" />');

//	:-I	:-| 
cualTexto = cualTexto.replace(/:-\I/g,'<img src="http://4.bp.blogspot.com/-mEtJYBpASEQ/TVb-qpdJFMI/AAAAAAAARkc/OFW6WoP3qQ4/s00/com-neutral.gif" />');
cualTexto = cualTexto.replace(/:-\|/g,'<img src="http://4.bp.blogspot.com/-mEtJYBpASEQ/TVb-qpdJFMI/AAAAAAAARkc/OFW6WoP3qQ4/s00/com-neutral.gif" />');

//	:-X
cualTexto = cualTexto.replace(/:-\X/g,'<img src="http://1.bp.blogspot.com/-kdDZzEGpaYo/TVb-rzqzpRI/AAAAAAAARko/1ASvWxy7BW8/s00/com-secreto.gif" />');

//	:o	:-o
cualTexto = cualTexto.replace(/:\o/g,'<img src="http://2.bp.blogspot.com/-_gMt4HKZ1fo/TVb-sqjDzOI/AAAAAAAARkw/2ykVaLF6FfU/s00/com-sorpresa1.gif" />');
cualTexto = cualTexto.replace(/:-\o/g,'<img src="http://2.bp.blogspot.com/-_gMt4HKZ1fo/TVb-sqjDzOI/AAAAAAAARkw/2ykVaLF6FfU/s00/com-sorpresa1.gif" />');

//	:O	:-O
cualTexto = cualTexto.replace(/:\O/g,'<img src="http://4.bp.blogspot.com/-xtUn1Szrwkk/TVb-tFfGErI/AAAAAAAARk0/P1nHtCZ7FTY/s00/com-sorpresa2.gif" />');
cualTexto = cualTexto.replace(/:-\O/g,'<img src="http://4.bp.blogspot.com/-xtUn1Szrwkk/TVb-tFfGErI/AAAAAAAARk0/P1nHtCZ7FTY/s00/com-sorpresa2.gif" />');

//	|O	|-O
cualTexto = cualTexto.replace(/\|O/g,'<img src="http://img179.imageshack.us/img179/2108/com-mad.gif" />');
cualTexto = cualTexto.replace(/\|-\O/g,'<img src="http://img179.imageshack.us/img179/2108/com-mad.gif" />');

//	:/	:-/	:S :-S
cualTexto = cualTexto.replace(/:\/ /g,'<img src="https://lh6.googleusercontent.com/-AVOvM9rn4J8/TikBkhVSwLI/AAAAAAAABjo/nJSmAIyp_2k/fb_duh.gif" />');
cualTexto = cualTexto.replace(/:-\/ /g,'<img src="https://lh6.googleusercontent.com/-AVOvM9rn4J8/TikBkhVSwLI/AAAAAAAABjo/nJSmAIyp_2k/fb_duh.gif" />');
cualTexto = cualTexto.replace(/:S/g,'<img src="http://3.bp.blogspot.com/-c8DCtb-szLc/TVb-pAfNt1I/AAAAAAAARkM/ZeXYvXm6Eyk/s00/com-confuso.gif" />');
cualTexto = cualTexto.replace(/:-S/g,'<img src="http://3.bp.blogspot.com/-c8DCtb-szLc/TVb-pAfNt1I/AAAAAAAARkM/ZeXYvXm6Eyk/s00/com-confuso.gif" />');

bodyText.innerHTML = cualTexto;
}
