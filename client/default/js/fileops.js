 var fUpload = function uploadFile() {
   $fh.file({
  	 act:"upload",
		 filepath:"/home/tejaswita/development/feedhenry/code.mp4",
		 server:"/upload"
	 }, function(response) {
		 console.log("upload status " + response.res + ". Data being sent :" + response.size);
	 }, function(msg, err){
		 alert("Error" + msg); 
	 });	 
 };
 
 function downloadFile() {
  var fileSrc = "http://url";
  var parts = fileSrc.split("/");
	var destFile = parts[parts.length-1];
	var progressListener = function(progress) {
	    //progress value that is passed here is a float number between 0 and 1
	    //convert it to percentage
	    $('#download_progress').html('<p> current progress: ' + progress * 100 + '%' + '</p>');
	  };
	 
	 $fh.file({
		 act: 'download',
		 src:  fileSrc,
		 dest: destFile,
		 progressListener:progressListener		 
	 }, function(path) {
		 $fh.webview({
			 act:'open',
			 url:path
		 });
	 }, function(msg, err) {
		 alert(msg);
	 })	;
 }
 


