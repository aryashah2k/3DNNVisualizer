// global vars
var img_global = new Image();
var reader2;

// onload function to get the uploaded image name
$(document).ready(function () {
	$(document).on('change', '.btn-file :file', function () {
		var input = $(this),
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [label]);
	});
	$('.btn-file :file').on('fileselect', function (event, label) {

		var input = $(this).parents('.input-group').find(':text'),
			log = label;

		if (input.length) {
			input.val(log);
		} else {
			if (log) alert(log);
		}

	});

	// showing uploaded image in the div
	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader2 = reader;
			reader.onload = function (e) {
				$('#img-upload').attr('src', e.target.result);
				img_global.src = e.target.result; //storing the image data for further use
				// img_global = this.result;
				// localStorage.setItem("storageName",e.target.result);
				// console.log(img_global.src);
			}
			reader.readAsDataURL(input.files[0]);
			// console.log(input.files[0]);
		}
	}

	$("#imgInp").change(function () {
		readURL(this);
	});
});


