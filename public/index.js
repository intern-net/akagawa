for( var a=document.getElementsByClassName( "link-text" ),i=a.length; i--; ) {
	a[i].onclick = function(e) {
		e.preventDefault() ;
	}
}